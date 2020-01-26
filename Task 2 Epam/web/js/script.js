window.onload = function(){
    (function(){
        var date = new Date();
        var time = date.getDate() + '/' + date.getMonth() + 1 + '/' +  date.getFullYear() + ' ' +  date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        document.getElementsByTagName('footer')[0].innerHTML = 'Stelchenko A.V ' + time;
        window.setTimeout(arguments.callee, 1000);
    })();
};

function SubMenu(num){
    document.getElementById("text").innerHTML = "submenu " + num;
}

function showContent(link) {

    var cont = document.getElementById('text');
    var loading = document.getElementById('loading');

    cont.innerHTML = loading.innerHTML;

    var http = createRequestObject();
    if( http )
    {
        http.open('get', link);
        http.onreadystatechange = function ()
        {
            if(http.readyState == 4)
            {
                cont.innerHTML = http.responseText;
            }
        }
        http.send(null);
    }
    else
    {
        document.location = link;
    }
}

// создание ajax объекта
function createRequestObject()
{
    try { return new XMLHttpRequest() }
    catch(e)
    {
        try { return new ActiveXObject('Msxml2.XMLHTTP') }
        catch(e)
        {
            try { return new ActiveXObject('Microsoft.XMLHTTP') }
            catch(e) { return null; }
        }
    }
}