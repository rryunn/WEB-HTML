let today = new Date();
const result = document.querySelector("#result");
const button = document.querySelector("#button");
const inputday = document.querySelector("#box");
const ddate = document.querySelector("#date");
const ttime = document.querySelector("#time");
const year = today.getFullYear();
const month = today.getMonth() +1;
const date = today.getDate();
const day1 = today.getDay();
let day2 = "";

switch(day1){
    case 0:
        day2 = "일요일"; break;
    case 1:
        day2 = "월요일"; break;
    case 2:
        day2 = "화요일"; break;
    case 3:
        day2 = "수요일"; break;   
    case 4:
        day2 = "목요일"; break;
    case 5:
        day2 = "금요일"; break;    
    case 6:
        day2 = "토요일"; break;     
}

ddate.innerHTML = `
    ${year}년 ${month}월 ${date}일은 ${day2}입니다.`

button.addEventListener("click", (e) =>{
    e.preventDefault();

    const inputArray = inputday.value.split('-');

    const input = new Date(inputArray[0], inputArray[1]-1, inputArray[2]);
    let passTime = input.getTime() - today.getTime() ;

    let passDay = Math.round(passTime/(1000 * 60 * 60 * 24));
    
    if(passDay + 1 >= 0){
     result.innerHTML = `${inputArray[0]}년 ${inputArray[1]}월 ${inputArray[2]}일까지 <br> D-${passDay+1} 일 남았습니다.`;
    }
    else
     result.innerHTML = `${inputArray[0]}년 ${inputArray[1]}월 ${inputArray[2]}일로부터 <br> D+${-(passDay+1)} 일 지났습니다.`;
    
})

let clock = () => {
    let current = new Date();
    let hrs = current.getHours();
    let mins = current.getMinutes();
    let secs = current.getSeconds();

    let period = "AM";
    if (hrs === 0){
        hrs = 12;
    }else if (hrs > 12){
        hrs = hrs - 12;
        period = "PM"
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;
    
    ttime.innerText = ` ${period} ${hrs}시 ${mins}분 ${secs}초`
}

setInterval(clock, 1000);

let change = () => {

    const bgCount = 5;
    let randomNumber = Math.floor(Math.random() * bgCount) + 1;

    document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;

}
setInterval(change, 2000);