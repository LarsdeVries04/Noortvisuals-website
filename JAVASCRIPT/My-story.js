
window.onscroll = function scrollFunction() {
    let reflection = document.querySelector('.foto')
    if (document.body.scrollTop > 400 ||document.documentElement.scrollTop > 400) {
      reflection.classList.add('scroll');
    } else {
        reflection.classList.remove('scroll');
    }
  };