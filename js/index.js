const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    }) 
})


var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

