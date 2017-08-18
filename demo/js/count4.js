function deal_form() {
				//获取form对象 
				var form = document.getElementById('user_info');
				var productName = form.productName.value;
				var firstDate = form.firstDate.value;
				var pattern = form.pattern.value;
				var money = form.money.value;
				var plan_periods = form.plan_periods.value;
				var periods = form.periods.value;
				var worth = form.worth.value;
				var percent = form.percent.value;
				var nowDate = new Date();
				
				var money=parseInt(money,10);
				var plan_periods=parseInt(plan_periods,10);
				var periods=parseInt(periods,10);
				var worth=parseInt(worth,10);
				//var percent=parseInt(percent,10);
				
				document.write("<title>模型计算结果如下</title>");			
				document.write("用户填写的信息如下:" + "<br><br>");
				document.write("选择的产品："+productName+"<br>");
				document.write("首次缴费日期："+firstDate + "<br>");
				document.writeln("缴费模式:"+pattern + "<br>");
				document.writeln("每期缴费金额:"+money + "<br>");
				document.write("总缴费期数:"+plan_periods + "<br>");
				document.write("已缴费期数:"+periods + "<br>");
				document.write("当前账户价值:"+worth + "<br>");
				document.write("预计收益率:"+percent +"%"+ "<br>");
				
				document.write("<table border='1px' bordercolor='#000000' cellspacing='0px'>");
				document.write("<caption>按照模型计算，得到的如下结果：</caption>");
				document.write("<tr><th>缴费期数</th><th>ICP</th><th>A/C</th><th>总和</th><th>总本金</th><th>退保费率</th><th>退保费用</th><th>退保后价值</th><th>现金价值/本金</th><th>退保价值/本金</th></tr>");
				
				//self.location = 'count.html';	
				/*初始化开始*/
				//var periods = 18;

				//var money = 4325;

				//var pattern = "月供";

				//var percent = 0.12;

				var ICP = worth;
				var A_C = 0;
				var i = 0;
				/*初始化现金价值*/
				var cashValue = ICP + A_C ;
				/*退保成本（费率）*/
				var surrenderRate = new Array(0.93, 0.93, 0.93, 0.93, 0.93, 0.93, 0.93,
					0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92, 0.92,
					0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91,
					0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90, 0.90,
					0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89, 0.89,
					0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88,
					0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86,
					0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82,
					0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78,
					0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74,
					0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70,
					0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65,
					0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60,
					0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56,
					0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52,
					0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49,
					0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45,
					0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40,
					0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32,
					0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26,
					0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20,
					0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14,
					0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				/*退保费用*/
				var surrenderCost = ICP* surrenderRate[i];
				/*退保后价值*/
				var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C ;
				/*每期缴费金额*/
				//var money = 1083;
				/*已缴费期数*/
				//var periods = 18;
				/*总本金*/
				var principal = money * periods;
				/*预计收益率*/
				//var percent = 0.07;

				/*初始化周期*/
				var T=0;
				/*获取供款模式*/
				//var pattern="月供";
				/*根据供款模式选择*/
				switch(pattern){
					case "月供":T=12;break;
					case "季供":T=4;break;
					case "半年供":T=2;break;
					case "年供":T=1;break;
				}
				/*月收益率*/
				var rate = Math.pow(1 + (percent/100), 1 / T);
				/**/
				var policyFee1 = 0.005 / T;
				/**/
				var policyFee2 = -6.5;
				/**/
				var policyFee3 = 0.015 / T;
				/*账户管理费*/
				var accountFee = 0.04 / T;
				/*初始的现金价值/本金*/
				var cashValue_Principal = new Array(plan_periods);
				cashValue_Principal[i] = (ICP + A_C ) / principal;
				/*初始的退保价值/本金*/
				var surrenderValue_Principal = new Array(plan_periods);
				surrenderValue_Principal[i] = (ICP + A_C  - ICP * surrenderRate[i]) / principal;
				/*初始化结束*/

				/*显示初始值*/
				document.write("<tr>");
				document.write("<td>第" + i + "期"+"</td>");
				document.write("<td>"+ICP+"</td>");
				document.write("<td>"+A_C+"</td>");
				document.write("<td>"+cashValue+"</td>");
				document.write("<td>"+principal+"</td>");
				document.write("<td>"+surrenderRate[i]  + ""+"</td>");
				document.write("<td>"+surrenderCost+"</td>");
				document.write("<td>"+surrenderValue+"</td>");
				document.write("<td>"+cashValue_Principal[i]+"</td>");
				document.write("<td>"+surrenderValue_Principal[i]+"</td>");
				document.write("</tr>");

			/*开始第一期缴费*/
			principal=principal+money;
                        //A_C =money;
			A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
			ICP=ICP*rate*(1-accountFee-policyFee3)+policyFee2;
			i++;
			cashValue=ICP+A_C ;
			surrenderCost=ICP*surrenderRate[i];
			surrenderValue=cashValue-surrenderCost;
			cashValue_Principal[i]=(ICP+A_C )/principal;
			surrenderValue_Principal[i]=(ICP+A_C -ICP*surrenderRate[i])/principal;
			
			/*显示第一期缴费后的值*/
				document.write("<tr>");
				document.write("<td>第" + i + "期"+"</td>");
				document.write("<td>"+ICP+"</td>");
				document.write("<td>"+A_C+"</td>");
				document.write("<td>"+cashValue+"</td>");
				document.write("<td>"+principal+"</td>");
				document.write("<td>"+surrenderRate[i]+"</td>");
				document.write("<td>"+surrenderCost+"</td>");
				document.write("<td>"+surrenderValue+"</td>");
				document.write("<td>"+cashValue_Principal[i]+"</td>");
				document.write("<td>"+surrenderValue_Principal[i]+"</td>");
				document.write("</tr>");

				/*循环开始下一期缴费*/
				for(i = 2; i <= 300; i++) {
		
		if(principal < money*plan_periods)
		{
			principal = principal + money;
		}
A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
				document.write("<tr>");
				document.write("<td>第" + i + "期"+"</td>");
				document.write("<td>"+ICP+"</td>");
				document.write("<td>"+A_C+"</td>");
				document.write("<td>"+cashValue+"</td>");
				document.write("<td>"+principal+"</td>");
				document.write("<td>"+surrenderRate[i]+"</td>");
				document.write("<td>"+surrenderCost+"</td>");
				document.write("<td>"+surrenderValue+"</td>");
				document.write("<td>"+cashValue_Principal[i]+"</td>");
				document.write("<td>"+surrenderValue_Principal[i]+"</td>");
				document.write("</tr>");
			}
				document.write("<tr>");
				document.write("<td>nbspnbsp</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("<td>"+0+"</td>");
				document.write("</tr>");
			}
			document.write("</table>");