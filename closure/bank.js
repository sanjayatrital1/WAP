(function(){
    "use strict";
    const createButton = document.getElementById('create');
    const accountName = document.getElementById('accountName');
    const accountBalance = document.getElementById('depositType');
    const result = document.getElementById('display');
    const accountInfoList  = [];
    const main = function(){
        const displayAccount = function(){
            clear();
            console.log(accountInfoList);
            for(let a of accountInfoList){
               result.value += `Account Name:${a.name} Balance: ${a.balance} \n`;
            }
        };
        const insertItem = function(){
            accountInfoList.push({
                name: accountName.value,
                balance: parseFloat(accountBalance.value)
            });
            displayAccount();
        };
        return{
            a: insertItem
        };
    }();
    createButton.onclick = function(){
        if(accountBalance.value !=="" && accountName!==""){
            main.a();
        }
    };

    const clear = function(){
        accountName.value="";
        accountBalance.value="";
        result.value="";
    };
})();