<?php
$open_id = $_POST["open_id"];
$flag = $_POST["flag"];
$datetime = $_POST["datetime"];
//1.造连接对象
$db = new MySQLi("localhost","root","root","text");
//2.写SQL语句
//insert into添加语句    
$sql = "insert into record values('{$open_id}','{$flag}','{$time}')";
//3.执行
$r = $db->query($sql);
if($r)
{
    echo "签到成功！";    
}
else
{
    echo "签到失败！";    
}

?>