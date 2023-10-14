/* globals timer */
'use strict';

const args = new URLSearchParams(location.search);
document.documentElement.classList.add(args.get('mode'));

// supports page zoom other than 100% on the popup mode
if (args.get('mode') !== 'pp') {
  document.body.style.height = (window.visualViewport.height - 1) + 'px';
}

// tabs
document.getElementById('tabs').addEventListener('change', e => {
  const {id} = e.target;
  document.body.dataset.tab = id;
  localStorage.setItem('timer-tab', id);
});

// random joke function
let duckJokes = ["Most ducks live in what state? Duckota!","Why do ducks hate reading directions? They prefer to wing it.", "Daddy duck was watching a film called 'Lord Of The Wings'.", "How do ducks propose? With a wedding wing.", "The ducks couldn’t fly to another country, because they didn’t have the proper duck-uments.","What do they say about French ducks? They have a certain je ne sais quack about them.", "The Buddhist duck visited the mo-nest-ry every day."];
function makeJokes(){
  alert(duckJokes[Math.floor(Math.random() * duckJokes.length)]);
}
// tools
document.addEventListener('click', e => {
  const {command} = e.target.dataset;
  const {tab} = document.body.dataset;

  if (tab === 'timer') {
    if (command === 'cancel') {
      timer.pause(true);
    }
    else if (command === 'resume') {
      timer.start();
    }
    else if (command === 'puns') {
      makeJokes();
    }
    else if (command) {
      timer[command]();
    }
  }
});

// close all notifications
chrome.runtime.sendMessage({
  method: 'remove-all-notifications'
});

// startup
document.body.dataset.tab = localStorage.getItem('timer-tab') || 'timer';
document.getElementById(document.body.dataset.tab).click();
window.addEventListener('load', () => {
  document.body.dataset.ready = true;
});
