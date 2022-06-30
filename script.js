"use strict";

function sideScroll(direction, id) {
  var element = document.getElementById(id);
  var scrollAmount = 0;
  var scrollMax = element.clientWidth;
  var scrollMin = 0;
  var amount = 10;
  if (direction == "right") {
    element.scrollTo({
      top: 0,
      left: Math.max((scrollAmount += amount), scrollMax),
      behavior: "smooth",
    });
  } else {
    element.scrollTo({
      top: 0,
      left: Math.max((scrollAmount -= amount), scrollMin),
      behavior: "smooth",
    });
  }
}

//FUNZIONE MUSICA
const sound = document.getElementById("audio");
function PlaySound() {
  sound.play();
}
function StopSound() {
  sound.pause();
  sound.currentTime = 0;
}

//FUNZIONE DATA
//data arrivo
const countDownDate = new Date("Jul 3, 2022 08:15:00").getTime();

// Aggiorno del conto alla rovescia ogni 1 sec
const x = setInterval(function () {
  // data di oggi
  const now = new Date().getTime();
  //Differenza con data arrivo
  const distance = countDownDate - now;
  // Caclolo tempo mancante
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("contoRovescia").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contoRovescia").innerHTML = "EXPIRED";
  }
}, 1000);
