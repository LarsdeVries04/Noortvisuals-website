const sidebutton = document.querySelector(".HAM-button");
const sideElement = document.querySelector(".Sidebar-div");

sidebutton.addEventListener('click', (event) => {
  event.stopPropagation();
  sideElement.classList.toggle("leftSidebar");
});
document.addEventListener('click', (event) => {
  if (!sideElement.contains(event.target) && event.target !== sidebutton) {
    sideElement.classList.remove("leftSidebar");
  }
});

  let activeaccount = JSON.parse(localStorage.getItem("activeaccount"));
  if(!activeaccount){
      activeaccount = [];
  };
function savetostorageactiveaccount(){
  localStorage.setItem('activeaccount', JSON.stringify(activeaccount));};

if (activeaccount != false){
  document.querySelector(".a-font").innerHTML = `<div class = "userdiv"><i class="fa-solid fa-user"></i></div>`;
  
}