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

	var money = parseInt(money, 10);
	var plan_periods = parseInt(plan_periods, 10)+50;
	var periods = parseInt(periods, 10);
	var worth = parseInt(worth, 10);
	//var percent=parseInt(percent,10);

	var ICP = worth;
	var A_C = 0;
	var i = 0;
	/*初始化现金价值*/
	var cashValue = ICP + A_C;
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
	var surrenderCost = ICP * surrenderRate[i];
	/*退保后价值*/
	var surrenderValue = ICP * (1 - surrenderRate[i]) + A_C;
	/*每期缴费金额*/
	//var money = 1083;
	/*已缴费期数*/
	//var periods = 18;
	/*总本金*/
	var principal = money * periods;
	/*预计收益率*/
	//var percent = 0.07;

	/*初始化周期*/
	var T = 0;
	/*获取供款模式*/
	//var pattern="月供";
	/*根据供款模式选择*/
	switch(pattern) {
		case "月供":
			T = 12;
			break;
		case "季供":
			T = 4;
			break;
		case "半年供":
			T = 2;
			break;
		case "年供":
			T = 1;
			break;
	}
	/*月收益率*/
	var rate = Math.pow(1 + (percent / 100), 1 / T);
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
	cashValue_Principal[i] = (ICP + A_C) / principal;
	/*初始的退保价值/本金*/
	var surrenderValue_Principal = new Array(plan_periods);
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;
	/*初始化结束*/

	/*开始第一期缴费*/
	A_C = money;
	principal = principal + money;
	ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
	i++;
	cashValue = ICP + A_C;
	surrenderCost = ICP * surrenderRate[i];
	surrenderValue = cashValue - surrenderCost;
	cashValue_Principal[i] = (ICP + A_C) / principal;
	surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;

	/*循环开始下一期缴费*/
	for(i = 2; i <= plan_periods; i++) {
		A_C = A_C * rate * (1 - policyFee3) - principal * policyFee1 + money;
		principal = principal + money;
		ICP = ICP * rate * (1 - accountFee - policyFee3) + policyFee2;
		cashValue = ICP + A_C;
		surrenderCost = ICP * surrenderRate[i];
		surrenderValue = cashValue - surrenderCost;
		cashValue_Principal[i] = (ICP + A_C) / principal;
		surrenderValue_Principal[i] = (ICP + A_C - ICP * surrenderRate[i]) / principal;

	}
	document.write("<title>模型计算结果的图表展示</title>");
	<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
	document.write("<div id='main' class='main' style='width: 350px;height:300px;'></div>");
	// 指定图表的配置项和数据
	var myChart = echarts.init(document.getElementById('main'),'shine');
	var categories = new Array();
	for(var j = 0; j <= plan_periods; j++) {
		categories[j] = "第" + j + "期";
	}
	var legends = new Array('现金价值/本金', '退保价值/本金');

	var option = {
		title: {
                text: ''
            },
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: legends
		},
		toolbox: {
			show: true,
			feature: {
				mark: true,
				dataView: {
					readOnly: false
				},
				magicType: ['line', 'bar'],
				restore: true,
				saveAsImage: true
			}
		},

		
		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: categories,
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true,
			}
		}],
		series: [{
				
				name: '现金价值/本金',
				type: 'line',
				data: cashValue_Principal,
			},
			{
				name: '退保价值/本金',
				type: 'line',
				data: surrenderValue_Principal,
			}
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

}