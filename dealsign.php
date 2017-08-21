<?php
    header("Content-Type: text/html; charset=utf-8");
    //$openid = "opR6rwN5gU38Poz3e6N9DjTocUqk";
    $openid = $_POST['openid'];
	//echo $openid;echo "<br>";
    if($openid != "")
    {
        include('connect.php');//链接数据库
        $q="insert into records(id,openid,flag,date_time) values (null,'$openid','1',now())";
        echo $q;
        mysqli_query("set names 'utf8'"); //**设置字符集***

        $reslut=mysqli_query($link,$q);//执行sql

        if (!$reslut){
            die('Error: ' . mysqli_error($link));//如果sql执行失败输出错误
            echo "<script>alert('签到失败，请重试！');</script>";
            header("Location: ./sign.php");
        }
        else{
            echo "签到成功</br>";//成功输出登记成功
            //header("Location: ./sign_success.html");
        }
    }
/*
    if($openid != "")
    {
    	include('connect.php');//链接数据库
        echo "1";
    	//$q="insert into students(sno,openid,datetime) values ('$sno','$openid',now())";
        $q="insert into records(id,openid,flag,datetime) values (null,'$openid','1',now())";
    	mysqli_query("set names 'utf8'"); //**设置字符集***
        echo $q;
    	$reslut=mysqli_query($link,$q);//执行sql
    	if (!$reslut){
        die('Error: ' . mysqli_error($link));//如果sql执行失败输出错误
        echo "<script>alert("签到失败，请重试！");</script>";
        header('Location: ./sign.php');
    	}
    	else{
        echo "签到成功</br>";//成功输出登记成功
        header('Location: ./sign_success.html');
   		 }
    }
*/
?>