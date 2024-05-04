<?php

$flight_id = $_GET['flight_id'];
$COUNT = $_GET['COUNT'];
$class = $_GET['class'];

for($i=0; $i < $COUNT; $i++){
   $first_name[] = $_GET['first_name_'.($i+1)];
   $last_name[] = $_GET['last_name_'.($i+1)];
   
}

echo "<div id='count' style='display: none;'>".$COUNT."</div";

   /* *******************CONNECT********************** */

   $dsn = "mysql:host=localhost;dbname=a_project";
   $username = "root";
   $password = "";
   
   try{
      $con = new PDO($dsn, $username, $password);
   
      /******************************************** */
   
      $query1="SELECT * FROM flight_schedule WHERE 1";
      $result1 = $con->query($query1);
      $row1 = $result1->fetchAll(PDO::FETCH_ASSOC);
   
      foreach($row1 as $row){
   
         $arrival_name = $row['arrival_name'];
         $arrival_sambol = $row['arrival_sambol'];
         $destination_name = $row['destination_name'];
         $destination_sambol = $row['destination_sambol'];
         //$class = $row['class'];
         $arrival_date = $row['arrival_date'];
         $arrival_time = $row['arrival_time'];
      }

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
<link rel="stylesheet" href="tacket.css">
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>

   <div class="ticket" style="background-color: #006192; padding: 15px 0px; border-radius: 5px; font-family: 'Jura', sans-serif; display: none;">
<div style="background-color: #7ed4ff; padding: 0px 20px;">
      <div>

      <div style="padding: 5px;  margin-bottom: 5px; "><div style="margin: 0 auto; margin-top: 5px; width: fit-content; color: #1B2237;">NAME OF PASSENGER</div><div id="name" class="name" style="text-align: center;"></div></div>
<div style="display: flex;">
         <div style="display: inline-block;">


            <div style="padding: 5px; margin-bottom: 5px;   color: #1B2237;">FROM: <span id="from" class="from" style="color: black;"></span></div>
            <div style="padding: 5px; margin-bottom: 5px;  color: #1B2237;">TO: <span id="to" class="to" style="color: black;"></span></div>
            <div style="padding: 5px;  color: #1B2237;"> DATE: <span id="date" class="date" style="margin-right: 52px; color: black;"></span> </div>
         </div>

         <div style="display: inline-block;">

         <div style="padding: 5px; margin-bottom: 5px;  color: #1B2237;">FLIGHT ID: <span id="id" class="id" style="color: black;"></span></div>
         <div style="padding: 5px; margin-bottom: 5px;  color: #1B2237;">CLASS: <span id="class" class="class" style="color: black;"></span></div>
         <div style="padding: 5px;  color: #1B2237;"> DEPARTURE TIME: <div id="time" class="time" style="color: black;"></div> </div>
         </div>

      </div>
</div>
</div>
   </div>




<div id="go_in"></div>

<?php 

echo "<script>
/*
         document.getElementById('name').textContent = ".json_encode($first_name[0].' '.$last_name[0]).";
         document.getElementById('id').textContent = ".json_encode($flight_id).";
         document.getElementById('from').textContent = ".json_encode($arrival_name.' / '.$arrival_sambol).";
         document.getElementById('to').textContent = ".json_encode($destination_name.' / '.$destination_sambol).";
         document.getElementById('date').textContent = ".json_encode($arrival_date).";
         document.getElementById('time').textContent = ".json_encode($arrival_time).";
         document.getElementById('class').textContent = ".json_encode($class).";
*/




         var v=0,
         count = document.getElementById('count').textContent,
         name = [],
 ticket = [],
 container = [],
 out = [],
 head = [],
 content = [],
 head_div1 = [],
 head_div2 = [],
 content_div1 = [],
 content_div2 = [],
 content_div1_div1 = [],
 content_div1_div2 = [],
 content_div1_div3 = [],
 content_div2_div1 = [],
 content_div2_div2 = [],
 content_div2_div3 = [],
 content_div1_div1_span = [],
 content_div1_div2_span = [],
 content_div1_div3_span = [],
 content_div2_div1_span = [],
 content_div2_div2_span = [],
 content_div2_div3_span = [];

 first_name = ".json_encode($first_name).";
 last_name = ".json_encode($last_name).";
 console.log('name: '+ name);



 for(var i=0; i < count; i++){


     ticket[i] = document.createElement('div');
     ticket[i].setAttribute('class', 'ticket');
     document.getElementById('go_in').appendChild(ticket[i]);

     if(v == 0){
      ticket[i].style = 'background-color: #006192; padding: 15px 0px; border-radius: 5px; font-family: Jura, sans-serif; margin: 50px auto; width: fit-content;';
   }else{
      ticket[i].style = 'background-color: rgb(146 20 0); padding: 15px 0px; border-radius: 5px; font-family: Jura, sans-serif; margin: 50px auto; width: fit-content;';
   }

     container[i] = document.createElement('div');
     container[i].style = 'background-color: rgb(221 221 221); padding: 0px 20px;';
     ticket[i].appendChild(container[i]);

     out[i] = document.createElement('div');
     container[i].appendChild(out[i]);

     head[i] = document.createElement('div');
     head[i].style = 'padding: 5px;  margin-bottom: 5px; ';
     out[i].appendChild(head[i]);

     content[i] = document.createElement('div');
     content[i].style = 'display: flex;';
     out[i].appendChild(content[i]);

     head_div1[i] = document.createElement('div');
     head_div1[i].style = 'margin: 0 auto; margin-top: 5px; width: fit-content; color: #1B2237;';
     head_div1[i].textContent = 'NAME OF PASSENGER: ';
     head[i].appendChild(head_div1[i]);

     head_div2[i] = document.createElement('div');
     head_div2[i].style = 'text-align: center;';
     head_div2[i].textContent = first_name[i]+' '+last_name[i];
     head[i].appendChild(head_div2[i]);

     content_div1[i] = document.createElement('div');
     content_div1[i].style = 'display: inline-block;';
     content[i].appendChild(content_div1[i]);

     content_div2[i] = document.createElement('div');
     content_div2[i].style = 'display: inline-block;';
     content[i].appendChild(content_div2[i]);

     content_div1_div1[i] = document.createElement('div');
     content_div1_div1[i].style = 'padding: 5px; margin-bottom: 5px; color: #1B2237;';
     content_div1[i].appendChild(content_div1_div1[i]);

     content_div1_div2[i] = document.createElement('div');
     content_div1_div2[i].style = 'padding: 5px; margin-bottom: 5px; color: #1B2237;';
     content_div1[i].appendChild(content_div1_div2[i]);

     content_div1_div3[i] = document.createElement('div');
     content_div1_div3[i].style = 'padding: 5px; color: #1B2237;';
     content_div1[i].appendChild(content_div1_div3[i]);

     content_div1_div1_span[i] = document.createElement('span');
     content_div1_div1_span[i].setAttribute('id', 'from');
     content_div1_div1_span[i].setAttribute('class', 'from');
     content_div1_div1_span[i].style = 'color: black;';
     content_div1_div1[i].appendChild(content_div1_div1_span[i]);

     content_div1_div2_span[i] = document.createElement('span');
     content_div1_div2_span[i].setAttribute('id', 'to');
     content_div1_div2_span[i].setAttribute('class', 'to');
     content_div1_div2_span[i].style = 'color: black;';
     content_div1_div2[i].appendChild(content_div1_div2_span[i]);

     content_div1_div3_span[i] = document.createElement('span');
     content_div1_div3_span[i].setAttribute('id', 'date');
     content_div1_div3_span[i].setAttribute('class', 'date');
     content_div1_div3_span[i].style = 'margin-right: 52px; color: black;';
     content_div1_div3[i].appendChild(content_div1_div3_span[i]);

     content_div1_div1_span[i].textContent = 'FROM: '+".json_encode($arrival_name.' / '.$arrival_sambol).";
     content_div1_div2_span[i].textContent = 'TO: '+".json_encode($destination_name.' / '.$destination_sambol).";
     content_div1_div3_span[i].textContent = 'DATE: '+".json_encode($arrival_date).";

     content_div2_div1[i] = document.createElement('div');
     content_div2_div1[i].style = 'padding: 5px; margin-bottom: 5px;  color: #1B2237;';
     content_div2[i].appendChild(content_div2_div1[i]);

     content_div2_div2[i] = document.createElement('div');
     content_div2_div2[i].style = 'padding: 5px; margin-bottom: 5px;  color: #1B2237;';
     content_div2[i].appendChild(content_div2_div2[i]);

     content_div2_div3[i] = document.createElement('div');
     content_div2_div3[i].style = 'padding: 5px; margin-bottom: 5px; color: #1B2237;';
     content_div2[i].appendChild(content_div2_div3[i]);

     content_div2_div1_span[i] = document.createElement('span');
     content_div2_div1_span[i].setAttribute('id', 'id');
     content_div2_div1_span[i].setAttribute('class', 'id');
     content_div2_div1_span[i].style = 'color: black;';
     content_div2_div1[i].appendChild(content_div2_div1_span[i]);

     content_div2_div2_span[i] = document.createElement('span');
     content_div2_div2_span[i].setAttribute('id', 'class');
     content_div2_div2_span[i].setAttribute('class', 'class');
     content_div2_div2_span[i].style = 'color: black;';
     content_div2_div2[i].appendChild(content_div2_div2_span[i]);

     content_div2_div3_span[i] = document.createElement('span');
     content_div2_div3_span[i].setAttribute('id', 'time');
     content_div2_div3_span[i].setAttribute('class', 'time');
     content_div2_div3_span[i].style = 'color: black;';
     content_div2_div3[i].appendChild(content_div2_div3_span[i]);

     content_div2_div1_span[i].textContent = 'FLIGHT ID: '+".json_encode($flight_id).";
     content_div2_div2_span[i].textContent = 'CLASS: '+".json_encode($class).";
     content_div2_div3_span[i].textContent = 'TIME: '+".json_encode($arrival_time).";

     if(v == 0){
      v=1;
   }else{
      v=0;
   }

 }

</script>";

?>

<div style="background-color: rgb(45 36 78); padding: 15px 20px; position: fixed; bottom: 0; width: 100%; user-select: none; cursor: pointer;">
   <div id="butt" style="background-color: rgb(110 0 0); color: white; width: fit-content; margin: 0px auto; padding: 10px; border-radius: 5px; font-size: 20px;">DONE</div>
</div>

<script>
   document.body.style= "padding: 0px; margin: 0px;";
   document.getElementById('butt').onclick = function(){
      window.location.href = 'main.html';
   };
</script>
</body>
</html>