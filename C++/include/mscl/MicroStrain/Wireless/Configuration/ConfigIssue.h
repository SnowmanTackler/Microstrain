/*******************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
//PUBLIC_HEADER
#pragma once

#include <string>
#include <vector>
#include "mscl/MicroStrain/Wireless/ChannelMask.h"

namespace mscl
{
	//API Class: ConfigIssue
	//	Holds information on a specific configuration issue.
	class ConfigIssue
	{
	public:
		//API Enums: ConfigOption
		//	Configuration Options for Wireless Nodes and BaseStations that can be issues.
		//
		//	CONFIG_SAMPLING_MODE			- 0 - Sampling Mode
		//	CONFIG_ACTIVE_CHANNELS			- 1 - Active Channels
		//	CONFIG_SAMPLE_RATE				- 2 - Sample Rate
		//	CONFIG_SWEEPS					- 3 - Number of Sweeps
		//	CONFIG_UNLIMITED_DURATION		- 4 - Unlimited Duration
		//	CONFIG_DATA_FORMAT				- 5 - Data Format
		//	CONFIG_DATA_COLLECTION_METHOD	- 6 - Data Collection Method
		//	CONFIG_TIME_BETWEEN_BURSTS		- 7 - Time Between Bursts
		//	CONFIG_THERMOCOUPLE_TYPE		- 8 - Thermocouple Type
		//	CONFIG_FILTER_SETTLING_TIME		- 9  - Filter Settling Time
		//	CONFIG_BUTTON					- 10 - Button configuration (BaseStation)
		//	CONFIG_ANALOG_PAIR				- 11 - Analog pairing (BaseStation)
		//	CONFIG_HARDWARE_GAIN			- 12 - Hardware Gain
		//	CONFIG_INACTIVITY_TIMEOUT		- 13 - Inactivity Timeout
		//	CONFIG_CHECK_RADIO_INTERVAL		- 14 - Check Radio Interval
		//	CONFIG_LOST_BEACON_TIMEOUT		- 15 - Lost Beacon Timeout
		//	CONFIG_DEFAULT_MODE				- 16 - Default Mode
		//	CONFIG_TRANSMIT_POWER			- 17 - Transmit Power
		//	CONFIG_LINEAR_EQUATION			- 18 - Linear Equation
		//	CONFIG_FATIGUE					- 19 - Fatigue Options
		//	CONFIG_HISTOGRAM				- 20 - Histogram Options
		//	CONFIG_HARDWARE_OFFSET			- 21 - Hardware Offset
		enum ConfigOption
		{
			CONFIG_SAMPLING_MODE			= 0,
			CONFIG_ACTIVE_CHANNELS			= 1,
			CONFIG_SAMPLE_RATE				= 2,
			CONFIG_SWEEPS					= 3,
			CONFIG_UNLIMITED_DURATION		= 4,
			CONFIG_DATA_FORMAT				= 5,
			CONFIG_DATA_COLLECTION_METHOD	= 6,
			CONFIG_TIME_BETWEEN_BURSTS		= 7,
			CONFIG_THERMOCOUPLE_TYPE		= 8,
			CONFIG_FILTER_SETTLING_TIME		= 9,
			CONFIG_BUTTON					= 10,
			CONFIG_ANALOG_PAIR				= 11,
			CONFIG_HARDWARE_GAIN			= 12,
			CONFIG_INACTIVITY_TIMEOUT		= 13,
			CONFIG_CHECK_RADIO_INTERVAL		= 14,
			CONFIG_LOST_BEACON_TIMEOUT		= 15,
			CONFIG_DEFAULT_MODE				= 16,
			CONFIG_TRANSMIT_POWER			= 17,
			CONFIG_LINEAR_EQUATION			= 18,
			CONFIG_FATIGUE					= 19,
			CONFIG_HISTOGRAM				= 20,
			CONFIG_HARDWARE_OFFSET			= 21
		};

		ConfigIssue();	//default constructor

		//API Constructor: ConfigIssue
		//	Creates a ConfigIssue object.
		//
		//Parameters:
		//	optionId - The <ConfigOption> identifying the configuration option for which the issue occurred.
		//	description - A description of the issue.
		ConfigIssue(ConfigIssue::ConfigOption optionId, const std::string& description);

		//API Constructor: ConfigIssue
		//	Creates a ConfigIssue object.
		//
		//Parameters:
		//	optionId - The <ConfigOption> identifying the configuration option for which the issue occurred.
		//	description - A description of the issue.
		//	mask - The <ChannelMask> that this issue applies to, if this is a channel group issue.
		ConfigIssue(ConfigIssue::ConfigOption optionId, const std::string& description, const ChannelMask& mask);

	private:
		//Variable: m_optionId
		//	The <ConfigOption> identifying the configuration option for which the issue occurred.
		ConfigOption m_optionId;
		
		//Variable: m_description
		//	The description of the issue.
		std::string m_description;

		//Variable: m_isChannelGroupIssue
		//	Whether this issue applies to a channel group (true) or the entire Node (false).
		bool m_isChannelGroupIssue;

		//Variable: m_channelMask
		//	The <ChannelMask> that this issue applies to, if this is a channel group issue.
		ChannelMask m_channelMask;

	public:
		//API Function: id
		//	Gets the <ConfigOption> identifying the configuration option for which the issue occurred.
		//
		//Returns:
		//	A <ConfigOption> identifying the configuration option for which the issue occurred.
		ConfigIssue::ConfigOption id() const;
		
		//API Function: description
		//	Gets a description of the issue.
		//
		//Returns:
		//	A string description of the issue.
		const std::string& description() const;

		//API Function: isChannelGroupIssue
		//	Gets whether the issue applies to a channel group (true) or the entire Node (false).
		//
		//Returns:
		//	true if the issue applies to a channel group, false if the issue is for a global Node setting.
		bool isChannelGroupIssue() const;

		//API Function: channelMask
		//	The <ChannelMask> that the issue applies to, if this issue is a channel group issue.
		//
		//Returns:
		//	The <ChannelMask> that the issue applies to. If this issue is for a global Node setting, this will be a default (all disabled) mask.
		const ChannelMask& channelMask() const;
	};

	//API Typedef: ConfigIssues
	//	typedef for a vector of <ConfigIssue> objects.
	typedef std::vector<ConfigIssue> ConfigIssues;
}