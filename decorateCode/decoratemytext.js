window.onload = function(){
    `use strict`;
    let value =false;
    let timerId;
    let decorateButton = document.getElementById("decoration");
    decorateButton.onclick= function(){
        if(value){
            value = false;
            stop(timerId);
            
        }
        else{
            value = true;
            timerId =setInterval(increaseSize, 500);
            
        }
        
    };


   let blingBox = document.getElementById("bling");
   blingBox.onchange = function(){
       alert("You click the checkBox");
    if(blingBox.checked){
        let textArea = document.getElementById("simpletext");
        textArea.style.fontWeight="bold";
        textArea.style.color="green";
        textArea.style.textDecoration="underline";
        document.body.style.backgroundImage= "URL('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')" ;
        document.body.style.background.color="transparent";
    }
    else{
        document.getElementById("simpletext").style.fontWeight="normal";
        document.getElementById("simpletext").style.textDecoration="none";
        document.body.style.backgroundImage = "none";
    }
   }; 
};

let increaseSize= function(){
    let textElement= document.getElementById("simpletext");
        let cSSprop = window.getComputedStyle(textElement,null).getPropertyValue("font-size");
        textElement.style.fontSize = parseInt(cSSprop)+ 2 +"px";
}

let stop = function(id){
    clearInterval(id);
}