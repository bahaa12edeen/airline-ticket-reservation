<!DOCTYPE html>
<?php 

$trip_mood = $_GET["trip_mood"];

$number_adult = $_GET["number_adult"];
$number_child = $_GET["number_child"];

switch ($trip_mood) {

   case 'round trip':
      $COUNT_a = $_GET["COUNT_a"];
      $arrival_sambol_a = $_GET["arrival_sambol_a"];
      $arrival_name_a = $_GET["arrival_name_a"];
      $arrival_date_a = $_GET["arrival_date_a"];
      $arrival_time_a = $_GET["arrival_time_a"];
      $destination_sambol_a = $_GET["destination_sambol_a"];
      $destination_name_a = $_GET["destination_name_a"];
      $destination_date_a = $_GET["destination_date_a"];
      $destination_time_a = $_GET["destination_time_a"];
      $duration_a = $_GET["duration_a"];

      $Economy_price_a = $_GET["Economy_price_a"];
      $str1 = $_GET["str1"];
      $str2 = $_GET["str2"];

      $business_price_a = $_GET["business_price_a"];
      $str3 = $_GET["str3"];
      $str4 = $_GET["str4"];

      $ah_time_a = $_GET["ah_time_a"];
      $dh_time_a = $_GET["dh_time_a"];
      $am_time_a = $_GET["am_time_a"];
      $dm_time_a = $_GET["dm_time_a"];
      $duration_v_a = $_GET["duration_v_a"];
      $a_date_a = $_GET["a_date_a"];
      $d_date_a = $_GET["d_date_a"];

      $COUNT_r = $_GET["COUNT_r"];
      $arrival_sambol_r = $_GET["arrival_sambol_r"];
      $arrival_name_r = $_GET["arrival_name_r"];
      $arrival_date_r = $_GET["arrival_date_r"];
      $arrival_time_r = $_GET["arrival_time_r"];
      $destination_sambol_r = $_GET["destination_sambol_r"];
      $destination_name_r = $_GET["destination_name_r"];
      $destination_date_r = $_GET["destination_date_r"];
      $destination_time_r = $_GET["destination_time_r"];
      $duration_r = $_GET["duration_r"];

      $Economy_price_r = $_GET["Economy_price_r"];
      $str5 = $_GET["str5"];
      $str6 = $_GET["str6"];

      $business_price_r = $_GET["business_price_r"];
      $str7 = $_GET["str7"];
      $str8 = $_GET["str8"];

      $ah_time_r = $_GET["ah_time_r"];
      $dh_time_r = $_GET["dh_time_r"];
      $am_time_r = $_GET["am_time_r"];
      $dm_time_r = $_GET["dm_time_r"];
      $duration_v_r = $_GET["duration_v_r"];
      $a_date_r = $_GET["a_date_r"];
      $d_date_r = $_GET["d_date_r"];
      break;

      case 'one way':
      
         $COUNT = $_GET["COUNT"];
         echo "<div id='count'>".$COUNT."</div>";

         for($i=0; $i<$COUNT; $i++){
            $flight_id[] = $_GET["flight_id"."_".($i+1)];
            $arrival_sambol[] = $_GET["arrival_sambol"."_".($i+1)];
            $arrival_name[] = $_GET["arrival_name"."_".($i+1)];
            $arrival_date[] = $_GET["arrival_date"."_".($i+1)];
            $arrival_time[] = $_GET["arrival_time"."_".($i+1)];
            $arrival_country[] = $_GET["arrival_country"."_".($i+1)];
            $arrival_airport[] = $_GET["arrival_airport"."_".($i+1)];

            $destination_sambol[] = $_GET["destination_sambol"."_".($i+1)];
            $destination_name[] = $_GET["destination_name"."_".($i+1)];
            $destination_date[] = $_GET["destination_date"."_".($i+1)];
            $destination_time[] = $_GET["destination_time"."_".($i+1)];
            $destination_country[] = $_GET["destination_country"."_".($i+1)];
            $destination_airport[] = $_GET["destination_airport"."_".($i+1)];

            $duration[] = $_GET["duration"."_".($i+1)];
   
            $Economy_price[] = $_GET["Economy_price"."_".($i+1)];
            $str1[] = $_GET["stt1"."_".($i+1)];
            $str2[] = $_GET["stt2"."_".($i+1)];
   
            $business_price[] = $_GET["business_price"."_".($i+1)];
            $str3[] = $_GET["stt3"."_".($i+1)];
            $str4[] = $_GET["stt4"."_".($i+1)];
   
            $ah_time[] = $_GET["ah_time"."_".($i+1)];
            $dh_time[] = $_GET["dh_time"."_".($i+1)];
            $am_time[] = $_GET["am_time"."_".($i+1)];
            $dm_time[] = $_GET["dm_time"."_".($i+1)];
            $duration_v[] = $_GET["duration_v"."_".($i+1)];
            $a_date[] = $_GET["a_date"."_".($i+1)];
            $d_date[] = $_GET["d_date"."_".($i+1)];

            $airline_logo[] = $_GET["airline_logo"."_".($i+1)];
            $airline_name[] = $_GET["airline_name"."_".($i+1)];
            $the_plan[] = $_GET["the_plan"."_".($i+1)];

            $arriv_city = $arrival_name[0];
            $desti_city = $destination_name[0];
            $arriv_dato = $arrival_date[0];

         }



         for($i=0; $i<$COUNT; $i++){

            $flight_iden[] = $flight_id[$i];

            $arriv_time[] = $arrival_time[$i];
            $arriv_country[] = $arrival_country[$i];
            $arriv_airport[] = $arrival_airport[$i];
            $arriv_date[] = $arrival_date[$i];
            $arriv_sambol[] = $arrival_sambol[$i];
            $arriv_name[] = $arrival_name[$i];

            $dura[] = $duration[$i];

            $desti_time[] = $destination_time[$i];
            $desti_country[] = $destination_country[$i];
            $desti_airport[] = $destination_airport[$i];
            $desti_date[] = $destination_date[$i];
            $desti_sambol[] = $destination_sambol[$i];
            $desti_name[] = $destination_name[$i];

            $eco_price[] = $Economy_price[$i];
            $stt1[] = $str1[$i];
            $stt2[] = $str2[$i];

            $busi_price[] = $business_price[$i];
            $stt3[] = $str3[$i];
            $stt4[] = $str4[$i];

         }

            echo "<script>
                  var flight_idenE = [],
                      arriv_timeE = [],
                      arrival_countryE = [],
                      arrival_airportE = [],
                      arriv_dateE = [],
                      arriv_sambolE = [],
                      arriv_nameE = [],
                      durationE = [],
                      destination_timeE = [],
                      destination_countryE = [],
                      destination_airportE = [],
                      destination_dateE = [],
                      destination_sambolE = [],
                      destination_nameE = [],
                      Economy_priceE = [],
                      str1E = [],
                      str2E = [],
                      business_priceE = [],
                      str3E = [],
                      str4E = [],

                      ah_timeE = [],
                      am_timeE = [],

                      airline_logoE = [],
                      airline_nameE = [],
                      the_planE = [],

                      flight_idenArray = ".json_encode($flight_iden).",
                          arriv_timeArray = ".json_encode($arriv_time).",
                          arrival_countryArray = ".json_encode($arrival_country).",
                          arrival_airportArray = ".json_encode($arrival_airport).",
                          arriv_dateArray = ".json_encode($arriv_date).",
                          arriv_sambolArray = ".json_encode($arriv_sambol).",
                          arriv_nameArray = ".json_encode($arriv_name).",
                          duraArray = ".json_encode($dura).",
                          desti_timeArray = ".json_encode($desti_time).",
                          destination_countryArray = ".json_encode($destination_country).",
                          destination_airportArray = ".json_encode($destination_airport).",
                          destination_dateArray = ".json_encode($destination_date).",
                          desti_sambolArray = ".json_encode($desti_sambol).",
                          desti_nameArray = ".json_encode($desti_name).",
                          eco_priceArray = ".json_encode($eco_price).",
                          stt1Array = ".json_encode($stt1).",
                          stt2Array = ".json_encode($stt2).",
                          busi_priceArray = ".json_encode($busi_price).",
                          stt3Array = ".json_encode($stt3).",
                          stt4Array = ".json_encode($stt4).",

                          ah_timeArray = ".json_encode($ah_time).",
                          am_timeArray = ".json_encode($am_time).",

                          airline_logoArray = ".json_encode($airline_logo).",
                          airline_nameArray = ".json_encode($airline_name).",
                          the_planArray = ".json_encode($the_plan).";

                          console.log('arrival_country: '+arrival_countryArray);

                          var i = 0;
                  for(i; i<'$COUNT'; i++){
                     console.log('i: '+i);
                     flight_idenE[i] = document.createElement('div');
                     flight_idenE[i].setAttribute('id', 'flight_id'+'_'+i);
                     flight_idenE[i].textContent = flight_idenArray[i];
                     flight_idenE[i].style = 'display: none;';
                     document.body.appendChild(flight_idenE[i]);

                      arriv_timeE[i] = document.createElement('div');
                      arriv_timeE[i].setAttribute('id', 'arriv_time'+'_'+i);
                      arriv_timeE[i].textContent = arriv_timeArray[i];
                      arriv_timeE[i].style = 'display: none;';
                      document.body.appendChild(arriv_timeE[i]);

                      arrival_countryE[i] = document.createElement('div');
                      arrival_countryE[i].setAttribute('id', 'arrival_country'+'_'+i);
                      arrival_countryE[i].textContent = arrival_countryArray[i];
                      arrival_countryE[i].style = 'display: none;';
                      document.body.appendChild(arrival_countryE[i]);

                      arrival_airportE[i] = document.createElement('div');
                      arrival_airportE[i].setAttribute('id', 'arrival_airport'+'_'+i);
                      arrival_airportE[i].textContent = arrival_airportArray[i];
                      arrival_airportE[i].style = 'display: none;';
                      document.body.appendChild(arrival_airportE[i]);

                      arriv_dateE[i] = document.createElement('div');
                      arriv_dateE[i].setAttribute('id', 'arriv_date'+'_'+i);
                      arriv_dateE[i].textContent = arriv_dateArray[i];
                      arriv_dateE[i].style = 'display: none;';
                      document.body.appendChild(arriv_dateE[i]);

                      arriv_sambolE[i] = document.createElement('div');
                      arriv_sambolE[i].setAttribute('id', 'arriv_sambol'+'_'+i);
                      arriv_sambolE[i].textContent = arriv_sambolArray[i];
                      arriv_sambolE[i].style = 'display: none;';
                      document.body.appendChild(arriv_sambolE[i]);

                      arriv_nameE[i] = document.createElement('div');
                      arriv_nameE[i].setAttribute('id', 'arriv_name'+'_'+i);
                      arriv_nameE[i].textContent = arriv_nameArray[i];
                      arriv_nameE[i].style = 'display: none;';
                      document.body.appendChild(arriv_nameE[i]);

                      durationE[i] = document.createElement('div');
                      durationE[i].setAttribute('id', 'duration'+'_'+i);
                      durationE[i].textContent = duraArray[i];
                      durationE[i].style = 'display: none;';
                      document.body.appendChild(durationE[i]);

                      destination_timeE[i] = document.createElement('div');
                      destination_timeE[i].setAttribute('id', 'destination_time'+'_'+i);
                      destination_timeE[i].textContent = desti_timeArray[i];
                      destination_timeE[i].style = 'display: none;';
                      document.body.appendChild(destination_timeE[i]);

                      destination_countryE[i] = document.createElement('div');
                      destination_countryE[i].setAttribute('id', 'destination_country'+'_'+i);
                      destination_countryE[i].textContent = destination_countryArray[i];
                      destination_countryE[i].style = 'display: none;';
                      document.body.appendChild(destination_countryE[i]);

                      destination_airportE[i] = document.createElement('div');
                      destination_airportE[i].setAttribute('id', 'destination_airport'+'_'+i);
                      destination_airportE[i].textContent = destination_airportArray[i];
                      destination_airportE[i].style = 'display: none;';
                      document.body.appendChild(destination_airportE[i]);

                      destination_dateE[i] = document.createElement('div');
                      destination_dateE[i].setAttribute('id', 'destination_date'+'_'+i);
                      destination_dateE[i].textContent = destination_dateArray[i];
                      destination_dateE[i].style = 'display: none;';
                      document.body.appendChild(destination_dateE[i]);

                      destination_sambolE[i] = document.createElement('div');
                      destination_sambolE[i].setAttribute('id', 'destination_sambol'+'_'+i);
                      destination_sambolE[i].textContent = desti_sambolArray[i];
                      destination_sambolE[i].style = 'display: none;';
                      document.body.appendChild(destination_sambolE[i]);

                      destination_nameE[i] = document.createElement('div');
                      destination_nameE[i].setAttribute('id', 'destination_name'+'_'+i);
                      destination_nameE[i].textContent = desti_nameArray[i];
                      destination_nameE[i].style = 'display: none;';
                      document.body.appendChild(destination_nameE[i]);

                      Economy_priceE[i] = document.createElement('div');
                      Economy_priceE[i].setAttribute('id', 'Economy_price'+'_'+i);
                      Economy_priceE[i].textContent = eco_priceArray[i];
                      Economy_priceE[i].style = 'display: none;';
                      document.body.appendChild(Economy_priceE[i]);

                      str1E[i] = document.createElement('div');
                      str1E[i].setAttribute('id', 'str1'+'_'+i);
                      str1E[i].textContent = stt1Array[i];
                      str1E[i].style = 'display: none;';
                      document.body.appendChild(str1E[i]);

                      str2E[i] = document.createElement('div');
                      str2E[i].setAttribute('id', 'str2'+'_'+i);
                      str2E[i].textContent = stt2Array[i];
                      str2E[i].style = 'display: none;';
                      document.body.appendChild(str2E[i]);

                      business_priceE[i] = document.createElement('div');
                      business_priceE[i].setAttribute('id', 'business_price'+'_'+i);
                      business_priceE[i].textContent = busi_priceArray[i];
                      business_priceE[i].style = 'display: none;';
                      document.body.appendChild(business_priceE[i]);

                      str3E[i] = document.createElement('div');
                      str3E[i].setAttribute('id', 'str3'+'_'+i);
                      str3E[i].textContent = stt3Array[i];
                      str3E[i].style = 'display: none;';
                      document.body.appendChild(str3E[i]);

                      str4E[i] = document.createElement('div');
                      str4E[i].setAttribute('id', 'str4'+'_'+i);
                      str4E[i].textContent = stt4Array[i];
                      str4E[i].style = 'display: none;';
                      document.body.appendChild(str4E[i]);

                      ah_timeE[i] = document.createElement('div');
                      ah_timeE[i].setAttribute('id', 'ah_time'+'_'+i);
                      ah_timeE[i].textContent = ah_timeArray[i];
                      ah_timeE[i].style = 'display: none;';
                      document.body.appendChild(ah_timeE[i]);

                      am_timeE[i] = document.createElement('div');
                      am_timeE[i].setAttribute('id', 'am_time'+'_'+i);
                      am_timeE[i].textContent = am_timeArray[i];
                      am_timeE[i].style = 'display: none;';
                      document.body.appendChild(am_timeE[i]);

                      airline_logoE[i] = document.createElement('div');
                      airline_logoE[i].setAttribute('id', 'airline_logo'+'_'+i);
                      airline_logoE[i].textContent = airline_logoArray[i];
                      airline_logoE[i].style = 'display: none;';
                      document.body.appendChild(airline_logoE[i]);

                      airline_nameE[i] = document.createElement('div');
                      airline_nameE[i].setAttribute('id', 'airline_name'+'_'+i);
                      airline_nameE[i].textContent = airline_nameArray[i];
                      airline_nameE[i].style = 'display: none;';
                      document.body.appendChild(airline_nameE[i]);

                      the_planE[i] = document.createElement('div');
                      the_planE[i].setAttribute('id', 'the_plan'+'_'+i);
                      the_planE[i].textContent = the_planArray[i];
                      the_planE[i].style = 'display: none;';
                      document.body.appendChild(the_planE[i]);
                  }

                  var num_adult,
                      num_child,
                      adultArray = ".json_encode($number_adult).",
                      childArray = ".json_encode($number_child).";

                      num_adult = document.createElement('div');
                      num_adult.setAttribute('id', 'num_adult');
                      num_adult.textContent = adultArray;
                      num_adult.style = 'display: none;';
                      document.body.appendChild(num_adult);

                      num_child = document.createElement('div');
                      num_child.setAttribute('id', 'num_child');
                      num_child.textContent = childArray;
                      num_child.style = 'display: none;';
                      document.body.appendChild(num_child);

            </script>";
         

         break;

            case 'multi-city':
               # code...
               break;
}
?>
<html>
   <head>
      <title>Airline - Select Flight</title>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="Select Flight.css">
   
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Langar&family=Piazzolla:wght@200;400&display=swap" rel="stylesheet">   
      <link href="https://fonts.googleapis.com/css2?family=Jura:wght@600&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet">      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">


   </head>
   <body>

    <div class="navi">
        <div>
            <div id="do0"> <img src="vb.png" alt=""> </div>
            <div><img src="arrow5.png" alt=""></div>
            <div>Select Flight</div>
            <div><img src="arrow4.png" alt=""></div>
            <div>Passenger Details</div>
            <div><img src="arrow2.png" alt=""></div>
            <div>Payment</div>
            <div><img src="arrow2.png" alt=""></div>

        </div> 

      </div>

       <div class="stuffing"> abc </div>

       <div class="body">


            <span class="bound" id="bound">OUTBOUND TRIP</span>
             <br> 
            <div class="big_label">
             <?php echo $arriv_city?>
             to 
             <?php echo $desti_city?> 
             on 
             <?php echo$arriv_dato?>
            </div>
       </div>

       <!-- ***************************************** -->
       <!--*************    <copy>    ****************-->
       <!-- ***************************************** -->

       <div id = "id_chosen" style = "display: none;"></div>
<!--
       <script>
          document.getElementById("economy_"+);
          var index = document.getElementById('id_chosen').textContent;
          console.log("id_chosenhtml"+index);
      </script>

       <php
       
       ?>
-->
            <div id="copy_card" class="copy_card" style="display: none;">

               <div class="flight_details_c" id="flight_details_c">

                  <span style="background-color: green; display: inline-flex; border-radius: 100%; position: relative; right: 27px; align-items: center; padding: 5px;">
                     <img src="check_white.png" alt="">
                     </span>

                  <div class="info1">
                     <div class="div1" id = "dov1">

                  </div>
                     <div class="div2" id = "dov2">

                  </div> 
                     <div class="div3" id = "dov3">

                  </div> 
                  </div> 

                  <div class="info2"> <img src="bin1.png" alt="">  
                     <div class="text1" id = "texto1"> 

                  </div>  
                     <div class="text2">'num'stop(s)</div> 
                  </div>

                  <div class="info3">
                     <div class="div1" id = "duv1">

                  </div>  
                     <div class="div2" id = "duv2">

                  </div>  
                     <div class="div3" id = "duv3">

                  </div>
                  </div>
          
                  <div style="margin: 0 20px 0 20px;">
                     <div class="div0">Flight Duration</div>  
                     <div class="div4" id = "duv4">

                  </div>
                  </div>

                  <div class="divadd">
                     <span class="spanadd" id="spanadd"></span>
                  </div>

                  <div style="text-align: center; margin-right: 5px; padding: 5px 0 5px 20px; border-left: 2px solid #ddd; display: flex; align-items: center;">
                     
                        <span class="diffirent">Itinerary details</span>  
                        <img id="DA_c" src="arrow_svg.png" alt="">
                     
                  </div>
                  
                  


               </div>



            </div>
<!-- ************** table **************-->
            <div class="Details" id="D_c" style="display: none;">

               <table >
                  
                     <thead >
                  <tr >
                  <th>Flight</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Duration</th>
               </tr>
                     </thead>
                     <tbody>
               <tr>
                  <td>
                     <div class="air_logo" id="logo"><img src="turk.png" alt="" id = "imgo"> </div>
                     <div><div id = "dev1">Airline name</div> <br> <div id = "dev2">type of plan</div></div>
                  </td>
                  <td><div id ="dev3">time</div>  <div><span id ="dev4">distination_name & </span>(<span id ="dev5">symbol</span>)</div>  <div id ="dev6">airline</div></td>
                  <td><div id ="dev7">time</div>  <div><span id ="dev8">distination_name & </span>(<span id ="dev9">symbol</span>)</div>  <div id ="dev10">airline</div></td>
                  <td> <span id ="dev11">*h **m</span></td>

               </tr>
<!--
               <tr>
                  <td>
                     <div class="air_logo" id="logo"><img src="jordan.png" alt=""> </div>
                     <div><div id ="dev11">Airline name</div> <br> <div id ="dev12">type of plan</div></div>
                  </td>
                  <td><div id ="dev13">time</div> <div id ="dev14">distination_name & <span id ="dev15">symbol</span></div> <br> <div id ="dev16">airline</div></td>
                  <td><div id ="dev17">time</div> <div id ="dev18">distination_name & <span id ="dev19">symbol</span></div> <br> <div id ="dev20">airline</div></td>
                  <td>duration <div id ="dev21">*h **m</div> </td>

               </tr>
-->
               </tbody>
               </table>

              </div>

<!--*************    </table>    ****************-->

   <button class="change_f" id="change_f" style="display: none;">Change Flight</button>

<div class="parent" id="parent" style="display: none;">

      <aside class="continue" id="continue">
      <aside class="price" id="total_price">894.15 JOD</aside>

     <span> Total trip price: </span>
     <div style="font-size: 15px; padding-top: 5px; color:#697886;">(<span id="how_adult">1</span> Adult)</div>
     <div style="font-size: 15px; padding-top: 5px; color:#697886;" id="child2">(<span id="how_child">1</span> Child)</div>

     <div style="text-align: center;">
     <form action="Passenger Details.php" method="GET">
        <input type="hidden" name="numOfPerson" id="numOfPerson">

        <input type="hidden" id="sub_flight_id" name="sub_flight_id" >
        <input type="hidden" id="sub_class" name="sub_class" >
        <input type="hidden" id="sub_num_adult" name="sub_num_adult" >
        <input type="hidden" id="sub_num_child" name="sub_num_child" >
        <input type="hidden" id="sub_total_price" name="sub_total_price" >
        <input type="hidden" id="sub_price" name="sub_price" >

        <input type="submit" name="con_but" id="con_but" class="con_but"  value="Continue">
     </form>
     </div>

   </aside>


   <div class="trip_details">
      
      <h2 style="text-align: center; font-family: 'Open Sans', sans-serif;">Your trip review</h2>

      <div class="part1">
         <div class="content1">

            <aside class="side1">
               <div style="font-size: 20px; font-weight: bold;" id = "price"><span>894.65 JOD</span></div>
               <span class="sprat" id="sprat">Economy</span> <br>
               <div style="margin-bottom: 3px; color: purple;">Checked baggage allowance: </div>
               Adult: <span id="adult">2</span> piece(s), up to 32kg each<br>
               <span id="child1">Child: <span id="child">2</span> piece(s), up to 32kg each</span>
            </aside>
   

         <div class="big_label2"><strong><span id = "zity_a">*city</span></strong> to <strong><span id = "zity_d">*city</span></strong> on <strong><span id = "on_date">*date</span></strong></div>



             <div class="container">
            
               <div class="coco">
               <div class="ball"></div>
               <span>Departure</span>
               </div>
               <div class="time" id="new1">2h 50m</div>
               
               <div class="coordinates_D">
                  <span id="new2">Fri</span>, <span id="new3_1">16</span> <span id="new3_2">Jul</span> <span id="new3_3">2021</span> - <span id="new4">20:30 AMM</span> <br>
                  <span id="new5">Amman</span>, <span id="new6">Queen Alia International Airport</span> <br>
                  <span id="new7">Jordan</span>
               </div>
               
               <div class="coco">
                  <div class="ball"></div>
                  <span>Arrival</span>
                  </div>

               <div class="coordinates_A">
               <span id="new8">Fri</span>, <span id="new9_1">16</span> <span id="new9_2">Jul</span> <span id="new9_3">2021</span> - <span id="new10">20:30 AMM</span> <br>
               <span id="new11">Amman</span>, <span id="new12">Queen Alia International Airport</span> <br>
               <span id="new13">Jordan</span>
               </div>

               <div class="coordinates_G">
                  Oberated By: <span id="air_line">qatar airline</span> <br>
                  <span id="plan">Boeing 777-3R</span>
               </div>
   
   
               </div>
             
         </div>
         

      </div>
      <div class="line1" style="display: none;">
         <span class="txt_l">Connection time: 2h 0m</span>
         <div class="line"></div>
      </div>

      <!--  --------*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*------  -->

      <div class="part1" style="display: none;">
         <div class="content1">

            <aside class="side1">
                <br>
               <span class="sprat">Economy</span> <br>
               Checked baggage allowance: <br><br>
               Adult: <span>2</span> piece(s), up to 32kg each<br>
               <span>Child: <span>2</span> piece(s), up to 32kg each</span>
            </aside>

            <div class="container">
            
               <div class="coco">
               <div class="ball"></div>
               <span>Departure</span>
               </div>
               <div class="time2">2h 50m</div>
               
               <div class="coordinates_D">
                  Fri, 16 Jul 2021 - 20:30 AMM <br>
                  Amman, Queen Alia International Airport <br>
                  Jordan
               </div>
               
               <div class="coco">
                  <div class="ball"></div>
                  <span>Arrival</span>
                  </div>

               <div class="coordinates_A">
                  Fri, 16 Jul 2021 - 20:30 AMM <br>
                  Amman, Queen Alia International Airport <br>
                  Jordan
               </div>

               <div class="coordinates_G">
                  Oberated By: qatar airline <br>
                  Boeing 777-3R
               </div>
   
   
               </div>

         </div>

      </div>

      <div class="line1" style="margin-bottom: 5px;">
         <span class="txt_l">Total duration: <span id="total_duration">19h 15m</span></span>
         <div class="line"></div>
      </div>
   </div>
</div>

       <!-- ***************************************** -->
       <!--*************    </copy>    ****************-->
       <!-- ***************************************** -->
            
            <div class="main" id="main">
              <div class="filter_bar">
                 <div class="filter">Edite Filter</div>
              </div>
              <div class="flight_list" id = "flight_list">
                            
                 <div class="card_standard" id="standard" style = "display: none;"><!--  -->
                  <div class="flight_details" id="flight_details">
                     <div class="info1">
                        <div class="div1" id="arrival_time">

                        </div> 
                        <div class="div2" id="arrival_sambol">
                        <?php switch ($trip_mood) { case 'round trip':  echo $arrival_sambol_a;  break; case 'one way':  echo $arrival_sambol;  break; }?>
                        </div> 
                        <div class="div3" id="arrival_name">
                        <?php switch ($trip_mood) { case 'round trip':  echo $arrival_name_a;  break; case 'one way':  echo $arrival_time;  break; }?>
                        </div> 
                     </div> 

                     <div class="info2"> <img src="bin1.png" alt="">  
                     <div class="text1" id="duration"> 
                         <?php switch ($trip_mood) { case 'round trip':  echo $duration_v_a;  break; case 'one way':  echo $duration_v;  break; }?>
                     </div>  
                        <div class="text2">'num'stop(s)</div> 
                      </div>

                     <div class="info3">
                        <div class="div1" id="desti_time">
                        <?php switch ($trip_mood) { case 'round trip':  echo $destination_time_a;  break; case 'one way':  echo $destination_time;  break; }?>
                        </div>  
                        <div class="div2" id="desti_sambol">
                          <?php switch ($trip_mood) { case 'round trip':  echo $destination_sambol_a;  break; case 'one way':  echo $destination_sambol;  break; }?>
                        </div>  
                        <div class="div3" id="desti_name">
                          <?php switch ($trip_mood) { case 'round trip':  echo $destination_name_a;  break; case 'one way':  echo $destination_name;  break; }?>
                        </div>
                     </div>
             
                     <div style="margin: 0 20px 0 20px;">
                        <div class="div0">Flight Duration</div>  
                        <div class="div4" id="duration">
                          <?php switch ($trip_mood) { case 'round trip':  echo $duration_v_a;  break; case 'one way':  echo $duration_v;  break; }?>
                        </div>
                        </div>

                     <div style="text-align: center; margin: 0 5px 0 5px; padding: 5px 0 5px 5px; border-left: 1px solid #ddd;">
                        <div class="div5">Itinerary details</div>  <img id="DA" src="arrow_svg.png" alt="">
                     </div>
                     
                     


                  </div>


                  <div>
                        <div class="economy" id="economy">
                           <span style="font-size: 14px; margin-right: 0px; color: cornflowerblue;">

                              Economy
                        </span>

                           <span style="display: inline-block;">
                              
                                 <span style="display: block; font-size: 11px;">Per Passenger</span>
                                 <span style="position: relative;">
                                 <span style="line-height: 15px; font-size: 17px;" id="eco2">
                                   USD <?php echo $str2 ?>
                                 </span>
                                 <span style="font-size:13px; position: absolute; top: 4px;" id="eco1">
                                   <?php echo $str1 ?>
                                 </span>
                              
                              </span>
                           
                        </div>
                  </div>
                  <div>
                     <div class="business" id="business">
                        <span style="font-size: 14px; margin-right: 0px; color: goldenrod;">

                           Business
                     </span>

                        <span style="display: inline-block;">
                           <span style="display: block; font-size: 11px;">Per Passenger</span>
                           <span style="position: relative;">
                           <span style="line-height: 15px; font-size: 17px;">USD <span id="busi4"><?php echo $str4 ?></span></span>
                           <span style="font-size:13px; position: absolute; top: 0;"><span id="busi3"><?php echo $str3 ?></span></span>
                           </span>
                        </span>
                     </div>
                  
               </div>

                 </div>

                 <div class="Details" id="D" style="display: none;">

                  <table >
                     
                        <thead >
                     <tr >
                     <th>Flight</th>
                     <th>From</th>
                     <th>To</th>
                     <th>Duration</th>
                  </tr>
                        </thead>
                        <tbody>
                  <tr>
                     <td>
                        <div class="air_logo" id="logo"><img src="turk.png" alt=""> </div>
                        <div>Airline name <br> type of plan</div>
                     </td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>duration *h **m</td>

                  </tr>

                  <tr>
                     <td>
                        <div class="air_logo" id="logo"><img src="jordan.png" alt=""> </div>
                        <div>Airline name <br> type of plan</div>
                     </td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>duration *h **m </td>

                  </tr>

                  </tbody>
                  </table>

                 </div>
              </div> 
            </div>
 <!-- INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND -->
 <!-- INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND -->
 <!-- INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND INBOUND -->

 <div class="inbound" id="inbound">

 <p style = "text-align: center; font-family: 'Open Sans', sans-serif; font-size: 20px; margin: 35px 0px;">
   The prices shown on this page are for one Adult. You can see the total price after you have chosen your flights.
</p>

 <div class="body_in">

<span class="bound_in" id="bound">INTBOUND TRIP</span>
 <br> 
<div class="big_label_in">
 <?php switch ($trip_mood) { case 'round trip':  echo $arrival_name_a;  break;  case 'one way':  echo $arrival_name;  break; }?>
 to 
 <?php switch ($trip_mood) { case 'round trip':  echo $destination_name_a;  break; case 'one way':  echo $destination_name;  break; }?> 
 on 
 <?php switch ($trip_mood) { case 'round trip':  echo $arrival_date_a;  break; case 'one way':  echo $arrival_date;  break; }?>
</div>
</div>

<div class="main_in" id="main">
              <div class="filter_bar_in">
                 <div class="filter_in">Edite Filter</div>
              </div>
              <div class="flight_list_in" >
                            
                 <div class="card_standard_in" id="standard">
                  <div class="flight_details_in" id="flight_details">
                     <div class="info1_in">
                        <div class="div1_in" id="arrival_time">
                        <?php switch ($trip_mood) { case 'round trip':  echo $arrival_time_a;  break; case 'one way':  echo $arrival_time;  break; }?>
                        </div> 
                        <div class="div2_in">
                        <?php switch ($trip_mood) { case 'round trip':  echo $arrival_sambol_a;  break; case 'one way':  echo $arrival_sambol;  break; }?>
                        </div> 
                        <div class="div3_in">
                        <?php switch ($trip_mood) { case 'round trip':  echo $arrival_name_a;  break; case 'one way':  echo $arrival_name;  break; }?>
                        </div> 
                     </div> 

                     <div class="info2_in"> <img src="bin1.png" alt="">  
                     <div class="text1_in"> 
                         <?php switch ($trip_mood) { case 'round trip':  echo $duration_v_a;  break; case 'one way':  echo $duration_v;  break; }?>
                     </div>  
                        <div class="text2_in">'num'stop(s)</div> 
                      </div>

                     <div class="info3_in">
                        <div class="div1_in">
                        <?php switch ($trip_mood) { case 'round trip':  echo $destination_time_a;  break; case 'one way':  echo $destination_time;  break; }?>
                        </div>  
                        <div class="div2_in">
                          <?php switch ($trip_mood) { case 'round trip':  echo $destination_sambol_a;  break; case 'one way':  echo $destination_sambol;  break; }?>
                        </div>  
                        <div class="div3_in">
                          <?php switch ($trip_mood) { case 'round trip':  echo $destination_name_a;  break; case 'one way':  echo $destination_name;  break; }?>
                        </div>
                     </div>
             
                     <div style="margin: 0 20px 0 20px;">
                        <div class="div0_in">Flight Duration</div>  
                        <div style="text-align: center;" class="div4_in">
                          <?php switch ($trip_mood) { case 'round trip':  echo $duration_v_a;  break; case 'one way':  echo $duration_v;  break; }?>
                        </div>
                        </div>

                     <div style="text-align: center; margin: 0 5px 0 5px; padding: 5px 0 5px 5px; border-left: 1px solid #ddd;">
                        <div class="div5_in">Itinerary details</div>  <img id="DA" src="arrow_svg.png" alt="">
                     </div>
                     
                     


                  </div>


                  <div>
                        <div class="economy_in" id="economy">
                           <span style="font-size: 14px; margin-right: 0px; color: cornflowerblue;">
                              Economy
                           </span>

                           <span style="display: inline-block;">
                              
                                 <span style="display: block; font-size: 11px;">Per Passenger</span>
                                 <span style="position: relative;">
                                 <span style="line-height: 15px; font-size: 17px;">
                                   USD <?php echo $str2 ?>
                                 </span>
                                 <span style="font-size:13px; position: absolute; top: 4px;">
                                   <?php echo $str1 ?>
                                 </span>
                              
                              </span>
                           
                        </div>
                  </div>
                  <div>
                     <div class="business_in" id="business">
                        <span style="font-size: 14px; margin-right: 0px; color: goldenrod;">

                           Business
                     </span>

                        <span style="display: inline-block;">
                           <span style="display: block; font-size: 11px;">Per Passenger</span>
                           <span style="position: relative;">
                           <span style="line-height: 15px; font-size: 17px;">USD <?php echo $str4 ?></span>
                           <span style="font-size:13px; position: absolute; top: 0;"><?php echo $str3 ?></span>
                           </span>
                        </span>
                     </div>
                  
               </div>

                 </div>

                 <div class="Details_in" id="D">

                  <table >
                     
                        <thead >
                     <tr >
                     <th>Flight</th>
                     <th>From</th>
                     <th>To</th>
                     <th>Duration</th>
                  </tr>
                        </thead>
                        <tbody>
                  <tr>
                     <td>
                        <div class="air_logo_in" id="logo"><img src="turk.png" alt=""> </div>
                        <div>Airline name <br> type of plan</div>
                     </td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>duration *h **m</td>

                  </tr>

                  <tr>
                     <td>
                        <div class="air_logo_in" id="logo"><img src="jordan.png" alt=""> </div>
                        <div>Airline name <br> type of plan</div>
                     </td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>time <br> date <br> distination_name & symbol <br> airline</td>
                     <td>duration *h **m </td>

                  </tr>

                  </tbody>
                  </table>

                 </div>


               
              </div> 
            </div>
</div>

<script src="Select_Flight.js"></script>
  </body>
</html>