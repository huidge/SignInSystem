/*定义变量名*/
$mysql_server_name='localhost'; //改成自己的mysql数据库服务器
 
$mysql_username='root'; //改成自己的mysql数据库用户名
 
$mysql_password='root'; //改成自己的mysql数据库密码
 
$mysql_database='Mydb'; //改成自己的mysql数据库名

/*连接数据库*/

$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库
 
mysql_query("set names 'utf8'"); //数据库输出编码
 
mysql_select_db($mysql_database); //打开数据库
 
$sql ="select * from record "; //SQL语句
 
$result = mysql_query($sql,$conn); //查询

/*调取表中内容输出*/
while($row = mysql_fetch_array($result))
 
{
 
echo "<div style=\"height:24px; line-height:24px; font-weight:bold;\">"; //排版代码
 
echo $row['Topic'] . "<br/>";
 
echo "</div>"; //排版代码
 
}

/*写入数据库*/
$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password); //连接数据库
 
mysql_query("set names 'utf8'"); //数据库输出编码
 
mysql_select_db($mysql_database); //打开数据库
 
$sql = "insert into messageboard (Topic,Content,Enabled,Date) values ('$Topic','$Content','1','2011-01-12')";
 
mysql_query($sql);
 
mysql_close(); //关闭MySQL连接


/*调用连接数据库代码文件:require("db_config.php");*/