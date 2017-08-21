<?php
    header("Content-Type: text/html; charset=utf-8");
    $openid = $_POST['openid'];
    $sno = $_POST['sno'];
   // $openid = "opR6rwN5gU38Poz3e6N9DjTocUqk";
   // $sno = "141404060214";

    echo $openid;echo "<br>";
    echo $sno;echo "<br>";
      if($openid != "" && $sno != "")
    {
        include('connect.php');//链接数据库
        $q="insert into students(sno,openid,datetime) values ('$sno','$openid',now())";
        mysqli_query("set names 'utf8'"); //**设置字符集***
        $reslut=mysqli_query($link,$q);//执行sql
        echo $q;
        if (!$reslut){
        die('Error: ' . mysqli_error($link));//如果sql执行失败输出错误
        //echo "<script>alert("绑定失败，请重试！");</script>";
        //header('Location: ./bound.php');
        }
        else{
        echo "登记成功</br>";//成功输出登记成功
        header('Location: ./bound_success.html');
         }
        
    }
    /*
    if($openid != "" && $sno != "")
    {
    	include('connect.php');//链接数据库
    	$q="insert into students(sno,openid,datetime) values ('$sno','$openid',now())";
    	mysqli_query("set names 'utf8'"); //**设置字符集***
    	$reslut=mysqli_query($link,$q);//执行sql
    	if (!$reslut){
        die('Error: ' . mysqli_error($link));//如果sql执行失败输出错误
        echo "<script>alert("绑定失败，请重试！");</script>";
        //header('Location: ./bound.php');
    	}
    	else{
        echo "登记成功</br>";//成功输出登记成功
        //header('Location: ./bound_success.html');
   		 }
    }
*/
?>