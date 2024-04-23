/*localStorage.clear();*/

/*draai account/inlog div*/
document.querySelector(".account").addEventListener("click", () => draaiI());
document.querySelector(".inloggen-A").addEventListener("click", () => draaiA());
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
goback.addEventListener('click', () => {
    if (history.length > 1){
        history.back();
    } else{
        window.location.href = "../index.html";
    }
    });
/*ga terug button*/

/*save inlog data*/
let activeaccount = JSON.parse(localStorage.getItem("activeaccount"));
    if(!activeaccount){
        activeaccount = [{
            activemail: undefined,
            activepassword: undefined,
            Profilepicture: "niks"}];
    };
function savetostorageactiveaccount(){
    localStorage.setItem('activeaccount', JSON.stringify(activeaccount));};

let inlogdata = JSON.parse(localStorage.getItem("inlogdata"));
if(!inlogdata){
    inlogdata = [{emaildata: "Admin@",
        passworddata: "1234",
        Profilepicture: "niks",
    }]
};
function savetostoragelogindata(){
    localStorage.setItem('inlogdata', JSON.stringify(inlogdata));};

let loggedin = JSON.parse(localStorage.getItem("loggedin"));
    if(!loggedin){
        loggedin = false;
    };
    
function savetostorageloggedin(){
    localStorage.setItem('loggedin', JSON.stringify(loggedin));};
savetostoragelogindata();
savetostorageloggedin();
savetostorageactiveaccount(); 
/*save inlog data*/

/*account JS*/
let createaccount = document.querySelector(".create-div");
createaccount.addEventListener("click", () => {
    let inputemail = document.querySelector(".emailA").value;
    let inputpassword = document.querySelector(".passwordA").value;
    let inputconfirm = document.querySelector(".confirm").value;
    let emailexist = false;
    
    inlogdata.forEach((inlogdata)=>{
    let matchemail = inlogdata.emaildata;
    if(matchemail == inputemail){
        emailexist = true;
    }});
    if(inputpassword == inputconfirm && inputemail.indexOf("@") != -1 && inputpassword.length >= 4 && emailexist != true){
        inlogdata.push(
            {emaildata: inputemail,
            passworddata: inputpassword,
            Profilepicture: "niks",
        });
        document.querySelector(".front").innerHTML ="";
        document.querySelector(".back").innerHTML ="<div class=' accountmade'>you made a account and are logged in</div>";
        loggedin = true;
        activeaccount.push({
            activemail: inputemail,
            activepassword: inputpassword,
            Profilepicture: "niks"});
    } else if (emailexist == true){ document.querySelector(".messagedivA").innerHTML ='"email already in use"'
    } else if (inputpassword != inputconfirm && inputpassword.length >= 4){
        document.querySelector(".messagedivA").innerHTML ='"Password and confirm password does not match"'
    } else{
        document.querySelector(".messagedivA").innerHTML = '"email or password invailed"';
    };
    savetostoragelogindata();
    savetostorageloggedin();
    savetostorageactiveaccount();
});
/*account JS*/

/*login JS*/
if(loggedin == true){
    document.querySelector(".front").innerHTML= "<div class='divloggedin'><div class=' logged-in'>you are logged in</div><div class='log-out'>Log out</div></div>";
} else {
document.querySelector(".inloggen-button").addEventListener("click", () => {
let inputinlogemail = document.querySelector(".emailI").value;
let inputinlogpassword = document.querySelector(".passwordI").value;
let accountmatch = false;
inlogdata.forEach((inlogdata)=>{
    let matchinlogemail = inlogdata.emaildata;
    let matchinlogpassword = inlogdata.passworddata
    if(matchinlogemail == inputinlogemail && matchinlogpassword == inputinlogpassword){
        accountmatch = true;
        loggedin = true;
        activeaccount.push({
            activemail: inputinlogemail,
            activepassword: inputinlogpassword,
            Profilepicture: "niks"});
    }});
if (accountmatch == true ) {
    document.querySelector(".front").innerHTML= "<div class='divloggedin'><div class=' logged-in'>you are logged in</div><div class='log-out'>Log out</div></div>";
    location.reload();
} else{
    document.querySelector(".messagedivI").innerHTML ='"Email or password is invalid"';
}
savetostorageloggedin();
savetostorageactiveaccount();
});};
/*login JS*/

/*log out JS*/
if(loggedin == true){
document.querySelector(".log-out").addEventListener("click", () => {
loggedin = false;
activeaccount = null;
location.reload();
savetostorageloggedin();
savetostorageactiveaccount();
});};
/*log out JS*/

