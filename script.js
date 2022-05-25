
function sum(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let r = Number(a+b);
    document.getElementById("result").textContent= `sum is ${r}`
}
