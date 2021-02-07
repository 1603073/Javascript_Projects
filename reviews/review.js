const persons = [{
    'img' : "images/bruce.jpg",
    'name' : "Alexa Mart",
    'job' : "Web Developer",
    'info' : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic modi quam repellat similique dolorum? Esse iusto deserunt amet impedit?"
},
{ 
    'img' : "images/charles.jpg",
    'name' : "Charles Benton",
    'job' : "Web Designer",
    'info' : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic modi quam repellat similique dolorum? Esse iusto deserunt amet impedit?,"
},
{
    'img': "images/foto.jpg",
    'name': "Ella foto",
    'job': "Python Developer",
    'info': 'For entrepreneurs concerned about the company’s future, this task involves locating the correct buyer — one whose objectives regarding the acquired firm are quite compatible with those of the entrepreneur.'
},
{
    'img': "images/hunters.jpg",
    'name': "Hunter Ematto",
    'job': "Android Developer",
    'info': 'Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit, while using other languages is also possible'
}
]

let item = 0;
const img = document.getElementById("img1");
const term = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const people = (item) =>{
    if(item == persons.length-1){
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    }
    else{
        if(item == 0){
        prevBtn.disabled = true;
        nextBtn.disabled = false;
        }
    }
    const person = persons[item];
    img.src = person.img;
    term.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.info;

}
prevBtn.addEventListener("click", function(){
if(item!=0){
    item-- ;
    people(item);
    //item = persons.length - 1;
}

})

nextBtn.addEventListener("click", function(){
    if(item!=persons.length-1){
        item++;
        people(item);
    }

})

item = Math.floor(Math.random() * 4);
people(item);

