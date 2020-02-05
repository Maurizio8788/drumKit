const btns = document.querySelectorAll('.drum');


function sound(chr){
    let chrDrum = chr;

    switch (chrDrum) {
      case 'w':
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
        break;
      case 'a':
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
        break;
      case 's':
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
        break;
      case 'd':
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
        break;
      case 'j':
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
        break;
      case 'k':
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
        break;
      case 'l':
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
        break;
      default:
         console.log(chrDrum + ' give an error');

    }
}


for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    let word = this.innerHTML;
    sound(word);
    animationCurrentKey(word);
  })
}

document.addEventListener('keydown', (e) => {
  sound(e.key)
  animationCurrentKey(e.key);
})



function animationCurrentKey(currentKey){
  var activeButton = document.querySelector('.'+ currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  }, 1000);
}
