var chartMap = echarts.init(document.getElementById('chart_map'));
var data = genData(50);
optionMap = {
    title : {
        text: '同名数量统计',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
    },
    series : [
        {
            name: '姓名',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
function genData(count) {
    var nameList = [
        '1', '2', '3', '4'];
    var legendData = [];
    var seriesData = [];
    var selected = {};
    for (var i = 0; i < 50; i++) {
        name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
        });
        selected[name] = i < 6;
    }
    return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
    };
    function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
    }
}
chartMap.setOption(optionMap);

var chart1 = echarts.init(document.getElementById('chart1'));
chart1.title = '世界人口总量 - 条形图';

option1 = {
    title: {
        text: '客户数',
        subtext: '',
        textStyle:{
            color:'white'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel:{
            formatter:'{value}',
            textStyle:{
                color:'white'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['深圳','上海','苏州','广东','福建'],
        axisLabel:{
            formatter:'{value}',
            textStyle:{
                color:'white'
            }
        }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744],
            color:'#00c9b7'
        }
    ]
};
chart1.setOption(option1);

var chart2 = echarts.init(document.getElementById('chart2'));
chart2.title = '环形图';
option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['','']
    },
    series: [
        {
            name:'客户占比',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:70, name:'老用户'},
                {value:30, name:'新用户'}
            ]
        }
    ]
};
chart2.setOption(option2);

var chart3 = echarts.init(document.getElementById('chart3'));
option3 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{
            formatter:'{value}',
            textStyle:{
                color:'white'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            formatter:'{value}',
            textStyle:{
                color:'white'
            }
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
};

chart3.setOption(option3);
