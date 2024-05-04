
document.getElementById('do0').onclick = function(){
    location.href = "main.html";
}

var x = 0, i = 0;

document.getElementById('flight_details').onclick = function (){

    if(x == 0){
        document.getElementById('D').style = "display: block;";
        document.getElementById('DA').style = "transform: rotate(90deg);";
        x = 1;
     
    }else{
        if(x == 1){
            document.getElementById('D').style = "display: none;";
            document.getElementById('DA').style = "transform: rotate(0deg);";
            x = 0;
      }
    }
}

document.getElementById('change_f').onclick = function(){
    document.getElementById('copy_card').style = "display: none;";
    document.getElementById('parent').style = "display: none;";
    document.getElementById('main').style = "display: block;";

    document.getElementById('D_c').style = "display: none;";
    document.getElementById('DA_c').style = "transform: rotate(0deg);";
    x = 0;

    document.getElementById('change_f').style = "display: none;";
}

document.getElementById('flight_details_c').onclick = function(){

    if(x == 0){
        document.getElementById('D_c').style = "display: block;";
        document.getElementById('DA_c').style = "transform: rotate(90deg);";
        x = 1;
     
    }else{
        if(x == 1){
            document.getElementById('D_c').style = "display: none;";
            document.getElementById('DA_c').style = "transform: rotate(0deg);";
            x = 0;
      }
    }
}


/*
document.getElementById('economy').onclick = function(){
    document.getElementById('spanadd').innerHTML = "<span style='color: cornflowerblue;'>ECONOMY</span> Class";

    document.getElementById('copy_card').style = "display: block;";
    document.getElementById('parent').style = "display: block;";
    document.getElementById('change_f').style = "display: block;";

    document.getElementById('main').style = "display: none;";

}

document.getElementById('business').onclick = function(){
    document.getElementById('spanadd').innerHTML = "<span style='color: goldenrod;'>BUSINESS</span> Class";
    
    document.getElementById('copy_card').style = "display: block;";
    document.getElementById('parent').style = "display: block;";
    document.getElementById('change_f').style = "display: block;";

    document.getElementById('main').style = "display: none;";

}*/

/********************************************************************************* */
/********************************************************************************* */
/********************************************************************************* */


/***************************************************************************************************/
/* NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW */
/* NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW */
/***************************************************************************************************/
/* document.getElementById('counto').textContent */
var i,
    count = document.getElementById('count').textContent;

    var flight_iden = [],
        arriv_time = [],
        arrival_country = [],
        arrival_airport = [],
        arriv_date = [],
        arriv_sambol = [],
        arriv_name = [],
        duration = [],
        destination_time = [],
        destination_country = [],
        destination_airport = [],
        destination_date = [],
        destination_sambol = [],
        destination_name = [],
        Economy_price = [],
        str1 = [],
        str2 = [],
        business_price = [],
        str3 = [],
        str4 = [],

        ah_time = [],
        am_time = [],

        airline_logo = [],
        airline_name = [],
        num_adult,
        num_child,
        the_plan = [];


for(i=0; i<count; i++){

     flight_iden[i] = document.getElementById('flight_id'+'_'+i).textContent;
     arriv_time[i] = document.getElementById('arriv_time'+'_'+i).textContent;
     arrival_country[i] = document.getElementById('arrival_country'+'_'+i).textContent;
     arrival_airport[i] = document.getElementById('arrival_airport'+'_'+i).textContent;
     arriv_date[i] = document.getElementById('arriv_date'+'_'+i).textContent;
     arriv_sambol[i] = document.getElementById('arriv_sambol'+'_'+i).textContent;
     arriv_name[i] = document.getElementById('arriv_name'+'_'+i).textContent;
     duration[i] = document.getElementById('duration'+'_'+i).textContent;
     destination_time[i] = document.getElementById('destination_time'+'_'+i).textContent;
     destination_country[i] = document.getElementById('destination_country'+'_'+i).textContent;
     destination_airport[i] = document.getElementById('destination_airport'+'_'+i).textContent;
     destination_date[i] = document.getElementById('destination_date'+'_'+i).textContent;
     destination_sambol[i] = document.getElementById('destination_sambol'+'_'+i).textContent;
     destination_name[i] = document.getElementById('destination_name'+'_'+i).textContent;
     Economy_price[i] = document.getElementById('Economy_price'+'_'+i).textContent;
     str1[i] = document.getElementById('str1'+'_'+i).textContent;
     str2[i] = document.getElementById('str2'+'_'+i).textContent;
     business_price[i] = document.getElementById('business_price'+'_'+i).textContent;
     str3[i] = document.getElementById('str3'+'_'+i).textContent;
     str4[i] = document.getElementById('str4'+'_'+i).textContent;

     ah_time[i] = document.getElementById('ah_time'+'_'+i).textContent;
     am_time[i] = document.getElementById('am_time'+'_'+i).textContent;

     airline_logo[i] = document.getElementById('airline_logo'+'_'+i).textContent;
     airline_name[i] = document.getElementById('airline_name'+'_'+i).textContent;
     the_plan[i] = document.getElementById('the_plan'+'_'+i).textContent;
}
num_adult = document.getElementById('num_adult').textContent;
num_child = document.getElementById('num_child').textContent;

if(num_child < 1){
    document.getElementById('child1').style = "display: none;";
    document.getElementById('child2').style = "display: none;";
}

var card_standard = [],
    testy = [],
    test = [],
    teste = [],
    testb = [],
    mydiv1 = [],
    mydiv2 = [],
    mydiv3 = [],
    info1 = [],
    info2 = [],
    info3 = [],
    inerdiv1 = [],
    inerdiv2 = [],
    indiv1 = [],
    indiv2 = [],
    indiv3 = [],
    inerimg = [],
    text1 = [],
    text2 = [],
    indiv4 = [],
    indiv5 = [],
    indiv6 = [],
    inerdiv3 = [],
    inerdiv4 = [],
    indiv7 = [],
    indiv8 = [],
    indiv9 = [],
    indiv10 = [],
    inerdiv11 = [],
    span1 = [],
    span2 = [],
    inerspan1 = [],
    inerspan2 = [],
    inspan1 = [],
    inspan2 = [],
    inerdiv12 = [],
    indiv11 = [],
    indiv12 = [],
    span3 = [],
    span4 = [],
    inerspan3 = [],
    inerspan4 = [],
    inspan3 = [],
    inspan4 = [];

var i,
    flight_id,
    index;

var date1 = [],
    date2 = [],
    time1 = [],
    time2 = []
    edt_arriv_time = [],
    edt_desti_time = [],
    edt_duration = [];

    function complete(){
        document.getElementById("dov1").textContent= edt_arriv_time[index];
        document.getElementById("dov2").textContent= arriv_sambol[index];
        document.getElementById("dov3").textContent= arriv_name[index];
        document.getElementById("texto1").textContent= edt_duration[index];
        document.getElementById("duv1").textContent= edt_desti_time[index];
        document.getElementById("duv2").textContent= destination_sambol[index];
        document.getElementById("duv3").textContent= destination_name[index];
        document.getElementById("duv4").textContent= duration[index];
    }

for(i=0; i<count; i++){

    edt_arriv_time[i] = (arriv_time[i].split(':'))[0]+":"+(arriv_time[i].split(':'))[1];
    edt_desti_time[i] = (destination_time[i].split(':'))[0]+":"+(destination_time[i].split(':'))[1];
    edt_duration[i] = (duration[i].split(':'))[0]+"h "+(duration[i].split(':'))[1]+"m";

    card_standard[i] = document.createElement('div');
    card_standard[i].setAttribute('class', 'card_standard');
    card_standard[i].setAttribute('id', 'standard'+'_'+(i+1));
    
    document.getElementById('flight_list').appendChild(card_standard[i]);

    testy[i] = document.createElement('div');
    testy[i].setAttribute('class', 'testy');
    testy[i].style = "max-width: 898px; display: none;";
    testy[i].setAttribute('id', 'testo'+i);
    document.getElementById('flight_list').appendChild(testy[i]);

    
    mydiv1[i] = document.createElement('div');
    mydiv1[i].setAttribute('class', 'flight_details');
    mydiv1[i].setAttribute('id', 'flight_details'+'_'+(i+1));
    mydiv1[i].setAttribute('value', i);
    
    card_standard[i].appendChild(mydiv1[i]);

    test[i] = document.createElement('div');
    test[i].style = "display: none;";
    test[i].textContent = i;

    mydiv1[i].appendChild(test[i]);
    
    info1[i] = document.createElement('div');
    info1[i].setAttribute('class', 'info1');
    mydiv1[i].appendChild(info1[i]);
    
    info2[i] = document.createElement('div');
    info2[i].setAttribute('class', 'info2');
    mydiv1[i].appendChild(info2[i]);
    
    info3[i] = document.createElement('div');
    info3[i].setAttribute('class', 'info3');
    mydiv1[i].appendChild(info3[i]);
    
    indiv1[i] = document.createElement('div');
    indiv1[i].setAttribute('class', 'div1');
    indiv1[i].setAttribute('id', 'arrival_time'+'_'+(i+1));
    indiv1[i].textContent = edt_arriv_time[i];
    info1[i].appendChild(indiv1[i]);
    
    indiv2[i] = document.createElement('div');
    indiv2[i].setAttribute('class', 'div2');
    indiv2[i].setAttribute('id', 'arrival_sambol'+'_'+(i+1));
    indiv2[i].textContent = arriv_sambol[i];
    info1[i].appendChild(indiv2[i]);
    
    indiv3[i] = document.createElement('div');
    indiv3[i].setAttribute('class', 'div3');
    indiv3[i].setAttribute('id', 'arrival_name'+'_'+(i+1));
    indiv3[i].textContent = arriv_name[i];
    info1[i].appendChild(indiv3[i]);
    
    inerimg[i] = document.createElement('img');
    inerimg[i].setAttribute('src', 'bin1.png');
    info2[i].appendChild(inerimg[i]);
    
    text1[i] = document.createElement('div');
    text1[i].setAttribute('class', 'text1');
    text1[i].setAttribute('id', 'duration'+'_'+(i+1));
    text1[i].textContent = edt_duration[i];
    info2[i].appendChild(text1[i]);
    
    text2[i] = document.createElement('div');
    text2[i].setAttribute('class', 'text2');
    text2[i].textContent = "'num'stop(s)";
    info2[i].appendChild(text2[i]);
    
    indiv4[i] = document.createElement('div');
    indiv4[i].setAttribute('class', 'div1');
    indiv4[i].setAttribute('id', 'desti_time'+'_'+(i+1));
    indiv4[i].textContent = edt_desti_time[i];
    info3[i].appendChild(indiv4[i]);
    
    indiv5[i] = document.createElement('div');
    indiv5[i].setAttribute('class', 'div2');
    indiv5[i].setAttribute('id', 'desti_sambol'+'_'+(i+1));
    indiv5[i].textContent = destination_sambol[i];
    info3[i].appendChild(indiv5[i]);
    
    indiv6[i] = document.createElement('div');
    indiv6[i].setAttribute('class', 'div3');
    indiv6[i].setAttribute('id', 'desti_name'+'_'+(i+1));
    indiv6[i].textContent = destination_name[i];
    info3[i].appendChild(indiv6[i]);
    
    inerdiv1[i] = document.createElement('div');
    inerdiv1[i].style = "margin: 0 20px 0 20px;";
    mydiv1[i].appendChild(inerdiv1[i]);
    
    inerdiv2[i] = document.createElement('div');
    inerdiv2[i].style = "text-align: center; margin: 0 5px 0 5px; padding: 5px 0 5px 5px; border-left: 1px solid #ddd;";
    mydiv1[i].appendChild(inerdiv2[i]);
    
    indiv7[i] = document.createElement('div');
    indiv7[i].textContent = "Flight Duration";
    indiv7[i].setAttribute('class', 'div0');

    inerdiv1[i].appendChild(indiv7[i]);
    
    indiv8[i] = document.createElement('div');
    indiv8[i].setAttribute('class', 'div4');
    indiv8[i].setAttribute('id', 'duration'+'_'+(i+1));
    indiv8[i].textContent = edt_duration[i];
    inerdiv1[i].appendChild(indiv8[i]);
    
    indiv9[i] = document.createElement('div');
    indiv9[i].setAttribute('class', 'div5');
    indiv9[i].textContent = "Itinerary details";
    inerdiv2[i].appendChild(indiv9[i]);
    
    indiv10[i] = document.createElement('img');
    indiv10[i].setAttribute('id', 'DA'+'_'+(i+1));
    indiv10[i].setAttribute('src', 'arrow_svg.png');
    inerdiv2[i].appendChild(indiv10[i]);
    
    mydiv2[i] = document.createElement('div');
    card_standard[i].appendChild(mydiv2[i]);
    
    inerdiv11[i] = document.createElement('div');
    inerdiv11[i].setAttribute('class', 'economy');
    inerdiv11[i].setAttribute('id', 'economy'+'_'+(i+1));
    mydiv2[i].appendChild(inerdiv11[i]);

    teste[i] = document.createElement('div');
    teste[i].style = "display: none;";
    teste[i].textContent = flight_iden[i];
    inerdiv11[i].appendChild(teste[i]);
    
    span1[i] = document.createElement('span');
    span1[i].style = "font-size: 14px; margin-right: 0px; color: cornflowerblue;";
    span1[i].textContent = "Economy";
    inerdiv11[i].appendChild(span1[i]);
    
    span2[i] = document.createElement('span');
    span2[i].style = "display: inline-block;";
    inerdiv11[i].appendChild(span2[i]);
    
    inerspan1[i] = document.createElement('span');
    inerspan1[i].style = "display: block; font-size: 11px;";
    inerspan1[i].textContent = "Per Passenger";
    span2[i].appendChild(inerspan1[i]);
    
    inerspan2[i] = document.createElement('span');
    inerspan2[i].style = "position: relative;";
    span2[i].appendChild(inerspan2[i]);
    
    inspan1[i] = document.createElement('span');
    inspan1[i].style = "line-height: 15px; font-size: 17px;";
    inspan1[i].setAttribute('id', 'eco2'+'_'+(i+1));
    inspan1[i].textContent = "USD "+str2[i];
    inerspan2[i].appendChild(inspan1[i]);
    
    inspan2[i] = document.createElement('span');
    inspan2[i].style = "font-size:13px; position: absolute; top: 4px;";
    inspan2[i].setAttribute('id', 'eco1'+'_'+(i+1));
    inspan2[i].textContent = str1[i];
    inerspan2[i].appendChild(inspan2[i]);
    
    mydiv3[i] = document.createElement('div');
    card_standard[i].appendChild(mydiv3[i]);
    
    inerdiv12[i] = document.createElement('div');
    inerdiv12[i].setAttribute('class', 'business');
    inerdiv12[i].setAttribute('id', 'business'+'_'+(i+1));
    mydiv3[i].appendChild(inerdiv12[i]);

    testb[i] = document.createElement('div');
    testb[i].style = "display: none;";
    testb[i].textContent = flight_iden[i];
    inerdiv12[i].appendChild(testb[i]);
    
    indiv11[i] = document.createElement('span');
    indiv11[i].style = "font-size: 14px; margin-right: 0px; color: goldenrod;";
    indiv11[i].textContent = "Business";
    inerdiv12[i].appendChild(indiv11[i]);
    
    indiv12[i] = document.createElement('span');
    indiv12[i].style = "display: inline-block;";
    inerdiv12[i].appendChild(indiv12[i]);
    
    span3[i] = document.createElement('span');
    span3[i].style = "display: block; font-size: 11px;";
    span3[i].textContent = "Per Passenger";
    indiv12[i].appendChild(span3[i]);
    
    span4[i] = document.createElement('span');
    span4[i].style = "position: relative;";
    indiv12[i].appendChild(span4[i]);
    
    inerspan3[i] = document.createElement('span');
    inerspan3[i].style = "line-height: 15px; font-size: 17px;";

    span4[i].appendChild(inerspan3[i]);
    
    inerspan4[i] = document.createElement('span');
    inerspan4[i].style = "font-size:13px; position: absolute; top: 4px;";
    span4[i].appendChild(inerspan4[i]);
    
    inspan3[i] = document.createElement('span');
    inspan3[i].setAttribute('id', 'busi4'+'_'+(i+1));
    inspan3[i].textContent = "USD "+str4[i];
    inerspan3[i].appendChild(inspan3[i]);
    
    inspan4[i] = document.createElement('span');
    inspan4[i].setAttribute('id', 'busi3'+'_'+(i+1));
    inspan4[i].textContent = str3[i];
    inerspan4[i].appendChild(inspan4[i]);

    var op_cl = [],
        frog=5;

        for(var u=0; u < count; u++){
            op_cl[u] = 0;
        }

        var r=0;

    mydiv1[i].addEventListener('click', function(){

        var ghj = parseInt(this.firstChild.textContent);

        if(op_cl[ghj] == 0){
/***************************************************************************************** */
            var w;
            w = op_cl.indexOf(1);

            if(w>=0){
            
                console.log("W: "+(parseInt(w)+1));
            
                document.getElementById('testo'+w).style = "display: none;";
            
                op_cl[w]=0;
            
                document.getElementById("flight_details_"+(parseInt(w)+1)).childNodes[5].childNodes[1].style = "transform: rotate(0deg);";
            
            }else{console.log("W: not found");}
/****************************************************************************************** */
            document.getElementById('testo'+ghj).style = "display: block;";
            this.childNodes[5].childNodes[1].style = "transform: rotate(90deg);";
            op_cl[ghj]=1;
        }

        else if(op_cl[ghj] == 1){
    
            document.getElementById('testo'+ghj).style = "display: none;";
            this.childNodes[5].childNodes[1].style = "transform: rotate(0deg);";
            op_cl[ghj]=0;
        }

        frog = ghj;
    });

    inerdiv11[i].addEventListener('click', function(){

        flight_id = this.childNodes[0].textContent;
        index = flight_iden.indexOf(flight_id);

        document.getElementById('id_chosen').textContent = flight_iden.indexOf(flight_id);

        document.getElementById("dov1").textContent= edt_arriv_time[index];
        document.getElementById("dov2").textContent= arriv_sambol[index];
        document.getElementById("dov3").textContent= arriv_name[index];
        document.getElementById("texto1").textContent= duration[index];
        document.getElementById("duv1").textContent= edt_desti_time[index];
        document.getElementById("duv2").textContent= destination_sambol[index];
        document.getElementById("duv3").textContent= destination_name[index];
        document.getElementById("duv4").textContent= edt_duration[index];

        document.getElementById('spanadd').innerHTML = "<span style='color: cornflowerblue;'>ECONOMY</span> Class";

        document.getElementById("imgo").src= airline_logo[index];
        document.getElementById("dev1").textContent= airline_name[index];
        document.getElementById("dev2").textContent= the_plan[index];
        document.getElementById("dev3").textContent= edt_arriv_time[index];
        document.getElementById("dev4").textContent= arriv_name[index];
        document.getElementById("dev5").textContent= arriv_sambol[index];
        document.getElementById("dev6").textContent= airline_name[index];
        document.getElementById("dev7").textContent= edt_desti_time[index];
        document.getElementById("dev8").textContent= destination_name[index];
        document.getElementById("dev9").textContent= destination_sambol[index];
        document.getElementById("dev10").textContent= airline_name[index];
        document.getElementById("dev11").textContent= edt_duration[index];

        document.getElementById("zity_a").textContent= arriv_name[index];
        document.getElementById("zity_d").textContent= destination_name[index];
        document.getElementById("on_date").textContent= arriv_date[index];
        document.getElementById("price").textContent= Economy_price[index]+" USD";
        document.getElementById("sprat").textContent= "Economy";
        document.getElementById("plan").textContent= the_plan[index];
        document.getElementById("air_line").textContent= airline_name[index];

        date1[index] = new Date(arriv_date[index]);

       if((arriv_time[index].split(':'))[0] <= 12){
           time1[index] = ((arriv_time[index].split(':'))[0] - 0)+":"+ (arriv_time[index].split(':'))[1]+" AM";

       }else{
           time1[index] = ((arriv_time[index].split(':'))[0] - 12)+":"+ (arriv_time[index].split(':'))[1]+" PM";
       }
/************** */
       date2[index] = new Date(destination_date[index]);

       if((destination_time[index].split(':'))[0] <= 12){
           time2[index] = ((destination_time[index].split(':'))[0] - 0)+":"+ (destination_time[index].split(':'))[1]+" AM";

       }else{
           time2[index] = ((destination_time[index].split(':'))[0] - 12)+":"+ (destination_time[index].split(':'))[1]+" PM";
       }

        document.getElementById("new2").textContent= date1[index].toLocaleString('en-US', {weekday: 'short'});
        document.getElementById("new3_1").textContent= date1[index].toLocaleString('en-US', {day: 'numeric'});
        document.getElementById("new3_2").textContent= date1[index].toLocaleString('en-US', {month: 'short'});
        document.getElementById("new3_3").textContent= date1[index].toLocaleString('en-US', {year: 'numeric'});
        document.getElementById("new4").textContent= time1[index];

        document.getElementById("new8").textContent= date2[index].toLocaleString('en-US', {weekday: 'short'});
        document.getElementById("new9_1").textContent= date2[index].toLocaleString('en-US', {day: 'numeric'});
        document.getElementById("new9_2").textContent= date2[index].toLocaleString('en-US', {month: 'short'});
        document.getElementById("new9_3").textContent= date2[index].toLocaleString('en-US', {year: 'numeric'});
        document.getElementById("new10").textContent= time2[index];

        document.getElementById("new1").textContent= edt_duration[index];
        document.getElementById("new5").textContent= arriv_name[index];
        document.getElementById("new6").textContent= arrival_airport[index];
        document.getElementById("new7").textContent= arrival_country[index];

        document.getElementById("new11").textContent= destination_name[index];
        document.getElementById("new12").textContent= destination_airport[index];
        document.getElementById("new13").textContent= destination_country[index];

        document.getElementById("total_duration").textContent= edt_duration[index];

        var total;
        if(num_child == 0){
            total = Economy_price[index] * (num_adult);

            console.log("total: "+total);
            /*
            console.log("(total.split('.'))[0]: "+(total.split("."))[0]);
            
            console.log("(total.split('.'))[1]: "+(total.split("."))[1]);
*/
        }else{
            total = Economy_price[index] * (num_adult + num_child);

            console.log("typeof(total): " + typeof(total));
            /*console.log("(total.split('.'))[0]: "+ total.split("."));
            
            console.log("(total.split('.'))[1]: "+(total.split("."))[1]);*/
        }

        if(total % 1 != 0){
            //decimal number
            total = total.toFixed(1);
            if(total % 1 != 0){
                //decimal number (1.3)
                document.getElementById("total_price").textContent= (total)+" USD";
            }else{
                //integer number (1.0)
                document.getElementById("total_price").textContent= (total.toFixed(0))+" USD";
            }
        }else{
            //integer number
            document.getElementById("total_price").textContent= (total)+" USD";
        }

/* ****************************************************************************************** */
        var w;
        w = op_cl.indexOf(1);

        if(w>=0){
        
            console.log("W: "+(parseInt(w)+1));
        
            document.getElementById('testo'+w).style = "display: none;";
        
            op_cl[w]=0;
        
            document.getElementById("flight_details_"+(parseInt(w)+1)).childNodes[5].childNodes[1].style = "transform: rotate(0deg);";
        
        }else{console.log("W: not found");}
/* ****************************************************************************************** */

        document.getElementById('copy_card').style = "display: block;";
        document.getElementById('parent').style = "display: block;";
        document.getElementById('change_f').style = "display: block;";
        document.getElementById('main').style = "display: none;";

        document.getElementById('sub_flight_id').value = flight_id;
        document.getElementById('sub_class').value = "Economy";
        document.getElementById('sub_num_adult').value = num_adult;
        document.getElementById('sub_num_child').value = num_child;
        document.getElementById('sub_total_price').value = document.getElementById('total_price').textContent;
        document.getElementById('sub_price').value = document.getElementById('price').textContent;

console.log('numOfPerson: '+numOfPerson);
console.log('flight_id: '+document.getElementById('sub_flight_id').value);
console.log('class: '+document.getElementById('sub_class').value);
console.log('num_adult: '+document.getElementById('sub_num_adult').value);
console.log('num_child: '+document.getElementById('sub_num_child').value);
console.log('sub_total_price: '+document.getElementById('sub_total_price').value);
console.log('sub_price: '+document.getElementById('sub_price').value);
});

/* /////////////////////////////////////////////////////////////////////////////////////// */
/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/***************************************************************************************** */
/***************************************************************************************** */
/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /////////////////////////////////////////////////////////////////////////////////////// */

    inerdiv12[i].addEventListener('click', function(){

        flight_id = this.childNodes[0].textContent;
        index = flight_iden.indexOf(flight_id);

        document.getElementById('id_chosen').textContent = flight_iden.indexOf(flight_id);

        document.getElementById("dov1").textContent= edt_arriv_time[index];
        document.getElementById("dov2").textContent= arriv_sambol[index];
        document.getElementById("dov3").textContent= arriv_name[index];
        document.getElementById("texto1").textContent= duration[index];
        document.getElementById("duv1").textContent= edt_desti_time[index];
        document.getElementById("duv2").textContent= destination_sambol[index];
        document.getElementById("duv3").textContent= destination_name[index];
        document.getElementById("duv4").textContent= edt_duration[index];

        document.getElementById('spanadd').innerHTML = "<span style='color: goldenrod;'>BUSINESS</span> Class";

        document.getElementById("imgo").src= airline_logo[index];
        document.getElementById("dev1").textContent= airline_name[index];
        document.getElementById("dev2").textContent= the_plan[index];
        document.getElementById("dev3").textContent= edt_arriv_time[index];
        document.getElementById("dev4").textContent= arriv_name[index];
        document.getElementById("dev5").textContent= arriv_sambol[index];
        document.getElementById("dev6").textContent= airline_name[index];
        document.getElementById("dev7").textContent= edt_desti_time[index];
        document.getElementById("dev8").textContent= destination_name[index];
        document.getElementById("dev9").textContent= destination_sambol[index];
        document.getElementById("dev10").textContent= airline_name[index];
        document.getElementById("dev11").textContent= edt_duration[index];

        document.getElementById("zity_a").textContent= arriv_name[index];
        document.getElementById("zity_d").textContent= destination_name[index];
        document.getElementById("on_date").textContent= arriv_date[index];
        document.getElementById("price").textContent= business_price[index]+" USD";
        document.getElementById("sprat").textContent= "Business";
        document.getElementById("plan").textContent= the_plan[index];
        document.getElementById("air_line").textContent= airline_name[index];

        date1[index] = new Date(arriv_date[index]);

       if((arriv_time[index].split(':'))[0] <= 12){
           time1[index] = ((arriv_time[index].split(':'))[0] - 0)+":"+ (arriv_time[index].split(':'))[1]+" AM";

       }else{
           time1[index] = ((arriv_time[index].split(':'))[0] - 12)+":"+ (arriv_time[index].split(':'))[1]+" PM";
       }
/************** */
       date2[index] = new Date(destination_date[index]);

       if((destination_time[index].split(':'))[0] <= 12){
           time2[index] = ((destination_time[index].split(':'))[0] - 0)+":"+ (destination_time[index].split(':'))[1]+" AM";

       }else{
           time2[index] = ((destination_time[index].split(':'))[0] - 12)+":"+ (destination_time[index].split(':'))[1]+" PM";
       }

        document.getElementById("new2").textContent= date1[index].toLocaleString('en-US', {weekday: 'short'});
        document.getElementById("new3_1").textContent= date1[index].toLocaleString('en-US', {day: 'numeric'});
        document.getElementById("new3_2").textContent= date1[index].toLocaleString('en-US', {month: 'short'});
        document.getElementById("new3_3").textContent= date1[index].toLocaleString('en-US', {year: 'numeric'});
        document.getElementById("new4").textContent= time1[index];

        document.getElementById("new8").textContent= date2[index].toLocaleString('en-US', {weekday: 'short'});
        document.getElementById("new9_1").textContent= date2[index].toLocaleString('en-US', {day: 'numeric'});
        document.getElementById("new9_2").textContent= date2[index].toLocaleString('en-US', {month: 'short'});
        document.getElementById("new9_3").textContent= date2[index].toLocaleString('en-US', {year: 'numeric'});
        document.getElementById("new10").textContent= time2[index];

        document.getElementById("new1").textContent= edt_duration[index];
        document.getElementById("new5").textContent= arriv_name[index];
        document.getElementById("new6").textContent= arrival_airport[index];
        document.getElementById("new7").textContent= arrival_country[index];

        document.getElementById("new11").textContent= destination_name[index];
        document.getElementById("new12").textContent= destination_airport[index];
        document.getElementById("new13").textContent= destination_country[index];

        document.getElementById("total_duration").textContent= edt_duration[index];
        console.log('holla business');        
        var total;
        if(num_child == 0){
            total = business_price[index] * (num_adult);

        }else{
            total = business_price[index] * (num_adult + num_child);

            console.log("typeof(total): " + typeof(total));
        }

        if(total % 1 != 0){
            //decimal number
            total = total.toFixed(1);
            if(total % 1 != 0){
                //decimal number (1.3)
                document.getElementById("total_price").textContent= (total)+" USD";
            }else{
                //integer number (1.0)
                document.getElementById("total_price").textContent= (total.toFixed(0))+" USD";
            }
        }else{
            //integer number
            document.getElementById("total_price").textContent= (total)+" USD";
        }

/* ****************************************************************************************** */
        var w;
        w = op_cl.indexOf(1);

        if(w>=0){
        
            console.log("W: "+(parseInt(w)+1));
        
            document.getElementById('testo'+w).style = "display: none;";
        
            op_cl[w]=0;
        
            document.getElementById("flight_details_"+(parseInt(w)+1)).childNodes[5].childNodes[1].style = "transform: rotate(0deg);";
        
        }else{console.log("W: not found");}
/* ****************************************************************************************** */

        document.getElementById('copy_card').style = "display: block;";
        document.getElementById('parent').style = "display: block;";
        document.getElementById('change_f').style = "display: block;";
        document.getElementById('main').style = "display: none;";

        document.getElementById('sub_flight_id').value = flight_id;
        document.getElementById('sub_class').value = "Business";
        document.getElementById('sub_num_adult').value = num_adult;
        document.getElementById('sub_num_child').value = num_child;
        document.getElementById('sub_total_price').value = document.getElementById('total_price').textContent;
        document.getElementById('sub_price').value = document.getElementById('price').textContent;
        console.log('holla business*');        
        console.log('sub_total_price_busi: '+document.getElementById('total_price').textContent);
    });

    document.getElementById('adult').textContent = num_adult;
    document.getElementById('child').textContent = num_child;
    console.log('num_adult: '+num_adult);
    document.getElementById('how_adult').textContent = num_adult;
    document.getElementById('how_child').textContent = num_child;
}
/***************************************************************************************************/
/* END END END END END END END END END END END END END END END END END END END END END END END END*/
/* END END END END END END END END END END END END END END END END END END END END END END END END*/
/***************************************************************************************************/
/*
var datt = new Date(arriv_date[1]);

console.log('date format: '+datt.toLocaleString('en-US', {
    weekday: 'short', // long, short, narrow
    day: '2-digit', // numeric, 2-digit
    month: 'short', // numeric, 2-digit, long, short, narrow
    year: 'numeric', // numeric, 2-digit
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    //second: 'numeric', // numeric, 2-digit
}));
*/
/***************************************************************************************************/
/* Details Details Details Details Details Details Details Details Details Details Details Details */
/* Details Details Details Details Details Details Details Details Details Details Details Details */
/***************************************************************************************************/

var details,
    table,
    thead,
    tbody,
    tr_head,
    th_head_1,
    th_head_2,
    th_head_3,
    th_head_4,
    tr_body,
    td_1,
    td_2,
    td_3,
    td_4,
    td_1div,
    td_2div,
    img,
    test;
console.log("count: " + count);
    for(var i=0; i < count; i++){
        details = document.createElement('div');
        details.setAttribute('class', 'Details');
        testy[i].appendChild(details);

        table = document.createElement('table');
    
        details.appendChild(table);
    
        thead = document.createElement('thead');
        table.appendChild(thead);
    
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
    
        tr_head = document.createElement('tr');
        thead.appendChild(tr_head);
    
        th_head_1 = document.createElement('th');
        th_head_1.textContent = "Flight";
        tr_head.appendChild(th_head_1);
    
        th_head_2 = document.createElement('th');
        th_head_2.textContent = "From";
        tr_head.appendChild(th_head_2);
    
        th_head_3 = document.createElement('th');
        th_head_3.textContent = "To";
        tr_head.appendChild(th_head_3);
    
        th_head_4 = document.createElement('th');
        th_head_4.textContent = "Duration";
        tr_head.appendChild(th_head_4);
    
        tr_body = document.createElement('tr');
        tbody.appendChild(tr_body);
    
        td_1 = document.createElement('td');
        tr_body.appendChild(td_1);
    
        td_2 = document.createElement('td');
        tr_body.appendChild(td_2);
    
        td_3 = document.createElement('td');
        tr_body.appendChild(td_3);
    
        td_4 = document.createElement('td');
        tr_body.appendChild(td_4);
    
        td_1div = document.createElement('div');
        td_1div.setAttribute('class', 'air_logo');
        td_1div.setAttribute('id', 'logo');
        td_1.appendChild(td_1div);
    /* 1111111111111111111111111111111111111111111 */
        img = document.createElement('img');
        img.setAttribute('src', airline_logo[i]);
        img.style = "margin-bottom: 4px;";
        td_1div.appendChild(img);
    
        td_2div = document.createElement('div');
        td_2div.textContent = airline_name[i];
        td_1.appendChild(td_2div);
    
        test = document.createElement('br');
        td_2div.appendChild(test);
    
        test = document.createElement('div');
        test.style = "display: inline-block;";
        test.textContent = the_plan[i];
        td_2div.appendChild(test);
    /* 22222222222222222222222222222222222222 */
    
    test = document.createElement('div');
    test.textContent = edt_arriv_time[i];
    td_2.appendChild(test);
    
    test = document.createElement('div');
    test.textContent = arriv_name[i]+" ("+arriv_sambol[i]+")";
    td_2.appendChild(test);
    
    /* 333333333333333333333333333333333333333 */
    
    test = document.createElement('div');
    test.textContent = edt_desti_time[i];
    td_3.appendChild(test);
    
    test = document.createElement('div');
    test.textContent = destination_name[i]+" ("+destination_sambol[i]+")";
    td_3.appendChild(test);
    
    /* 4444444444444444444444444444444444444444 */
    test = document.createElement('div');
    test.textContent = edt_duration[i];
    td_4.appendChild(test);
    }

document.getElementById('numOfPerson').value = (parseInt(num_adult)) + (parseInt(num_child));

