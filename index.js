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


    setInterval(()=>{
        console.log("1s")

        document.querySelector('#divProg').style.visibility = 'hidden';
        setTimeout(()=>{
            document.querySelector('#divProg').style.visibility = 'visible';
        },1000);
        
    
    }, 2000);


});