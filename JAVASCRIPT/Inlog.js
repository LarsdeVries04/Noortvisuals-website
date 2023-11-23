/*draai account/inlog div*/
function draaiI(){
    let frontElement = document.querySelector(".front")
    frontElement.classList.add("frontcss")
    let backElement = document.querySelector(".back")
    backElement.classList.add("backcss")
}
function draaiA(){
    let frontElement = document.querySelector(".front")
    setTimeout(frontElement.classList.remove("frontcss"), 5000);
    let backElement = document.querySelector(".back")
    backElement.classList.remove("backcss")
}
/*draai account/inlog div*/

/*ga terug button*/
const goback = document.querySelector(".terug-a");
goback.addEventListener('click', () => {history.back()});
/*ga terug button*/