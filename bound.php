<?php 
require_once("get_openid_bound.php");
?>
<!DOCTYPE html>
<html >
<head>
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" />  
<title>签到系统DEMO演示_绑定</title>
<link rel="stylesheet" href="css/style.css"/>
<!--引用weui-->
<link rel="stylesheet" href="css/weui.css"/>
<!--引用JQuery.min.js-->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">

$(document).ready(function(){
$("#btn").click(function(){
  var sno = $("#sno").val();
  if(sno == "")
  {
    alert("请输入学号");
    return false;
  }
  
});
});

</script>
</head>
<body>


       <div class="weui_msg">
       <!--
    <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
      -->
      <h2>Welcome</h2>
            <p>签到系统 v0.1</p>
    <div style="height:200px;width: 100%;">
    <span>
    注意事项：
    xxxxxxxxxxxxxxxxxxxxxxx,
    xxxxxxxxxxxxxxxxxxxxxxxxxxx；
    xxxxxxxxxxxxxxxxxxxx。
    </span>
    </div>
    <form  method="post" action="dealbound.php">
    <div class="weui_text_area">
        <input class="weui_input" type="number" pattern="[0-9]*" placeholder="请输入学号或教职工号" id="sno" name="sno" value="">
        <?php echo "<input type='hidden' value='$openid' name='openid' id='openid'>"; ?>
    </div>
    <div class="weui_opr_area">
        <p class="weui_btn_area">
        <input class="weui_btn weui_btn_primary" id="btn" type="submit" value="绑定">
        </p>
    </div>
    </form>

</div>
</body>
</html>

