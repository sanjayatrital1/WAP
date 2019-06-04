/**
 * 
 */

let times = 250;
let interval;
let animations;
let num = 0;
let start = false;

document.getElementById("frontsize").onchange = function(){
'use strict';
    let size = document.getElementById("frontsize").value;
    if(size=="Tiny"){
        document.getElementById("playArea").style.fontSize="7pt"; 
    }
    if(size=="Small"){
        document.getElementById("playArea").style.fontSize="10pt"; 
    }
    if(size=="Medium"){
        document.getElementById("playArea").style.fontSize="12pt"; 
    }
    if(size=="Large"){
        document.getElementById("playArea").style.fontSize="16pt"; 
    }
    if(size=="ExtraLarge"){
        document.getElementById("playArea").style.fontSize="24pt"; 
    }
    if(size=="XXL"){
        document.getElementById("playArea").style.fontSize="32pt"; 
    }
};
const startAnimation = function(){
'use strict';
    if(!start){
        start = true;
        animations = document.getElementById("playArea").value.split("=====\n");
    }
    interval = setInterval(startFunc ,times);
};
let startFunc = function(){
'use strict';
    document.getElementById("playArea").value = animations[num];
        (num == animations.length - 1) ? num = 0 : num++;
};

let emptyMsg = function(){
'use strict';
    alert("Please select animation type");
};

document.getElementById("playArea").innerHTML = 
        ANIMATIONS[document.getElementById("animationType").value];

document.getElementById("start").onclick = function(){
'use strict';
    if(document.getElementById("animationType").value == "BLANK") {
        emptyMsg();
        return;
    }
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    startAnimation();
};
document.getElementById("stop").onclick = function(){
'use strict';
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    start = false;
    document.getElementById("playArea").value =
            ANIMATIONS[document.getElementById("animationType").value];
};
document.getElementById("animation").onchange = function(){
'use strict';
    num = 0;
    document.getElementById("playArea").value = 
        ANIMATIONS[document.getElementById("animationType").value];
    if(start){
        animations = document.getElementById("playArea").value.split('=====\n');
    }
};
document.getElementById("turbo").onchange = function() {
'use strict';
    times = document.getElementById("turbo").checked ? 50 : 250;
    if(start && interval){
        clearInterval(interval);
        startAnimation();
    }
};