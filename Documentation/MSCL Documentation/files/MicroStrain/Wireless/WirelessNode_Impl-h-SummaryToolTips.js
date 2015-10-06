NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/WirelessNode_Impl.h",{2777:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2777\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode_Impl</div></div></div><div class=\"TTSummary\">Contains the implementation logic for a WirelessNode.&nbsp; Most WirelessNode commands call these commands.</div></div>",2779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2779\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessNode_Impl(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">nodeFrequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessNode_Impl object.</div></div>",2781:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2781\" class=\"NDPrototype NoParameterForm\">NodeAddress m_address</div><div class=\"TTSummary\">The address of the Node.</div></div>",2782:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2782\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The Node\'s parent BaseStation.</div></div>",2783:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2783\" class=\"NDPrototype NoParameterForm\">NodeEepromSettings m_eepromSettings</div><div class=\"TTSummary\">The eeprom settings to use for the NodeEeprom object.</div></div>",2784:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2784\" class=\"NDPrototype NoParameterForm\">mutable WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency that this Node is believed to be on.</div></div>",2785:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2785\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;WirelessProtocol&gt; m_protocol</div><div class=\"TTSummary\">The WirelessProtocol containing all of the protocol commands and info for this Node.</div></div>",2786:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2786\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEeprom&gt; m_eeprom</div><div class=\"TTSummary\">The NodeEeprom that handles reading and writing eeprom values with the Node and eeprom cache.</div></div>",2787:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2787\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEepromHelper&gt; m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper used for high level reads and writes on the Node.</div></div>",2788:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2788\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeFeatures&gt; m_features</div><div class=\"TTSummary\">The NodeFeatures containing the features for this Node.</div></div>",2790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2790\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;WirelessProtocol&gt; determineProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Determines the WirelessProtocol to use based on the Node\'s firmware version.</div></div>",2791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2791\" class=\"NDPrototype NoParameterForm\">NodeEeprom&amp; eeprom() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEeprom for this Node.</div></div>",2792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2792\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper&amp; eeHelper() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEepromHelper for this Node.</div></div>",2793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2793\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> NodeFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeFeatures for this Node.</div></div>",2794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2794\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessProtocol&amp; protocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the WirelessProtocol for this Node.&nbsp; Note: This requires communicating to the Node if creating the protocol for the first time.</div></div>",2795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2795\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the Node.</div></div>",2796:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2796\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node\'s parent Base Station, which will perform all communication with the Node.</div></div>",2797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2797\" class=\"NDPrototype NoParameterForm\">BaseStation&amp; getBaseStation()</div><div class=\"TTSummary\">Gets a reference to the BaseStation that is assigned to this Node.</div></div>",2798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2798\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the given BaseStation is the same BaseStation that is assigned to this Node.</div></div>",2799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2799\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useGroupRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables the use of group eeprom read when trying to read a single value (enabled by default).</div></div>",2800:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2800\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing with the Node.</div></div>",2801:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2801\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this Node (default of enabled).</div></div>",2802:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2802\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this Node.</div></div>",2803:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2803\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the Node.</div></div>",2804:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2804\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the Node is believed to be on.&nbsp; If the frequency is unknown, it will be read from Eeprom.</div></div>",2805:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2805\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the Node.</div></div>",2806:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2806\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessModels::NodeModel of the Node.</div></div>",2807:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2807\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the Node.</div></div>",2808:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2808\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::MicroControllerType of the Node.</div></div>",2809:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2809\" class=\"NDPrototype NoParameterForm\">RadioFeatures radioFeatures() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the RadioFeatures of the Node.</div></div>",2810:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2810\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> dataStorageSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of bytes available for data storage on the Node.</div></div>",2811:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2811\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the region code currently set on the Node.</div></div>",2812:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2812\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given WirelessNodeConfig are ok to be written to the Node.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the Node.</div></div>",2813:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2813\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.</div></div>",2814:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2814\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getNumDatalogSessions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the number of datalog sessions that are currently stored on the Node.</div></div>",2815:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2815\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode getDefaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::DefaultMode that is currently set on the Node.</div></div>",2816:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2816\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the user inactivity timeout (in seconds) that is currently set on the Node.</div></div>",2817:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2817\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the check radio interval that is currently set on the Node.</div></div>",2818:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2818\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the Node.</div></div>",2819:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2819\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode getSamplingMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode that is currently set on the Node.</div></div>",2820:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2820\" class=\"NDPrototype NoParameterForm\">ChannelMask getActiveChannels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask currently set on the Node, representing which channels are enabled and disabled.</div></div>",2821:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2821\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate getSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate currently set on the Node.</div></div>",2822:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2822\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> getNumSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of sweeps currently set on the Node, which affects the duration of sampling if unlimited duration is disabled, or the duration of each burst if the sampling mode is Sync Sampling Burst.</div></div>",2823:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2823\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getUnlimitedDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not unlimited sampling duration is enabled on the Node.</div></div>",2824:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2824\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat getDataFormat() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat that is currently set on the Node.</div></div>",2825:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2825\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod getDataCollectionMethod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod that is currently set on the Node, representing how the data will be collected.&nbsp; Note: this has no affect if the sampling mode is Armed Datalogging, as this mode only operates in &quot;log only&quot;.</div></div>",2826:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2826\" class=\"NDPrototype NoParameterForm\">TimeSpan getTimeBetweenBursts() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time between each burst currently set on the Node.</div></div>",2827:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2827\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lost beacon timeout, in minutes, currently set on the Node.</div></div>",2828:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2828\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> getHardwareGain(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware gain of the specified ChannelMask.</div></div>",2829:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2829\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> getHardwareOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware offset of the specified ChannelMask currently set on the Node.&nbsp; See Also: NodeFeatures::channelGroups</div></div>",2830:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2830\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LinearEquation getLinearEquation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the linear equation of the specified ChannelMask currently set on the Node.</div></div>",2831:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2831\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_Unit getUnit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the unit of the specified ChannelMask currently set on the Node.</div></div>",2832:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2832\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_EquationType getEquationType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::CalCoef_EquationType of the specified ChannelMask currently set on the Node.</div></div>",2833:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2833\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::SettlingTime getFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the filter settling time of the specified ChannelMask.</div></div>",2834:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2834\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::ThermocoupleType getThermocoupleType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::ThermocoupleType of the specified ChannelMask currently set on the Node.</div></div>",2835:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2835\" class=\"NDPrototype NoParameterForm\">FatigueOptions getFatigueOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the FatigueOptions currently set on the Node.</div></div>",2836:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2836\" class=\"NDPrototype NoParameterForm\">HistogramOptions getHistogramOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the HistogramOptions currently set on the Node.</div></div>",2837:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2837\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> PingResponse ping()</div><div class=\"TTSummary\">Performs a Long Ping command on the Node to check the communication between the Base Station and the Node.</div></div>",2838:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2838\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sleep()</div><div class=\"TTSummary\">Puts the Node into a low power, sleep mode.&nbsp; This command attempts to ping the node before sending the sleep command, to verify communication.</div></div>",2839:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2839\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cyclePower()</div><div class=\"TTSummary\">Cycles the power on the Node.&nbsp; Many configuration changes that are applied to the node do not take affect until the power is cycled.</div></div>",2840:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2840\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the Node.</div></div>",2841:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2841\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the Node.</div></div>",2842:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2842\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> SetToIdleStatus setToIdle()</div><div class=\"TTSummary\">Attempts to set the Node to the Idle state so that it can be communicated with (stops it sampling, wakes it up if asleep).</div></div>",2843:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2843\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> erase()</div><div class=\"TTSummary\">Erases all logged data on the Node.</div></div>",2844:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2844\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> startNonSyncSampling()</div><div class=\"TTSummary\">Starts the Node in Non-Synchronized Sampling Mode.</div></div>",2845:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2845\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearHistogram()</div><div class=\"TTSummary\">Clears the Histogram on the Node.</div></div>",2846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2846\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> autoBalance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">AutoBalanceOption&nbsp;</td><td class=\"PName last\">option</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs an Auto Balance command on a specified channel on the Node.</div></div>",2847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2847\" class=\"NDPrototype NoParameterForm\">AutoCalResult_shmLink autoCal_shmLink()</div><div class=\"TTSummary\">Performs automatic calibration for the SHM-Link Wireless Node.</div></div>",2848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2848\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a uint16 from the given eeprom location of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",2849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2849\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Value readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a value from the given EepromLocation of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",2850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2850\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a uint16 to the given eeprom location of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",2851:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2851\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a value to the given EepromLocation of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>"});