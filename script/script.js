// Set the date we're counting down to
var countDownDate = new Date("Nov 12, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Launched";
  }
}, 1000);

document.addEventListener('contextmenu', 
                        event => event.preventDefault());


//Mobile Menu

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// gallery
function eventclick(){
  var x = document.getElementById("Codelance");
  var y = document.getElementById("Devlance");
  var z = document.getElementById("oreintation");
  y.style.display="none";
  z.style.display="none";
  x.style.display==="flex"
  x.style.display="none";
  x.style.display="flex";
    
}
function eventclick2(){
  var x = document.getElementById("Codelance");
  var y = document.getElementById("Devlance");
  var z = document.getElementById("oreintation");
  x.style.display="none";
  z.style.display="none";
  y.style.display="flex";
  
    
}
function eventclick3(){
  var x = document.getElementById("Codelance");
  var y = document.getElementById("Devlance");
  var z = document.getElementById("oreintation");
  x.style.display="none";
  y.style.display="none";
  z.style.display="flex";
  
    
}
function close(){
  var x = document.getElementById("eventmodal");
  x.style.display="none";
  
}
function openmodal(){
  var x = document.getElementById("eventmodal");
  x.style.display="block";
}
