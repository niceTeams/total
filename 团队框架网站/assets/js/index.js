
var myChart = echarts.init(document.getElementById('bar'));

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['夏粮','秋粮'],
        textStyle:{
            color:"#fff"
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['80%', '40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color:"#fff"
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:4 
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data:[
                {value:30, name:'夏粮'},
                {value:60, name:'秋粮'},
            ],
            // labelLine:{  
            //     normal:{  
            //         length:4  
            //     }  
            // },
        }
    ]
};   
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var myChart1 = echarts.init(document.getElementById('down'));

option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x:20,
        y:0,
        y2:10,
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        splitLine:{show: false},//去除网格线
    },
    yAxis: {
        type: 'category',
        data: ['油料面积','棉花面积','粮食播种面积'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine:{show: false},//去除网格线
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [3, 15, 50],
            barWidth:8,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color:"#9abcc1"
                }
            }
        }
    ]
};
myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById('zhu'));

option2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x:20,
        y:0,
        y2:10,
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        splitLine:{show: false},//去除网格线
    },
    yAxis: {
        type: 'category',
        data: ['牛奶产量','禽蛋产量','肉产量'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine:{show: false},//去除网格线
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [5, 10, 20],
            barWidth:8,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color:"#0abcc1"
                }
            }
        }
    ]
};
myChart2.setOption(option2);


//园区饼图
var myChart3 = echarts.init(document.getElementById('bar2'));
option3 = {
    tooltip : {
        // trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        data: ['省级园区','市级园区'],
        textStyle:{
            color:"#fff",
            fontSize:7
        },
        x: 'right', // 'center' | 'left' | {number},
        y: 'bottom', // 'center' | 'bottom' | {number}
        // backgroundColor: '#fff',
        // borderColor: 'rgba(178,34,34,0.8)',
        // borderWidth: 4,
        // padding: 10,    // [5, 10, 15, 20]
        // itemGap: 20,
        itemWidth: 20,
        itemHeight: 10,
    },
    grid:{
        x:0,
        y:0,
        x1:0,
        y1:0
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:50, name:'省级园区',itemStyle: {color: '#c05654'}},
                {value:310, name:'市级园区',itemStyle: {color: '#6ab0b8'}}
            ],
            labelLine:{  
                normal:{  
                    length:4  
                }  
            }, 
        }
    ]
};
myChart3.setOption(option3);

//园区柱形图
var myChart4 = echarts.init(document.getElementById('zhu2'));
option4 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x:20,
        y:0,
        y2:10,
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        min:0,
        max:50,
        splitLine:{show: false},//去除网格线
    },
    yAxis: {
        type: 'category',
        data: ['市级园区','省级园区'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine:{show: false},//去除网格线
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [44,41.98],
            barWidth:8,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color:"#76a36b"
                }
            }
        }
    ]
};
myChart4.setOption(option4);

//园区柱形图
var myChart5 = echarts.init(document.getElementById('zhu3'));
option5 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x:20,
        y:0,
        y2:10,
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        min:0,
        max:8,
        splitLine:{show: false},//去除网格线
    },
    yAxis: {
        type: 'category',
        data: ['机械植保面积','机耕作业面积'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine:{show: false},//去除网格线
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [5,7],
            barWidth:8,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color:"#76a36b"
                }
            }
        }
    ]
};
myChart5.setOption(option5);

//园区柱形图
var myChart6 = echarts.init(document.getElementById('bar3'));
option6 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x:20,
        y:0,
        y2:10,
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        min:0,
        max:3,
        splitLine:{show: false},//去除网格线
    },
    yAxis: {
        type: 'category',
        data: ['拖拉机','收割机'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine:{show: false},//去除网格线
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2,3],
            barWidth:8,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color:"#9abcc1"
                }
            }
        }
    ]
};
myChart6.setOption(option6);

//园区柱形图
var myChart7 = echarts.init(document.getElementById('zhu4'));
option7 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x:20,
        y:0,
        y2:10,
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        min:0,
        max:20,
        splitLine:{show: false},//去除网格线
    },
    yAxis: {
        type: 'category',
        data: ['全市有效灌溉面积','新增节水灌溉面积'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine:{show: false},//去除网格线
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10,20],
            barWidth:8,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color:"#34bcc0"
                }
            }
        }
    ]
};
myChart7.setOption(option7);


var myChart8 = echarts.init(document.getElementById('zhu5'));

option8 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['2014','2015'],
        textStyle:{
            color:"#fff"
        },
        x:"right",
        y:"top",
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        top:"18%",
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['农业','林业','畜牧业','渔业'],
            axisLabel:{
                textStyle:{
                color:"#fff"
                }
            },
            
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:"金额（亿元）",
            min:0,
            max:30,
            axisLabel:{
                textStyle:{
                color:"#fff"
                }
            },
            nameTextStyle:{
                color:"#fff"
            },
            splitLine:{
                show:false
            }
        }
    ],
    series : [
        {
            name:'2014',
            type:'bar',
            data:[23, 24, 27, 22],
            barWidth:"15%",
            itemStyle:{
                normal:{
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#fff',
                            fontSize: 12
                        }
                    },
                    color:"#af4f4d"
                }
            },
        },
        {
            name:'2015',
            type:'bar',
            stack: '广告',
            data:[26, 21, 17, 25],
            barGap:0,
            barWidth:"15%",
            itemStyle:{
                normal:{
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#fff',
                            fontSize: 12
                        }
                    },
                    color:"#7ac1d0"
                }
            }
        }
       
    ]
};
myChart8.setOption(option8);

var myChart9 = echarts.init(document.getElementById('one'));
option9 = {
    title:{
        text:"农业现代化发展指数",
        left:'center',
        textStyle:{
             color:"#fff",
             fontSize:12
        }
    },
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter:'{value}',
                color:"#44708d",
                fontSize:16,
                offsetCenter: [0, '70%']
            },
            data: [
                {value: 50, name: '底'},
                
            ],
            splitLine: {
                show: false,
            },
            axisLine:{//仪表圈
                show:true,
                lineStyle:{
                    color:[[.2, '#44708d'],[1,"#1e2e3d"]],//F0F0F0
                    width:8,
                    fontSize:12
                }
            },
            axisLabel:{
                show:false,
            },
            pointer: {
                        //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                // show: false,
                //指针长度
                length:'85%',
                width:5,
            },
            itemStyle:{
                color:"#44708d"
            }

        }
    ]
};

setInterval(function () {
    option9.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart9.setOption(option9, true);
},2000);
myChart9.setOption(option9);

var myChart11 = echarts.init(document.getElementById('three'));
option11 = {
    title:{
        text:"农业现代化发展指数",
        left:'center',
        textStyle:{
             color:"#fff",
             fontSize:12
        }
    },
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter:'{value}',
                color:"#923a23",
                fontSize:16,
                offsetCenter: [0, '70%']
            },
            data: [
                {value: 50, name: '底'},
                
            ],
            splitLine: {
                show: false,
            },
            axisLine:{//仪表圈
                show:true,
                lineStyle:{
                    color:[[.7, '#923a23'],[1,"#1e2e3d"]],//F0F0F0
                    width:8,
                    fontSize:12
                }
            },
            axisLabel:{
                show:false,
            },
            pointer: {
                        //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                // show: false,
                //指针长度
                length:'85%',
                width:5,
            },
            itemStyle:{
                color:"#923a23"
            }
        }
    ]
};

setInterval(function () {
    option11.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart11.setOption(option11, true);
},2000);
myChart11.setOption(option11);

var myChart10 = echarts.init(document.getElementById('two'));
option10 = {
    title:{
        text:"农业现代化发展指数",
        left:'center',
        textStyle:{
             color:"#fff",
             fontSize:12
        }
    },
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter:'{value}',
                color:"#efb373",
                fontSize:16,
                offsetCenter: [0, '70%']
            },
            data: [
                {value: 50, name: '底'},
                
            ],
            splitLine: {
                show: false,
            },
            axisLine:{//仪表圈
                show:true,
                lineStyle:{
                    color:[[.5, '#efb373'],[1,"#1e2e3d"]],//F0F0F0
                    width:8,
                    fontSize:12
                }
            },
            axisLabel:{
                show:false,
            },
            pointer: {
                        //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                // show: false,
                //指针长度
                length:'85%',
                width:5,
            },
            itemStyle:{
                color:"#efb373"
            }
        }
    ]
};

setInterval(function () {
    option10.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart10.setOption(option10, true);
},2000);
myChart10.setOption(option10);

var myChart11 = echarts.init(document.getElementById('tu'));
option11 = {
    tooltip: {
        // trigger: 'axis'
    },
    grid: {
        x:25,
        y:10,
        x2:30,
        y2:10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data : ['2014','2015','2016','2017','2018']
    },
    yAxis: {
        type: 'value',
        min:0,
        max:500,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine:{
            show:false
        }
    },
    series: [
        {
            name:'农业',
            type:'line',
            smooth:.2,
            data:[ 210, 234, 290, 300, 310]
            
        },
        {
            name:'林业',
            type:'line',
            smooth:.2,
           data:[ 101, 134, 90, 160, 210]
        },
        {
            name:'畜牧业',
            type:'line',
            smooth:.2,
            data:[ 201, 154, 190, 270, 240]
        },
        {
            name:'渔业',
            type:'line',
            smooth:.2,
            data:[ 301, 334, 390, 330, 350]
        }
    ]
};
myChart11.setOption(option11);




