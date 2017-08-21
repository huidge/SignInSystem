<?php
    //$server="120.77.213.84";//主机
    //$db_username="huidge";//你的数据库用户名
    //$db_password="huidge123";//你的数据库密码
    //$db_database="user";//默认连接数据库
    $server="112.74.62.73";//主机
    $db_username="root";//你的数据库用户名
    $db_password="root";//你的数据库密码
    $db_database="signinsystem";//默认连接数据库
/*
  	$con = mysql_connect($server,$db_username,$db_password);//链接数据库
    if(!$con){
        die("can't connect".mysql_error());//如果链接失败输出错误
    }  
    mysql_select_db('test',$con);//选择数据库（我的是test）
*/
    $link = mysqli_connect( 
 $server, /* The host to connect to 连接MySQL地址 */  
 $db_username,   /* The user to connect as 连接MySQL用户名 */  
 $db_password, /* The password to use 连接MySQL密码 */  
 $db_database);  /* The default database to query 连接数据库名称*/  
 
if (!$link) { 
  printf("Can't connect to MySQL Server. Errorcode: %s ", mysqli_connect_error()); 
  exit; 
}

?>