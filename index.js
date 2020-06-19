// Import stylesheets
import './style.css';

// Write Javascript code!
var eventName;
var originalPosition, lastKnownPosition;
const mobile = document.querySelector('#app');


mobile.addEventListener('touchstart', (event) => {
  console.log('touch start');
  if (event.touches.length === 2) {
    eventName = 'zoom';
  } else {
    eventName = 'pan';
    originalPosition = event.targetTouches[0].clientX;
    handlePan(event);
  }
})

mobile.addEventListener('touchmove', (event) => {
  if (eventName === 'pan') {
    lastKnownPosition = event.targetTouches[0].clientX;
  }
})

mobile.addEventListener('touchend', (event) => {
  const xMove = (lastKnownPosition - originalPosition);
  const width = mobile.offsetWidth;
  const height = mobile.offsetHeight;

  const computedStyle = getComputedStyle(mobile);
  let xPos = parseInt(computedStyle.backgroundPositionX.split('%')[0], 10);
  const startXPercent = startXPercent ? startXPercent : 50;


  const movePercentX = -(xMove / width) * 100;


  const bgX = (startXPercent + movePercentX);
  console.log(movePercentX + '%');

  if (bgX < 0) {
    bgX = 0;
  } else if (bgX > 100) {
    bgX = 100;
  }
  mobile.style.backgroundPositionX = `${bgX}%`;
  startXPercent = bgX;
  originalPosition = null;
  lastKnownPosition = null;
});


function handlePan(event) {
  console.log('handle pan');
}