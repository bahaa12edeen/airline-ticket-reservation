var myelement = document.createElement('div');
var mytext = document.createTextNode ('its exist');
             myelement.appendChild(mytext);
             myelement.setAttribute('class', 'alert');
             myelement.setAttribute('id', 'alt');

document.getElementById('tab1').onclick = function(){

    document.getElementById('tab1').style = "background-color: #F2F2F2; color: #006192;";

    document.getElementById('tab2').style = "background-color: #006192; color: white;";

    document.getElementById('tab3').style = "background-color: #006192; color: white;";

    document.getElementById('f1').style = "display: block;";
    document.getElementById('f2').style = "display: none;";
    document.getElementById('f3').style = "display: none;";
}
/*  */
document.getElementById('tab2').onclick = function(){

    document.getElementById('tab2').style = "background-color: #F2F2F2; color: #006192;";

    document.getElementById('tab1').style = "background-color: #006192; color: white;";
    document.getElementById('tab3').style = "background-color: #006192; color: white;";

    document.getElementById('f1').style = "display: none;";
    document.getElementById('f2').style = "display: block;";
    document.getElementById('f3').style = "display: none;";
}

document.getElementById('tab3').onclick = function(){

    document.getElementById('tab3').style = "background-color: #F2F2F2; color: #006192;";

    document.getElementById('tab1').style = "background-color: #006192; color: white;";
    document.getElementById('tab2').style = "background-color: #006192; color: white;";

    document.getElementById('f1').style = "display: none;";
    document.getElementById('f2').style = "display: none;";
    document.getElementById('f3').style = "display: block;";
}
/* arrow arrow arrow arrow arrow arrow arrow arrow arrow arrow arrow arrow arrow */

/*document.getElementById('arrow1').style = "display: inline-block;";*/
document.getElementById('arrow2').style = "display: none;";
document.getElementById('arrow3').style = "display: none;";

document.getElementById('door1').onclick = function(){

    document.getElementById('form_box').style = "display: block;";
    document.getElementById('your').style = "display: none;";
    document.getElementById('marg_con').style = "display: none;";

    document.getElementById('arrow1').style = "display: inline-block;";
    document.getElementById('arrow2').style = "display: none;";
    document.getElementById('arrow3').style = "display: none;";

    document.getElementById('door1').style = "background-color: #2C0FF2; color: white;";
    document.getElementById('door2').style = "background-color: #DDDDDD; color: #006192;";
    document.getElementById('door3').style = "background-color: #DDDDDD; color: #006192;";
}

document.getElementById('door2').onclick = function(){

    document.getElementById('form_box').style = "display: none;";
    document.getElementById('your').style = "display: block;";
    document.getElementById('marg_con').style = "display: none;";

    document.getElementById('arrow1').style = "display: none;";
    document.getElementById('arrow2').style = "display: inline-block;";
    document.getElementById('arrow3').style = "display: none;";

    document.getElementById('door2').style = "background-color: #2C0FF2; color: white;";
    document.getElementById('door1').style = "background-color: #DDDDDD; color: #006192;";
    document.getElementById('door3').style = "background-color: #DDDDDD; color: #006192;";
}

document.getElementById('door3').onclick = function(){

    document.getElementById('form_box').style = "display: none;";
    document.getElementById('your').style = "display: none;";
    document.getElementById('marg_con').style = "display: block;";
    
    document.getElementById('arrow1').style = "display: none;";
    document.getElementById('arrow2').style = "display: none;";
    document.getElementById('arrow3').style = "display: inline-block;";

    document.getElementById('door3').style = "background-color: #2C0FF2; color: white;";
    document.getElementById('door2').style = "background-color: #DDDDDD; color: #006192;";
    document.getElementById('door1').style = "background-color: #DDDDDD; color: #006192;";

}

/* **************************************************************************************** */

document.querySelectorAll('#first_w')[0].style = "display: none;";

function warr1(){

    document.querySelectorAll('#first')[0].style = "left: 17px; top: 5px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    document.querySelectorAll('#first_name')[0].style = "border: 0;";
    /*document.getElementById('first_name').focus();*/

    document.querySelectorAll('#first_con')[0].style = "border: 1px solid #006192;";
}

document.querySelectorAll('#first_name')[0].onfocus = function(){ warr1();}

document.querySelectorAll('#first_con')[0].onclick = function(){ 
    warr1();
    document.querySelectorAll('#first_name')[0].focus();
}

/*-----------------------------------------------------------------------*/
document.querySelectorAll('#first_name')[0].onblur = function(){

    if(document.querySelectorAll('#first_name')[0].value == ""){

       document.querySelectorAll('#first')[0].style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.getElementById('first_con').style = " border: 1px solid red;";

       document.querySelectorAll('#first_w')[0].style = "display: flex;";

    }else{

        document.querySelectorAll('#first_con')[0].style = "border: 1px solid rgb(179, 179, 179)";

    }

    if(document.querySelectorAll('#first_name')[0].value !== ""){



        document.querySelectorAll('#first_w')[0].style = "display: none;";
    
    }

}
/*-------------------------------------------------------------------------*/

document.querySelectorAll('#first_w')[1].style = "display: none;";

function warr2(){

    document.querySelectorAll('#first')[1].style = "left: 17px; top: 5px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    document.querySelectorAll('#first_name')[1].style = "border: 0;";
    /*document.getElementById('first_name').focus();*/

    document.querySelectorAll('#first_con')[1].style = "border: 1px solid #006192;";
}

document.querySelectorAll('#first_name')[1].onfocus = function(){ warr2();}

document.querySelectorAll('#first_con')[1].onclick = function(){ 
    warr2();
    document.querySelectorAll('#first_name')[1].focus();
}

/*-----------------------------------------------------------------------*/
document.querySelectorAll('#first_name')[1].onblur = function(){

    if(document.querySelectorAll('#first_name')[1].value == ""){

       document.querySelectorAll('#first')[1].style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.querySelectorAll('#first_con')[1].style = " border: 1px solid red;";

       document.querySelectorAll('#first_w')[1].style = "display: flex;";

    }else{

        document.querySelectorAll('#first_con')[1].style = "border: 1px solid rgb(179, 179, 179)";

    }

    if(document.querySelectorAll('#first_name')[1].value !== ""){



        document.querySelectorAll('#first_w')[1].style = "display: none;";
    
    }

}

/* ******************************************************************************** */

document.querySelectorAll('#date_w')[0].style = "display: none;";

function warr3(){

    document.querySelectorAll('#placehold')[0].style = "left: 15px; top: 5px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    document.querySelectorAll('#date_name')[0].style = "border: 0;";
    /*document.getElementById('first_name').focus();*/

    document.querySelectorAll('#date_con')[0].style = "border: 1px solid #006192;";
}

document.querySelectorAll('#date_name')[0].onfocus = function(){ warr3();}

document.querySelectorAll('#date_con')[0].onclick = function(){ 
    warr3();
    document.querySelectorAll('#date_name')[0].focus();
}

/*-----------------------------------------------------------------------*/
document.querySelectorAll('#date_name')[0].onblur = function(){

    if(document.querySelectorAll('#date_name')[0].value == ""){

       document.querySelectorAll('#placehold')[0].style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.getElementById('date_con').style = " border: 1px solid red;";

       document.querySelectorAll('#date_w')[0].style = "display: flex;";

    }else{

        document.querySelectorAll('#date_con')[0].style = "border: 1px solid rgb(179, 179, 179)";

    }

    if(document.querySelectorAll('#date_name')[0].value !== ""){



        document.querySelectorAll('#date_w')[0].style = "display: none;";
    
    }

}

/* ******************************************************************************** */

document.querySelectorAll('#date_w')[1].style = "display: none;";

function warr4(){

    document.querySelectorAll('#placehold')[1].style = "left: 15px; top: 5px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    document.querySelectorAll('#date_name')[1].style = "border: 0;";
    /*document.getElementById('first_name').focus();*/

    document.querySelectorAll('#date_con')[1].style = "border: 1px solid #006192;";
}

document.querySelectorAll('#date_name')[1].onfocus = function(){ warr4();}

document.querySelectorAll('#date_con')[1].onclick = function(){ 
    warr4();
    document.querySelectorAll('#date_name')[1].focus();
}

/*-----------------------------------------------------------------------*/
document.querySelectorAll('#date_name')[1].onblur = function(){

    if(document.querySelectorAll('#date_name')[1].value == ""){

       document.querySelectorAll('#placehold')[1].style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.querySelectorAll('#date_con')[1].style = " border: 1px solid red;";

       document.querySelectorAll('#date_w')[1].style = "display: flex;";

    }else{

        document.querySelectorAll('#date_con')[1].style = "border: 1px solid rgb(179, 179, 179)";

    }

    if(document.querySelectorAll('#date_name')[1].value !== ""){



        document.querySelectorAll('#date_w')[1].style = "display: none;";
    
    }

}

/* ******************************************************************************** */

document.querySelectorAll('#number_w')[0].style = "display: none;";

function warr5(){

    document.querySelectorAll('#num')[0].style = "left: 15px; top: 2px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    document.querySelectorAll('#number_name')[0].style = "border: 0;";
    /*document.getElementById('first_name').focus();*/

    document.querySelectorAll('#number_con')[0].style = "border: 1px solid #006192;";
}

document.querySelectorAll('#number_name')[0].onfocus = function(){ warr5();}

document.querySelectorAll('#number_con')[0].onclick = function(){ 
    warr5();
    document.querySelectorAll('#number_name')[0].focus();
}

/*-----------------------------------------------------------------------*/
document.querySelectorAll('#number_name')[0].onblur = function(){

    if(document.querySelectorAll('#number_name')[0].value == ""){

       document.querySelectorAll('#num')[0].style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.getElementById('number_con').style = " border: 1px solid red;";

       document.querySelectorAll('#number_w')[0].style = "display: flex;";

    }else{

        document.querySelectorAll('#number_con')[0].style = "border: 1px solid rgb(179, 179, 179)";

    }

    if(document.querySelectorAll('#number_name')[0].value !== ""){



        document.querySelectorAll('#number_w')[0].style = "display: none;";
    
    }

}

/* ******************************************************************************** */

document.querySelectorAll('#number_w')[1].style = "display: none;";

function warr6(){

    document.querySelectorAll('#num')[1].style = "left: 15px; top: 2px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    document.querySelectorAll('#number_name')[1].style = "border: 0;";
    /*document.getElementById('first_name').focus();*/

    document.querySelectorAll('#number_con')[1].style = "border: 1px solid #006192;";
}

document.querySelectorAll('#number_name')[1].onfocus = function(){ warr6();}

document.querySelectorAll('#number_con')[1].onclick = function(){ 
    warr6();
    document.querySelectorAll('#number_name')[1].focus();
}

/*-----------------------------------------------------------------------*/
document.querySelectorAll('#number_name')[1].onblur = function(){

    if(document.querySelectorAll('#number_name')[1].value == ""){

       document.querySelectorAll('#num')[1].style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.querySelectorAll('#number_con')[1].style = " border: 1px solid red;";

       document.querySelectorAll('#number_w')[1].style = "display: flex;";

    }else{

        document.querySelectorAll('#number_con')[1].style = "border: 1px solid rgb(179, 179, 179)";

    }

    if(document.querySelectorAll('#number_name')[1].value !== ""){



        document.querySelectorAll('#number_w')[1].style = "display: none;";
    
    }

}

/* radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio */

/* radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio */

document.getElementById('second').style = "display: none;";

function one_way(){

    document.querySelectorAll('#date_con')[1].style = 'display: none;';
    document.getElementById('second').style = "display: none;";
    document.getElementById('first_travel').style = "display: block;";
    document.getElementById('the_date').style = "display: block; margin-bottom: 25px;";
}

document.getElementById('one_way').onclick = function(){ one_way(); }
document.getElementById('radio_label2').onclick = function(){ one_way(); }


function round(){

    document.querySelectorAll('#date_con')[1].style = 'display: inline-block;';
    document.getElementById('second').style = "display: none;";
    document.getElementById('first_travel').style = "display: block;";
    document.getElementById('the_date').style = "display: block; margin-bottom: 25px;";
}

document.querySelectorAll('#return')[0].onclick = function(){ round(); }
document.getElementById('radio_label1').onclick = function(){ round(); }

/*********************************multi***************************************** */


var s=0;
function multi(){
    document.getElementById('second').style = "display: block;";
    document.getElementById('first_travel').style = "display: none;";
    document.getElementById('the_date').style = "display: none;";

    if(s == 0){
        document.getElementById('butt').click();
    }
    s=1;
}


document.getElementById('radio_label3').onclick = function(){multi();}

document.getElementById('multi-city').onclick = function(){multi();}

/* multi multi multi multi multi multi multi multi multi multi multi multi multi multi multi */

var trip_count = document.createElement('input');
trip_count.setAttribute('type', 'hidden');
trip_count.setAttribute('name', 'trip_count');
document.getElementById('added').appendChild(trip_count);

var i = 0, m = 1, a=5,
    travel = [],
    identi = [],
    the_container = [],
    first_span = [],
    arr_city =[],
    warning = [],
    war_img = [],
    mycoco = [],
    the_container2 = [],//22222222222222222222
    first_span2 = [],
    arr_city2 = [],
    warning2 = [],
    war_img2 = [],
    mycoco2 = [],
    out_container = [],//333333333333333333333
    date_container = [],
    first_span3 = [],
    arrival_date = [],
    warning3 = [],
    war_img3 = [],
    mycoco3 = [],
    butt = [];


document.getElementById('butt').onclick = function(){
    console.log('Add before:' + i);
    for(; i<=m && i<6 && m<6; i++)
   {

    /****************************************************************************** */
    if(i == 2) {
        document.querySelectorAll('.be3')[0].style = "display: block;";
        document.querySelectorAll('.be3')[1].style = "display: block;";
    }

    /****************************************************************************** */

    if(i == 5){
        document.getElementById('butt').style = "display: none;";
    }

   travel[i]= document.createElement('div');

   travel[i].setAttribute('id', 'travel');
   travel[i].setAttribute('class', 'travel');

   document.getElementById('added').appendChild(travel[i]);//chose the place to put in(index)


   identi[i] = document.createElement('div'); //identifire is done

   identi[i].setAttribute('class', 'identifire');
   identi[i].setAttribute('id', i);

   identi[i].textContent = i+1;

   travel[i].appendChild(identi[i]);


   the_container[i] = document.createElement('div');

   the_container[i].setAttribute('class', 'first_con');
   the_container[i].style = "margin-left: 4px;";

   travel[i].appendChild(the_container[i]);


   first_span[i] = document.createElement('span');

   first_span[i].setAttribute('id', 'first');

   first_span[i].textContent = 'From';

   the_container[i].appendChild(first_span[i]);

   arr_city[i] = document.createElement('input');

   arr_city[i].setAttribute('type', 'text');

   arr_city[i].setAttribute('class', 'first_name');

   arr_city[i].setAttribute('id', 'first_name');

   arr_city[i].setAttribute('name', 'arrival_city' + (i+1));

   arr_city[i].setAttribute('required', 'required');

   the_container[i].appendChild(arr_city[i]);


   warning[i] = document.createElement('span');

   warning[i].setAttribute('id', 'first_w');

   the_container[i].appendChild(warning[i]);


   war_img[i] = document.createElement('img');

   war_img[i].setAttribute('src', 'warning2.png');

   warning[i].appendChild(war_img[i]);


   mycoco[i] = document.createElement('span');

   mycoco[i].textContent = ' Please enter a current city';

   

   warning[i].appendChild (mycoco[i]);

/* past past past past past past past past past past */

/* past past past past past past past past past past */


    the_container2[i] = document.createElement('div');

    the_container2[i].setAttribute('class', 'first_con');
    the_container2[i].style = "margin-left: 4px;";

    travel[i].appendChild(the_container2[i]);


    first_span2[i] = document.createElement('span');

    first_span2[i].setAttribute('id', 'first');

    first_span2[i].textContent = 'To';

    the_container2[i].appendChild(first_span2[i]);


    arr_city2[i] = document.createElement('input');

    arr_city2[i].setAttribute('type', 'text');

    arr_city2[i].setAttribute('class', 'first_name');

    arr_city2[i].setAttribute('id', 'first_name');

    arr_city2[i].setAttribute('name', 'destination_city' + (i+1));

    arr_city2[i].setAttribute('required', 'required');

    the_container2[i].appendChild(arr_city2[i]);


    warning2[i] = document.createElement('span');

    warning2[i].setAttribute('id', 'first_w');

    the_container2[i].appendChild(warning2[i]);


    war_img2[i] = document.createElement('img');

    war_img2[i].setAttribute('src', 'warning2.png');

    warning2[i].appendChild(war_img2[i]);


    mycoco2[i] = document.createElement('span');

    mycoco2[i].textContent = ' Please enter a destination';

    warning2[i].appendChild (mycoco2[i]);

/* date date date date date date date date date date date date date date date date date date */
/* date date date date date date date date date date date date date date date date date date */
/* date date date date date date date date date date date date date date date date date date */

    out_container[i] = document.createElement('div');

    out_container[i].setAttribute('class', 'out');

    date_container[i] = document.createElement('div');

    date_container[i].setAttribute('class', 'trip1_con');
    date_container[i].setAttribute('id', 'trip1_con');
    date_container[i].style = "margin-left: 4px;";

    travel[i].appendChild(out_container[i]);
    out_container[i].appendChild(date_container[i]);


    first_span3[i] = document.createElement('span');

    first_span3[i].setAttribute('id', 'place');

    first_span3[i].textContent = "Chosen departure date";

    date_container[i].appendChild(first_span3[i]);


    arrival_date[i] = document.createElement('input');

    arrival_date[i].setAttribute('type', 'date');
    arrival_date[i].setAttribute('class', 'trip_date');
    arrival_date[i].setAttribute('id', 'trip_date');
    arrival_date[i].setAttribute('name', 'trip_date' + (i+1));
    arrival_date[i].setAttribute('required', 'required');

    date_container[i].appendChild(arrival_date[i]);


    warning3[i] = document.createElement('span');

    warning3[i].setAttribute('id', 'trip_date_w');

    date_container[i].appendChild(warning3[i]);


    war_img3[i] = document.createElement('img');

    war_img3[i].setAttribute('src', 'warning2.png');

    warning3[i].appendChild(war_img3[i]);


    mycoco3[i] = document.createElement('span');

    mycoco3[i].textContent = " Please enter a departure date";

    warning3[i].appendChild(mycoco3[i]);


    butt[i] = document.createElement('span');

    butt[i].setAttribute('class', 'be3');

    

    butt[i].textContent = "remove";

    out_container[i].appendChild(butt[i]);
    

    /******************************************* */
    if(i <= 1) {butt[i].style = "display: none;";}
    /******************************************* */

    butt[i].addEventListener('click', function(){

        /**************************************************************** */
        if(i == 6){
            document.getElementById('butt').style = "display: block;";
        }
        /**************************************************************** */

        if(i == 3) {
            document.querySelectorAll('.be3')[0].style = "display: none;";
            document.querySelectorAll('.be3')[1].style = "display: none;";
        }

        var o = this.parentElement.parentElement.firstElementChild.textContent-1;

        for(; (o+1)<i; o++){ //to move just-content; not to move index.

            console.log('o:' + o);

            arr_city[o].value = arr_city[o+1].value;
            arr_city2[o].value = arr_city2[o+1].value;
            arrival_date[o].value = arrival_date[o+1].value;
        }

        identi[i-1].parentElement.remove();  //identi[i-1].parentElement.remove();

        identi.pop();
        travel.pop();
        the_container.pop();
        first_span.pop();
        arr_city.pop();
        warning.pop();
        war_img.pop();
        mycoco.pop();
        the_container2.pop();
        first_span2.pop();
        arr_city2.pop();
        warning2.pop();
        war_img2.pop();
        mycoco2.pop();
        date_container.pop();
        first_span3.pop();
        arrival_date.pop();
        warning3.pop();
        war_img3.pop();
        mycoco3.pop();
        butt.pop();

            i--;
            m--;

            trip_count.value = i;
        })
           /* past past past past past past past past past past */
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

warning[i].style = "display: none;";

arr_city[i].addEventListener('focus', function(){ 
    
    this.parentElement.firstElementChild.style = "left: 15px; top: 3px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    this.style = "border: 0;";

    this.parentElement.style = "border: 1px solid #006192; margin-left: 4px;";
 });

the_container[i].addEventListener('click', function(){


    this.children[1].focus();
});



console.log("holla: " + i);
/* ----------------------------------------------------- */
arr_city[i].addEventListener('blur', function(){

    if(this.value == ""){

        this.parentElement.firstElementChild.style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";
        this.parentElement.style = " border: 1px solid red; margin-left: 4px;";
        this.nextSibling.style = "display: flex;";

    }else{

        this.parentElement.style = "border: 1px solid rgb(179, 179, 179) margin-left: 4px;";
    }if(this.value !== ""){

        this.nextSibling.style = "display: none;";
        this.parentElement.style = "margin-left: 4px;";
    }


});
/*-----------------------------------------------------------------------*/

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* past past past past past past past past past past */
/* past past past past past past past past past past */
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

warning2[i].style = "display: none;";

arr_city2[i].addEventListener('focus', function(){ 
    
    this.parentElement.firstElementChild.style = "left: 15px; top: 3px; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    this.style = "border: 0;";

    this.parentElement.style = "border: 1px solid #006192; margin-left: 4px;";
 });

the_container2[i].addEventListener('click', function(){


    this.children[1].focus();
});
/* ----------------------------------------------------- */
arr_city2[i].addEventListener('blur', function(){

    if(this.value == ""){

        this.parentElement.firstElementChild.style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";
        this.parentElement.style = " border: 1px solid red; margin-left: 4px;";
        this.nextSibling.style = "display: flex;";

    }else{

        this.parentElement.style = "border: 1px solid rgb(179, 179, 179) margin-left: 4px;";
    }if(this.value !== ""){

        this.nextSibling.style = "display: none;";
        this.parentElement.style = "margin-left: 4px;";
    }
});
/*-----------------------------------------------------------------------*/

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* past past past past past past past past past past */
/* past past past past past past past past past past */
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

warning3[i].style = "display: none;";

arrival_date[i].addEventListener('focus', function(){ 
    
    this.parentElement.firstElementChild.style = "left: 15px; top: 3px; padding: 0; font-size: 12px; font-family: 'Rubik', sans-serif; color: #006192;";
    this.style = "border: 0;";

    this.parentElement.style = "border: 1px solid #006192; margin-left: 4px;";
 });

date_container[i].addEventListener('click', function(){


    this.children[1].focus();
});
/* ----------------------------------------------------- */
arrival_date[i].addEventListener('blur', function(){

    if(this.value == ""){

        this.parentElement.firstElementChild.style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";
        this.parentElement.style = " border: 1px solid red; margin-left: 4px;";
        this.nextSibling.style = "display: flex;";

    }else{

        this.parentElement.style = "border: 1px solid rgb(179, 179, 179) margin-left: 4px;";
    }if(this.value !== ""){

        this.nextSibling.style = "display: none;";
        this.parentElement.style = "margin-left: 4px;";
    }
});
/*-----------------------------------------------------------------------*/

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* past past past past past past past past past past */

   }

   m++;
   trip_count.value = i;
/* ---------------------Build Structure--------------------- */
/************************************************************/

travel[0].style = "margin-top: 0;";

}

/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
document.getElementById('black_back').style = "display: none;";

document.getElementById('login').onclick = function(){
    document.getElementById('black_back').style = "display: block;";
}

document.getElementById('close').onclick = function(){
    document.getElementById('black_back').style = "display: none;";
}

/* ******************PHP******************* */

