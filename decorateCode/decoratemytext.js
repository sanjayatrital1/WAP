window.onload = function(){
    `use strict`;
    let decorateButton = document.getElementById("decoration");
    decorateButton.onclick= function(){
        let timerId =setInterval(increaseSize, 500);
    };


   let blingBox = document.getElementById("bling");
   blingBox.onchange = function(){
       alert("You click the checkBox");
    if(blingBox.checked){
        let textArea = document.getElementById("simpletext");
        textArea.style.fontWeight="bold";
        textArea.style.color="green";
        textArea.style.textDecoration="underline";
    }
    else{
        document.getElementById("simpletext").style.fontWeight="normal";
    }
   }; 
};

let increaseSize= function(){
    let textElement= document.getElementById("simpletext");
        let cSSprop = window.getComputedStyle(textElement,null).getPropertyValue("font-size");
        textElement.style.fontSize = parseInt(cSSprop)+ 2 +"px";
}