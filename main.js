Let menu = document.querySelector('#menu-icon');
Let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('bx-x');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};
const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500
  reset: true
})

sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:300});

sr.reveal('.middle-text',{});
sr.reveal('.row-bt, .shop-content',{delay:300});

sr.reveal('.hreview-content', .contact,{delay:300});