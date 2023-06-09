//Get the elements from the html svg with query selector
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const DIGITALTIME = document.getElementById("digital-time");
const DATE = document.getElementById("day");

function runClock(){
    //Get the current date in hours, minutes and seconds
 let date = new Date();
 let hrs = date.getHours();
 let min = date.getMinutes();
 let sec = date.getSeconds();

 let digitalTime = hrs+" : "+ min +" : "+ sec;
 var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
DATE.textContent = date.toLocaleDateString('en-us', options);
 DIGITALTIME.textContent = digitalTime;

//Get the relative position of the clock hands
let hrPosition = (hrs *(360/12) )+ (min*(360/60)/12);
let minPosition = (min*(360/60)) + (sec*(360/60)/60);
let secPosition =( sec*(360/60));

//move the clock hands
HOURHAND.style.transform = "rotate("+ hrPosition +"deg)";
MINUTEHAND.style.transform = "rotate("+ minPosition +"deg)";
SECONDHAND.style.transform = "rotate("+ secPosition +"deg)";

}
//set interval to call the function every second
let interval = setInterval(runClock, 1000);