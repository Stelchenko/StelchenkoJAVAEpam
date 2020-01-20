window.onload = function(){
    (function(){
        var date = new Date();
        var time = date.getDate() + '/' + date.getMonth() + 1 + '/' +  date.getFullYear() + ' ' +  date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        document.getElementsByTagName('footer')[0].innerHTML = '&copy; Stelchenko A.V. ' + time;
        window.setTimeout(arguments.callee, 1000);
    })();
};
