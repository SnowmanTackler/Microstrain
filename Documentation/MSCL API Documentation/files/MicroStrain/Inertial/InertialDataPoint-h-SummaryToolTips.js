NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/InertialDataPoint.h",{265:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype265\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialDataPoint</div></div></div><div class=\"TTSummary\">Represents a single Inertial Data Point (Extends from DataPoint)</div></div>",266:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype266\" class=\"NDPrototype NoParameterForm\">InertialTypes::ChannelField field() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Field that describes the full MIP &quot;Field&quot; that the data point came in.&nbsp; This is a combination of a MIP &quot;Descriptor ID&quot;, and a MIP &quot;Field ID&quot;.</div></div>",267:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype267\" class=\"NDPrototype NoParameterForm\">InertialTypes::ChannelQualifier qualifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Qualifier that describes the specific channel for the data point.&nbsp; This, combined with the InertialTypes::ChannelField, is a fully unique identifier for the channel.</div></div>",268:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype268\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point is flagged as valid(true) or invalid(false)</div></div>",269:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype269\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> channelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",270:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype270\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the type of this data point</div></div>",271:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of InertialDataPoint objects</div></div>",272:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype272\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">InertialDataEnums</div></div></div><div class=\"TTSummary\">Contains enums representing the possible values for certain Inertial Data Points</div></div>",273:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The GPS Fix Types with the GPS Fix Information field</div></div>",279:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Sensor States with the GPS Hardware Status field</div></div>",283:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna States with the GPS Hardware Status field</div></div>",289:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna Powers with the GPS Hardware Status field</div></div>",293:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Filter States with the NAV Filter Status field</div></div>",298:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Dynamics Modes with the NAV Filter Status field</div></div>",302:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Binary flags that give information with the NAV Filter Status field. Each bit must be checked accordingly.</div></div>",312:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Heading Sources with the Heading Update Source State field</div></div>"});