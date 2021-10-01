//play sound when typing
let audio = document.getElementById('audio');

document.addEventListener('keypress', function() {
  
    audio.play();
  });

let i = 0;
// var w = window.matchMedia("(min-width: 768px)");

//let txt = `<div\nclass="help-flex"\nstyle="color:green">Hello</div> <div\nclass="sdasdsa"\nstyle="color:blue">Hello2</div>`;

let array = txt.split(' ');
let speed = 1;

function typeWriter() {
    
    if (i < array.length) {
        
        console.log(document.getElementById("text").innerHTML += array[i]);
        i++;
        setTimeout(typeWriter, speed);
        
    }
}

// function rep(w) {
//     if (w.matches) {
//         setTimeout(function(){
//             i = 0;
//             speed = 50; 
//             document.getElementById("text").innerHTML = '';
//             setTimeout(typeWriter, speed);
//         }, 5000);
//     }
// }
let x = document.getElementById("vrh");
// x.addEventListener("load", typeWriter); //This is not working as div has no sign of loading

window.addEventListener("load", typeWriter); //But window has. Try comment this, it will no longer work.)