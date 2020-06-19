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
   console.log('===========');
    console.log(originalPosition);
    console.log('to ');
    console.log(lastKnownPosition);
    console.log('===========');
    console.log('===========');
    originalPosition = null;
    lastKnownPosition = null;

});


function handlePan(event) {
  console.log('handle pan');
}