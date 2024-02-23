
var calendarBody = document.getElementById('calendar-body');
var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(), 1);


const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
var toMonth = today.getMonth() + 1;
var toYear = today.getFullYear();
var start = first.getDay();
var tx = 0;
now.innerHTML = `${toYear}년 ${toMonth}월`;


//화살표 용도
function SelectCalendar(){
    // 캘린더 테이블 행 생성

    for (var i = 0; i < 6; i ++) {
        var $tr = document.createElement('tr');

        // 각 행에 일자 채우기
        for(var j = 0; j < 7; j ++) {
            var $td = document.createElement('td');
            var date = (i * 7) + j -start+ 1;


            if(toMonth === 4 || toMonth ===6||toMonth ===9||toMonth ===11){
                if(date > 0 && date < 31){
                    $td.textContent = date;
                    if(date === 30){
                        tx = j;
                    }

                }
            }
            else if(toMonth===2){
                if(toYear%4===0){
                    if(date > 0 && date < 30){
                        $td.textContent = date;
                        if(date === 29){
                            tx = j;
                        }
                    }   
                }
                else{
                    if(date > 0 && date < 29){
                        $td.textContent = date;
                        if(date === 28){
                            tx = j;
                        }
                    } 
                }
            }
            else{
                if(date > 0 && date < 32){
                    $td.textContent = date;
                    if(date === 31){
                        tx = j;
                    }
                }
            }
                $tr.appendChild($td);
        }  
        calendarBody.appendChild($tr);
    }
    
}


next.addEventListener("click", (e) =>{

    while (calendarBody.firstChild) {
        calendarBody.removeChild(calendarBody.firstChild);
    } //캘린더 테이블 지워주기

    toMonth++; //몇월 하나씩 올려줌

    if(toMonth === 13){
        toMonth = 1;
        toYear++;
    }
    now.innerHTML = `${toYear}년 ${toMonth}월`;
    start = tx + 1;
    SelectCalendar();
    }
)

prev.addEventListener("click", (e) =>{

    while (calendarBody.firstChild) {
        calendarBody.removeChild(calendarBody.firstChild);
    } //캘린더 테이블 지워주기

    toMonth--; //몇월 하나씩 줄임
    if(toMonth === 0){
        toMonth = 12;
        toYear--;
    }
    now.innerHTML = `${toYear}년 ${toMonth}월`;

    SelectCalendar();
    }
)


SelectCalendar();