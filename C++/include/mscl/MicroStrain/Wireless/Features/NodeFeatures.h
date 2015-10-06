/*******************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
//PUBLIC_HEADER
#pragma once

#include <memory>
#include <tuple>
#include <vector>

#include "mscl/MicroStrain/Wireless/WirelessTypes.h"
#include "mscl/MicroStrain/Wireless/WirelessModels.h"
#include "mscl/MicroStrain/Wireless/WirelessChannel.h"
#include "mscl/MicroStrain/SampleRate.h"
#include "mscl/Types.h"
#include "ChannelGroup.h"
#include "NodeInfo.h"

namespace mscl
{	
	//forward declarations
	class ChannelMask;

	//API Class: NodeFeatures
	//	Contains information on which features are supported by a <WirelessNode>.
	class NodeFeatures
	{
		friend class WirelessNode_Impl;
		friend class NodeEepromHelper;

	private:
		NodeFeatures();									//disabled default constructor
		NodeFeatures(const NodeFeatures&);				//disabled copy constructor
		NodeFeatures& operator=(const NodeFeatures&);	//disable assignment operator

	public:
		virtual ~NodeFeatures() {};

	protected:
		//Constructor: NodeFeatures
		//	Creates a NodeFeatures object.
		//
		//Parameters:
		//	info - A <NodeInfo> object representing standard information of the <WirelessNode>.
		NodeFeatures(const NodeInfo& info);

		//Variable: m_nodeInfo
		//	The <NodeInfo> object containing basic information retreived from eeprom about the Node.
		NodeInfo m_nodeInfo;

		//Variable: m_channels
		//	Contains all of the supported channels for this Node..
		WirelessChannels m_channels;

		//Variable: m_channelGroups
		//	Contains all of the <ChannelGroups> that are supported by this Node.
		ChannelGroups m_channelGroups;

	public:
#ifndef SWIG
		//Function: create
		//	Builds and returns a NodeFeatures pointer based on the given parameters.
		//
		//Parameters:
		//	info - A <NodeInfo> object representing standard information of the <WirelessNode>.
		//
		//Returns:
		//	A NodeFeatures unique_ptr.
		//
		//Exceptions:
		//	- <Error_NotSupported>: The Node model is not supported by MSCL.
		static std::unique_ptr<NodeFeatures> create(const NodeInfo& info);
#endif

	protected:
		//Function: addCalCoeffChannelGroup
		//	Adds a cal coefficient (Linear Equation, unit, equation type) to the channel groups for the specified channel.
		void addCalCoeffChannelGroup(uint8 channelNumber, const EepromLocation& slopeEeprom, const EepromLocation& actionIdEeprom);

		//Function: maxFilterSettlingTime_A
		//	Gets the max filter settling time allowed by the given <SampleRate>. 
		//	This is version A of this function. Different nodes use different versions.
		static WirelessTypes::SettlingTime maxFilterSettlingTime_A(const SampleRate& rate);

		//Function: maxFilterSettlingTime_B
		//	Gets the max filter settling time allowed by the given <SampleRate>. 
		//	This is version B of this function. Different nodes use different versions.
		static WirelessTypes::SettlingTime maxFilterSettlingTime_B(const SampleRate& rate);

	public:
		//API Function: normalizeNumSweeps
		//	Normalizes the number of sweeps so that it is within range and a multiple of 100 (rounds up to next multiple).
		//
		//Parameters:
		//	sweeps - the value to normalize. This will be updated to hold the normalized result.
		uint32 normalizeNumSweeps(uint32 sweeps) const;

		//API Function: normalizeTimeBetweenBursts
		//	Normalizes a <TimeSpan> so that it is within an acceptable range for setting the timeBetweenBursts.
		//	A valid range is between 1 second and 24 hours. Seconds above 32767 will be rounded to minutes.
		//	When setting the time between bursts, you should also call <minTimeBetweenBursts> and verify it is greater than this.
		//
		//Parameters:
		//	time - <TimeSpan> to normalize. This will be updated to hold the normalized result.
		TimeSpan normalizeTimeBetweenBursts(const TimeSpan& time) const;

	private:
		//Function: findEeprom
		//	Finds the <EepromLocation> for the provided setting and channel mask pair.
		//
		//Parameters:
		//	setting - The <WirelessTypes::ChannelGroupSetting> to search for.
		//	mask - The <ChannelMask> of the setting to search for.
		//
		//Returns:
		//	The <EepromLocation> for the found option.
		//
		//Exceptions:
		//	- <Error_NotSupported>: The <WirelessTypes::ChannelGroupSetting> or <ChannelMask> is not supported.
		const EepromLocation& findEeprom(WirelessTypes::ChannelGroupSetting setting, const ChannelMask& mask) const;

		//Function: anyChannelGroupSupports
		//	Checks if any channel group on the Node supports the given <WirelessTypes::ChannelGroupSetting>.
		//
		//Parameters:
		//	setting - The <WirelessTypes::ChannelGroupSetting> to check if any channel group supports.
		//
		//Returns:
		//	true if at least 1 channel group supports the setting, false otherwise.
		bool anyChannelGroupSupports(WirelessTypes::ChannelGroupSetting setting) const;

	protected:
		//Function: anyChannelGroupSupports
		//	Checks if any channel group, with the specified channel number, supports the given <WirelessTypes::ChannelGroupSetting>.
		//
		//Parameters:
		//	setting - The <WirelessTypes::ChannelGroupSetting> to check if any channel group supports.
		//	channelNumber - The channel number (ch1 = 1, ch8 = 8) to check if it is in the mask for the found setting.
		//
		//Returns:
		//	true if at least 1 channel group, containing the specified channel number, supports the setting, false otherwise.
		bool anyChannelGroupSupports(WirelessTypes::ChannelGroupSetting setting, uint8 channelNumber) const;

	public:
		//API Function: channels
		//	Gets a reference to the <WirelessChannels> of this Node.
		//
		//Returns:
		//	A reference to the <WirelessChannels> of this Node.
		const WirelessChannels& channels() const;

		//API Function: channelGroups
		//	Gets the <ChannelGroups> supported by this Node.
		//
		//Returns:
		//	A <ChannelGroups> container containing each group supported by this Node.
		ChannelGroups channelGroups() const;

		//API Function: supportsChannelSetting
		//	Checks if the Node supports a given <WirelessTypes::ChannelGroupSetting> for the given <ChannelMask>.
		//
		//Parameters:
		//	setting - The <WirelessTypes::ChannelGroupSetting> to check for.
		//	mask - The <ChannelMask> to check if the setting is supported for.
		//
		//Returns:
		//	true if the <WirelessTypes::ChannelGroupSetting> is supported for the <ChannelMask>, false otherwise.
		bool supportsChannelSetting(WirelessTypes::ChannelGroupSetting setting, const ChannelMask& mask) const;

		//API Function: supportsHardwareGain
		//	Checks if the Node supports Hardware Gain for any of its <ChannelGroups>.
		//	
		//Returns:
		//	true if the Node supports Hardware Gain for at least one <ChannelGroup>, false otherwise.
		bool supportsHardwareGain() const;

		//API Function: supportsFilterSettlingTime
		//	Checks if the Node supports Filter Settling Time for any of its <ChannelGroups>.
		//
		//Returns:
		//	true if the Node supports Filter Settling Time for at least one <ChannelGroup>, false otherwise.
		bool supportsFilterSettlingTime() const;

		//API Function: supportsThermocoupleType
		//	Checks if the Node supports the Thermocouple Type for any of its <ChannelGroups>.
		//
		//Returns:
		//	true if the Node supports Thermocouple Type for at least one <ChannelGroup>, false otherwise.
		virtual bool supportsThermocoupleType() const;

		//API Function: supportsFatigueConfig
		//	Checks if the Node supports <FatigueOptions> configuration.
		//
		//Returns:
		//	true if the Node supports <FatigueOptions>, false otherwise.
		virtual bool supportsFatigueConfig() const;

		//API Function: supportsYoungsModConfig
		//	Checks if the Node supports Young's Modulus (part of <FatigueOptions>) configuration.
		//
		//Returns:
		//	true if the Node supports Young's Modulus configuration, false otherwise.
		virtual bool supportsYoungsModConfig() const;

		//API Function: supportsPoissonsRatioConfig
		//	Checks if the Node supports Poisson's Ratio (part of <FatigueOptions>) configuration.
		//
		//Returns:
		//	true if the Node supports Poisson's Ratio configuration, false otherwise.
		virtual bool supportsPoissonsRatioConfig() const;

		//API Function: supportsFatigueRawModeConfig
		//	Checks if the Node supports enabling Raw Mode (part of <FatigueOptions>) configuration.
		//
		//Returns:
		//	true if the Node supports Raw Mode configuration, false otherwise.
		virtual bool supportsFatigueRawModeConfig() const;

		//API Function: supportsHistogramConfig
		//	Checks if the Node supports <HistogramOptions> configuration.
		//
		//Returns:
		//	true if the Node supports <HistogramOptions>, false otherwise.
		virtual bool supportsHistogramConfig() const;

		//API Function: supportsHistogramRateConfig
		//	Checks if the Node supports Histogram transmit rate (part of <HistogramOptions>) configuration.
		//
		//Returns:
		//	true if the Node supports Histogram transmit rate configuration, false otherwise.
		virtual bool supportsHistogramRateConfig() const;

		//API Function: supportsAutoBalance
		//	Checks if the Node supports the AutoBalance command for a specified channel.
		//
		//Parameters:
		//	channelNumber - The channel number (ch1 = 1, ch8 = 8) to check if autobalance is supported.
		//
		//Returns:
		//	true if the Node supports autobalance of the specified channel, false otherwise.
		virtual bool supportsAutoBalance(uint8 channelNumber) const;

		//API Function: supportsAutoCal
		//	Checks if the Node supports the AutoCal commands.
		//
		//Returns:
		//	true if the Node supports an AutoCal command, false otherwise.
		virtual bool supportsAutoCal() const;

		//API Function: supportsChannel
		//	Checks if a specific channel is supported (can be enabled) by this Node.
		//
		//Parameters:
		//	channelNumber - The channel to check if it is supported.
		//
		//Returns:
		//	true if the channel is supported, false otherwise.
		bool supportsChannel(uint8 channelNumber) const;

		//API Function: supportsSamplingMode
		//	Checks if a <WirelessTypes::SamplingMode> is supported by this Node.
		//
		//Parameters:
		//	samplingMode - The <WirelessTypes::SamplingMode> to check if supported.
		//
		//Returns:
		//	true if the sampling mode is supported, false otherwise.
		bool supportsSamplingMode(WirelessTypes::SamplingMode samplingMode) const;

		//API Function: supportsSampleRate
		//	Checks if a sample rate is supported by the Node for the given <WirelessTypes::SamplingMode>.
		//
		//Parameters:
		//	sampleRate - The <WirelessTypes::WirelessSampleRate> to check if supported.
		//	samplingMode - The <WirelessTypes::SamplingMode> to check if the sample rate is supported for.
		//
		//Returns:
		//	true if the sample rate is supported for the given sampling mode, false otherwise.
		bool supportsSampleRate(WirelessTypes::WirelessSampleRate sampleRate, WirelessTypes::SamplingMode samplingMode) const;

		//API Function: supportsDataFormat
		//	Checks if a <WirelessTypes::DataFormat> is supported by this Node.
		//
		//Parameters:
		//	dataFormat - The <WirelessTypes::DataFormat> to check if supported.
		//
		//Returns:
		//	true if the data format is supported, false otherwise.
		bool supportsDataFormat(WirelessTypes::DataFormat dataFormat) const;

		//API Function: supportsDefaultMode
		//	Checks if a <WirelessTypes::DefaultMode> is supported by this Node.
		//
		//Parameters:
		//	mode - The <WirelessTypes::DefaultMode> to check if supported.
		//
		//Returns:
		//	true if the default is supported, false otherwise.
		bool supportsDefaultMode(WirelessTypes::DefaultMode mode) const;

		//API Function: supportsDataCollectionMethod
		//	Checks if a <WirelessTypes::DataCollectionMethod> is supported by this Node.
		//
		//Parameters:
		//	collectionMethod - The <WirelessTypes::DataCollectionMethod> to check if supported.
		//
		//Returns:
		//	true if the data collection method is supported, false otherwise.
		bool supportsDataCollectionMethod(WirelessTypes::DataCollectionMethod collectionMethod) const;

		//API Function: supportsTransmitPower
		//	Checks if a <WirelessTypes::TransmitPower> is supported by this Node.
		//
		//Parameters:
		//	power - The <WirelessTypes::TransmitPower> to check if supported.
		//
		//Returns:
		//	true if the transmit power is supported, false otherwise.
		bool supportsTransmitPower(WirelessTypes::TransmitPower power) const;

		//API Function: maxSampleRate
		//	Gets the maximum <SampleRate> value that is supported by this Node with the given <SamplingMode> and <ChannelMask>.
		//
		//Parameters:
		//	samplingMode - The <WirelessTypes::SamplingMode> to check the max sample rate for.
		//	channels - The <ChannelMask> to check the max sample rate for.
		//
		//Returns:
		//	The max <WirelessTypes::WirelessSampleRate> that is supported by this Node with the given <WirelessTypes::SamplingMode> and <ChannelMask>.
		virtual WirelessTypes::WirelessSampleRate maxSampleRate(WirelessTypes::SamplingMode samplingMode, const ChannelMask& channels) const;

		//API Function: maxFilterSettlingTime
		//	Gets the maximum <WirelessTypes::SettlingTime> available for the given <SampleRate>.
		//
		//Parameters:
		//	rate - The <SampleRate> to check the max filter settling time for.
		//
		//Returns:
		//	The max <WirelessTypes::SettlingTime> available.
		//
		//Exceptions:
		//	- <Error_NotSupported>: The Filter Settling Time feature is not supported by this Node.
		virtual WirelessTypes::SettlingTime maxFilterSettlingTime(const SampleRate& rate) const;

		//API Function: minInactivityTimeout
		//	Gets the minimum inactivity timeout (in seconds) that is supported.
		//
		//Returns:
		//	The min inactivity timeout in seconds.
		uint16 minInactivityTimeout() const;

		//API Function: minLostBeaconTimeout
		//	Gets the minimum lost beacon timeout (in minutes) that is supported.
		//	Note: A value of 0 disable the lost beacon timeout.
		//
		//Returns:
		//	The min lost beacon timeout in minutes.
		uint16 minLostBeaconTimeout() const;

		//API Function: maxLostBeaconTimeout
		//	Gets the maximum lost beacon timeout (in minutes) that is supported.
		//
		//Returns:
		//	The max lost beacon timeout in minutes.
		uint16 maxLostBeaconTimeout() const;

		//API Function: minCheckRadioInterval
		//	Gets the minimum check radio interval (in seconds) that is supported.
		//
		//Returns:
		//	The min check radio interval in seconds.
		uint8 minCheckRadioInterval() const;

		//API Function: maxCheckRadioInterval
		//	Gets the maximum check radio interval (in seconds) that is supported.
		//
		//Returns:
		//	The maximum check radio interval in seconds.
		uint8 maxCheckRadioInterval() const;

		//API Function: minSweeps
		//	Gets the minimum number of sweeps that can be assigned for the duration of a continuous sampling session.
		//
		//Returns:
		//	The minimum number of sweeps for a sampling session.
		uint32 minSweeps() const;

		//API Function: maxSweeps
		//	Gets the maximum number of sweeps that can be assigned for a given <WirelessTypes::SamplingMode>. 
		//	This is the duration of each burst if in Burst Sync Sampling mode, or the total duration of sampling in other sampling modes.
		//
		//Parameters:
		//	samplingMode - The <WirelessTypes::SamplingMode> of the sampling session.
		//	dataFormat - The <WirelessTypes::DataFormat> of the sampling session.
		//	numChannels - The number of active channels for the sampling session.
		//
		//Returns:
		//	The maximum number of sweeps, or sweeps per burst, for a sampling session.
		uint32 maxSweeps(WirelessTypes::SamplingMode samplingMode, WirelessTypes::DataFormat dataFormat, const ChannelMask& channels) const;
		
		//API Function: maxSweeps
		//	Gets the maximum number of sweeps that can be assigned for the duration of a continuous sampling session.
		//
		//Parameters:
		//	dataFormat - The <WirelessTypes::DataFormat> of the sampling session.
		//	numChannels - The number of active channels for the sampling session.
		//
		//Returns:
		//	The maximum number of sweeps for a sampling session.
		uint32 maxSweeps(WirelessTypes::DataFormat dataFormat, const ChannelMask& channels) const;

		//API Function: maxSweepsPerBurst
		//	Gets the maximum number of sweeps per burst that can be assigned for a Burst Sync Sampling session.
		//
		//Parameters:
		//	dataFormat - The <WirelessTypes::DataFormat> of the sampling session.
		//	numChannels - The number of active channels for the sampling session.
		//
		//Returns:
		//	The maximum number of sweeps per burst for a Burst Sync Sampling session.
		virtual uint32 maxSweepsPerBurst(WirelessTypes::DataFormat dataFormat, const ChannelMask& channels) const;

		//API Function: minTimeBetweenBursts
		//	Gets the minimum time that can be assigned for a Burst Sync Sampling session.
		//
		//Parameters:
		//	dataFormat - The <WirelessTypes::DataFormat> of the sampling session.
		//	numChannels - The number of active channels for the sampling session.
		//	sampleRate - The <SampleRate> that for the sampling session.
		//	sweepsPerBurst - The number of sweeps per burst for the sampling session.
		//
		//Returns:
		//	A <TimeSpan> representing the minimum time that can be assigned for a Burst Sync Sampling session.
		TimeSpan minTimeBetweenBursts(WirelessTypes::DataFormat dataFormat, const ChannelMask& channels, const SampleRate& sampleRate, uint32 sweepsPerBurst) const;

		//API Function: minHardwareGain
		//	Gets the minimum hardware gain value that is supported.
		//
		//Exceptions:
		//	- <Error_NotSupported>: The hardware gain feature is not supported by this Node.
		double minHardwareGain() const;

		//API Function: maxHardwareGain
		//	Gets the maximum hardware gain value that is supported.
		//
		//Exceptions:
		//	- <Error_NotSupported>: The hardware gain feature is not supported by this Node.
		double maxHardwareGain() const;

		//API Function: normalizeHardwareGain
		//	Normalizes the hardware gain value so that it is within an acceptable range.
		//
		//Parameters:
		//	gain - The hardware gain to be normalized.
		//
		//Returns:
		//	The normalized hardware gain value that can be stored on the Node.
		//
		//Exceptions:
		//	- <Error_NotSupported>: The hardware gain feature is not supported by this Node.
		double normalizeHardwareGain(double gain) const;

		//API Function: numDamageAngles
		//	Gets the number of damage angles (see <FatigueOptions>) on this Node.
		//
		//Returns:
		//	The number of damage angles on this Node.
		virtual uint8 numDamageAngles() const;

		//API Function: numSnCurveSegments
		//	Gets the number of Sn Curve segments (see <FatigueOptions>) on this Node.
		//
		//Returns:
		//	The number of Sn Curve segments on this Node.
		virtual uint8 numSnCurveSegments() const;

		//API Function: defaultModes
		//	Gets a list of the <WirelessTypes::DefaultMode>s that are supported by this Node.
		//
		//Returns:
		//	A vector of <WirelessTypes::DefaultMode>s that are supported by this Node.
		virtual const WirelessTypes::DefaultModes defaultModes() const;

		//API Function: dataCollectionMethods
		//	Gets a list of the <WirelessTypes::DataCollectionMethod>s that are supported by this Node.
		//
		//Returns:
		//	A vector of <WirelessTypes::DataCollectionMethod>s that are supported by this Node.
		virtual const WirelessTypes::DataCollectionMethods dataCollectionMethods() const;

		//API Function: dataFormats
		//	Gets a list of the <WirelessTypes::DataFormat>s that are supported by this Node.
		//
		//Returns:
		//	A vector of <WirelessTypes::DataFormat>s that are supported by this Node.
		virtual const WirelessTypes::DataFormats dataFormats() const;

		//API Function: samplingModes
		//	Gets a list of the <WirelessTypes::SamplingMode>s that are supported by this Node.
		//
		//Returns:
		//	A vector of <WirelessTypes::SamplingMode>s that are supported by this Node.
		virtual const WirelessTypes::SamplingModes samplingModes() const;

		//API Function: sampleRates
		//	Gets a list of the <WirelessTypes::WirelessSampleRate>s that are supported by this Node for the given sampling mode.
		//
		//Parameters:
		//	samplingMode - The <WirelessTypes::SamplingMode> to get the sample rates for.
		//
		//Returns:
		//	A vector of <WirelessTypes::WirelessSampleRate>s that are supported by this Node for the given sampling mode.
		//
		//Exceptions:
		//	- <Error>: The <WirelessTypes::SamplingMode> is not supported by this Node.
		virtual const WirelessTypes::WirelessSampleRates sampleRates(WirelessTypes::SamplingMode samplingMode) const;

		//API Function: transmitPowers
		//	Gets a list of the <WirelessTypes::TransmitPowers> that are supported by this Node.
		//
		//Returns:
		//	A vector of <WirelessTypes::TransmitPowers> that are supported by this Node.
		virtual const WirelessTypes::TransmitPowers transmitPowers() const;

		//API Function: histogramTransmitRates
		//	Gets a list of the Histogram Transmit Rates that are supported by this Node.
		//
		//Returns:
		//	A vector of <WirelessTypes::WirelessSampleRate>s representing the Histogram Transmit Rates that are supported by this Node.
		virtual const WirelessTypes::WirelessSampleRates histogramTransmitRates() const;
	};
}