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
            for(let a of accountInfoList){
               result.value += `Account Name:${a.name} Balance: ${a.balance} \n`;
            }
        };

        const createAccount = function(){
            return{
                name: accountName.value,
                balance: parseFloat(accountBalance.value)
            };
        };

        const insertItem = function(account){
            accountInfoList.push(account);
            displayAccount();
        };

        const start = function(){
            insertItem(createAccount());
        };
        return{
            a: start
        };
    }();

    createButton.onclick = function(){
        main.a();
    };

    const clear = function(){
        accountName.value="";
        accountBalance.value="";
        result.value="";
    };
})();