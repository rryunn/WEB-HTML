const calendar = document.querySelector("#calendar");
const calendar_date = document.querySelector("#calendar_date");
const regist = document.querySelector("#regist");
const change = document.querySelector("#change");


function showCalendar(){
    document.getElementById("calendar").classList.remove("hidden");
    document.getElementById("calendar_date").classList.remove("hidden");
    document.getElementById("regist").classList.add("hidden");
    document.getElementById("change").classList.add("hidden");
    
    
}

function showRegist(){
    document.getElementById("regist").classList.remove("hidden");
    document.getElementById("calendar_date").classList.add("hidden");
    document.getElementById("calendar").classList.add("hidden");
    document.getElementById("change").classList.add("hidden");
    
}

function showChange(){
    document.getElementById("change").classList.remove("hidden");
    document.getElementById("calendar_date").classList.add("hidden");
    document.getElementById("regist").classList.add("hidden");
    document.getElementById("calendar").classList.add("hidden");
    
}