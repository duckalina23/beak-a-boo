function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({text: 'ON'});
  chrome.alarms.create({delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  window.close();
}

function clearAlarm() {
  chrome.action.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute increments if released
document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('min15').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);

/*// This variable handles when Duckalina should appear on the screen
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

  chrome.storage.sync.set({
    countDownDate: countDownDate
  })
}

// This function handles the math of the timer, displaying the countdown, 
// and changing initialWakeUp
function updateTimer() {
  countDownDate = chrome.storage.sync.get(['countDownDate']);

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
}*/