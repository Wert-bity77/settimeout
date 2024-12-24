
const hoursCard = document.getElementById('soat');
const minutesCard = document.getElementById('minut');
const secondsCard = document.getElementById('sekund');

function updateHours() {
  const hours = new Date().getHours(); 
  hoursCard.textContent = `${hours} Hours`;
  setTimeout(updateHours, 1000); 
}


function updateMinutes() {
  const minutes = new Date().getMinutes(); 
  minutesCard.textContent = `${minutes} Minutes`;
  setTimeout(updateMinutes, 1000); 
}


function updateSeconds() {
  const seconds = new Date().getSeconds();
  secondsCard.textContent = `${seconds} Seconds`;
  setTimeout(updateSeconds, 1000); 
}

updateHours();
updateMinutes();
updateSeconds();