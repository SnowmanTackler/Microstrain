NDSummary.OnToolTipsLoaded("File:MicroStrain/ByteStream.h",{3858:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3858\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ByteStream</div></div></div><div class=\"TTSummary\">A stream of bytes that is used to easily store and retrieve data</div></div>",3860:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3860\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">bigEndian</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Default constructor to create a ByteStream object</div></div>",3861:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3861\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ByteStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PName\">bytesToCopy,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">bigEndian</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a ByteStream object, passing in the bytes to store in the stream</div></div>",3862:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3862\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~ByteStream()</div><div class=\"TTSummary\">Default destructor for the ByteStream object</div></div>",3864:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3864\" class=\"NDPrototype NoParameterForm\">Bytes m_bytes</div><div class=\"TTSummary\">The data stream object that holds all the bytes</div></div>",3865:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3865\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_bigEndian</div><div class=\"TTSummary\">Whether the ByteStream is big endian (true) or little endian (false)</div></div>",3867:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Accesses a single byte of the ByteStream</div></div>",3868:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Checks that two ByteStream objects are equal by comparing their data vectors</div></div>",3870:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3870\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_uint8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 1-byte unsigned integer to the byte stream</div></div>",3871:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3871\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 2-byte signed integer to the byte stream</div></div>",3872:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3872\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 2-byte unsigned integer to the byte stream</div></div>",3873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3873\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 4-byte unsigned integer to the byte stream</div></div>",3874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3874\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 4-byte float to the byte stream</div></div>",3875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3875\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_double(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends an 8-byte double to the byte stream</div></div>",3876:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3876\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a string to the byte stream.</div></div>",3877:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3877\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a vector of bytes (uint8) to the end of the current ByteStream</div></div>",3878:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3878\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendByteStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">otherStream</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends the entire contents of a ByteStream to the end of the current ByteStream</div></div>",3879:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3879\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int8</span> read_int8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 1-byte signed integer from the byte stream</div></div>",3880:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3880\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> read_uint8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 1-byte unsigned integer from the byte stream</div></div>",3881:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3881\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int16</span> read_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte signed integer from the byte stream</div></div>",3882:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3882\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> read_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte unsigned integer from the byte stream</div></div>",3883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3883\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> read_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte unsigned integer from the byte stream</div></div>",3884:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3884\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> read_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte float from the byte stream</div></div>",3885:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3885\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> read_double(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads an 8-byte double from the byte stream</div></div>",3886:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3886\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the byte stream</div></div>",3887:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3887\" class=\"NDPrototype NoParameterForm\">Bytes&amp; data()</div><div class=\"TTSummary\">Gets the byte stream as a vector of bytes (Bytes)</div></div>",3888:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3888\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the byte stream as a vector of bytes (Bytes)</div></div>",3889:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3889\" class=\"NDPrototype NoParameterForm\">std::size_t size() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the size of the byte stream (equivalent of std::vector.size())</div></div>",3890:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3890\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clear()</div><div class=\"TTSummary\">Clears the byte stream (equivalent of std::vector.clear())</div></div>",3891:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3891\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> empty()</div><div class=\"TTSummary\">Checks whether the vector is empty. (equivalent of std::vector::empty())</div></div>",3892:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3892\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> resize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Resizes the byte stream (equivalent of std::vector.resize())</div></div>",3893:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3893\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void set</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the underlying bytes to the given Bytes.</div></div>",3894:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3894\" class=\"NDPrototype NoParameterForm\">Bytes::iterator begin()</div><div class=\"TTSummary\">Gets an iterator referring to the first element in the ByteStream (equivalent of std::vector::begin())</div></div>",3895:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3895\" class=\"NDPrototype NoParameterForm\">Bytes::iterator end()</div><div class=\"TTSummary\">Gets an iterator referring to the &quot;past-the-end&quot; element in the ByteStream. (equivalent of std::vector::begin())</div></div>",3896:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3896\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> calculateSimpleChecksum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">from,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">to</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Calculates the simple checksum (simple addition of bytes)on the ByteStream</div></div>",3897:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3897\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> calculateFletcherChecksum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">from,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">to</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Calculates the Fletcher checksum (position dependent checksum) on the ByteStream</div></div>",3898:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3898\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> verifyBytesInStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks that the current bytestream can read the requested data</div></div>"});