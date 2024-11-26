
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//nav menuyi bastinmi kapama
// Get a reference to the offcanvas element
const offcanvas = document.getElementById('offcanvasNavbar');

// Get all the links inside the offcanvas
const links = offcanvas.querySelectorAll('a');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Hide the offcanvas
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    bsOffcanvas.hide();
  });
});
//navbar scrolled bg black
const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
  if(window.scrollY >= 56){
    navEl.classList.add('navbar-scrolled')
    navEl.classList.add('navbar-brand-scrolled')
    navEl.classList.add('navbar-toggler-scrolled')
  }else if (window.scrollY <56){
    navEl.classList.remove('navbar-scrolled');
    navEl.classList.remove('navbar-brand-scrolled');
    navEl.classList.remove('navbar-toggler-scrolled');
  }
});


gsap.registerPlugin(ScrollTrigger)
gsap.from(".about",{
  scrollTrigger:{
    trigger:".about",
    toggleActions:"restart none restart none",

  },
  x:-100,
  duration:2,
  opacity:0
});
gsap.from(".resm",{
  scrollTrigger:{
    trigger:".resm",
    toggleActions:"restart none restart none",
     
  },
  x:100,
  duration:2,
  opacity:0
});
