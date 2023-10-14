// INJECT IMAGE ONTO SCREEN

const image = document.createElement('img');
image.src = chrome.runtime.getURL('shovel.png'); 
image.style.position = 'fixed';
image.style.top = '80px';
image.style.marginLeft = 'auto';
image.style.marginRight = 'auto';
image.style.textAlign = 'center';
image.style.justifyContent = 'center';
image.style.width = '50%';
image.style.maxWidth = '100%';
image.style.height = 'auto';
image.style.zIndex = '9999';
document.body.appendChild(image);

//function to show and hide
