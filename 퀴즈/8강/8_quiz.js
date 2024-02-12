const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const bttn = document.querySelector("button");
const container = document.getElementById(".container");
	
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const current = document.querySelector("#current");


const today= new Date();

current.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

bttn.addEventListener("click", (e) => {
    
    const birthday = new Date(year.value, month.value -1, day.value);
    
    let time = today.getTime() - birthday.getTime();
    
    let passTime = Math.round(time/(1000 * 60 * 60 * 24));
	let passedHours = Math.round(time/ (1000 * 60 * 60));   

	resultDays.innerText = `날짜로는 ${passTime} 일이 흐르고, `;
	resultHours.innerText = `시간으로는 ${passedHours} 시간이 흘렀습니다.`;

    year.value = "";
    month.value = "";
    day.value = "";

});