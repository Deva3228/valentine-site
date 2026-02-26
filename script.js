const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const result=document.getElementById("result");
const typing=document.getElementById("typing");

/* DIFFERENT WORDS WHEN YES CLICK */
const messages=[
"You made my day ❤️",
"I knew you would say YES 😍",
"Forever starts now 💍",
"You are my happiness 💕",
"My heart is yours ❤️"
];

yesBtn.addEventListener("click",function(){

let randomMessage=
messages[Math.floor(Math.random()*messages.length)];

result.innerHTML=randomMessage;

confetti({
particleCount:250,
spread:140,
origin:{y:0.6}
});

typeEffect("I promise to be your moonlight ❤️");

});

/* TYPING EFFECT */
function typeEffect(text,i=0){
typing.innerHTML="";
function typingAnim(){
if(i<text.length){
typing.innerHTML+=text.charAt(i);
i++;
setTimeout(typingAnim,60);
}
}
typingAnim();
}

/* NO BUTTON RUNS AWAY */
noBtn.addEventListener("mouseover",function(){

const x=Math.random()*(window.innerWidth-100);
const y=Math.random()*(window.innerHeight-100);

noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
});

/* FLOATING HEARTS */
function createHeart(){

const heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);
}

setInterval(createHeart,300);

/* AUTO QUOTES CHANGE */
const quotes=[
"You are my sunshine ☀️",
"En mind full ah nee dhaan occupy pannita ❤️",
"Nee irundha pothum life complete ah feel aaguthu 💕",
"Love begins with you 💫",
"love you da minor kunji ❤️"
];

let q=0;

setInterval(()=>{
typing.innerHTML=quotes[q];
q=(q+1)%quotes.length;
},4000);