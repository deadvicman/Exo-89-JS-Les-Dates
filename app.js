document.getElementById("timestamp");
let myDate1 = Date();
let myDate2 = Date.now();

console.log("format date: " + myDate1);
console.log("sous forme de TimeStamp Unix" + myDate2);

let result = document.getElementById("localDate");
let aujourdhui = new Date();
result.innerHTML = aujourdhui.toLocaleDateString();

let result = document.getElementById("localTime");
let jour = new Date();
result.innerHTML = jour.toLocaleTimeString();


