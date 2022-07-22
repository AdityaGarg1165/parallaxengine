
const toggle = document.querySelector(".toggle")
const bg = document.querySelector(".label")
const ball = document.querySelector(".ball")
var body = document.body
// if(document.body.style.backgroundColor === "rgb(33, 34, 39)"){
    // if(document.getElementsByTagName("body").style.backgroundColor === "#212227")
// toggle.addEventListener("click",async()=>{
function Darkmode(){

    const checkbox = document.querySelector(".checkbox")
    if(checkbox.checked){
        body.style.backgroundColor = "white"
        // bg.style.backgroundColor = "white"
        // ball.style.backgroundColor = "rgb(33, 34, 39)"
    }
    else{
        body.style.backgroundColor = "rgb(33, 34, 39)"
        // bg.style.backgroundColor = "rgb(33, 34, 39)"
        // ball.style.backgroundColor = "white"
    }
}
    // })
// }