let counter = 0;
let label = document.querySelector('label');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');

increase.addEventListener('click', ()=>{
    counter+=1;
    label.innerHTML= counter;
    counterColor();
})
decrease.addEventListener('click', ()=>{
    counter-=1;
      label.innerHTML= counter
      counterColor();
})
reset.addEventListener('click', ()=>{
    counter= 0;
    label.innerHTML= counter;
    counterColor();
});

 function counterColor (){
 if (counter > 0) {
    label.style.color="green";
} else if (counter == 0) {
    label.style.color="black";  
} else{
    label.style.color="red";
}}
