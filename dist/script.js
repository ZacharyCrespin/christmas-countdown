// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2022").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the title
  document.title = `Christmas Is In ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  // Display the result in the element with id="countdown"
  document.getElementById(
    "countdown"
  ).innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  // If the count down is finished, write "Merry Christmas!"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").remove();
    document.getElementById("title").innerHTML = "Merry Christmas!";
  }
}, 1000);