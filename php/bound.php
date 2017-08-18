<?php
　　header("Content-type:text/html;charset=utf-8");
$link=mysql_connect("localhost","root","root");
if($link)
{
  $select=mysql_select_db("login",$link);
  if($select)
  {
    if(isset($_POST["subl"]))
    {
      $no=$_POST["sno"];
      if($no=="")//判断是否为空
      {
        echo"<script type="."\""."text/javascript"."\"".">"."window.alert"."("."\""."请填写正确的信息！"."\"".")".";"."</script>";
        echo"<script type="."\""."text/javascript"."\"".">"."window.location="."\""."http://127.0.0.1:8080/login.html"."\""."</script>";
        exit;
      }
      $str="select sno from register where sno="."'"."$sno"."'";
      mysql_query('SET NAMES UTF8');       
      $result=mysql_query($str,$link);
      $sno=mysql_fetch_row($result);
      $sno=$sno[0];
      if($no==$sno)//判断输入学号与数据库内学号是否一致
      {
        echo"绑定成功！";
        echo"<script type="."\""."text/javascript"."\"".">"."window.location="."\""."http://127.0.0.1:8080/success.html"."\""."</script>";
      }
      {  
        echo"<script type="."\""."text/javascript"."\"".">"."window.alert"."("."\""."绑定失败！"."\"".")".";"."</script>";
        echo"<script type="."\""."text/javascript"."\"".">"."window.location="."\""."http://127.0.0.1:8080/login.html"."\""."</script>";
      }
    }
     
  }
}
?>