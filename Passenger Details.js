/*
document.querySelectorAll('.in')[0].style = "display: none;";
document.querySelectorAll('.in')[1].style = "display: none;";

document.querySelectorAll('#first_w')[0].style = "display: none;";
document.querySelectorAll('#first_w')[1].style = "display: none;";
document.querySelectorAll('#first_w')[2].style = "display: none;";
document.querySelectorAll('#first_w')[3].style = "display: none;";
document.querySelectorAll('#first_w')[4].style = "display: none;";
document.querySelectorAll('#first_w')[5].style = "display: none;";


/* //////////////////////////////////////////////////////////// *
document.getElementById('do0').onclick = function(){
    location.href = "main.html";
}


document.getElementById('do2').onclick = function(){
    location.href = "Select Flight.html";
}


/* //////////////////////////////////////////////////////////// *

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
/* ******************************************************** *
/*document.getElementById('first_con').onclick;*

function warr1(){

    document.getElementById('first').style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('first_name').style = "border: 0;";
    /*document.getElementById('first_name').focus();*

    document.getElementById('first_con').style = "border: 1px solid #006192; padding: 4px 14px;";
}

document.getElementById('first_name').onfocus = function(){ warr1();}

document.getElementById('first_con').onclick = function(){ 
    warr1();
    document.getElementById('first_name').focus();
}

/*****************************************************************
document.getElementById('first_name').onblur = function(){

    if(document.getElementById('first_name').value == ""){

       document.getElementById('first').style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.getElementById('first_con').style = " border: 1px solid red; padding: 4px 14px;";

       document.querySelectorAll('#first_w')[0].style = "display: flex;";

    }else{

        document.getElementById('first_con').style = "border: 0";

    }

    if(document.getElementById('first_name').value !== ""){

        document.getElementById('first_con').style = " border: 0; padding: 5px 15px;";

        document.querySelectorAll('#first_w')[0].style = "display: none;";
    
    }

}

function warr2(){

    document.getElementById('last').style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('last_name').style = "border: 0;";
    document.getElementById('last_name').focus();

    document.getElementById('second_con').style = "border: 1px solid #006192; padding: 4px 14px;";
}

document.getElementById('second_con').onclick = function(){
    warr2();
    document.getElementById('last_name').focus();
}
document.getElementById('last_name').onfocus = function() {
    warr2();
}

document.getElementById('last_name').onblur = function(){

    if(document.getElementById('last_name').value == ""){

       document.getElementById('last').style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.getElementById('second_con').style = " border: 0";

       document.getElementById('second_con').style = " border: 1px solid red; padding: 4px 14px;";

       document.querySelectorAll('#first_w')[1].style = "display: flex;";

    }else{

        document.getElementById('second_con').style = "border: 0";

    }

    if(document.getElementById('last_name').value !== ""){

        document.getElementById('second_con').style = " border: 0; padding: 5px 15px;";

        document.querySelectorAll('#first_w')[1].style = "display: none;";
    
    }


}
/* 33333333333333333333333333333333333333333333333333333333333333333333 *
function warr3(){

    document.getElementById('birth').style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('date_of_birth').style = "border: 0;";
    document.getElementById('date_of_birth').focus();
    document.getElementById('birth').textContent = "date of birth";

    document.getElementById('third_con').style = "border: 1px solid #006192; padding: 4px 14px;";

}

document.getElementById('third_con').onclick = function(){
    warr3();
    document.getElementById('date_of_birth').focus();
}
document.getElementById('date_of_birth').onfocus = function() {
    warr3();
}

function go(){

    if(document.getElementById('date_of_birth').value == ""){

       document.getElementById('birth').style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

       document.getElementById('birth').textContent = "date of birth: DD/MM/YYYY";
 
       document.getElementById('third_con').style = "border: 0";

       document.getElementById('third_con').style = " border: 1px solid red; padding: 4px 14px;";

       document.querySelectorAll('#first_w')[2].style = "display: flex;";

    }else{

        document.getElementById('third_con').style = "border: 0";

    }

    if(document.getElementById('date_of_birth').value !== ""){

        document.getElementById('third_con').style = " border: 0; padding: 5px 15px;";

        document.querySelectorAll('#first_w')[2].style = "display: none;";
    
    }

    
}

document.getElementById('date_of_birth').onblur = function(){
    go();
}

/*
window.onload = function(){


 
    if(document.getElementById('date_of_birth').value !== ""){

        document.getElementById('birth').style = " top: 5px; font-size: 11px; color: black;";

        document.getElementById('birth').textContent = "date of birth";
    }
    
  }
*/

/* 4444444444444444444444444444444444444444444444444444444444444444444444444444 *

function warr4(){

    document.getElementById('coun_code').style = "border: 1px solid #006192;";
    document.getElementById('c_code').style = "padding: 18px 19px 10px 15px;";

    document.getElementById('code').style = "left: 17px; top: 5px; font-size: 11px; color: black;";

}

document.getElementById('coun_code').onclick = function(){

    document.getElementById('c_code').focus();

    warr4();
}

document.getElementById('c_code').onfocus = function(){
    warr4();
}

document.getElementById('c_code').onblur = function(){

    if(document.getElementById('c_code').value == ""){

        document.getElementById('code').style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";
 
  
        document.getElementById('coun_code').style = "border: 0";
 
        document.getElementById('coun_code').style = " border: 1px solid red; padding: 0;";
 
        document.querySelectorAll('#first_w')[3].style = "display: flex;";
 
     }else{
 
         document.getElementById('coun_code').style = "border: 0";
 
     }
 
     if(document.getElementById('c_code').value !== ""){
 
         document.getElementById('coun_code').style = " border: 0; padding: 0;";
 
         document.querySelectorAll('#first_w')[3].style = "display: none;";
     
     }

}


/* 555555555555555555555555555555555555555555555555555555555555555555555555 *

function warr5(){

    document.getElementById('fifth').style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('phone').style = "border: 0;";
    /*document.getElementById('in_mail').focus();*

    document.getElementById('fifth_con').style = "border: 1px solid #006192; padding: 4px 14px;";

}

document.getElementById('fifth_con').onclick = function(){
    warr5();
    document.getElementById('phone').focus();
}
document.getElementById('phone').onfocus = function() {
    warr5();
}

document.getElementById('phone').onblur = function(){

    if(document.getElementById('phone').value == ""){

       document.getElementById('fifth').style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

 
       document.getElementById('fifth_con').style = "border: 0";

       document.getElementById('fifth_con').style = " border: 1px solid red; padding: 4px 14px;";

       document.querySelectorAll('#first_w')[4].style = "display: flex;";

    }else{

        document.getElementById('fifth_con').style = "border: 0";

    }

    if(document.getElementById('phone').value !== ""){

        document.getElementById('fifth_con').style = " border: 0; padding: 5px 15px;";

        document.querySelectorAll('#first_w')[4].style = "display: none;";
    
    }

    
}

/* 666666666666666666666666666666666666666666666666666666666666666666666666 *

function warr6(){

    document.getElementById('mail').style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('in_mail').style = "border: 0;";
    /*document.getElementById('in_mail').focus();*

    document.getElementById('e_mail').style = "border: 1px solid #006192; padding: 4px 14px;";

}

document.getElementById('e_mail').onclick = function(){
    warr6();
    document.getElementById('in_mail').focus();
}
document.getElementById('in_mail').onfocus = function() {
    warr6();
}

document.getElementById('in_mail').onblur = function(){

    if(document.getElementById('in_mail').value == ""){

       document.getElementById('mail').style = " top: 17px; font-size: 16px; color: rgb(136, 136, 136);";

 
       document.getElementById('e_mail').style = "border: 0";

       document.getElementById('e_mail').style = " border: 1px solid red; padding: 4px 14px;";

       document.querySelectorAll('#first_w')[5].style = "display: flex;";

    }else{

        document.getElementById('e_mail').style = "border: 0";

    }

    if(document.getElementById('in_mail').value !== ""){

        document.getElementById('e_mail').style = " border: 0; padding: 5px 15px;";

        document.querySelectorAll('#first_w')[5].style = "display: none;";
    
    }

    
}

/* ////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////////////// */

var num_pass = document.getElementById('numOfPerson').textContent;

var v=0,
    i,
    form,
    part1 = [],
    legend1 = [],
    img_legend1 = [],
    span_legend1 = [],
    div1_part1 = [],
    div2_part1 = [],
    div3_part1 = [],
    mrradio = [],
    msradio = [],
    mr_circle = [],
    ms_circle = [],
    mr_text = [],
    ms_text = [],
    mrradio_p = [],
    msradio_p = [],
    out_mr_circle = [],
    out_ms_circle =[],
    in_mr_circle = [],
    in_ms_circle =[],
    input_mr_text = [],
    input_ms_text = [],
    label_mr_text = [],
    label_ms_text = [],
    part2 = [],
    con1_div2_part1 = [],
    con2_div2_part1 = [],
    label_con1_div2_part1 = [],
    label_con2_div2_part1 = [],
    input_con1_div2_part1 = [],
    input_con2_div2_part1 = [],
    warning_con1_div2_part1 = [],
    warning_con2_div2_part1 = [],
    img_warning_con1_div2_part1 = [],
    img_warning_con2_div2_part1 = [],
    span_warning_con1_div2_part1 = [],
    span_warning_con2_div2_part1 = [],
    div_div3_part1 = [],
    label_div_div3_part1 = [],
    input_div_div3_part1 = [],
    warning_div_div3_part1 = [],
    img_warning_div_div3_part1 = [],
    span_warning_div_div3_part1 = [],
    legend_part2 = [],
    div1_part2 = [],
    div2_part2 = [],
    img_legend_part2 = [],
    span_legend_part2 = [],
    div1_div1_part2 = [],
    div2_div1_part2 = [],
    label_div1_div1_part2 = [],
    label_div2_div1_part2 = [],
    select_div1_div1_part2 = [],
    select_div2_div1_part2 = [],
    warning_div1_div1_part2 = [],
    warning_div2_div1_part2 = [],
    img_warning_div1_div1_part2 = [],
    img_warning_div2_div1_part2 = [],
    span_warning_div1_div1_part2 = [],
    span_warning_div2_div1_part2 = [],
    div_div2_part2 = [],
    div_div_div2_part2 = [],
    label_div_div_div2_part2 = [],
    input_div_div_div2_part2 = [],
    warning_div_div_div2_part2 = [],
    img_warning_div_div_div2_part2 = [],
    span_warning_div_div_div2_part2 = [],
    test,
    testo = [],
    butt_container,
    sure_butt,
    button;



    form = document.getElementById('passengers_form');

for(i=0; i < num_pass; i++){

    part1[i] = document.createElement('fieldset');
    part1[i].setAttribute('class', 'details_field');
    part1[i].setAttribute('id', 'details_field_'+i);
    form.appendChild(part1[i]);

    if(v == 0){
        part1[i].style = "background-color: rgb(147 173 205);";
    }else{
        part1[i].style = "background-color: rgb(205 171 147);";
    }

    legend1[i] = document.createElement('legend');
    legend1[i].setAttribute('class', 'details_legend');
    part1[i].appendChild(legend1[i]);

    img_legend1[i] = document.createElement('img');
    img_legend1[i].setAttribute('src', 'person.png');
    legend1[i].appendChild(img_legend1[i]);

    span_legend1[i] = document.createElement('span');
    span_legend1[i].textContent = "Passenger details ("+(i+1)+")";
    legend1[i].appendChild(span_legend1[i]);

    div1_part1[i] = document.createElement('div');
    div1_part1[i].style = "margin-top: 10px; margin-bottom: 10px;";
    part1[i].appendChild(div1_part1[i]);

    mrradio[i] = document.createElement('div');
    mrradio[i].setAttribute('id', 'con1_'+i);
    mrradio[i].setAttribute('class', 'con1');
    mrradio[i].style = "display: inline-block;";
    div1_part1[i].appendChild(mrradio[i]);

    test = document.createElement('div');
    test.setAttribute('id', "index");
    test.style = "display: none;";
    test.textContent = (i);
    div1_part1[i].appendChild(test);

    var index;
    mrradio[i].addEventListener('click', function(){

        index = this.nextSibling.textContent;
        console.log("index: "+index);
            document.getElementById('mr_in_'+index).style = "display: block;";
            document.getElementById('ms_in_'+index).style = "display: none;";
        
            document.getElementById('con1_'+index).style = "background-color: #006192; color: rgb(235, 235, 235);";
            document.getElementById('mr_out_'+index).style = "background-color: rgb(235, 235, 235);";
            document.getElementById('con2_'+index).style = "background-color: rgb(235, 235, 235); color: #006192;";
    });

    msradio[i] = document.createElement('div');
    msradio[i].setAttribute('id', 'con2_'+i);
    msradio[i].setAttribute('class', 'con2');
    msradio[i].style = "display: inline-block;";
    div1_part1[i].appendChild(msradio[i]);

    msradio[i].addEventListener('click', function(){

        var index = this.previousSibling.textContent;
        console.log("index2: "+index);

        document.getElementById('ms_in_'+index).style = "display: block;";
        document.getElementById('mr_in_'+index).style = "display: none;";
    
        document.getElementById('con2_'+index).style = "background-color: #006192; color: rgb(235, 235, 235);";
        document.getElementById('ms_out_'+index).style = "background-color: rgb(235, 235, 235);";
        document.getElementById('con1_'+index).style = "background-color: rgb(235, 235, 235); color: #006192;";
    });

    mr_circle[i] = document.createElement('div');
    mr_circle[i].setAttribute('class', 'folto');
    mrradio[i].appendChild(mr_circle[i]);

    ms_circle[i] = document.createElement('div');
    ms_circle[i].setAttribute('class', 'folto');
    msradio[i].appendChild(ms_circle[i]);

    mr_text[i] = document.createElement('div');
    mr_text[i].setAttribute('class', 'folto2');
    mrradio[i].appendChild(mr_text[i]);

    ms_text[i] = document.createElement('div');
    ms_text[i].setAttribute('class', 'folto2');
    msradio[i].appendChild(ms_text[i]);

    mrradio_p[i] = document.createElement('p');
    mrradio_p[i].style = "clear: left;";
    mrradio[i].appendChild(mrradio_p[i]);

    msradio_p[i] = document.createElement('p');
    msradio_p[i].style = "clear: left;";
    msradio[i].appendChild(msradio_p[i]);

    out_mr_circle[i] = document.createElement('div');
    out_mr_circle[i].setAttribute('class', 'out');
    out_mr_circle[i].setAttribute('id', 'mr_out_'+i);
    mr_circle[i].appendChild(out_mr_circle[i]);

    out_ms_circle[i] = document.createElement('div');
    out_ms_circle[i].setAttribute('class', 'out');
    out_ms_circle[i].setAttribute('id', 'ms_out_'+i);
    ms_circle[i].appendChild(out_ms_circle[i]);

    in_mr_circle[i] = document.createElement('div');
    in_mr_circle[i].setAttribute('class', 'in');
    in_mr_circle[i].setAttribute('id', 'mr_in_'+i);
    in_mr_circle[i].style = "display: none;";
    out_mr_circle[i].appendChild(in_mr_circle[i]);

    in_ms_circle[i] = document.createElement('div');
    in_ms_circle[i].setAttribute('class', 'in');
    in_ms_circle[i].setAttribute('id', 'ms_in_'+i);
    in_ms_circle[i].style = "display: none;";
    out_ms_circle[i].appendChild(in_ms_circle[i]);

    input_mr_text[i] = document.createElement('input');
    input_mr_text[i].setAttribute('type', 'radio');
    input_mr_text[i].setAttribute('name', 'gender'+i);
    input_mr_text[i].setAttribute('id', 'mr_'+i);
    input_mr_text[i].setAttribute('value', 'mr.');
    mr_text[i].appendChild(input_mr_text[i]);

    input_ms_text[i] = document.createElement('input');
    input_ms_text[i].setAttribute('type', 'radio');
    input_ms_text[i].setAttribute('name', 'gender'+i);
    input_ms_text[i].setAttribute('id', 'ms_'+i);
    input_ms_text[i].setAttribute('value', 'ms.');
    ms_text[i].appendChild(input_ms_text[i]);

    mrradio[i].addEventListener('click', function(){

        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];
        input_mr_text[index].click();
    });

    input_mr_text[i].addEventListener('click', function(){

        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];
        console.log("gender: "+input_mr_text[index].value);
    });
/**************************************************************************************************** */
    msradio[i].addEventListener('click', function(){

        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];
        input_ms_text[index].click();
    });

    input_ms_text[i].addEventListener('click', function(){

        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];
        console.log("gender: "+input_ms_text[index].value);
    });

    label_mr_text[i] = document.createElement('label');
    label_mr_text[i].setAttribute('for', 'mr');
    label_mr_text[i].textContent = "MR.";
    mr_text[i].appendChild(label_mr_text[i]);

    label_ms_text[i] = document.createElement('label');
    label_ms_text[i].setAttribute('for', 'ms');
    label_ms_text[i].textContent = "MS.";
    ms_text[i].appendChild(label_ms_text[i]);

    div2_part1[i] = document.createElement('div');
    div2_part1[i].style = "margin-top: 5px;";
    part1[i].appendChild(div2_part1[i]);

    con1_div2_part1[i] = document.createElement('div');
    con1_div2_part1[i].setAttribute('class', 'first_con');
    con1_div2_part1[i].setAttribute('id', 'first_con_'+i);
    div2_part1[i].appendChild(con1_div2_part1[i]);

    con2_div2_part1[i] = document.createElement('div');
    con2_div2_part1[i].setAttribute('class', 'second_con');
    con2_div2_part1[i].setAttribute('id', 'second_con_'+i);
    div2_part1[i].appendChild(con2_div2_part1[i]);

    label_con1_div2_part1[i] = document.createElement('span');
    label_con1_div2_part1[i].setAttribute('id', 'first_'+i);
    label_con1_div2_part1[i].textContent = "first name";
    label_con1_div2_part1[i].style = "position: absolute; top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
    con1_div2_part1[i].appendChild(label_con1_div2_part1[i]);

    label_con2_div2_part1[i] = document.createElement('span');
    label_con2_div2_part1[i].setAttribute('id', 'last_'+i);
    label_con2_div2_part1[i].textContent = "last name";
    label_con2_div2_part1[i].style = "position: absolute; top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
    con2_div2_part1[i].appendChild(label_con2_div2_part1[i]);

    input_con1_div2_part1[i] = document.createElement('input');
    input_con1_div2_part1[i].setAttribute('type', 'text');
    input_con1_div2_part1[i].setAttribute('class', 'first_name');
    input_con1_div2_part1[i].setAttribute('id', 'first_name_'+i);
    input_con1_div2_part1[i].setAttribute('name', 'first_name'+i);
    con1_div2_part1[i].appendChild(input_con1_div2_part1[i]);

    input_con2_div2_part1[i] = document.createElement('input');
    input_con2_div2_part1[i].setAttribute('type', 'text');
    input_con2_div2_part1[i].setAttribute('class', 'last_name');
    input_con2_div2_part1[i].setAttribute('id', 'last_name_'+i);
    input_con2_div2_part1[i].setAttribute('name', 'last_name'+i);
    con2_div2_part1[i].appendChild(input_con2_div2_part1[i]);

    warning_con1_div2_part1[i] = document.createElement('span');
    warning_con1_div2_part1[i].setAttribute('id', 'first_w_'+i);
    warning_con1_div2_part1[i].setAttribute('class', 'first_w');
    warning_con1_div2_part1[i].style = "display: none;";
    warning_con1_div2_part1[i].innerHTML += "<img src='warning.png'>&nbsp Please enter the first name";
    con1_div2_part1[i].appendChild(warning_con1_div2_part1[i]);

    warning_con2_div2_part1[i] = document.createElement('span');
    warning_con2_div2_part1[i].setAttribute('id', 'last_w_'+i);
    warning_con2_div2_part1[i].setAttribute('class', 'first_w_');
    warning_con2_div2_part1[i].style = "display: none;";
    warning_con2_div2_part1[i].innerHTML += "<img src='warning.png'>&nbsp Please enter the last name";
    con2_div2_part1[i].appendChild(warning_con2_div2_part1[i]);
/*
    img_warning_con1_div2_part1[i] = document.createElement('img');
    img_warning_con1_div2_part1[i].setAttribute('src', 'warning.png');
    warning_con1_div2_part1[i].appendChild(img_warning_con1_div2_part1[i]);
/*
    img_warning_con2_div2_part1[i] = document.createElement('img');
    img_warning_con2_div2_part1[i].setAttribute('src', 'warning.png');
    warning_con2_div2_part1[i].appendChild(img_warning_con2_div2_part1[i]);
/*
    span_warning_con1_div2_part1[i] = document.createElement('span');
    span_warning_con1_div2_part1[i].style= "min-width: max-content;";
    span_warning_con1_div2_part1[i].textContent = "\t Please enter a first name";
    warning_con1_div2_part1[i].appendChild(span_warning_con1_div2_part1[i]);
/*
    span_warning_con2_div2_part1[i] = document.createElement('span');
    span_warning_con2_div2_part1[i].style= "min-width: max-content;";
    span_warning_con2_div2_part1[i].textContent = " Please enter a last name";
    warning_con2_div2_part1[i].appendChild(span_warning_con2_div2_part1[i]);
*/
    
/********************************************************************** */
/* /////////////////////////////////////////////////////////////////// */
    con1_div2_part1[i].addEventListener('click', function(){

        console.log("this.getAttribute('id').split('_'): "+( this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1] ));
        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

        document.getElementById('first_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
        document.getElementById('first_name_'+index).style = "border: 0;";
    
        document.getElementById('first_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
    
        document.getElementById('first_name_'+index).focus();
    });

    input_con1_div2_part1[i].addEventListener('focus', function(){

        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

        document.getElementById('first_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
        document.getElementById('first_name_'+index).style = "border: 0;";
    
        document.getElementById('first_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
    });

    input_con1_div2_part1[i].addEventListener('blur', function(){

        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

        if(document.getElementById('first_name_'+index).value == ""){
    
            document.getElementById('first_'+index).style = " top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
     
            document.getElementById('first_con_'+index).style = " border: 1px solid red; padding: 4px 14px;";
     
            document.getElementById('first_w_'+index).style = "display: flex; background-color: #cecee2; padding: 2px; padding-right: 5px; border-radius: 5px;";
     
         }else{
     
             document.getElementById('first_con_'+index).style = "border: 0";
     
         }
     
         if(document.getElementById('first_name_'+index).value !== ""){
     
             document.getElementById('first_con_'+index).style = " border: 0; padding: 5px 15px;";
     
             document.getElementById('first_w_'+index).style = "display: none;";
         
         }
    });
/* /////////////////////////////////////////////////////////////////// */
/********************************************************************** */

/********************************************************************** */
/* 2222222222222222222222222222222222222222222222222222222222222222222 */
/* /////////////////////////////////////////////////////////////////// */

con2_div2_part1[i].addEventListener('click', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];
    document.getElementById('last_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('last_name_'+index).style = "border: 0;";
    document.getElementById('last_name_'+index).focus();

    document.getElementById('second_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
    document.getElementById('last_name_'+index).focus();
});

input_con2_div2_part1[i].addEventListener('focus', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];
    document.getElementById('last_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('last_name_'+index).style = "border: 0;";
    document.getElementById('last_name_'+index).focus();

    document.getElementById('second_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
});

input_con2_div2_part1[i].addEventListener('blur', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];
    if(document.getElementById('last_name_'+index).value == ""){

        document.getElementById('last_'+index).style = " top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
 
        document.getElementById('second_con_'+index).style = " border: 0";
 
        document.getElementById('second_con_'+index).style = " border: 1px solid red; padding: 4px 14px;";
 
        document.getElementById('last_w_'+index).style = "display: flex; background-color: #cecee2; padding: 2px; padding-right: 5px; border-radius: 5px;";
 
     }else{
 
        document.getElementById('second_con_'+index).style = "border: 0";
 
     }
 
     if(document.getElementById('last_name_'+index).value !== ""){
 
        document.getElementById('second_con_'+index).style = " border: 0; padding: 5px 15px;";
 
        document.getElementById('last_w_'+index).style = "display: none;";
     }
});

/* /////////////////////////////////////////////////////////////////// */
/* 2222222222222222222222222222222222222222222222222222222222222222222 */
/********************************************************************** */

    div3_part1[i] = document.createElement('div');
    div3_part1[i].style = "margin-top: 20px; margin-bottom: 20px;";
    part1[i].appendChild(div3_part1[i]);

    div_div3_part1[i] = document.createElement('div');
    div_div3_part1[i].setAttribute('class', 'third_con');
    div_div3_part1[i].setAttribute('id', 'third_con_'+i);
    div3_part1[i].appendChild(div_div3_part1[i]);

    label_div_div3_part1[i] = document.createElement('span');
    label_div_div3_part1[i].setAttribute('id', 'birth_'+i);
    label_div_div3_part1[i].textContent = "date of birth: DD/MM/YYYY";
    label_div_div3_part1[i].style = "position: absolute; font-size: 16px; top: 17px; left: 17px; color: rgb(136, 136, 136);";
    div_div3_part1[i].appendChild(label_div_div3_part1[i]);

    input_div_div3_part1[i] = document.createElement('input');
    input_div_div3_part1[i].setAttribute('type', 'text');
    input_div_div3_part1[i].setAttribute('class', 'date_of_birth');
    input_div_div3_part1[i].setAttribute('id', 'date_of_birth_'+i);
    input_div_div3_part1[i].setAttribute('name', 'date_of_birth'+i);
    div_div3_part1[i].appendChild(input_div_div3_part1[i]);

    warning_div_div3_part1[i] = document.createElement('span');
    warning_div_div3_part1[i].setAttribute('id', 'birth_w_'+i);
    warning_div_div3_part1[i].setAttribute('class', 'first_w');
    warning_div_div3_part1[i].style = "display: none;";
    warning_div_div3_part1[i].innerHTML += "<img src='warning.png'>&nbsp Please enter the birth date";
    div_div3_part1[i].appendChild(warning_div_div3_part1[i]);
/*
    img_warning_div_div3_part1[i] = document.createElement('img');
    img_warning_div_div3_part1[i].setAttribute('src', 'warning.png');
    warning_div_div3_part1[i].appendChild(img_warning_div_div3_part1[i]);

    span_warning_div_div3_part1[i] = document.createElement('span');
    span_warning_div_div3_part1[i].style= "min-width: max-content;";
    span_warning_div_div3_part1[i].textContent = " Please enter a birth date";
    warning_div_div3_part1[i].appendChild(span_warning_div_div3_part1[i]);
*/


/********************************************************************** */
/* 33333333333333333333333333333333333333333333333333333333333333333333 */
/* /////////////////////////////////////////////////////////////////// */


div_div3_part1[i].addEventListener('click', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    document.getElementById('birth_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('date_of_birth_'+index).style = "border: 0;";
    document.getElementById('date_of_birth_'+index).focus();
    document.getElementById('birth_'+index).textContent = "date of birth";

    document.getElementById('third_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
    document.getElementById('date_of_birth_'+index).focus();
});

input_div_div3_part1[i].addEventListener('focus', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    document.getElementById('birth_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('date_of_birth_'+index).style = "border: 0;";
    document.getElementById('date_of_birth_'+index).focus();
    document.getElementById('birth_'+index).textContent = "date of birth";

    document.getElementById('third_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
});

input_div_div3_part1[i].addEventListener('blur', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    if(document.getElementById('date_of_birth_'+index).value == ""){
    
        document.getElementById('birth_'+index).style = " top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
 
        document.getElementById('birth_'+index).textContent = "date of birth: DD/MM/YYYY";
  
        document.getElementById('third_con_'+index).style = "border: 0";
 
        document.getElementById('third_con_'+index).style = " border: 1px solid red; padding: 4px 14px;";
 
        document.getElementById('birth_w_'+index).style = "display: flex; background-color: #cecee2; padding: 2px; padding-right: 5px; border-radius: 5px;";
 
     }else{
 
         document.getElementById('third_con_'+index).style = "border: 0";
 
     }
 
     if(document.getElementById('date_of_birth_'+index).value !== ""){
 
         document.getElementById('third_con_'+index).style = " border: 0; padding: 5px 15px;";
 
         document.getElementById('birth_w_'+index).style = "display: none;";
     
     }
});

/* /////////////////////////////////////////////////////////////////// */
/* 3333333333333333333333333333333333333333333333333333333333333333333 */
/********************************************************************** */

    part2[i] = document.createElement('fieldset');
    part2[i].setAttribute('class', 'details_field');
    part2[i].style = "margin-bottom: 0;";
    form.appendChild(part2[i]);

    if(v == 0){
        part2[i].style = "background-color: rgb(147 173 205);";
    }else{
        part2[i].style = "background-color: rgb(205 171 147);";
    }

    legend_part2[i] = document.createElement('legend');
    legend_part2[i].setAttribute('class', 'details_legend');
    part2[i].appendChild(legend_part2[i]);

    div1_part2[i] = document.createElement('div');
    div1_part2[i].style = "margin-top: 10px;";
    part2[i].appendChild(div1_part2[i]);

    img_legend_part2[i] = document.createElement('img');
    img_legend_part2[i].setAttribute('src', 'contact.png');
    legend_part2[i].appendChild(img_legend_part2[i]);

    span_legend_part2[i] = document.createElement('span');
    span_legend_part2[i].textContent = " Contact Details";
    legend_part2[i].appendChild(span_legend_part2[i]);

    div1_div1_part2[i] = document.createElement('div');
    div1_div1_part2[i].setAttribute('class', 'coun_code');
    div1_div1_part2[i].setAttribute('id', 'coun_code_'+i);
    div1_part2[i].appendChild(div1_div1_part2[i]);

    div2_div1_part2[i] = document.createElement('div');
    div2_div1_part2[i].setAttribute('class', 'fifth_con');
    div2_div1_part2[i].setAttribute('id', 'fifth_con_'+i);
    div1_part2[i].appendChild(div2_div1_part2[i]);

    label_div1_div1_part2[i] = document.createElement('span');
    label_div1_div1_part2[i].setAttribute('id', 'code_'+i);
    label_div1_div1_part2[i].textContent = "Country Code";
    label_div1_div1_part2[i].style = "position: absolute; font-size: 16px; top: 17px; left: 17px; color: rgb(136, 136, 136);";
    div1_div1_part2[i].appendChild(label_div1_div1_part2[i]);

    label_div2_div1_part2[i] = document.createElement('span');
    label_div2_div1_part2[i].setAttribute('id', 'fifth_'+i);
    label_div2_div1_part2[i].textContent = "Phone number";
    label_div2_div1_part2[i].style = "position: absolute; font-size: 16px; top: 17px; left: 17px; color: rgb(136, 136, 136);";
    div2_div1_part2[i].appendChild(label_div2_div1_part2[i]);

    select_div1_div1_part2[i] = document.createElement('select');
    select_div1_div1_part2[i].setAttribute('class', 'c_code');
    select_div1_div1_part2[i].setAttribute('id', 'c_code_'+i);
    select_div1_div1_part2[i].setAttribute('name', 'c_code'+i);
    select_div1_div1_part2[i].style = "min-height: 15px;";
    div1_div1_part2[i].appendChild(select_div1_div1_part2[i]);
/*********************************************************/
testo[i] = document.createElement('option');
testo[i].setAttribute('disabled', 'disabled');
testo[i].setAttribute('selected', 'selected');
testo[i].textContent= ' ';
select_div1_div1_part2[i].appendChild(testo[i]);

    testo[i] = document.createElement('option');
    testo[i].setAttribute('value', '+962-Jordan');
    testo[i].textContent= 'Jordan (+962)';
    select_div1_div1_part2[i].appendChild(testo[i]);

    testo[i] = document.createElement('option');
    testo[i].setAttribute('value', '+90-Turky');
    testo[i].textContent= 'Turky (+90)';
    select_div1_div1_part2[i].appendChild(testo[i]);
    
    testo[i] = document.createElement('option');
    testo[i].setAttribute('value', '+44-Britain');
    testo[i].textContent= 'Britain (+44)';
    select_div1_div1_part2[i].appendChild(testo[i]);

    testo[i] = document.createElement('option');
    testo[i].setAttribute('value', '+1-United States');
    testo[i].textContent= 'United States (+1)';
    select_div1_div1_part2[i].appendChild(testo[i]);

    testo[i] = document.createElement('option');
    testo[i].setAttribute('value', '+33-France');
    testo[i].textContent= 'France (+33)';
    select_div1_div1_part2[i].appendChild(testo[i]);
/**********************************************************/
    select_div2_div1_part2[i] = document.createElement('input');
    select_div2_div1_part2[i].setAttribute('type', 'text');
    select_div2_div1_part2[i].setAttribute('class', 'phone');
    select_div2_div1_part2[i].setAttribute('id', 'phone_'+i);
    select_div2_div1_part2[i].setAttribute('name', 'phone_number'+i);
    div2_div1_part2[i].appendChild(select_div2_div1_part2[i]);

    warning_div1_div1_part2[i] = document.createElement('span');
    warning_div1_div1_part2[i].setAttribute('id', 'select_w_'+i);
    warning_div1_div1_part2[i].setAttribute('class', 'first_w');
    warning_div1_div1_part2[i].style = "display: none;";
    warning_div1_div1_part2[i].innerHTML += "<img src='warning.png'>&nbsp Please enter the country code";
    div1_div1_part2[i].appendChild(warning_div1_div1_part2[i]);

    warning_div2_div1_part2[i] = document.createElement('span');
    warning_div2_div1_part2[i].setAttribute('id', 'phone_w_'+i);
    warning_div2_div1_part2[i].setAttribute('class', 'first_w');
    warning_div2_div1_part2[i].style = "display: none;";
    warning_div2_div1_part2[i].innerHTML += "<img src='warning.png'>&nbsp Please enter the phone number";
    div2_div1_part2[i].appendChild(warning_div2_div1_part2[i]);
/*
    img_warning_div1_div1_part2[i] = document.createElement('img');
    img_warning_div1_div1_part2[i].setAttribute('src', 'warning.png');
    warning_div1_div1_part2[i].appendChild(img_warning_div1_div1_part2[i]);

    img_warning_div2_div1_part2[i] = document.createElement('img');
    img_warning_div2_div1_part2[i].setAttribute('src', 'warning.png');
    warning_div2_div1_part2[i].appendChild(img_warning_div2_div1_part2[i]);

    span_warning_div1_div1_part2[i] = document.createElement('span');
    span_warning_div1_div1_part2[i].style= "min-width: max-content;";
    span_warning_div1_div1_part2[i].textContent = " Please enter a country code";
    warning_div1_div1_part2[i].appendChild(span_warning_div1_div1_part2[i]);

    span_warning_div2_div1_part2[i] = document.createElement('span');
    span_warning_div2_div1_part2[i].style= "min-width: max-content;";
    span_warning_div2_div1_part2[i].textContent = " Please enter a phone number";
    warning_div2_div1_part2[i].appendChild(span_warning_div2_div1_part2[i]);
*/

/********************************************************************** */
/* 44444444444444444444444444444444444444444444444444444444444444444444 */
/* /////////////////////////////////////////////////////////////////// */

div1_div1_part2[i].addEventListener('click', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    document.getElementById('c_code_'+index).focus();
    
    document.getElementById('coun_code_'+index).style = "border: 1px solid #006192;";
    document.getElementById('c_code_'+index).style = "padding: 18px 19px 10px 15px;";

    document.getElementById('code_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
});

    select_div1_div1_part2[i].addEventListener('focus', function(){
        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

        document.getElementById('coun_code_'+index).style = "border: 1px solid #006192;";
        document.getElementById('c_code_'+index).style = "padding: 18px 19px 10px 15px;";
    
        document.getElementById('code_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    });

    select_div1_div1_part2[i].addEventListener('blur', function(){
        var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

        if(document.getElementById('c_code_'+index).value == ""){
    
            document.getElementById('code_'+index).style = " top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
     
            document.getElementById('coun_code_'+index).style = "border: 0";
     
            document.getElementById('coun_code_'+index).style = " border: 1px solid red; padding: 0;";
     
            document.getElementById('select_w_'+index).style = "display: flex; background-color: #cecee2; padding: 2px; padding-right: 5px; border-radius: 5px;";
     
         }else{
     
             document.getElementById('coun_code_'+index).style = "border: 0";
     
         }
     
         if(document.getElementById('c_code_'+index).value !== ""){
     
             document.getElementById('coun_code_'+index).style = " border: 0; padding: 0;";
     
             document.getElementById('select_w_'+index).style = "display: none;";
         
         }
    });

/* /////////////////////////////////////////////////////////////////// */
/* 44444444444444444444444444444444444444444444444444444444444444444444 */
/********************************************************************** */

/********************************************************************** */
/* 55555555555555555555555555555555555555555555555555555555555555555555 */
/* /////////////////////////////////////////////////////////////////// */

div2_div1_part2[i].addEventListener('click', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    document.getElementById('fifth_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('phone_'+index).style = "border: 0;";
    document.getElementById('phone_'+index).focus();
    document.getElementById('fifth_'+index).textContent = "phone number";

    document.getElementById('fifth_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
    document.getElementById('phone_'+index).focus();
});

select_div2_div1_part2[i].addEventListener('focus', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    document.getElementById('fifth_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('phone_'+index).style = "border: 0;";
    document.getElementById('phone_'+index).focus();
    document.getElementById('fifth_'+index).textContent = "phone number";

    document.getElementById('fifth_con_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
});

select_div2_div1_part2[i].addEventListener('blur', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    if(document.getElementById('phone_'+index).value == ""){
    
        document.getElementById('fifth_'+index).style = " top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
 
        document.getElementById('fifth_'+index).textContent = "phone number";
  
        document.getElementById('fifth_con_'+index).style = "border: 0";
 
        document.getElementById('fifth_con_'+index).style = " border: 1px solid red; padding: 4px 14px;";
 
        document.getElementById('phone_w_'+index).style = "display: flex; background-color: #cecee2; padding: 2px; padding-right: 5px; border-radius: 5px;";
 
     }else{
 
         document.getElementById('fifth_con_'+index).style = "border: 0";
 
     }
 
     if(document.getElementById('phone_'+index).value !== ""){
 
         document.getElementById('fifth_con_'+index).style = " border: 0; padding: 5px 15px;";
 
         document.getElementById('phone_w_'+index).style = "display: none;";
     
     }
});

/* /////////////////////////////////////////////////////////////////// */
/* 55555555555555555555555555555555555555555555555555555555555555555555 */
/********************************************************************** */

    div2_part2[i] = document.createElement('div');
    part2[i].appendChild(div2_part2[i]);

    div_div2_part2[i] = document.createElement('div');
    div2_part2[i].appendChild(div_div2_part2[i]);

    div_div_div2_part2[i] = document.createElement('div');
    div_div_div2_part2[i].setAttribute('class', 'e_mail');
    div_div_div2_part2[i].setAttribute('id', 'e_mail_'+i);
    div_div2_part2[i].appendChild(div_div_div2_part2[i]);

    label_div_div_div2_part2[i] = document.createElement('span');
    label_div_div_div2_part2[i].setAttribute('id', 'mail_'+i);
    label_div_div_div2_part2[i].textContent = "e-mail";
    label_div_div_div2_part2[i].style = "position: absolute; font-size: 16px; top: 17px; left: 17px; color: rgb(136, 136, 136);";
    div_div_div2_part2[i].appendChild(label_div_div_div2_part2[i]);

    input_div_div_div2_part2[i] = document.createElement('input');
    input_div_div_div2_part2[i].setAttribute('type', 'email');
    input_div_div_div2_part2[i].setAttribute('class', 'in_mail');
    input_div_div_div2_part2[i].setAttribute('id', 'in_mail_'+i);
    input_div_div_div2_part2[i].setAttribute('name', 'e_mail'+i);
    div_div_div2_part2[i].appendChild(input_div_div_div2_part2[i]);

    warning_div_div_div2_part2[i] = document.createElement('span');
    warning_div_div_div2_part2[i].setAttribute('id', 'mail_w_'+i);
    warning_div_div_div2_part2[i].setAttribute('class', 'first_w');
    warning_div_div_div2_part2[i].style = "display: none;";
    warning_div_div_div2_part2[i].innerHTML += "<img src='warning.png'>&nbsp Please enter the e-mail";
    div_div_div2_part2[i].appendChild(warning_div_div_div2_part2[i]);
/*
    img_warning_div_div_div2_part2[i] = document.createElement('img');
    img_warning_div_div_div2_part2[i].setAttribute('src', 'warning.png');
    warning_div_div_div2_part2[i].appendChild(img_warning_div_div_div2_part2[i]);

    span_warning_div_div_div2_part2[i] = document.createElement('span');
    span_warning_div_div_div2_part2[i].style= "min-width: max-content;";
    span_warning_div_div_div2_part2[i].textContent = " Please enter the e-mail";
    warning_div_div_div2_part2[i].appendChild(span_warning_div_div_div2_part2[i]);
*/
    if(v == 0){
        v=1;
    }else{
        v=0;
    }

/********************************************************************** */
/* 6666666666666666666666666666666666666666666666666666666666666666666 */
/* /////////////////////////////////////////////////////////////////// */

div_div_div2_part2[i].addEventListener('click', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    document.getElementById('mail_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('in_mail_'+index).style = "border: 0;";
    document.getElementById('in_mail_'+index).focus();
    document.getElementById('mail_'+index).textContent = "e-mail";

    document.getElementById('e_mail_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
    document.getElementById('in_mail_'+index).focus();
});

input_div_div_div2_part2[i].addEventListener('focus', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    document.getElementById('mail_'+index).style = "left: 17px; top: 5px; font-size: 11px; color: black;";
    document.getElementById('in_mail_'+index).style = "border: 0;";
    document.getElementById('in_mail_'+index).focus();
    document.getElementById('mail_'+index).textContent = "e-mail";

    document.getElementById('e_mail_'+index).style = "border: 1px solid #006192; padding: 4px 14px;";
});

input_div_div_div2_part2[i].addEventListener('blur', function(){
    var index = this.getAttribute('id').split('_')[this.getAttribute('id').split('_').length-1];

    if(document.getElementById('in_mail_'+index).value == ""){
    
        document.getElementById('mail_'+index).style = " top: 17px; left: 17px; font-size: 16px; color: rgb(136, 136, 136);";
 
        document.getElementById('mail_'+index).textContent = "e-mail";
  
        document.getElementById('e_mail_'+index).style = "border: 0";
 
        document.getElementById('e_mail_'+index).style = " border: 1px solid red; padding: 4px 14px;";
 
        document.getElementById('mail_w_'+index).style = "display: flex; background-color: #cecee2; padding: 2px; padding-right: 5px; border-radius: 5px;";
 
     }else{
 
         document.getElementById('e_mail_'+index).style = "border: 0";
 
     }
 
     if(document.getElementById('in_mail_'+index).value !== ""){
 
         document.getElementById('e_mail_'+index).style = " border: 0; padding: 5px 15px;";
 
         document.getElementById('mail_w_'+index).style = "display: none;";
     
     }
});

/* /////////////////////////////////////////////////////////////////// */
/* 6666666666666666666666666666666666666666666666666666666666666666666 */
/********************************************************************** */
}



if(v == 1){
    part2[i-1].style = "background-color: rgb(147 173 205); margin-bottom: 0px; border-bottom-width: 0px;";
}else{
    part2[i-1].style = "background-color: rgb(205 171 147); margin-bottom: 0px; border-bottom-width: 0px;";
}

butt_container = document.createElement('div');
butt_container.style = "text-align: center; width: 1024px; margin: 0 auto; background-color: #a8a8a8; border-radius: 0 0 10px 10px; border-width: 2px; border-style: groove; border-color: threedface; border-image: initial;";
form.appendChild(butt_container);

button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('id', 'submit');
button.style = "display: none;";
button.setAttribute('value', 'Continue');
butt_container.appendChild(button);

sure_butt = document.createElement('div');
sure_butt.setAttribute('id', 'sure');
sure_butt.setAttribute('class', 'sure');
sure_butt.style = "";
sure_butt.textContent = "Sure!";
butt_container.appendChild(sure_butt);

sure_butt.addEventListener('click', function(){

    document.getElementById('send_numOfPerson').value = document.getElementById('numOfPerson').textContent;
    document.getElementById('send_flight_id').value = document.getElementById('flight_id').textContent;
    document.getElementById('send_class').value = document.getElementById('class').textContent;
    document.getElementById('send_num_adult').value = document.getElementById('num_adult').textContent;
    document.getElementById('send_num_child').value = document.getElementById('num_child').textContent;
    document.getElementById('send_total_price').value = document.getElementById('total_price').textContent;
    document.getElementById('send_price').value = document.getElementById('price').textContent;

    document.getElementById('submit').click();
});