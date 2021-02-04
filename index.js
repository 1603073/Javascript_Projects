const colors = ['rgb(214, 48, 49)','rgb(45, 52, 54)','rgb(108, 92, 231)','rgb(129, 236, 236)',
'rgb(253, 203, 110)'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const number = Math.floor(Math.random() * colors.length);
    console.log(number);
    document.body.style.backgroundColor = colors[number] ;
    color.textContent = colors[number] ;
});

