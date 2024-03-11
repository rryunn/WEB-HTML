
var calendarBody = document.getElementById('calendar-body');
var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(), 1);
const calDate = document.querySelector("#cal-date");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
var toMonth = today.getMonth() + 1;
var toYear = today.getFullYear();
var start = first.getDay();
var tx = 0;
now.innerHTML = `${toYear}년 ${toMonth}월`;
calDate.textContent = today.getDate();

function SelectCalendar(){
    for (var i = 0; i < 6; i ++) {
        var $tr = document.createElement('tr');
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
            //td의 id는 date로 
            //그럼 달 구분은 어떡해 ? 
            //데이터를 월/달/시간/사용자로 나눠서 받는다고 칠 때
            // 불러온 데이터의 월과 현재 달이 일치하면 
            // 그 중에 date가 id와 같은 녀석의 td 위치에다가 추가

            $td.addEventListener("click", function(){
                calDate.textContent = this.textContent;

                //fetch












                this.innerHTML+= `<br>안녕하세요`;
            });

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
    start = tx +1; //그 달 마지막 요일을 알아낸 후 +1 한 값이 start 로 들어감.
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
    pageFirst = new Date(toYear, toMonth-1, 1);
    //next 버튼이랑은 다른 방식
    start = pageFirst.getDay();
    SelectCalendar();
    }
)


SelectCalendar();


