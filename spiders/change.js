
function showSchedule() {
    
    // 서버에서 일정 데이터를 가져오는 fetch 요청
    fetch('/schedule')
        .then(response => response.json())
        .then(data => {
            // 받아온 데이터를 이용하여 일정을 표시
            //const change = document.getElementById('change');
            change.innerHTML = ''; // 일정을 표시할 요소 초기화
            const title = document.createElement('div');
            title.textContent = `일정리스트`;
            const ctitle=`ctitle`;
            title.setAttribute('id', ctitle);
            
            change.appendChild(title);
            data.forEach((schedule,index) => {
                
                const listItem = document.createElement('div');
                const id = `schedule_${index}`; // 각 listItem의 고유한 ID를 생성합니다.

                listItem.setAttribute('id', id); // listItem에 ID를 설정합니다.
                listItem.classList.add('listItem'); // listItem에 클래스를 추가합니다.
                listItem.textContent = `날짜 : ${schedule.MONTH}월 ${schedule.DAY}일, 시간 : ${schedule.TIME}, 사용자 : ${schedule.NAME}`;
                
                const editButton = document.createElement('button'); //html 요소에 쓸거 createElement 이용하는거 잊지말기 
                editButton.textContent = '수정';
                editButton.classList.add('editButton');
                
                editButton.addEventListener('click',() => {
                    
                    const monthInput = document.createElement('input');
                    monthInput.type = 'number';
                    monthInput.min = 1; 
                    monthInput.max = 12;
                    monthInput.value = schedule.MONTH;

                    const dayInput = document.createElement('input');
                    dayInput.type = 'number';
                    dayInput.min = 1; 
                    dayInput.max = 31;
                    dayInput.value = schedule.DAY;

                    
                    const timeInput = document.createElement('input');
                    timeInput.type = 'text';
                    timeInput.value = schedule.TIME;
                    
                    const nameInput = document.createElement('input');
                    nameInput.type = 'text';
                    nameInput.value = schedule.NAME;
                    const confirmButton = document.createElement('button');
                    confirmButton.textContent = '확인';

                    confirmButton.addEventListener('click', () => {
                        // 수정된 내용을 객체로 만듭니다.
                        const updatedSchedule = {
                            MONTH: monthInput.value,
                            DAY: dayInput.value,
                            TIME: timeInput.value,
                            NAME: nameInput.value
                        };
                
                        // 서버에 수정된 내용을 전송합니다.
                        fetch('/update-schedule', {
                            method: 'PUT', // 수정 요청은 PUT 메소드를 사용합니다.
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedSchedule), // 수정된 일정 정보를 서버로 전송합니다.
                        })
                        .then(response => {
                            if (response.ok) {
                                // 화면에 반영된 수정 내용을 보여줍니다.
                                listItem.textContent = `${updatedSchedule.MONTH}, ${updatedSchedule.DAY}, ${updatedSchedule.TIME}, 사용자:${updatedSchedule.NAME}`;
                                console.log('일정이 성공적으로 수정되었습니다.');
                            } else {
                                console.error('일정 수정 실패:', response.statusText);
                            }
                        })
                        .catch(error => {
                            console.error('일정 수정 중 오류 발생:', error);
                        });
                    });

                    //입력 박스를 각 LISTitem에 연결하기
                    listItem.appendChild(monthInput);
                    listItem.appendChild(dayInput);
                    listItem.appendChild(timeInput);
                    listItem.appendChild(nameInput);

                
                });

                const delButton = document.createElement('button'); //html 요소에 쓸거 createElement 이용하는거 잊지말기 
                delButton.textContent = '삭제';
                delButton.classList.add('delButton');

                delButton.addEventListener('click', () => {
                    fetch('/delete-schedule', {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ 
                            MONTH: schedule.MONTH,
                            DAY: schedule.DAY,
                            TIME: schedule.TIME,
                            NAME: schedule.NAME
                        }), // 삭제할 일정의 정보를 서버로 전송합니다.
                    })
                    

                    .then(response => {
                        if (response.ok) {
                            // 성공적으로 삭제되면 해당 listItem을 화면에서도 삭제합니다.
                            listItem.remove();
                            console.log('일정이 성공적으로 삭제되었습니다.');
                        } else {
                            console.error('일정 삭제 실패:', response.statusText);
                        }
                    })
                    .catch(error => {
                        console.error('일정 삭제 중 오류 발생:', error);
                    });
                });
            

                const buttonContainer = document.createElement('div'); // 두 버튼을 오른쪽에 배치하기 위해 하나의 컨테이너로 묶기
                buttonContainer.classList.add('buttonContainer');

                buttonContainer.appendChild(editButton);
                buttonContainer.appendChild(delButton);

                listItem.appendChild(buttonContainer);
                change.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('일정 데이터를 가져오는 중 오류 발생:', error);
            // 오류 처리
        });
}

// showSchedule 함수 호출하여 일정 표시
showSchedule();
