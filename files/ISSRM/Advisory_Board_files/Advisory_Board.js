// Created by iWeb 3.0.4 local-build-20111220

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,124),url:'Advisory_Board_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Advisory_Board_files/stroke_1.png'},{rect:new IWRect(1,-1,126,2),url:'Advisory_Board_files/stroke_2.png'},{rect:new IWRect(127,-1,2,2),url:'Advisory_Board_files/stroke_3.png'},{rect:new IWRect(127,1,2,124),url:'Advisory_Board_files/stroke_4.png'},{rect:new IWRect(127,125,2,2),url:'Advisory_Board_files/stroke_5.png'},{rect:new IWRect(1,125,126,2),url:'Advisory_Board_files/stroke_6.png'},{rect:new IWRect(-1,125,2,2),url:'Advisory_Board_files/stroke_7.png'}],new IWSize(128,126))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Advisory_Board_files/Advisory_BoardMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
