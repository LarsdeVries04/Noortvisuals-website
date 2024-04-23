let activeaccount = JSON.parse(localStorage.getItem("activeaccount"));
    if(!activeaccount){
        activeaccount = [];
    };
function savetostorageactiveaccount(){
    localStorage.setItem('activeaccount', JSON.stringify(activeaccount));};
console.log(activeaccount);
