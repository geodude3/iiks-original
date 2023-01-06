document.addEventListener('DOMContentLoaded', ()=>{
    
    const btn = document.querySelector("button");
    
    btn.addEventListener('click',()=>{

        let colour = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');

        if (colour == 'rgb(255, 0, 0)'){
            document.body.style.backgroundColor = "yellow";
            btn.style.backgroundColor = "red";
        }
        else{
            document.body.style.backgroundColor = "red";
            btn.style.backgroundColor = "yellow";
        }
    });


});