var dom = document.getElementById("containers2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    legend: {
        orient: 'vertical',
        x: 'right',
        textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#fff'
        },
        data: ['工作就业', '医疗保险','社会治安','居住环境']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            }
        },

        indicator: [
            { name: '社会治安', max: 6500},
            { name: '工作就业', max: 16000},
            { name: '国家政策', max: 30000},
            { name: '居住环境', max: 38000},
            { name: '医疗保险', max: 52000}
        ]
    },
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 34200],
                name : '工作就业',
                itemStyle:{ normal:{color:'#5e11ed'} }
            },
            {
                value : [5000, 14000, 28000, 31000, 42000],
                name : '医疗保险',
                itemStyle:{ normal:{color:'#02fb08'} }
            },
            {
                value : [3000, 11000, 21000, 23020, 12000],
                name : '社会治安',
                itemStyle:{ normal:{color:'#e53290'} }
            },
            {
                value : [4000, 9630, 6030, 2850, 9600],
                name : '居住环境',
                itemStyle:{ normal:{color:'#ebe902'} }
            }
        ]
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


