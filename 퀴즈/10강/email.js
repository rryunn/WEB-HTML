const bttn = document.querySelector("#bttn");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
const email = document.querySelector("#email");

bttn.addEventListener("click", (e) =>{

    if(email.value !== ""){
        let str = email.value;
        let id = str.split("@")[0];
        let leng = id.length / 2;
        id = id.substring(0,id.length - leng);
        let domain = str.split("@")[1];

        result.innerHTML += `${id}...@${domain} <br>`;
        email.value ="";
    }

});

reset.addEventListener("click", (e) =>{

    result.innerHTML = `<p>_____________________________________</p>`;

})