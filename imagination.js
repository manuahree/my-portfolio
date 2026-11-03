/* Editable personal reflections — original aspirational copy, not achievements. */
const THOUGHTS=[
 {theme:'Curiosity',words:'I follow small sparks of curiosity. Sometimes they become an interface. Sometimes, a world with dragons.'},
 {theme:'Learning',words:'I’m still learning my spells: a little design, a little code, and the courage to try again.'},
 {theme:'Making',words:'Somewhere between a wireframe and a daydream, I find the beginning of my next idea.'},
 {theme:'Possibility',words:'I want to make useful things without losing the part of me that wonders, “What if?”'}
];
let current=0;
function showThought(){document.querySelector('#personal-quote').textContent='“'+THOUGHTS[current].words+'”';document.querySelector('#quote-index').textContent=String(current+1).padStart(2,'0')+' / '+String(THOUGHTS.length).padStart(2,'0')+' · '+THOUGHTS[current].theme.toUpperCase();}
document.querySelector('#next-thought').addEventListener('click',()=>{current=(current+1)%THOUGHTS.length;showThought();});
document.querySelector('#previous-thought').addEventListener('click',()=>{current=(current+THOUGHTS.length-1)%THOUGHTS.length;showThought();});
const pause=document.querySelector('#dream-pause');pause.addEventListener('click',()=>{const paused=document.body.classList.toggle('paused');pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'Resume motion':'Pause motion';});
document.addEventListener('visibilitychange',()=>document.body.classList.toggle('page-hidden',document.hidden));
