<link rel="stylesheet" href="testr.css">
<?php
$router = 1;

$trip_mood = $_GET["trip_path"];
$number_adult = $_GET['number_adult'];
$number_child = $_GET['number_child'];

switch($trip_mood){
   case 'round trip':

      $current_city = $_GET["current_city"];
      $destination_city = $_GET["destination"];

      $date_arriv = $_GET['date_arriv'];
      $date_return = $_GET['date_return'];

      $number_adult = $_GET['number_adult'];
      $number_child = $_GET['number_child'];
      break;

      case 'one way':

         $current_city = $_GET["current_city"];
         $destination_city = $_GET["destination"];

         $date_arriv = $_GET['date_arriv'];

         break;

         case 'multi-city':
            $trip_count = $_GET['trip_count'];

            for($i = 1; $i <= $trip_count; $i++){

               $arrival_sign[] = 'arrival_city' . $i;
               echo $arrival_sign[$i-1] . " - ";
               $arrival_city[] = $_GET[ $arrival_sign[$i-1] ];
               echo $arrival_city[$i-1] . "<br>";

               $desti_sign[] = 'destination_city' . $i;
               $destination_city[] = $_GET[ $desti_sign[$i-1] ];

               $date_sign[] = 'trip_date' . $i;
               $trip_date[] = $_GET[ $date_sign[$i-1] ];
            }
            break;
}


/* *******************CONNECT********************** */

$dsn = "mysql:host=localhost;dbname=a_project";
$username = "root";
$password = "";

try{
   $con = new PDO($dsn, $username, $password);
   /*
   echo "<span style='font-size:30px;'>" . "you have connected!" . "</span>";
   */
}
catch(PDOException $e){
   $message = $e->getMessage();
   echo $message;
   exit();
}

/* *******************READ********************** */ /*echo "<br> <br>";*/
/*
$statement = "SELECT * FROM customer";
*/
/*
foreach($con->query($statement, PDO::FETCH_ASSOC) as $row){
   echo implode(" ", $row) . "<br>";
}
*/
/*-*-*-*-*-*-*//*echo "<br><hr>    ";*//*-*-*-*-*-*-*-*/
/*
$query="SELECT * FROM customer";
$result = $con->query($query);
$row = $result->fetch(PDO::FETCH_ASSOC);
*/
/*
echo "<pre style='font-size:20px;'>";
print_r($row);
echo "</pre>";
*/
/*------------------*///round trip


switch($trip_mood){
   case 'round trip':

            $query1="SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city'";
            $result1 = $con->query($query1);
            $row1 = $result1->fetchAll(PDO::FETCH_ASSOC);

            $stat5="SELECT COUNT(*) FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city' ";
            $result5 = $con->query($stat5);
            $count5 = $result5->fetch(PDO::FETCH_ASSOC);

            $query2="SELECT * FROM flight_schedule WHERE arrival_name = '$destination_city' AND arrival_date = '$date_return' AND destination_name = '$current_city'";
            $result2 = $con->query($query2);
            $row2 = $result2->fetchAll(PDO::FETCH_ASSOC);

            $stat6="SELECT COUNT(*) FROM flight_schedule WHERE arrival_name = '$destination_city' AND arrival_date = '$date_return' AND destination_name = '$current_city' ";
            $result6 = $con->query($stat6);
            $count6 = $result6->fetch(PDO::FETCH_ASSOC);

/*******************************************************************************************************/
/*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*/
/*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*/
/*******************************************************************************************************/

            if($row1 && $row2){
               echo "<pre style='font-size:20px;'>";
               print_r($row1);
               echo "</pre>";

               $stmt = $con->query("SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city'");
               while ($row = $stmt->fetch(PDO::FETCH_NUM)) {
                 print "<p>Name: $row[0] $row[1]</p>";
               }

               $result = $con->prepare("SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city'");
		         $result->execute();
		for($i=0; $row = $result->fetch(); $i++){
	?>
		<tr>
         <pre style='font-size:20px;'>
			  <td><?php echo $row['arrival_name']; ?></td>
			  <td><?php echo $row['destination_name']; ?></td>
			  <td><?php echo $row['arrival_date']; ?></td>
         </pre>
		</tr>
		<?php } 

               $tickets = $con->query("SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city'")->fetchAll();
               foreach($tickets as $ticket) {
                  echo "<pre style='font-size:20px;'>";
                  echo $ticket['arrival_name'];
                  echo "</pre>";
               }

               $stmt = $con->prepare("SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city'");
$stmt->execute();
$users = $stmt->fetchAll();


foreach ($users as $user)
{
   echo "<pre style='font-size:20px;'>";
   echo "testo: ".$user['flight_id'];
   echo "BIG BOSS";
   echo "</pre>";
    echo $user['flight_id']
    . ' - ' . $user['arrival_name'] 
    . ' - ' . $user['destination_name'] 
    . ' - ' . $user['arrival_date'] 
    . '<br>';
}

$sql = "SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city'";

foreach($con->query($sql, PDO::FETCH_ASSOC) as $row){
    echo "<pre style='font-size:20px;'>";
    echo 'ID:- ' . $row['flight_id'] . '<br>';
    echo 'Make: ' . $row['arrival_name'] . '<br>';
    echo 'Model: ' . $row['destination_name'] . '<br>';
    echo "</pre>";
}

echo "<div style='background-color: white; padding: 5px 20px; width: fit-content;'>";
/***/
$sql = "SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city'";
$statement = $con->prepare($sql);
$statement->execute();
$rows = $statement->fetchAll(PDO::FETCH_ASSOC);

foreach($rows as $row){
   echo "<pre style='font-size:20px;'>";
   echo 'BIG TEST:- ' . $row['flight_id'] . '<br>';
   echo 'Mak: ' . $row['arrival_name'] . '<br>';
   echo "</pre>";
}
/***/
echo "</div>";

               echo "<pre style='font-size:20px;'>";
               print_r($row2);
               echo "</pre>";
/*******************************************************************************************************/
/*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*/
/*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*FETCH*/
/*******************************************************************************************************/
               $COUNT_a = $count5['COUNT(*)'];

               $flight_id_a = $row1['flight_id'];
               $arrival_sambol_a = $row1['arrival_sambol'];
               $arrival_name_a = $row1['arrival_name'];
               $arrival_date_a = $row1['arrival_date'];
               $arrival_time_a = $row1['arrival_time'];
               $destination_sambol_a = $row1['destination_sambol'];
               $destination_name_a = $row1['destination_name'];
               $destination_date_a = $row1['destination_date'];
               $destination_time_a = $row1['destination_time'];
               $duration_a = $row1['duration'];
               $Economy_price_a = $row1['Economy_price'];
               $business_price_a = $row1['business_price'];


               $COUNT_r = $count6['COUNT(*)'];

               $flight_id_r = $row2['flight_id'];
               $arrival_sambol_r = $row2['arrival_sambol'];
               $arrival_name_r = $row2['arrival_name'];
               $arrival_date_r = $row2['arrival_date'];
               $arrival_time_r = $row2['arrival_time'];
               $destination_sambol_r = $row2['destination_sambol'];
               $destination_name_r = $row2['destination_name'];
               $destination_date_r = $row2['destination_date'];
               $destination_time_r = $row2['destination_time'];
               $duration_r = $row2['duration'];
               $Economy_price_r = $row2['Economy_price'];
               $business_price_r = $row2['business_price'];

               $query3="SELECT * FROM view_time WHERE flight_id = '$flight_id_a'";
               $result3 = $con->query($query3);
               $row3 = $result3->fetchAll(PDO::FETCH_ASSOC);
      
               $ah_time_a = $row3['ah_time'];
               $dh_time_a = $row3['dh_time'];
               $am_time_a = $row3['am_time'];
               $dm_time_a = $row3['dm_time'];
               $duration_v_a = $row3['duration_v'];
               $a_date_a = $row3['a_date'];
               $d_date_a = $row3['d_date'];

               $query4="SELECT * FROM view_time WHERE flight_id = '$flight_id_r'";
               $result4 = $con->query($query4);
               $row4 = $result4->fetchAll(PDO::FETCH_ASSOC);
      
               $ah_time_r = $row4['ah_time'];
               $dh_time_r = $row4['dh_time'];
               $am_time_r = $row4['am_time'];
               $dm_time_r = $row4['dm_time'];
               $duration_v_r = $row4['duration_v'];
               $a_date_r = $row4['a_date'];
               $d_date_r = $row4['d_date'];

                  $nwe1 = Str_split ($Economy_price_a, 1); 
                  print_r($nwe1);
                  echo "<hr>";
                  $index1 = array_search(".", $nwe1);
                  echo "value: " . "\"" . $nwe1[$index1] . "\"" . "<br>";
                  echo "index: " . $index1 . "<br>";
                  $str1 = substr($Economy_price_a, $index1);
                  echo "cutting price1:- " . $str1;
                  $str2 = rtrim($Economy_price_a, $str1);
                  echo "<br>" . "cutting price2:- " . $str2;

                  $nwe2 = Str_split ($business_price_a, 1); 
                  print_r($nwe2);
                  echo "<hr>";
                  $index2 = array_search(".", $nwe2);
                  echo "value: " . "\"" . $nwe2[$index2] . "\"" . "<br>";
                  echo "index: " . $index2 . "<br>";
                  $str3 = substr($business_price_a, $index2);
                  echo "cutting price1:- " . $str3;
                  $str4 = rtrim($business_price_a, $str3);
                  echo "<br>" . "cutting price2:- " . $str4;

/* ********************************************************************************************** */
/* ********************************************************************************************** */

                  $nwe3 = Str_split ($Economy_price_r, 1); 
                  print_r($nwe3);
                  echo "<hr>";
                  $index3 = array_search(".", $nwe3);
                  echo "value: " . "\"" . $nwe3[$index3] . "\"" . "<br>";
                  echo "index: " . $index3 . "<br>";
                  $str5 = substr($Economy_price_r, $index3);
                  echo "cutting price1:- " . $str5;
                  $str6 = rtrim($Economy_price_r, $str5);
                  echo "<br>" . "cutting price2:- " . $str6;

                  $nwe4 = Str_split ($business_price_r, 1); 
                  print_r($nwe4);
                  echo "<hr>";
                  $index4 = array_search(".", $nwe4);
                  echo "value: " . "\"" . $nwe4[$index4] . "\"" . "<br>";
                  echo "index: " . $index4 . "<br>";
                  $str7 = substr($business_price_r, $index4);
                  echo "cutting price1:- " . $str7;
                  $str8 = rtrim($business_price_r, $str7);
                  echo "<br>" . "cutting price2:- " . $str8 . "<br>";
                  echo "<hr>";

                  echo '<form action="Select Flight.php" method="GET"> 
                  <input type="hidden" name="trip_mood" value="' . $trip_mood . '">
                  <input type="hidden" name="COUNT_a" value="' . $COUNT_a . '">

                  <input type="hidden" name="arrival_sambol_a" value="' . $arrival_sambol_a . '">
                  <input type="hidden" name="arrival_name_a" value="' . $arrival_name_a . '">
                  <input type="hidden" name="arrival_date_a" value="' . $arrival_date_a . '">
                  <input type="hidden" name="arrival_time_a" value="' . $arrival_time_a . '">
                  <input type="hidden" name="destination_sambol_a" value="' . $destination_sambol_a . '">
                  <input type="hidden" name="destination_name_a" value="' . $destination_name_a . '">

                  <input type="hidden" name="destination_date_a" value="' . $destination_date_a . '">

                  <input type="hidden" name="destination_time_a" value="' . $destination_time_a . '">
                  <input type="hidden" name="duration_a" value="' . $duration_a . '">

                 <input type="hidden" name="Economy_price_a" value="' . $Economy_price_a . '">
                 <input type="hidden" name="str1" value="' . $str1 . '">
                 <input type="hidden" name="str2" value="' . $str2 . '">

                 <input type="hidden" name="business_price_a" value="' . $business_price_a . '">
                 <input type="hidden" name="str3" value="' . $str3 . '">
                 <input type="hidden" name="str4" value="' . $str4 . '">

                 <input type="hidden" name="ah_time_a" value="' . $ah_time_a . '">
                 <input type="hidden" name="dh_time_a" value="' . $dh_time_a . '">
                 <input type="hidden" name="am_time_a" value="' . $am_time_a . '">
                 <input type="hidden" name="dm_time_a" value="' . $dm_time_a . '">
                 <input type="hidden" name="duration_v_a" value="' . $duration_v_a . '">
                 <input type="hidden" name="a_date_a" value="' . $a_date_a . '">
                 <input type="hidden" name="d_date_a" value="' . $d_date_a . '">

<!-- */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/* -->
<!-- */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/* -->

                 <input type="hidden" name="COUNT_r" value="' . $COUNT_r . '">

                 <input type="hidden" name="arrival_sambol_r" value="' . $arrival_sambol_r . '">
                 <input type="hidden" name="arrival_name_r" value="' . $arrival_name_r . '">
                 <input type="hidden" name="arrival_date_r" value="' . $arrival_date_r . '">
                 <input type="hidden" name="arrival_time_r" value="' . $arrival_time_r . '">
                 <input type="hidden" name="destination_sambol_r" value="' . $destination_sambol_r . '">
                 <input type="hidden" name="destination_name_r" value="' . $destination_name_r . '">

                 <input type="hidden" name="destination_date_r" value="' . $destination_date_r . '">

                 <input type="hidden" name="destination_time_r" value="' . $destination_time_r . '">
                <input type="hidden" name="duration_r" value="' . $duration_r . '">
     
                <input type="hidden" name="Economy_price_r" value="' . $Economy_price_r . '">
                <input type="hidden" name="str5" value="' . $str5 . '">
                <input type="hidden" name="str6" value="' . $str6 . '">

                <input type="hidden" name="business_price_r" value="' . $business_price_r . '">
                <input type="hidden" name="str7" value="' . $str7 . '">
                <input type="hidden" name="str8" value="' . $str8 . '">

               <input type="hidden" name="ah_time_r" value="' . $ah_time_r . '">
               <input type="hidden" name="dh_time_r" value="' . $dh_time_r . '">
               <input type="hidden" name="am_time_r" value="' . $am_time_r . '">
               <input type="hidden" name="dm_time_r" value="' . $dm_time_r . '">
               <input type="hidden" name="duration_v_r" value="' . $duration_v_r . '">
               <input type="hidden" name="a_date_r" value="' . $a_date_r . '">
               <input type="hidden" name="d_date_r" value="' . $d_date_r . '">

               <input type="submit" value="Search Flight" class="be2">
            </form>';
         }
         else{
            echo "<div class='alert_container'>
                     <div class='alert'>Sorry, the flight you requested is not available at the moment</div>
                     <div class='ok_butt' id='ok_butt'>OK</div>
                 </div>
                 <script>
                    document.getElementById('ok_butt').onclick = function(){window.location = 'main.html'}
                 </script>";
      }
      break;

/* one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way */
/* one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way */
/* one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way-one_way */

   case 'one way':

      $query1="SELECT * FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city' ";
      $result1 = $con->query($query1);
      $row1 = $result1->fetchAll(PDO::FETCH_ASSOC);

      $stat="SELECT COUNT(*) FROM flight_schedule WHERE arrival_name = '$current_city' AND arrival_date = '$date_arriv' AND destination_name = '$destination_city' ";
      $result = $con->query($stat);
      $count2 = $result->fetch(PDO::FETCH_ASSOC);

      if($row1){

         echo "<pre style='font-size:20px;'>";
         print_r($row1);
         echo "</pre>";

      $COUNT = $count2['COUNT(*)'];

      foreach($row1 as $row) //foreach($row1 as $row) $row['flight_id']
      {                     //echo $row2[0][0]['flight_id']
         $flight_id[] = $row['flight_id'];
         $arrival_sambol[] = $row['arrival_sambol'];
         $arrival_name[] = $row['arrival_name'];
         $arrival_date[] = $row['arrival_date'];
         $arrival_time[] = $row['arrival_time'];
         $arrival_country[] = $row['departure_country'];
         $arrival_airport[] = $row['departure_airport'];

         $destination_sambol[] = $row['destination_sambol'];
         $destination_name[] = $row['destination_name'];
         $destination_date[] = $row['destination_date'];
         $destination_time[] = $row['destination_time'];
         $destination_country[] = $row['arrival_country'];
         $destination_airport[] = $row['arrival_airport'];

         $duration[] = $row['duration'];
         $Economy_price[] = $row['Economy_price'];
         $business_price[] = $row['business_price'];

         $airline_logo[] = $row['airline_logo'];
         $airline_name[] = $row['airline_name'];
         $the_plan[] = $row['the_plan'];
      }

      echo '<script> console.log("HARD TEST: "+'.$flight_id[$COUNT-1].') </script>';
/*
      echo "<span style='font-size:20px;'>BIG TEST: </span>";
      for($i=0; $i<$COUNT; $i++){
         echo $flight_id[$i] . "<br>";
      }

$sql = "UPDATE flight_schedule SET arrival_name = :b WHERE arrival_date = '2021-09-02'";
$stmt = $con->prepare($sql);
$stmt->bindValue(":b", $current_city, PDO::PARAM_STR);
$stmt->execute();
*/
for($i=0; $i<$COUNT; $i++){
   
      $query2="SELECT * FROM view_time WHERE flight_id = :z";
      $result2 = $con->prepare($query2);
      $result2->bindValue(":z", $flight_id[$i], PDO::PARAM_STR);
      echo "i: ".$i." flight_id: ".$flight_id[$i]."<br>";
      $result2->execute();
      $row2[] = $result2->fetchAll(PDO::FETCH_ASSOC);
   }
/*
   echo "<pre style='font-size:20px;'>";
   echo $row2[0][0]['airline_logo']; //echo $row2[0][0]['flight_id']
   echo "</pre>";
*/
/*
   echo "<pre style='font-size:20px;'>";
   print_r($row2);
   echo "</pre>";
*/
      for($i=0; $i<$COUNT; $i++)
      {
         $ah_time[] = $row2[$i][0]['ah_time'];
         $dh_time[] = $row2[$i][0]['dh_time'];
         $am_time[] = $row2[$i][0]['am_time'];
         $dm_time[] = $row2[$i][0]['dm_time'];
         $duration_v[] = $row2[$i][0]['duration_v'];
         $a_date[] = $row2[$i][0]['a_date'];
         $d_date[] = $row2[$i][0]['d_date'];
      }



      echo "<pre style='font-size:20px;'>";
      print_r($ah_time);
      echo "</pre>";

for($i=0; $i<$COUNT; $i++){
   $nwe = Str_split ($Economy_price[$i], 1); 
   /*
   print_r($nwe);
   */
   echo "<hr>";
   $index = array_search(".", $nwe);
   
   echo "value: " . "\"" . $nwe[$index] . "\"" . "<br>";
   echo "index: " . $index . "<br>";
   
   $str1 = substr($Economy_price[$i], $index);
   
   echo "cutting price1:- " . $str1;
   $stt1[] = $str1;
   $str2 = rtrim($Economy_price[$i], $str1);

   print_r("<br>" . "cutting price2:- " . $str2);
   $stt2[] = $str2;
}


for($i=0; $i<$COUNT; $i++){
   $nwe2 = Str_split ($business_price[$i], 1); 
   echo "<hr>";
   print_r($nwe2);
   $index2 = array_search(".", $nwe2);
   echo "value: " . "\"" . $nwe2[$index2] . "\"" . "<br>";
   echo "index: " . $index2 . "<br>";
   $str3 = substr($business_price[$i], $index2);
   $stt3[] = $str3;
   echo "cutting price1:- " . $str3;
   $str4 = rtrim($business_price[$i], $str3);
   $stt4[] = $str4;
   echo "<br>" . "cutting price2:- " . $str4 . "<br>";
}


echo "<form action='Select Flight.php' method='GET' id='formo'>
                 <input type='hidden' name='trip_mood' value='$trip_mood'>
                 <input type='hidden' name='COUNT' value= '$COUNT'>

                 <input type='hidden' name='number_adult' value= '$number_adult'>
                 <input type='hidden' name='number_child' value= '$number_child'>

                 <p>trip_mood = ' . $trip_mood . '</p>

                 <script>
                 var i,
                     flight_id = [],
                     arrival_sambol = [],
                     arrival_name = [],
                     arrival_date = [],
                     arrival_time = [],
                     arrival_country = [],
                     arrival_airport = [],
                     destination_sambol = [],
                     destination_name = [],
                     destination_date = [],
                     destination_time = [],
                     destination_country = [],
                     destination_airport = [],
                     duration = [],
                     Economy_price = [],
                     business_price = [],

                     ah_time = [],
                     dh_time = [],
                     am_time = [],
                     dm_time = [],
                     duration_v = [],
                     a_date = [],
                     d_date = [],

                     stt1 = [],
                     stt2 = [],
                     stt3 = [],
                     stt4 = [],

                     airline_logo = [],
                     airline_name = [],
                     the_plan = [],

                     flight_idArray = ".json_encode($flight_id).",
                     passedArray = ".json_encode($arrival_sambol).",
                     arrival_nameArray = ".json_encode($arrival_name).",
                     arrival_dateArray = ".json_encode($arrival_date).",
                     arrival_timeArray = ".json_encode($arrival_time).",
                     arrival_countryArray = ".json_encode($arrival_country).",
                     arrival_airportArray = ".json_encode($arrival_airport).",
                     destination_sambolArray = ".json_encode($destination_sambol).",
                     destination_nameArray = ".json_encode($destination_name).",
                     destination_dateArray = ".json_encode($destination_date).",
                     destination_timeArray = ".json_encode($destination_time).",
                     destination_countryArray = ".json_encode($destination_country).",
                     destination_airportArray = ".json_encode($destination_airport).",
                     durationArray = ".json_encode($duration).",
                     Economy_priceArray = ".json_encode($Economy_price).",
                     business_priceArray = ".json_encode($business_price).",

                     ah_timeArray = ".json_encode($ah_time).",
                     dh_timeArray = ".json_encode($dh_time).",
                     am_timeArray = ".json_encode($am_time).",
                     dm_timeArray = ".json_encode($dm_time).",
                     duration_vArray = ".json_encode($duration_v).",
                     a_dateArray = ".json_encode($a_date).",
                     d_dateArray = ".json_encode($d_date).",

                     stt1Array = ".json_encode($stt1).",
                     stt2Array = ".json_encode($stt2).",
                     stt3Array = ".json_encode($stt3).",
                     stt4Array = ".json_encode($stt4).",

                     airline_logoArray = ".json_encode($airline_logo).",
                     airline_nameArray = ".json_encode($airline_name).",
                     the_planArray = ".json_encode($the_plan).";

                     console.log('arrival_country: '+arrival_countryArray);
                     console.log('arrival_country: '+arrival_countryArray[i]);

                     for(i=0; i<'$COUNT'; i++){
                     flight_id[i] = document.createElement('input');
                     flight_id[i].setAttribute('type', 'hidden');
                     flight_id[i].setAttribute('name', 'flight_id'+'_'+(i+1));
                     flight_id[i].setAttribute('id', 'flight_id'+'_'+(i+1));
                     flight_id[i].value = flight_idArray[i];
                     document.getElementById('formo').appendChild(flight_id[i]);

                     arrival_sambol[i] = document.createElement('input');
                     arrival_sambol[i].setAttribute('type', 'hidden');
                     arrival_sambol[i].setAttribute('name', 'arrival_sambol'+'_'+(i+1));
                     arrival_sambol[i].setAttribute('id', 'arrival_sambol'+'_'+(i+1));
                     arrival_sambol[i].value = passedArray[i];
                     document.getElementById('formo').appendChild(arrival_sambol[i]);

                     arrival_name[i] = document.createElement('input');
                     arrival_name[i].setAttribute('type', 'hidden');
                     arrival_name[i].setAttribute('name', 'arrival_name'+'_'+(i+1));
                     arrival_name[i].setAttribute('id', 'arrival_name'+'_'+(i+1));
                     arrival_name[i].value = arrival_nameArray[i];
                     document.getElementById('formo').appendChild(arrival_name[i]);

                     arrival_date[i] = document.createElement('input');
                     arrival_date[i].setAttribute('type', 'hidden');
                     arrival_date[i].setAttribute('name', 'arrival_date'+'_'+(i+1));
                     arrival_date[i].setAttribute('id', 'arrival_date'+'_'+(i+1));
                     arrival_date[i].value = arrival_dateArray[i];
                     document.getElementById('formo').appendChild(arrival_date[i]);

                     arrival_time[i] = document.createElement('input');
                     arrival_time[i].setAttribute('type', 'hidden');
                     arrival_time[i].setAttribute('name', 'arrival_time'+'_'+(i+1));
                     arrival_time[i].setAttribute('id', 'arrival_time'+'_'+(i+1));
                     arrival_time[i].value = arrival_timeArray[i];
                     document.getElementById('formo').appendChild(arrival_time[i]);

                     arrival_country[i] = document.createElement('input');
                     arrival_country[i].setAttribute('type', 'hidden');
                     arrival_country[i].setAttribute('name', 'arrival_country'+'_'+(i+1));
                     arrival_country[i].setAttribute('id', 'arrival_country'+'_'+(i+1));
                     arrival_country[i].value = arrival_countryArray[i];
                     document.getElementById('formo').appendChild(arrival_country[i]);

                     console.log('arrival_country: '+arrival_countryArray[i]);

                     arrival_airport[i] = document.createElement('input');
                     arrival_airport[i].setAttribute('type', 'hidden');
                     arrival_airport[i].setAttribute('name', 'arrival_airport'+'_'+(i+1));
                     arrival_airport[i].setAttribute('id', 'arrival_airport'+'_'+(i+1));
                     arrival_airport[i].value = arrival_airportArray[i];
                     document.getElementById('formo').appendChild(arrival_airport[i]);

                     destination_sambol[i] = document.createElement('input');
                     destination_sambol[i].setAttribute('type', 'hidden');
                     destination_sambol[i].setAttribute('name', 'destination_sambol'+'_'+(i+1));
                     destination_sambol[i].setAttribute('id', 'destination_sambol'+'_'+(i+1));
                     destination_sambol[i].value = destination_sambolArray[i];
                     document.getElementById('formo').appendChild(destination_sambol[i]);

                     destination_name[i] = document.createElement('input');
                     destination_name[i].setAttribute('type', 'hidden');
                     destination_name[i].setAttribute('name', 'destination_name'+'_'+(i+1));
                     destination_name[i].setAttribute('id', 'destination_name'+'_'+(i+1));
                     destination_name[i].value = destination_nameArray[i];
                     document.getElementById('formo').appendChild(destination_name[i]);

                     destination_date[i] = document.createElement('input');
                     destination_date[i].setAttribute('type', 'hidden');
                     destination_date[i].setAttribute('name', 'destination_date'+'_'+(i+1));
                     destination_date[i].setAttribute('id', 'destination_date'+'_'+(i+1));
                     destination_date[i].value = destination_dateArray[i];
                     document.getElementById('formo').appendChild(destination_date[i]);

                     destination_country[i] = document.createElement('input');
                     destination_country[i].setAttribute('type', 'hidden');
                     destination_country[i].setAttribute('name', 'destination_country'+'_'+(i+1));
                     destination_country[i].setAttribute('id', 'destination_country'+'_'+(i+1));
                     destination_country[i].value = destination_countryArray[i];
                     document.getElementById('formo').appendChild(destination_country[i]);

                     destination_airport[i] = document.createElement('input');
                     destination_airport[i].setAttribute('type', 'hidden');
                     destination_airport[i].setAttribute('name', 'destination_airport'+'_'+(i+1));
                     destination_airport[i].setAttribute('id', 'destination_airport'+'_'+(i+1));
                     destination_airport[i].value = destination_airportArray[i];
                     document.getElementById('formo').appendChild(destination_airport[i]);

                     destination_time[i] = document.createElement('input');
                     destination_time[i].setAttribute('type', 'hidden');
                     destination_time[i].setAttribute('name', 'destination_time'+'_'+(i+1));
                     destination_time[i].setAttribute('id', 'destination_time'+'_'+(i+1));
                     destination_time[i].value = destination_timeArray[i];
                     document.getElementById('formo').appendChild(destination_time[i]);

                     duration[i] = document.createElement('input');
                     duration[i].setAttribute('type', 'hidden');
                     duration[i].setAttribute('name', 'duration'+'_'+(i+1));
                     duration[i].setAttribute('id', 'duration'+'_'+(i+1));
                     duration[i].value = durationArray[i];
                     document.getElementById('formo').appendChild(duration[i]);

                     Economy_price[i] = document.createElement('input');
                     Economy_price[i].setAttribute('type', 'hidden');
                     Economy_price[i].setAttribute('name', 'Economy_price'+'_'+(i+1));
                     Economy_price[i].setAttribute('id', 'Economy_price'+'_'+(i+1));
                     Economy_price[i].value = Economy_priceArray[i];
                     document.getElementById('formo').appendChild(Economy_price[i]);

                     business_price[i] = document.createElement('input');
                     business_price[i].setAttribute('type', 'hidden');
                     business_price[i].setAttribute('name', 'business_price'+'_'+(i+1));
                     business_price[i].setAttribute('id', 'business_price'+'_'+(i+1));
                     business_price[i].value = business_priceArray[i];
                     document.getElementById('formo').appendChild(business_price[i]);



                     ah_time[i] = document.createElement('input');
                     ah_time[i].setAttribute('type', 'hidden');
                     ah_time[i].setAttribute('name', 'ah_time'+'_'+(i+1));
                     ah_time[i].setAttribute('id', 'ah_time'+'_'+(i+1));
                     ah_time[i].value = ah_timeArray[i];
                     document.getElementById('formo').appendChild(ah_time[i]);
                     
                     dh_time[i] = document.createElement('input');
                     dh_time[i].setAttribute('type', 'hidden');
                     dh_time[i].setAttribute('name', 'dh_time'+'_'+(i+1));
                     dh_time[i].setAttribute('id', 'dh_time'+'_'+(i+1));
                     dh_time[i].value = dh_timeArray[i];
                     document.getElementById('formo').appendChild(dh_time[i]);

                     am_time[i] = document.createElement('input');
                     am_time[i].setAttribute('type', 'hidden');
                     am_time[i].setAttribute('name', 'am_time'+'_'+(i+1));
                     am_time[i].setAttribute('id', 'am_time'+'_'+(i+1));
                     am_time[i].value = am_timeArray[i];
                     document.getElementById('formo').appendChild(am_time[i]);

                     dm_time[i] = document.createElement('input');
                     dm_time[i].setAttribute('type', 'hidden');
                     dm_time[i].setAttribute('name', 'dm_time'+'_'+(i+1));
                     dm_time[i].setAttribute('id', 'dm_time'+'_'+(i+1));
                     dm_time[i].value = dm_timeArray[i];
                     document.getElementById('formo').appendChild(dm_time[i]);

                     duration_v[i] = document.createElement('input');
                     duration_v[i].setAttribute('type', 'hidden');
                     duration_v[i].setAttribute('name', 'duration_v'+'_'+(i+1));
                     duration_v[i].setAttribute('id', 'duration_v'+'_'+(i+1));
                     duration_v[i].value = duration_vArray[i];
                     document.getElementById('formo').appendChild(duration_v[i]);

                     a_date[i] = document.createElement('input');
                     a_date[i].setAttribute('type', 'hidden');
                     a_date[i].setAttribute('name', 'a_date'+'_'+(i+1));
                     a_date[i].setAttribute('id', 'a_date'+'_'+(i+1));
                     a_date[i].value = a_dateArray[i];
                     document.getElementById('formo').appendChild(a_date[i]);

                     d_date[i] = document.createElement('input');
                     d_date[i].setAttribute('type', 'hidden');
                     d_date[i].setAttribute('name', 'd_date'+'_'+(i+1));
                     d_date[i].setAttribute('id', 'd_date'+'_'+(i+1));
                     d_date[i].value = d_dateArray[i];
                     document.getElementById('formo').appendChild(d_date[i]);



                     stt1[i] = document.createElement('input');
                     stt1[i].setAttribute('type', 'hidden');
                     stt1[i].setAttribute('name', 'stt1'+'_'+(i+1));
                     stt1[i].setAttribute('id', 'stt1'+'_'+(i+1));
                     stt1[i].value = stt1Array[i];
                     document.getElementById('formo').appendChild(stt1[i]);

                     stt2[i] = document.createElement('input');
                     stt2[i].setAttribute('type', 'hidden');
                     stt2[i].setAttribute('name', 'stt2'+'_'+(i+1));
                     stt2[i].setAttribute('id', 'stt2'+'_'+(i+1));
                     stt2[i].value = stt2Array[i];
                     document.getElementById('formo').appendChild(stt2[i]);

                     stt3[i] = document.createElement('input');
                     stt3[i].setAttribute('type', 'hidden');
                     stt3[i].setAttribute('name', 'stt3'+'_'+(i+1));
                     stt3[i].setAttribute('id', 'stt3'+'_'+(i+1));
                     stt3[i].value = stt3Array[i];
                     document.getElementById('formo').appendChild(stt3[i]);

                     stt4[i] = document.createElement('input');
                     stt4[i].setAttribute('type', 'hidden');
                     stt4[i].setAttribute('name', 'stt4'+'_'+(i+1));
                     stt4[i].setAttribute('id', 'stt4'+'_'+(i+1));
                     stt4[i].value = stt4Array[i];
                     document.getElementById('formo').appendChild(stt4[i]);

                     airline_logo[i] = document.createElement('input');
                     airline_logo[i].setAttribute('type', 'hidden');
                     airline_logo[i].setAttribute('name', 'airline_logo'+'_'+(i+1));
                     airline_logo[i].setAttribute('id', 'airline_logo'+'_'+(i+1));
                     airline_logo[i].value = airline_logoArray[i];
                     document.getElementById('formo').appendChild(airline_logo[i]);

                     airline_name[i] = document.createElement('input');
                     airline_name[i].setAttribute('type', 'hidden');
                     airline_name[i].setAttribute('name', 'airline_name'+'_'+(i+1));
                     airline_name[i].setAttribute('id', 'airline_name'+'_'+(i+1));
                     airline_name[i].value = airline_nameArray[i];
                     document.getElementById('formo').appendChild(airline_name[i]);

                     the_plan[i] = document.createElement('input');
                     the_plan[i].setAttribute('type', 'hidden');
                     the_plan[i].setAttribute('name', 'the_plan'+'_'+(i+1));
                     the_plan[i].setAttribute('id', 'the_plan'+'_'+(i+1));
                     the_plan[i].value = the_planArray[i];
                     document.getElementById('formo').appendChild(the_plan[i]);
                  }
                  </script>

                 <input type='submit' id='sub_one_way' value='Search Flight' class='be2'>
            </form>";

         }
      else{
         $router = 0;

           echo "<div class='alert_container'>
                     <div class='alert'>Sorry, the flight you requested is not available at the moment</div>
                     <div class='ok_butt' id='ok_butt'>OK</div>
                 </div>
                 <script>
                    document.body.style = 'background-color: #1B2237;';
                    document.getElementById('ok_butt').onclick = function(){window.location = 'main.html'}
                 </script>";
      }
      break;

   case 'multi-city':
      echo "<hr>";
      for($i = 0; $i < $trip_count; $i++){

         echo "i: " . $i . "<br>";
         $arriv_city = $arrival_city[$i];
         echo "arriv_city" . ": " . $arriv_city. " & ";
         $desti_city = $destination_city[$i];
         echo "desti_city: " . $desti_city. " & ";
         $arriv_date = $trip_date[$i];
         echo "arriv_date: " . $arriv_date;

         $stat="SELECT * FROM flight_schedule WHERE arrival_name = '$arriv_city' AND arrival_date = '$arriv_date' AND destination_name = '$desti_city' ";
         $result = $con->query($stat);
         $row1 = $result->fetchAll(PDO::FETCH_ASSOC);

         $stat1="SELECT COUNT(*) FROM flight_schedule WHERE arrival_name = '$arriv_city' AND arrival_date = '$arriv_date' AND destination_name = '$desti_city' ";
         $result1 = $con->query($stat1);
         $count2 = $result1->fetch(PDO::FETCH_ASSOC);

         if($row1)
         {
            echo "<br>" . "Success, query statement work";
            echo "<pre style='font-size:20px;'>";
            foreach ($row1 as $row){
               echo $row."<br>";
            }
            echo "</pre>";

            echo "<pre style='font-size:20px;'>";
            foreach ($count2 as $count){
               echo $count;
            }
            echo "</pre>";
         }else{
            echo "<br>" ."sory, the query statement has error" . "<br>";
         }
      }

      break;
}

if($router == 1){
   echo"<script>
        document.getElementById('sub_one_way').click();
     </script>";
}

?>
