NDSummary.OnToolTipsLoaded("CClass:BaseStationEepromMap",{1890:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1890\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationEepromMap</div></div></div><div class=\"TTSummary\">Contains information on every EEPROM available on BaseStations</div></div>",1892:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1892\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> canUseCache_read(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromLocation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets whether or not the specified eeprom location can use the eeprom cache for reading, or should always be read from the BaseStation.</div></div>",1893:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1893\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> canUseCache_write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromLocation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets whether or not the specified eeprom location can use the eeprom cache for writing, or should always be written to the BaseStation.</div></div>",1895:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">SERIAL_ID				-The serial ID for the base station. Combine with the model number for the full serial number BEACON_CONFIG			-Configuration of the beacon MODEL_NUMBER			-The model number of the base station MODEL_OPTION			-The model option of the base station FREQUENCY				-The radio frequency channel TX_POWER_LEVEL			-The transmit output power of the radio BEACON_SOURCE			-The source of the beacon FIRMWARE_VER			-The firmware version of the base station (part 1) FIRMWARE_VER2			-The firmware version of the base station (part 2) LEGACY_MODEL_NUMBER		-The (legacy) model number of the base station LEGACY_SERIAL_ID		-The (legacy) serial ID for the base station. Combine with the model number for the full serial number RADIO_ID				-The id of the radio on the base station MICROCONTROLLER			-The id of the microcontroller FW_ARCH_VER				-The firmware architecture version ANALOG_1_NODE_ADDRESS	-The Node Address to Pair to Analog Port 1 ANALOG_1_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 1 ANALOG_1_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 1 ANALOG_1_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 1 ANALOG_2_NODE_ADDRESS	-The Node Address to Pair to Analog Port 2 ANALOG_2_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 2 ANALOG_2_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 2 ANALOG_2_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 2 ANALOG_3_NODE_ADDRESS	-The Node Address to Pair to Analog Port 3 ANALOG_3_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 3 ANALOG_3_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 3 ANALOG_3_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 3 ANALOG_4_NODE_ADDRESS	-The Node Address to Pair to Analog Port 4 ANALOG_4_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 4 ANALOG_4_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 4 ANALOG_4_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 4 ANALOG_5_NODE_ADDRESS	-The Node Address to Pair to Analog Port 5 ANALOG_5_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 5 ANALOG_5_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 5 ANALOG_5_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 5 ANALOG_6_NODE_ADDRESS	-The Node Address to Pair to Analog Port 6 ANALOG_6_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 6 ANALOG_6_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 6 ANALOG_6_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 6 ANALOG_7_NODE_ADDRESS	-The Node Address to Pair to Analog Port 7 ANALOG_7_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 7 ANALOG_7_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 7 ANALOG_7_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 7 ANALOG_8_NODE_ADDRESS	-The Node Address to Pair to Analog Port 8 ANALOG_8_NODE_CHANNEL	-The Node Channel to Pair to Analog Port 8 ANALOG_8_FLOAT_MAX		-The Maximum Float value (3V output) for Analog Port 8 ANALOG_8_FLOAT_MIN		-The Minimum Float value (0V output) for Analog Port 8 ANALOG_PAIRING_ENABLE	-Enable/Disable analog pairing on an analog base station ANALOG_TIMEOUT_TIME		-The time (seconds) for the analog timeout on an analog base station ANALOG_TIMEOUT_VOLTAGE	-The voltage to time out for on an analog base station BUTTON1_LONG_FUNC		-The function for a long press of Button 1 on a base station with buttons BUTTON1_LONG_NODE		-The Wireless Node associated with a long press of Button 1 on a base station with buttons BUTTON1_SHORT_FUNC		-The function for a short press of Button 1 on a base station with buttons BUTTON1_SHORT_NODE		-The Wireless Node associated with a short press of Button 1 on a base station with buttons BUTTON2_LONG_FUNC		-The function for a long press of Button 2 on a base station with buttons BUTTON2_LONG_NODE		-The Wireless Node associated with a long press of Button 2 on a base station with buttons BUTTON2_SHORT_FUNC		-The function for a short press of Button 2 on a base station with buttons BUTTON2_SHORT_NODE		-The Wireless Node associated with a short press of Button 2 on a base station with buttons LED_ACTION				-Controls the action of the LED on the base station BAUD_RATE				-The baud rate of the serial connection with the base station CYCLE_POWER				-Used to soft reset the base station REGION_CODE				-The region code for the device ANALOG_EXCEED_MAX		-The maximum value for the Analog Exceedance setting ANALOG_EXCEED_MIN		-The minimum value for the Analog Exceedance setting ANALOG_EXCEED_ENABLE	-Enable/Disable analog exceedance MIN_SOFT_VER_MAJOR		-The minimum software version for support of this device (major) MIN_SOFT_VER_MINOR		-The minimum software version for support of this device (minor)</div></div>"});