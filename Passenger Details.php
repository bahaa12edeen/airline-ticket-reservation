<?php 
$num_adult = $_GET["sub_num_adult"];
$numOfPerson = $_GET["numOfPerson"];

$num_child = $_GET["sub_num_child"];
$flight_id = $_GET["sub_flight_id"];
$class = $_GET["sub_class"];

$total_price = $_GET["sub_total_price"];
$price = $_GET["sub_price"];
/*
console.log('total_price: '+".$total_price.");
console.log('price: '+".$price.");
*/
echo "<div id='go_to'>

<div id='numOfPerson' style='display: none;'>" .$numOfPerson. "</div>
<div id='flight_id' style='display: none;'>" .$flight_id. "</div>
<div id='class' style='display: none;'>" .$class. "</div>
<div id='num_adult' style='display: none;'>" .$num_adult. "</div>
<div id='num_child' style='display: none;'>" .$num_child. "</div>
<div id='total_price' style='display: none;'>" .$total_price. "</div>
<div id='price' style='display: none;'>" .$price. "</div>

</div>";
?>

<!-- ************************************************************* -->
<!-- ************************************************************* -->
<!-- ************************************************************* -->

<!DOCTYPE html>
<html lang="en">

   <head>
      <title>Airline - Passenger Details </title>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="Passenger Details.css">

      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
   </head>
   <body>

          <div class="navi">
        <div>
            <div id="do0"> <img src="vb.png" alt=""> </div>
            <div id="do1"><img src="arrow2.png" alt=""></div>
            <div id="do2">Select Flight</div>
            <div id="do3"><img src="arrow5.png" alt=""></div>
            <div>Passenger Details</div>
            <div><img src="arrow4.png" alt=""></div>
            <div>Payment</div>
            <div><img src="arrow2.png" alt=""></div>

        </div> 

      </div>

      <div class="stuffing"> abc </div>

      <form action="Payment.html" style="display: none;">
      <div>
         <fieldset class="details_field">
            <legend class="details_legend"><img src="person.png" alt="">Passenger details </legend>

            <div style="user-select: none; margin-top: 10px;">
               <div id="con1" style="display: inline-block;">
                   <div class="folto">
                       <div class="out">
                           <div class="in"></div>
                       </div>
                   </div>
           
                   <div class="folto2">
                       <input type="radio" name="gender" id="mr" name="mr">  
                       <label for="mr">Mr.</label>
                   </div>
                   <p style="clear: left;"></p>
           
               </div>
           
               <div id="con2" style="display: inline-block;">
                   <div class="folto">
                       <div class="out">
                           <div class="in"></div>
                       </div>  
                   </div>
           
                   <div class="folto2">
                       <input type="radio" name="gender" id="ms" name="ms">  
                       <label for="ms">Ms.</label>
                   </div>
                   <p style="clear: left;"></p>
           
               </div>
           </div>
           
            <div style="margin-top: 5px;">
               <div class="first_con" id="first_con">

                  <span id="first">first name</span>

                  <input type="text" class="first_name" id="first_name" name="first_name" required>
                  <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter a first name</span>
               </div>

               <div class="second_con" id="second_con">

                  <span id="last">last name</span>

                  <input type="text" class="last_name" id="last_name" name="last_name" required>
                  <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter a last name</span>
               </div>
            </div>

            <div style="margin-top: 20px; margin-bottom: 20px;">
               <div class="third_con" id="third_con">

                  <span id="birth">date of birth: DD/MM/YYYY</span>
                  <input type="text" class="date_of_birth" id="date_of_birth" name="date_of_birth" required>
                  <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the date</span>
               </div>
            </div>
         </fieldset>
      </div>

      <fieldset class="details_field" style="margin-bottom: 0; border-bottom: 0;">
         <legend class="details_legend"><img src="contact.png" alt="">&nbsp;Contact Details</legend>


         <div style="margin-top: 10px;">

            <div class="coun_code" id="coun_code">

               <span id="code">Country</span>
   
               <select class="c_code" id="c_code" style="min-height: 15px;" name="c_code" required>
                  <option value=""></option>
                  <option value="jo">jo</option>
                  <option value="istanbul">istanbul</option>
               </select>
               <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter a country code</span>
            </div>

            <div class="fifth_con" id="fifth_con">

               <span id="fifth">Phone number</span>

               <input type="text" class="phone" id="phone" name="phone number" required>
               <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter a phone number</span>
            </div>

         </div>

         <div>
            <div class="e_mail" id="e_mail">

               <span id="mail">E-mail</span>
               <input type="email" class="in_mail" id="in_mail" name="e_mail" required>
               <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the e-mail</span>
            </div>
         </div>


      </fieldset>
<!--
      <div style="text-align: center; width: 1024px; margin: 0 auto; background-color: #a8a8a8; border-radius: 0 0 10px 10px;
      border-width: 2px;
      border-style: groove;
      border-color: threedface;
      border-image: initial;">

      <input type="submit" value="Continue">
      </div> -->
      </form>

      <div id="dynamic_forms"></div>      
<form action="payment.php" method="GET" id="passengers_form" style="margin-bottom: 0px;">
      <input type="hidden" id="send_numOfPerson" name="numOfPerson">
      <input type="hidden" id="send_flight_id" name="flight_id">
      <input type="hidden" id="send_class" name="class">
      <input type="hidden" id="send_num_adult" name="num_adult">
      <input type="hidden" id="send_num_child" name="num_child">
      <input type="hidden" id="send_total_price" name="total_price">
      <input type="hidden" id="send_price" name="price">
</form>
   <script src="Passenger Details.js"></script>
  </body>
</html>