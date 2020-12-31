pw="password"
function verifyPass(){
input=prompt("Enter Password");
if (input){
if (input==pw){
console.log("Correct! The password you entered matches the original password");
}
else{
console.log("Incorrect password");
}
}
else{
console.log("Please enter your password");
verifyPass();
}
}
verifyPass();