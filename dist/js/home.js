let yearsElement = document.querySelector('.years'); // Element for displaying years
let counterStarted = false;

window.addEventListener("scroll", () => {
  if (scrollY >= 1100 && !counterStarted) {
    counterStarted = true;

    let counterYears = 0;
    let interval = setInterval(() => {
      if (counterYears <= 25) {
        yearsElement.innerHTML = counterYears + "+";
        counterYears++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  } 
});

let icecream = document.querySelector('.icecream');
let cake = document.querySelector('.cake');
let chef = document.querySelector('.chef');
let caramel = document.querySelector('.caramel');

let pastrycount = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 8650 && !pastrycount) {
    pastrycount = true;

    let icecreamCount = 0;
    let cakeCount = 0;
    let chefCount = 0;
    let caramelCount = 0;

    let interval = setInterval(() => {
      if (icecreamCount <= 39) {
        icecream.innerHTML = icecreamCount + "+";
        icecreamCount++;
      }
      if (cakeCount <= 60) {
        cake.innerHTML = cakeCount + "+";
        cakeCount++;
      }
      if (chefCount <= 12) {
        chef.innerHTML = chefCount + "+";
        chefCount++;
      }
      if (caramelCount <= 34) {
        caramel.innerHTML = caramelCount + "+";
        caramelCount++;
      }

      if (icecreamCount > 39 && cakeCount > 60 && chefCount > 12 && caramelCount > 34) {
        clearInterval(interval);
      }
    }, 50);
  } 
});
