// Import stylesheets
import './style.css';

// Write Javascript code!
var eventName;
var originalX, lastKnownPosition, lastKnownPositionY, originalY;
var startXPercent, startYPercent;
const mobile = document.querySelector('#app');


mobile.addEventListener('touchstart', (event) => {
  console.log('touch start');
  if (event.touches.length === 2) {
    eventName = 'zoom';
  } else {
    eventName = 'pan';
    originalX = event.targetTouches[0].clientX;
    originalY = event.targetTouches[0].clientY;
  }
})

mobile.addEventListener('touchmove', (event) => {
  if (eventName === 'pan') {
    lastKnownPosition = event.targetTouches[0].clientX;
    lastKnownPositionY = event.targetTouches[0].clientY;
  }
})

mobile.addEventListener('touchend', (event) => {
  const xMove = (lastKnownPosition - originalX);
  const yMove = (lastKnownPositionY - originalY);
  const width = mobile.offsetWidth;
  const height = mobile.offsetHeight;

  const computedStyle = getComputedStyle(mobile);
  let xPos = parseInt(computedStyle.backgroundPositionX.split('%')[0], 10);
  startXPercent = startXPercent || startXPercent === 0 ? startXPercent : 50;
  const movePercentX = -(xMove / width) * 100;

  let yPos = parseInt(computedStyle.backgroundPositionY.split('%')[1], 10);
  startYPercent = startYPercent || startYPercent === 0 ? startYPercent : 50;
  const movePercentY = -(yMove / height) * 100;

  const bgX = (startXPercent + movePercentX);
  const bgY = (startYPercent + movePercentY);

  if (bgX < 0) {
    bgX = 0;
  } else if (bgX > 100) {
    bgX = 100;
  }

  if (bgY < 0) {
    bgY = 0;
  } else if (bgY > 100) {
    bgY = 100;
  }
  mobile.style.backgroundPositionX = `${bgX}%`;
  mobile.style.backgroundPositionY = `${bgY}%`;
  startXPercent = bgX;
  startYPercent = bgY;
  originalX = null;
  lastKnownPosition = null;
  lastKnownPositionY = null;
});