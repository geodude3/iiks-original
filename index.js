document.addEventListener('DOMContentLoaded', ()=>{
    
    const btn = document.querySelector("button");
    
    btn.addEventListener('click',()=>{

        let colour = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');

        if (colour == 'rgb(255, 0, 0)'){
            document.body.style.backgroundColor = "yellow";
            document.querySelector("button").backgroundColor = "red";
        }
        else{
            document.body.style.backgroundColor = "red";
            document.querySelector("button").backgroundColor = "yellow";
        }
    });


});