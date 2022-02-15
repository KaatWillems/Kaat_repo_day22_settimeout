

// const theExplosion = () => {
//     console.log('Boom');
// }

// let button = document.createElement('button');

// button.textContent= "WARNING"

// button.addEventListener('click', () => {
//     setTimeout(theExplosion, 5000);
// })
// document.body.appendChild(button);

//
//============================
//

// let interval;
// let times = 0;

// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// buttonThreeSeconds = document.createElement("button");
// buttonThreeSeconds.textContent = "say hey every 3 seconds";
// document.body.appendChild(buttonThreeSeconds);
// buttonThreeSeconds.addEventListener("click", () => {
//   interval = setInterval(heyYou, 3000);
// });

// buttonStop = document.createElement("button");
// buttonStop.textContent = "Stop saying hey";
// document.body.appendChild(buttonStop);
// buttonStop.addEventListener("click", () => {
//   // We must first check if there is an interval
//   if (interval != undefined) {
//     clearInterval(interval);
//   }
// });



//ex 1 Write a function that mimics the behaviour of a typewriter.

//Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.
// prout = ['prout','p','r','o','u','t']











// let word = "Prout!";
// let i = 0;


// let timer = setInterval(typeWriter = () => {
//     document.getElementById("span").innerHTML+=word[i]; i++; 
//     if(i>word.length-1){
//         clearInterval(timer)
//     }
// },1000)

// Exercise 2
// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

//pseudo 
// function: div or document.write 
//set interval 1 second \



let interval = setInterval( display = () => {
    
    let div = document.createElement('div')
    document.body.appendChild(div)
    div.insertAdjacentHTML('beforeend', `<div> ${interval}</div>`)


   
// console.log('helo');

// }, 1000)


//ex3
//The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer. Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs. The game doesn't have to picture moles, or animal cruelty you can simply display circle <div>s to begin with. Everytime you click on a mole, your score increases.

//pseudo 
// random circle becomes black   (with class black )
// let random have class red
// add evenlistener on containercircles , click, your score increases 

