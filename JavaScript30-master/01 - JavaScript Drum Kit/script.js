// using the data-keys with audio  and divs
// enable this to animate on and off when keys are pressed

// ** add event listener **
// windowlistener - listening for the keydown
// The run function which will give the event
// the e (event) is just an oobject full of data
window.addEventListener('keydown', function(e) {
  // want to select the audio element with data dashkit
  // don't need to call the class. Instead, you're using it's own data attribute
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// now selecting key of class and it's data.
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio)return;//stop the function all together
audio.currentTime = 0; //rewinds to the start. Before it played out.
audio.play();
key.classList.add('playing');
});
//want to listen to every key on the page.
const keys = document.querySelectorAll('.key');
// listening for the transition end and when it ends - run a function, called remove
keys.forEach(key => key.addEventListener(''))
