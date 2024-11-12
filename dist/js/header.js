const headerBar = document.querySelector('.headerBar');
const menu = document.querySelector('.header__menu');
const eks = document.querySelector('.headerBar__eks');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', ()=>{
    headerBar.classList.add('open')
    overlay.classList.add('active')
})

eks.addEventListener('click', ()=>{
    headerBar.classList.remove('open')
    overlay.classList.remove('active')
})

const ddowns = document.querySelectorAll('.title, .project');
ddowns.forEach((ddown) => {
    ddown.addEventListener('click', () => {
        ddown.nextElementSibling.classList.toggle("open"); 
    });
});

window.addEventListener("scroll", () =>   {
    console.log(scrollY);
    if ((scrollY) >= 90 ) {
      headerBar.classList.add("bg");
    } else {
      headerBar.classList.remove("bg");
    }
  });

