const btn = document.getElementById("themeMode");

btn.addEventListener("click", changeMode);

function changeMode() {
    
    btn.textContent = btn.textContent === "Light Mode"  ? btn.textContent = "Dark Mode" : btn.textContent = "Light Mode" ;
    btn.style.backgroundColor = btn.style.backgroundColor === "white" ? btn.style.backgroundColor = "black" : btn.style.backgroundColor = "white";
    btn.style.color =  btn.style.color === "black" ?  btn.style.color = "white" :  btn.style.color = "black";
    document.body.style.backgroundColor = document.body.style.backgroundColor === "gray" ? document.body.style.backgroundColor = "whitesmoke" : document.body.style.backgroundColor = "gray";

}