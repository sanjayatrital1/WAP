(function(){
    'use strict';

    let result;
    let initial;
    let msg;
    
    $(function(){
        $("#start").click(start);
    });
    let ready = function(){
        result = true;
        initial = true;
       $("div.boundary").removeClass("youlose");
    };
    const halt = function(){
        result = false;
        terminate();
    };
    const start = function(){
        ready();
        $(".boundary").mouseenter(halt);
        $("#maze").mouseleave(halt);
        $("#end").mouseenter(terminate);
    };
   const terminate =  function(){
        if(initial){
            let msg = result ? "You win! :]" : "Sorry, you lost :[";
            //if(!result) alert(msg);
           if(!result){
            $("div.boundary").addClass("youlose");
           } 
           //alert(msg);
           $("#status").text(msg);
            initial = false;
           
        }
    };
})();