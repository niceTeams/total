// 随机数据
var data = [{"name":"北京","value":17},{"name":"天津","value":49},{"name":"河北","value":12},{"name":"山西","value":98},{"name":"内蒙古","value":6},{"name":"辽宁","value":2},{"name":"吉林","value":33},{"name":"黑龙江","value":70},{"name":"上海","value":61},{"name":"江苏","value":81},{"name":"浙江","value":51},{"name":"安徽","value":18},{"name":"福建","value":99},{"name":"江西","value":55},{"name":"山东","value":32},{"name":"河南","value":37},{"name":"湖北","value":99},{"name":"湖南","value":14},{"name":"广东","value":71},{"name":"广西","value":48},{"name":"海南","value":62},{"name":"重庆","value":23},{"name":"四川","value":54},{"name":"贵州","value":97},{"name":"云南","value":62},{"name":"西藏","value":11},{"name":"陕西","value":76},{"name":"甘肃","value":68},{"name":"青海","value":92},{"name":"宁夏","value":42},{"name":"新疆","value":75},{"name":"台湾","value":79},{"name":"香港","value":12},{"name":"澳门","value":81},{"name":"南海诸岛","value":73},{"name":"南海诸岛","value":93}];
// 初始化图表
var map = new Highcharts.Map('map', {
    title: {
        text:null,
    },
    exporting: {
        enabled: false   // 关闭导出按钮
    },

    colorAxis: {
        min: 0,
        minColor: '#0e4a4e',
        maxColor: '#e6590e'
    },
    chart: {
        backgroundColor: '#0d1635',
    },
    series: [{
        data: data,
        name: '健康数据',
        mapData: Highcharts.maps['cn/china'],
        joinBy: 'name' // 根据 name 属性进行关联
    }]
});







var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLine:{
                lineStyle:{
                    color:'#1eaea2'
                }
            },
            data : ['2013年', '2014年', '2015年', '2016年', '2017年'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color:'#1eaea2'
                }
            }
        }
    ],
    series : [
        {
            name:'健康数据',
            type:'bar',
            barWidth: '38%',
            data:[{value:230,itemStyle:{ normal:{color:'#402abb'} }},
                {value:324,itemStyle:{ normal:{color:'#0097e0'} }},
                {value:408,itemStyle:{ normal:{color:'#d9840b'} }},
                {value:294,itemStyle:{ normal:{color:'#cc1168'} }},
                {value:202,itemStyle:{ normal:{color:'#0c34c7'} }}]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}










