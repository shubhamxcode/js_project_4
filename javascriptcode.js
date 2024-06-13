let random=(parseInt(Math.random()*100+1));
const submit=document.querySelector('.system');
const userinput=document.querySelector('#number');
const prevousguess=document.querySelector('.guesses');
const guessesremaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.Result');
 

const p=document.createElement('p')
let prevguess=[];
let numberguess=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guessji=parseInt(userinput.value)
        validguess(guessji)
    })  
    
}

function validguess(sher){
    if (isNaN(sher)) {
        alert('please give a valid number');
    } else if(sher<1){
        // alert('please give a valid number between 1 to 100');
    }else if(sher>100){
        // alert('please give a valid number between 1 to 100');
    }else{
        prevguess.push(sher)
        if (numberguess>10) {
            cleanguess(sher)
            displaymessage(`game over:Random number was${random}`)
            endgame()
        }else{
          cleanguess(sher)
          checkguess(sher)
        }
    }
}
function checkguess(guess){
    if (guess===random) {
        displaymessage('you are right you won the game')
        endgame()
    }else if(guess<random){
        displaymessage('the number you give is too low')
    }else if(guess>random){
        displaymessage('the number you give is too high')
    }
}
function cleanguess(animal){
    userinput.value='';
    prevousguess.innerHTML+=`${animal} `
    guessesremaining.innerHTML=`${11-numberguess}` 
    numberguess++;
}
function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newgame'>start new game</h2>`
    startover.appendChild(p)
    playgame=false
    newgame()
}
function newgame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(chai){
        random=(parseInt(Math.random()*100+1));
        prevguess=[];
        numberguess=1
        prevousguess=''
        guessesremaining. innerHTML=`${10-numberguess}`
        userinput.removeAttribute('disabled')
        startover.removeChild(p)
        playgame=true
    })
}
