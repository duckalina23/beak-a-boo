// This variable handles when Duckalina should appear on the screen
let initialWakeUp = false;

// This variable reads how much time the user wants to study for in minutes
let amountOfStudyTime;

// This variable is used to calculate the countdown date
let oldDateObj;

// This is how much time is left before the study break
let countDownDate;

// This is used to update the timer every second
let myInterval;

function setCountDownTime() {
  // This gets how much time the user wants to study for
  amountOfStudyTime = Number(document.getElementById("userInput").value);

  // This variable is the current time
  oldDateObj = new Date();

  // This variable is the time we're counting down to
  countDownDate = new Date(oldDateObj.getTime() + amountOfStudyTime*60000);
}

// This function handles the math of the timer, displaying the countdown, 
// and changing initialWakeUp
function updateTimer() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for hours, minutes and seconds
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (hours == 0) {
    document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
  } else {
    document.getElementById("time").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  }

  if (distance < 0) {
    initialWakeUp = true;
    document.getElementById("time").innerHTML = "0 minutes";
  }
}

// function reset timer
function reset() {
  clearInterval(myInterval);
  document.getElementById("time").innerHTML = "0 minutes";
}

// function start timer
function start() {
  setCountDownTime();
  myInterval = setInterval(updateTimer, 1000);
}

export{initialWakeUp};