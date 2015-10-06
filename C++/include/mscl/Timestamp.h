/*******************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
//PUBLIC_HEADER
#pragma once

#include <iostream>
#include "TimeSpan.h"
#include "Types.h"

namespace mscl
{
	//API Class: Timestamp
	//	Represents a date/time object 
	class Timestamp
	{
	public:
		//API Constructor: Timestamp
		//	Creates a Timestamp object based on the nanoseconds parameter
		//
		//Parameters:
		//	nanoseconds - The number of nanoseconds since unix epoch (default of 0)
		explicit Timestamp(uint64 nanoseconds=0);

		//API Constructor: Timestamp
		//	Creates a Timestamp object from the given year, month, day, hour, minute, second, millisecond parameters
		//
		//Parameters:
		//	year - The year of the timestamp (ex. 2013)
		//	month - The month of the timestamp (ex. 3)
		//	day - The day of the timestamp (ex. 31)
		//	hour - The hour of the timestamp (ex. 21)
		//	minute - The minute of the timestamp (ex. 58)
		//	second - The second of the timestamp (ex. 59)
		//	millisecond - The milliseconds of the timestamp (ex. 123)
		Timestamp(uint16 year, uint16 month, uint16 day, uint16 hour, uint16 minute, uint16 second, uint32 milli);

	private:
		//Variable: m_nanoseconds
		//	The number of nanoseconds since the unix epoch
		uint64 m_nanoseconds;

	public:
#ifndef SWIG
		//Operator: -
		//	Gets the <TimeSpan> representing the distance (always positive) between two Timestamps. 
		//
		//Returns:
		//	A <TimeSpan> representing the difference between the 2 Timestamps
		TimeSpan operator-(const Timestamp& other) const;

		friend std::istream& operator>> (std::istream &in, Timestamp& t);
		friend std::ostream& operator<< (std::ostream &out, const Timestamp& t);
#endif

	public:
		//API Function: nanosecondsSinceEpoch
		//	Gets the number of nanoseconds since the unix epoch
		//
		//Returns:
		//	The number of nanoseconds since the unix epoch
		uint64 nanoseconds() const;

		//API Function: seconds
		//	Gets the number of seconds since the unix epoch
		//
		//Returns:
		//	The number of nanoseconds since the unix epoch
		uint64 seconds() const;

		//API Function: str
		//	Gets a string representation of the Timestamp object in ISO 8601 Date/Time format.
		//
		//Returns:
		//	A string representation of the Timestamp.
		std::string str() const;

		//API Function: setTime
		//	Updates the Timestamp to the given number of nanoseconds since the unix epoch.
		//
		//Parameters:
		//	nanosSinceEpoch - The number of nanoseconds since the unix epoch.
		void setTime(uint64 nanosSinceEpoch);

		//API Function: setTimeNow
		//	Sets the Timestamp object to the current system time in UTC
		void setTimeNow();

	public:
		//API Function: timeNow
		//	Creates a timestamp using the current system time
		//
		//Returns:
		//	A Timestamp object representing the current system time
		static Timestamp timeNow();
	};
}