
// INJECT IMAGE ONTO SCREEN
const image = document.createElement('img');
image.src = chrome.runtime.getURL('shovel.png');  // change to gif
image.style.position = 'absolute';
image.style.textAlign = 'center';
image.style.margin = 'auto';
image.style.top = '0';
image.style.left = '0';
image.style.right = '0';
image.style.width = '50%';
image.style.maxWidth = '50%';
image.style.height = 'auto';
image.style.zIndex = '9999';
document.body.appendChild(image);

// INJECT TIMER ONTO SCREEN
const timertext = document.createElement('h1');
timertext.textContent = "hey";
timertext.style.color = "black";
timertext.style.background = "white";
timertext.style.position = "fixed";
timertext.style.top = '1rem';
timertext.style.left = '1rem';

timertext.style.display = "flex";
timertext.style.alignItems = 'center';

timertext.style.zIndex = '9999';
document.body.appendChild(timertext);

//LOCK MOUSE!

document.body.style.pointerEvents = 'none';
document.body.style.overflowY = 'hidden';
document.body.style.userSelect = 'none';

//final wake up
// hide elements when