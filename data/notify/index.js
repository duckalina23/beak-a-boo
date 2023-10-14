const lock = document.querySelector("#lock");
const container = document.querySelector('#container');

lock.addEventListener("click", () => {
  container.requestPointerLock();
  //countdown starts 
});

document.addEventListener("pointerlockchange", () => {
  const locked = document.pointerLockElement;
  lock.disabled = Boolean(locked);
  
});