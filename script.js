let answer = "";
const time = parseInt(document.getElementById("slepthours").value);
let message = "";
let giveme = "";
function calculateHours(){
  if(time < 7){
message = `You need more sleep.`;
  }else if(time >10){
    message = `You sleep too much.`;
  }else{
    message = `You got a good amount of sleep.`;
  }
  return message;
}

function sleepvalue(){
  const numbersleep = document.getElementById("bedtime").value;
  const numberwake = document.getElementById("risetime").value;
  
  if( numbersleep < 23 && numberwake > 4){
    giveme = " You went to bed and woke up at a decent time.";
  } else if( numbersleep < 5){
    giveme = " You should go to bed at a better time.";
  } else if(numberwake > 11){
    giveme = " You should wake up at a better time.";
  } else{
    giveme =" You need to fix your sleep schedule";
  }
  return giveme;
}

const sleptBad = document.getElementById("sleptBad");
const sleptAverage = document.getElementById("sleptAverage");
const sleptGood = document.getElementById("sleptGood");
const sleepQuality = document.getElementById("sleepQuality");

sleptBad.onclick = function(){
  answer = "I'm sorry to hear you didn't sleep well." + calculateHours() + sleepvalue();
  sleepQuality.textContent = answer;
};

sleptAverage.onclick = function(){
  answer = "Most sleeps are just average. " + calculateHours() + sleepvalue();
  sleepQuality.textContent = answer;
};

sleptGood.onclick = function(){
  answer = "It's good to know you slept well. " + calculateHours() + sleepvalue();
  sleepQuality.textContent = answer;
};
