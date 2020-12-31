var num=Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + 1)) + Math.ceil(1);
console.log(num);
var input=prompt("Guess number:");
if (input==num){
console.log("Bingo! Correct answer");
}
else{if ((input+1)==num){
console.log("Close enough to the correct answer");
}
}