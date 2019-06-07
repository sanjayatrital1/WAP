/**
 * Using Function
 */
console.log("Using function");
(function(){
'use strict';

let createBicyclePrototype = function(){
    let speed;
    return{
        speed:0,
        applyBrake : function(brakeValue){
            this.speed = this.speed-parseInt(brakeValue);
            console.log("Speed After brake: "+this.speed);
        },
        speedup: function(speedValue){
            this.speed = this.speed+ parseInt(speedValue);
            console.log("Speed After acceleration: "+this.speed);
        }
    };
};
let createMountainBikeProtoype = function(prototype){
    let createObj = Object.create(prototype);
    createObj.gear = 1;
    createObj.setGear = function(gearValue){
        this.gear = gearValue;
        console.log("Current Gear :"+this.gear);
    };
    return createObj;
};
const start = function(){
    let bicyclePrototype = new createBicyclePrototype();
    let mountainBikePrototype = new createMountainBikeProtoype(bicyclePrototype);
    mountainBikePrototype.setGear(1);
    mountainBikePrototype.setGear(2);
    mountainBikePrototype.setGear(4);

    let bp = Object.create(bicyclePrototype);
    bp.speedup(220);
    bp.applyBrake(40);

    let cmbp = Object.create(mountainBikePrototype);
    cmbp.setGear(5);
};
start();
})();

/**
 * Using ES6 class
 */
    console.log("Using ES6 class construct");
(function(){
'use strict';
class CreateBicyclePrototype{
    constructor(){
        this.speed=0;
    }
    applyBrake(brakeValue){
        this.speed = this.speed- parseInt(brakeValue);
       console.log("Speed after applying brakes "+this.speed);
    }
    speedup(speedValue){
        this.speed = this.speed+parseInt(speedValue);
        console.log("Speed After acceleration is "+this.speed);
    }
}

class createMountainBikeProtoype extends CreateBicyclePrototype{
    constructor(){
        super();
        this.gear = 1;
    }
    setGear(gearValue){
            this.gear = gearValue;
            console.log("Gear Value is "+this.gear);
    }
}

function Initialize(){
    let  cmbp = new createMountainBikeProtoype();
    cmbp.setGear(4);
    cmbp.speedup(120);
    cmbp.applyBrake(60);
}
Initialize();
})();