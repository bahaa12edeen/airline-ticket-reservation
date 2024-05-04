<?php

$numOfPerson = $_GET["numOfPerson"];
$flight_id = $_GET["flight_id"];
$id_count;
$class = $_GET["class"];
$num_adult = $_GET["num_adult"];
$num_child = $_GET["num_child"];
$total_price = $_GET["total_price"];
$price = floatVal($_GET["price"]);


$count = $num_adult + $num_child;


for($i=0; $i < $count; $i++){

   $first_name[] = $_GET['first_name'.$i];
   $last_name[] = $_GET['last_name'.$i];
   $gender[] = $_GET['gender'.$i];
   $date_of_birth[] = $_GET['date_of_birth'.$i];
   $c_code[] = $_GET['c_code'.$i];
   $phone_number[] = $_GET['phone_number'.$i];
   $e_mail[] = $_GET['e_mail'.$i];
}

$COUNT = (intVal($num_adult) + intVal($num_child));
//style='display: none;'
echo "<form action='ticket.php' method='GET' id='formo' style='display: none;'>
                 <input type='hidden' name='flight_id' value='$flight_id'>
                 <input type='hidden' name='COUNT' value='$COUNT'>
                 <input type='hidden' name='class' value='$class'>

                 <script>
                 var i,
                     first_name = [],
                     last_name = [],
                     first_nameArray = ".json_encode($first_name).",
                     last_nameArray = ".json_encode($last_name).";

                     for(i=0; i<'$COUNT'; i++){
                        first_name[i] = document.createElement('input');
                        first_name[i].setAttribute('type', 'hidden');
                        first_name[i].setAttribute('name', 'first_name'+'_'+(i+1));
                        first_name[i].setAttribute('id', 'first_name'+'_'+(i+1));
                        first_name[i].value = first_nameArray[i];
                        document.getElementById('formo').appendChild(first_name[i]);
   
                        last_name[i] = document.createElement('input');
                        last_name[i].setAttribute('type', 'hidden');
                        last_name[i].setAttribute('name', 'last_name'+'_'+(i+1));
                        last_name[i].setAttribute('id', 'last_name'+'_'+(i+1));
                        last_name[i].value = last_nameArray[i];
                        document.getElementById('formo').appendChild(last_name[i]);
                     }

                     //document.body.style='background-color: red;';
                     </script>
   
                    <input type='submit' id='sub_one_way' value='Search Flight' class='be2'>




               </form>";
   /*
                       <script>
                    document.getElementById('sub_one_way').click();
                    </script>
   */


echo "<script>
       console.log(". json_encode($gender) .");
</script>";





//<div id='flight_id' style='display: none;'>" .$flight_id. "</div>
echo "<div id='go_to'>

         <div id='numOfPerson' style='display: none;'>" .$numOfPerson. "</div>
         
         <div id='class' style='display: none;'>" .$class. "</div>
         <div id='num_adult' style='display: none;'>" .$num_adult. "</div>
         <div id='num_child' style='display: none;'>" .$num_child. "</div>
         <div id='total_price' style='display: none;'>total_price: " .$total_price. "</div>
         <div id='price' style='display: none;'>" .$price. "</div>
   </div>";

   /* *******************CONNECT********************** */

$dsn = "mysql:host=localhost;dbname=a_project";
$username = "root";
$password = "";

try{
   $con = new PDO($dsn, $username, $password);

   /******************************************** */

   $query1="SELECT flight_id  FROM flight_schedule WHERE 1";
   $result1 = $con->query($query1);
   $row1 = $result1->fetchAll(PDO::FETCH_ASSOC);

   foreach($row1 as $row){

      $flight_id = $row['flight_id'];
   }

   for($i=0; $i < $count; $i++){

      $date_of_birth[$i] = date("Y-m-d", strtotime($date_of_birth[$i]));
   }



   $stat="SELECT COUNT(customer_id) FROM customer WHERE 1";
   $result = $con->query($stat);
   $count2 = $result->fetch(PDO::FETCH_ASSOC);

   $id_count = $count2['COUNT(customer_id)'];

   $last_id = $id_count;

   echo "<div> LAST ID: ".$last_id."</div>";


   for($i=0; $i < $count; $i++){

      $data[$i] = array(
         ++$last_id,
         $first_name[$i],
         $last_name[$i],
         $gender[$i],
         $date_of_birth[$i],
         $c_code[$i],
         $phone_number[$i],
         $e_mail[$i],
         $flight_id,
         $class,
         $num_adult,
         $num_child,
         $price,
         $total_price,

      );
   }
   
   
echo "<script>
console.log(". json_encode($data) .");
</script>";


   /* ************************************************************************************************ */
   /* WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE  WRITE */  //'".$_GET["gender"]."', ////'".$last_id."','".$gender[$i]."','".$first_name[$i]."','".$last_name[$i]."','".$date_of_birth[$i]."','".$e_mail[$i]."','".$phone_number[$i]."','".$c_code[$i]."','".$_GET["class"]."','".$_GET["num_adult"]."','".$_GET["num_child"]."','".$_GET["price"]."','".$_GET["total_price"]."'
   /* ************************************************************************************************ */

      echo "<script>console.log('&i: '+".$i."); console.log('&count: '+".$count.");</script>";
      $sql = "INSERT INTO customer (customer_id, first_name, last_name, gender, birth_date, customer_country, customer_phone_number, customer_email, flight_id, class, adult_num, child_num, price, total_price)
              VALUES ";

$insertQuery = array();
$insertData = array();
$n = 0;

foreach ($data as $row) {
   $insertQuery[] = '(:id' . $n . ', :first' . $n . ', :last' . $n . ', :gender' . $n . ', :birth' . $n . ', :code' . $n . ', :phone' . $n . ', :mail' . $n . ', :flight' . $n . ', :class' . $n . ', :adult' . $n . ', :child' . $n . ', :price' . $n . ', :total' . $n . ')';
   $insertData['id' . $n] = $data[$n][0];
   $insertData['first' . $n] = $data[$n][1];
   $insertData['last' . $n] = $data[$n][2];
   $insertData['gender' . $n] = $data[$n][3];
   $insertData['birth' . $n] = $data[$n][4];
   $insertData['code' . $n] = $data[$n][5];
   $insertData['phone' . $n] = $data[$n][6];
   $insertData['mail' . $n] = $data[$n][7];
   $insertData['flight' . $n] = $data[$n][8];
   $insertData['class' . $n] = $data[$n][9];
   $insertData['adult' . $n] = $data[$n][10];
   $insertData['child' . $n] = $data[$n][11];
   $insertData['price' . $n] = $data[$n][12];
   $insertData['total' . $n] = $data[$n][13];
   $n++;
}

if (!empty($insertQuery)) {
   $sql .= implode(', ', $insertQuery);
   $stmt = $con->prepare($sql);
   $stmt->execute($insertData);
}

      $con = null;

}
catch(PDOException $e){
   $message = $e->getMessage();
   echo $message;
   exit();
}
?>


<!DOCTYPE html>
<html lang="en">

   <head>
      <title>Airline - Payment</title>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="Payment.css">

      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet">

   </head>
   <body>

      <div class="navi">
         <div>
             <div id="do0"> <img src="vb.png" alt=""> </div>
             <div><img src="arrow2.png" alt=""></div>
             <div id="do1">Select Flight</div>
             <div><img src="arrow2.png" alt=""></div>
             <div id="do2">Passenger Details</div>
             <div><img src="arrow5.png" alt=""></div>
             <div>Payment</div>
             <div><img src="arrow4.png" alt=""></div>
 
         </div> 
 
      </div>
 
      <div class="stuffing"> abc </div>
 
      <div class="body">
         <div class="first_line">

            <span class="title"><h2 style="display: inline;">Credit Card</h2></span>

            <span class="cards">
               <img src="https://www.turkishairlines.com/theme/img/payment/small-images/cctype_mastercard.png" alt="">
               <img src="https://www.turkishairlines.com/theme/img/payment/small-images/cctype_visa.png" alt="">
               <img src="	https://www.turkishairlines.com/theme/img/payment/small-images/cctype_maestro.png" alt="">
               <img src="	https://www.turkishairlines.com/theme/img/payment/small-images/cctype_visaelectron.png" alt="">
               <img src="https://www.turkishairlines.com/theme/img/payment/small-images/cctype_troy.png" alt="">
               <img src="	https://www.turkishairlines.com/theme/img/payment/small-images/cctype_American_Express_(Amex).png" alt="">
               <img src="https://www.turkishairlines.com/theme/img/payment/small-images/cctype_uatp.png" alt="">
               <img src="	https://www.turkishairlines.com/theme/img/payment/small-images/cctype_jcb.png" alt="">
               <img src="	https://www.turkishairlines.com/theme/img/payment/small-images/cctype_Diners_Club.png" alt="">
               <img src="https://www.turkishairlines.com/theme/img/payment/small-images/cctype_discover.png" alt="">
               <img src="	https://www.turkishairlines.com/theme/img/payment/small-images/cctype_bancontact.png" alt="">
            </span>

         </div>
   <form style="margin-bottom: 0px;">

         <div class="main">

         <div class="part1">

            <h2>Card holder address</h2>

            <div class="label">Country/Region of residence</div>
            <select class="region" name="" id="region" required>
               <option disabled selected value="">Country/Region</option>
               <option value="abc">abc</option>
               <option value=""></option>
            </select>
            <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the e-mail</span>
            
            <div class="label">State</div>
            <input type="text" placeholder="State" id="state" required>
            <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the e-mail</span>


            <div class="label">City</div>
            <input type="text" placeholder="City" id="city" required>
            <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the e-mail</span>


         </div>
         
         <div class="testo">
         <div class="part2">

            <h2>Card details</h2>

            <div class="label">Card number </div>
            <input type="text" id="number" placeholder="#### #### #### ####" required>
            <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the e-mail</span>


                  <div class="label" style="width: 336px; margin-bottom: 7px;">Expiry date <span style="float: right;">CVC</span></div>

                  <div style="display: flex; justify-content: space-between;">

                  <select name="" class="Expiry" id="expiry" required>
                     <option disabled selected value="">month</option>
                     <option value=""></option>
                     <option value=""></option>
                  </select>


               <select name="" class="Expiry" id="expiry" required>
                  <option disabled selected value="">year</option>
                  <option value=""></option>
                  <option value=""></option>
               </select>


               <input type="text" class="Expiry1" id="expiry" placeholder="###" required>
            </div>
            <span id="first_w" ><img  src="warning.png" alt="">&nbsp;Please enter the month</span>
            <span id="first_w" ><img  src="warning.png" alt="">&nbsp;Please enter the year</span>
            <span id="first_w" ><img  src="warning.png" alt="">&nbsp;Please enter the number</span>
            <br> <hr>

            <div class="label">Zip/Postal code</div>
            <input type="text" id="postcode" placeholder="Postcode" required>
            <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the e-mail</span>

            <div class="label">Address </div>
            <input type="text" id="address" placeholder="Address" required>
            <span id="first_w"><img  src="warning.png" alt="">&nbsp;Please enter the e-mail</span>

         </div>
         </div>
         </div>

      </div>

      <div class="submit">
         <div id="submit" class="button" style="width: fit-content; margin: 0px auto;"> submit </div>
      </div>
   </form>

   <script>

                  document.getElementById('submit').onclick = function(){
                     document.getElementById('sub_one_way').click();
                  };
   </script>
   
   <script src="Payment.js">

   </script>

   </body>
</html>