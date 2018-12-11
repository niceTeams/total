var dom = document.getElementById("containers1");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title:{

        text:"所占比重",
        textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#fff'
        },
        subtext: '100%',
        left:"40%",
        top:"42%",
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#fff'
        },
        data:['个人缴费','外包收入','中央财政收入','地方财政收入','其他收入']
    },
    series: [
        {
            name:'医疗保险',
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
                        color:"#fff",
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
                {value:335, name:'个人缴费',itemStyle:{ normal:{color:'#5e11ed'} } },
                {value:410, name:'外包收入',itemStyle:{ normal:{color:'#f7a60c'} }},
                {value:284, name:'中央财政收入',itemStyle:{ normal:{color:'#05d4fc'} }},
                {value:235, name:'地方财政收入',itemStyle:{ normal:{color:'#1e52fe'} }},
                {value:358, name:'其他收入',itemStyle:{ normal:{color:'#fe2a7e'} }}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}