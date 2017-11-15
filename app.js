let small = document.getElementById('small');
let long = document.getElementById('long');
let boss = document.getElementById('boss');
let cash = document.getElementById("cash");
var totalCash = 0;

function getCash(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

small.addEventListener("click", function() {
  totalCash += getCash(10, 20);
  cash.innerHTML = totalCash;
});

long.addEventListener("click", function() {
  totalCash += getCash(30, 50);
  cash.innerHTML = totalCash;
});

boss.addEventListener("click", function() {
  totalCash += getCash(70, 100);
  cash.innerHTML = totalCash;
});
