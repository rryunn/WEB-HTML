const buttons = document.querySelectorAll("button");

const result = document.getElementById("result");
const report = document.querySelector("#report");
let Rept = '';

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "=") {
            result.value = eval(result.value);
            Rept = result.value;
        } else if (buttonText === "기록") {
            report.innerHTML += `${Rept}<br>`;



        } else if (buttonText === "C" || buttonText === "기록") {
            result.value = "";
        } else if (buttonText === "<-") {
            result.value = result.value.slice(0, -1);
        } else if (buttonText ==="결과"){
            toggleReport(); // 기록을 토글하여 보이거나 숨김
        } 
        else {
            result.value += buttonText;
        }
    });
});

function toggleReport() {
    if (report.style.display === "none") {
        report.style.display = "block";
    } else {
        report.style.display = "none";
    }
}
