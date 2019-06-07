let createBicyclePrototye = function(){
   let speed;
    return{
         speed:0,
         applyBrake =function(b){
            this.speed-s;
         },
         speedup = function(a){
            this.speed+a;
         }

    }
};

const createMountainBikeProtoype = function(createBicyclePrototye){
let mountainBikeProto = Object.create(createBicyclePrototye);
let gear =1;
    return{
        mountainBikeProto,
        gear,
        setGear = function(gearValue){
            gear= gearValue;
        }
    };
};