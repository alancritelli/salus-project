window.addEventListener('scroll', onScroll)
const navigation = document.getElementById('navigation')

function onScroll() {
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(aboutus)
  activateMenuAtCurrentSection(experts)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(contactus)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
 */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .wrapper,
  #aboutus .wrapper,
  #experts .wrapper,
  #testimonials .wrapper,
  #contactus .wrapper,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

$(document).ready(function() {
  var owl = $('.testimonial-salus');
  owl.owlCarousel({    
    nav: true,
    items:1,
    loop:true,
    margin:10,    
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
})

// function myFunction() {
//   var element = document.getElementById("navbar");
//   element.classList.toggle("show");
// }

$(".btn-mobile").click(function(){
  $(".menu ").toggleClass("show");
  $(".overflow").toggleClass("show");

});

$('.link').click(function(){
  $(".menu").removeClass("show"); 
  $(".overflow").removeClass("show");
});
