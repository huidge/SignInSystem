<?php 
require_once("get_openid_sign.php");
?>
<!DOCTYPE html>
<html >
<head>
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" />  
<title>签到系统DEMO演示_签到</title>
<link rel="stylesheet" href="./css/style.css"/>
<!--引用weui-->
<link rel="stylesheet" href="./css/weui.css"/>
<!--引用JQuery.min.js-->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    $("#btn").click(function(){ 
        var openid = $("#openid").val();
        $.ajax({ 
             url: "./dealsign.php",   
             type: "POST", 
             data:{
                openid:openid,
             }, 
             dataType: "json", 
             error: function(XMLHttpRequest, textStatus, errorThrown) {
                if(XMLHttpRequest.status == 200 && XMLHttpRequest.readyState == 4)
                {
                    alert("签到成功！"); 
                }
                else 
                {
                    alert("签到失败，请重试！"); 
                    countdown = 0;  
                }
   },
            success: function(data,status){//如果调用php成功  
                alert("签到成功！"); 
             } 
        }); 

    }) 
}) 

</script>
</head>
<body>
<div class="weui_msg">
       <!--
    <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
      -->
    <div class="weui_text_area">
    <h2>Welcome</h2>
            <p>签到系统 v0.1</p>
    </div>
    <?php echo "<input type='hidden' value='$openid'  id='openid'>"; ?>
    <div class="weui_opr_area">
        <p class="weui_btn_area">
            <input id ="btn" class="weui_btn weui_btn_primary" value="签到" >
        </p>
    </div>

</div>

</body>
</html>

