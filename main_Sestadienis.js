let btnPrimary = document.querySelector(".btn btn-primary");
btnPrimary.addEventListener("click", function () {
    let p = document.querySelector("p");
    p.setAttribute("class", "text-primary");
})


let btnSuccess = document.querySelector(".btn btn-success");
btnSuccess.addEventListener("click", function () {
    let p = document.querySelector("p");
    p.setAttribute("class", "text-success");
})

let btnWarning = document.querySelector(".btn btn-warning");
btnWarning.addEventListener("click", function () {
    let p = document.querySelector("p");
    p.setAttribute("class", "text-warning");
})
