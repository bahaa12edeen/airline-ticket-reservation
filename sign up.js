document.querySelectorAll('.in')[0].style = "display: none;";
document.querySelectorAll('.in')[1].style = "display: none;";
/* //////////////////////////////////////////////////////////// */

document.getElementById('con1').onclick = function(){

    document.querySelectorAll('.in')[0].style = "display: block;";
    document.querySelectorAll('.in')[1].style = "display: none;";

    document.getElementById('con1').style = "background-color: #006192; color: rgb(235, 235, 235);";
    document.querySelectorAll('.out')[0].style = "background-color: rgb(235, 235, 235);";
    document.getElementById('con2').style = "background-color: rgb(235, 235, 235); color: #006192;";
}

document.getElementById('con2').onclick = function(){

    document.querySelectorAll('.in')[1].style = "display: block;";
    document.querySelectorAll('.in')[0].style = "display: none;";

    document.getElementById('con2').style = "background-color: #006192; color: rgb(235, 235, 235);";
    document.querySelectorAll('.out')[1].style = "background-color: rgb(235, 235, 235);";
    document.getElementById('con1').style = "background-color: rgb(235, 235, 235); color: #006192;";
}
/* ******************************************************** */