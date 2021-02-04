const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function(){
    var cl = "#" ;
    for(let i=0;i<6;i++){
        const number=Math.floor(Math.random() * colors.length);
        cl=cl+colors[number]
    }
    document.body.style.backgroundColor = cl ;
    color.textContent = cl ;

})