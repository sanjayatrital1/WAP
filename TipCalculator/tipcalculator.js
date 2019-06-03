let calcTip = function () {
    'use strict';
        let subtotalElem = document.getElementById('subtotal').value;
        let tipElem = document.getElementById('tip').value;
        let totalElem = document.getElementById('total');
        let subtotal = parseFloat(subtotalElem);
        let tip = parseFloat(tipElem*subtotalElem/"100.00");
        let total = tip+subtotal;
        totalElem.innerHTML = '$' + total;
    };