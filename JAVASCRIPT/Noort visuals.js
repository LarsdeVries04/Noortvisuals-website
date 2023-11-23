
window.onscroll = function scrollFunction() {
    let upbutton1 =  document.querySelector('.upbutton');
    let reflection1 = document.querySelectorAll('.box');
    if (document.body.scrollTop > 100 ||document.documentElement.scrollTop > 100) {
      reflection1.forEach(reflection1 => {
        reflection1.classList.add('scroll');
      });
      upbutton1.classList.add('scrollup');
    } else {
      reflection1.forEach(reflection1 => {
        reflection1.classList.remove('scroll');
      });
        upbutton1.classList.remove('scrollup');
    }
  };