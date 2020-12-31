var input_time=Number(prompt());
if (input_time>=0){
if (input_time<1200){
console.log("Good Morning!");
}
else if (input_time>=1200){
if (input_time<1700){
console.log("Good Afternoon!");
}
else if (input_time>=1700){
if (input_time<2100){
console.log("Good Evening!");
}
else if (input_time>=2100){
if (input_time<=2359){
console.log("Good night!");
}
}
}
}
}