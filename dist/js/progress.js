const progress = document.querySelector('.progress')
window.addEventListener("scroll", () =>   {
    console.log(scrollY);
    if ((scrollY) >= 100 ) {
      progress.classList.add("bg");
    } else {
      progress.classList.remove("bg");
    }
  });
  progress.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });