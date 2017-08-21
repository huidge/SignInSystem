<?php
//echo $_SERVER['HTTP_USER_AGENT'];
    //判断是在微信里面打开
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') == true) {           

        //配置参数的数组
        $CONF =  array(
            '__APPID__' =>'wx8a7d8fead458d831',
            '__SERECT__' =>'3fd17f5ec00f80991cca6ddc7b76ff4b',
            '__CALL_URL__' =>'http://weixin.fortunefed.com/test/sign.php' //当前页地址
        );

        //没有传递code的情况下，先登录一下
        if(!isset($_GET['code']) || empty($_GET['code'])){

            $getCodeUrl  =  "https://open.weixin.qq.com/connect/oauth2/authorize".
                            "?appid=" . $CONF['__APPID__'] .
                            "&redirect_uri=" . $CONF['__CALL_URL__']  . 
                            "&response_type=code".
                            "&scope=snsapi_base". #!!!scope设置为snsapi_base !!!
                            "&state=1";

            //跳转微信获取code值,去登陆   
            header('Location:' . $getCodeUrl);
            exit;
        }

        $code         = trim($_GET['code']);
//echo $code; 
        //使用code，拼凑链接获取用户openid 
        $getTokenUrl    =  "https://api.weixin.qq.com/sns/oauth2/access_token".
                            "?appid={$CONF['__APPID__']}".
                            "&secret={$CONF['__SERECT__']}".
                            "&code={$code}".
                            "&grant_type=authorization_code";
        $url = $getTokenUrl;
        //初始化curl
                $ch = curl_init();
                //设置超时
                curl_setopt($ch, CURLOPT_TIMEOUT, 30);
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,FALSE);
                curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,FALSE);
                curl_setopt($ch, CURLOPT_HEADER, FALSE);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
                //运行curl，结果以jason形式返回
                $res = curl_exec($ch);
                curl_close($ch);
                //取出openid
                $data = json_decode($res,true);
                $openid = $data['openid'];
                //print_r($data);
                //echo($data['openid']);
                //echo "openid:".$openid;
    }

?>