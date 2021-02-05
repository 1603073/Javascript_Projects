let c = 0;
const count = document.querySelector("#value")
//console.log(count);
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
btn1.addEventListener("click", function(){
    c = c+1;
    count.textContent = c;
});

btn2.addEventListener("click", function(){
    c = 0;
    count.textContent = c;
});

btn3.addEventListener("click", function(){
    c = c-1;
    count.textContent = c;
});