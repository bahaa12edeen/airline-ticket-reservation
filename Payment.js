document.getElementById('do0').onclick = function(){
    location.href = "main.html";
}

document.getElementById('do1').onclick = function(){
    window.location.href = "Select Flight.html";
}

document.getElementById('do2').onclick = function(){
    window.location.href = "Passenger Details.html";
}

document.querySelectorAll('#first_w')[0].style = "display: none;";
document.querySelectorAll('#first_w')[1].style = "display: none;";
document.querySelectorAll('#first_w')[2].style = "display: none;";
document.querySelectorAll('#first_w')[3].style = "display: none;";
document.querySelectorAll('#first_w')[4].style = "display: none;";
document.querySelectorAll('#first_w')[5].style = "display: none;";
document.querySelectorAll('#first_w')[6].style = "display: none;";
document.querySelectorAll('#first_w')[7].style = "display: none;";
document.querySelectorAll('#first_w')[8].style = "display: none;";

/********************************************************* */

document.getElementById('region').onblur = function(){

    if(document.getElementById('region').value == ""){
    
        document.getElementById('region').style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[0].style = "display: flex;";

    }
    if(document.getElementById('region').value != ""){

        document.getElementById('region').style = "border: 0;";
        document.querySelectorAll('#first_w')[0].style = "display: none;";

    }
}

/********************************************************* */

document.getElementById('state').onblur = function(){

    if(document.getElementById('state').value == ""){
    
        document.getElementById('state').style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[1].style = "display: flex;";

    }
    if(document.getElementById('state').value != ""){

        document.getElementById('state').style = "border: 0;";
        document.querySelectorAll('#first_w')[1].style = "display: none;";

    }
}

/********************************************************* */

document.getElementById('city').onblur = function(){

    if(document.getElementById('city').value == ""){
    
        document.getElementById('city').style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[2].style = "display: flex;";
    }
    if(document.getElementById('city').value != ""){

        document.getElementById('city').style = "border: 0;";
        document.querySelectorAll('#first_w')[2].style = "display: none;";

    }
}

/********************************************************* */

document.getElementById('number').onblur = function(){

    if(document.getElementById('number').value == ""){
    
        document.getElementById('number').style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[3].style = "display: flex;";

    }
    if(document.getElementById('number').value != ""){

        document.getElementById('number').style = "border: 0;";
        document.querySelectorAll('#first_w')[3].style = "display: none;";

    }
}

/********************************************************* */

document.querySelectorAll('#expiry')[0].onblur = function(){

    if(document.querySelectorAll('#expiry')[0].value == ""){
    
        document.querySelectorAll('#expiry')[0].style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[4].style = "display: inline-flex; width: 111px; align-items: start;";
    }
    if(document.querySelectorAll('#expiry')[0].value != ""){

        document.querySelectorAll('#expiry')[0].style = "border: 0;";
        document.querySelectorAll('#first_w')[4].style = "display: none;";

    }
}

/********************************************************* */

document.querySelectorAll('#expiry')[1].onblur = function(){

    if(document.querySelectorAll('#expiry')[1].value == ""){
    
        document.querySelectorAll('#expiry')[1].style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[5].style = "display: inline-flex; left: 43px; width: 111px; align-items: start;";
    }
    if(document.querySelectorAll('#expiry')[1].value != ""){

        document.querySelectorAll('#expiry')[1].style = "border: 0;";
        document.querySelectorAll('#first_w')[5].style = "display: none;";

    }
}

/********************************************************* */

document.querySelectorAll('#expiry')[2].onblur = function(){

    if(document.querySelectorAll('#expiry')[2].value == ""){
    
        document.querySelectorAll('#expiry')[2].style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[6].style = "display: inline-flex; left: 70px; width: 111px; align-items: start;";
    }
    if(document.querySelectorAll('#expiry')[2].value != ""){

        document.querySelectorAll('#expiry')[2].style = "border: 0;";
        document.querySelectorAll('#first_w')[6].style = "display: none;";

    }
}

/********************************************************* */

document.getElementById('postcode').onblur = function(){

    if(document.getElementById('postcode').value == ""){
    
        document.getElementById('postcode').style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[7].style = "display: flex;";
    }
    if(document.getElementById('postcode').value != ""){

        document.getElementById('postcode').style = "border: 0;";
        document.querySelectorAll('#first_w')[7].style = "display: none;";

    }
}

/********************************************************* */

document.getElementById('address').onblur = function(){

    if(document.getElementById('address').value == ""){
    
        document.getElementById('address').style = "border: 1px solid red; padding: 7px 14px;";
        document.querySelectorAll('#first_w')[8].style = "display: flex;";
    }
    if(document.getElementById('address').value != ""){

        document.getElementById('address').style = "border: 0;";
        document.querySelectorAll('#first_w')[8].style = "display: none;";

    }
}