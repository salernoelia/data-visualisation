console.log('🔨 _____ https://www.youtube.com/watch?v=otCpCn0l4Wo');

// https://hammerjs.github.io/getting-started/


const hammerPlayground = document.getElementById('hammer');
const hammerOptions = {};
// const mc = new Hammer(hammerPlayground, hammerOptions);

var manager = new Hammer.Manager(hammerPlayground, hammerOptions);
manager.add( new Hammer.Tap({ event: 'trippletap', taps: 3 }) );

// // listen to pan, tap, press events
// mc.on('panleft panright tap press', (event) => {
//   hammerPlayground.textContent =
//   event.type + ' gesture detected.';
// });

manager.on("trippletap", (event) => {
  console.log('tripple touch: ', event);
});

// listen to a single event: minimal 2 taps
// mc.on('singletap doubletap', (event) => {
//   hammerPlayground.textContent = event.type + ' ';
//   console.log('event: ', event);
// });

// enabling rotate recognizer
// https://hammerjs.github.io/recognizer-rotate/
mc.get('rotate').set({ enable: true });

// only detectable on touch devices
mc.on('rotate', (event) => {
  hammerPlayground.textContent = event.type + ' ';
  hammerPlayground.textContent += `<br> ${event}`;
});