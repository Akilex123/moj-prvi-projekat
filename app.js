const elementSat = document.getElementById("sat");

function formatSata(broj) {
  return broj < 10 ? "0" + broj : broj;
}
function pokazivacVremena() {
  let vreme = new Date();
  let sati = formatSata(vreme.getHours());
  let minuti = formatSata(vreme.getMinutes());
  let sekunde = formatSata(vreme.getSeconds());

  let trenutnoVreme = sati + ":" + minuti + ":" + sekunde;
  elementSat.innerHTML = trenutnoVreme;
}

setInterval(pokazivacVremena, 1000);
pokazivacVremena();

function promenaBoje() {
  const randomBoja = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  document.querySelector(".celaStrana").style.backgroundColor = randomBoja();
  document.querySelector(".naslov").style.color = randomBoja();
  document.querySelector(".dugme").style.backgroundColor = randomBoja();
  document.querySelector(".dugme").style.color = randomBoja();
  document.querySelector("#sat").style.backgroundColor = randomBoja();
  document.querySelector("#sat").style.color = randomBoja();
}

document.querySelector(".dugme").addEventListener("click", promenaBoje);
