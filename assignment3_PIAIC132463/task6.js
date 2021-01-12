var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
for (var i = 0; i < aCities.length; i++) {
function suffix(){
if (i<3){return o[i+1];}
else {return o[0];}
}
console.log(String(i+1)+String(suffix())+" choice is "+aCities[i]);
}