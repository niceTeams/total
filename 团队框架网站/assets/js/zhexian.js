var dom = document.getElementById("containers3");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#fff'
        },
        data: ['直接访问','邮件营销','联盟广告']
    },
    series : [
        {
            name: '健康数据',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:645, name:'31.29%',itemStyle:{ normal:{color:'#07d0fa'} }},
                {value:248, name:'14.54%',itemStyle:{ normal:{color:'#e7e706'} }},
                {value:567, name:'43.78%',itemStyle:{ normal:{color:'#fe2a7e'} }}
            ],
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
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}