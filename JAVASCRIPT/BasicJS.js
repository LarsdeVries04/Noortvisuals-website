const sidebutton = document.querySelector(".HAM-button");
const sideElement = document.querySelector(".Sidebar-div");
  sidebutton.addEventListener('click', () => {
    sideElement.classList.toggle("leftSidebar");
  });

