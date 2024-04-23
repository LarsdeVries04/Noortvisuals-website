/*localStorage.clear();*/

/*link to log out page*/


const accountdiv = document.querySelector(".accountdiv")
const statusdiv = document.querySelector(".statusdiv")
const staragediv = document.querySelector(".storagediv")
const settingsbodydiv = document.querySelector(".settingsbody")


let activeaccount = JSON.parse(localStorage.getItem("activeaccount"));
if(!activeaccount){
    activeaccount = [{
        activemail: undefined,
        activepassword: undefined,
        Profilepicture: undefined}];
};
function savetostorageactiveaccount(){
    localStorage.setItem('activeaccount', JSON.stringify(activeaccount));};
let inlogdata = JSON.parse(localStorage.getItem("inlogdata"));
if(!inlogdata){
    inlogdata = [  {emaildata: "Admin@",
        passworddata: "1234",
        Profilepicture: "niks",
    }]
};
function savetostoragelogindata(){
    localStorage.setItem('inlogdata', JSON.stringify(inlogdata));};

let loggedin = JSON.parse(localStorage.getItem("loggedin"));
    if(!loggedin){
        loggedin = false;};    
function savetostorageloggedin(){
    localStorage.setItem('loggedin', JSON.stringify(loggedin));};
savetostoragelogindata();
savetostorageloggedin();
savetostorageactiveaccount();
/*not logged in*/

if(loggedin == false){
    document.querySelector(".rightsideaccount").innerHTML = "<div>You are not logged in</div>";
} 
if(loggedin == true){
    document.querySelector(".logoutdiv").addEventListener("click",()=>{
    window.location.href = "inlog.html";
})}
/*Change account picture*/
 let loadFile = function(event) {
    let image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    activeaccount[0].Profilepicture = image.src;
    inlogdata[0].Profilepicture = image.src;
   
    savetostorageactiveaccount()
    savetostoragelogindata()
    console.log(activeaccount[0].Profilepicture);
  }; 
  console.log(activeaccount[0].Profilepicture);
if(activeaccount[0].Profilepicture !== "niks"){
    document.getElementById("output").src = activeaccount[0].Profilepicture;
}
console.log("image");
document.querySelector(".deletepicture").addEventListener("click", ()=>{
    if(document.querySelector(".profilepictureimg").src !== "htt") {
    document.querySelector(".profilepictureimg").src = "../images/7136522.png"}
    });
/*Change account picture 63805*/

/*set email and status*/
document.querySelector(".accountemail").innerHTML = `Email: ${activeaccount[0].activemail}`



  