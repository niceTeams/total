var myChart = echarts.init(document.getElementById('electric'));
option = {
    title:{
        text: '24小时电量曲线分析',
        textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#fff'
        },

    },
    color: ['#c7e271', '#d26966', '#0aa8e7', '#ffbf00'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['照明插座用电', '空调用电', '动力用电', '特殊用电'],
        textStyle: {
            fontWeight: 'normal',
            color: '#fff'
        },
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['01:00', '02:00', '03:00', '04:00', '05:00',
                '06:00','07:00','08:00','09:00','10:00',
                '11:00','12:00','13:00','14:00','15:00',
                '16:00','17:00','18:00','19:00','20:00',
                '21:00','22:00','23:00','24:00'],
            axisLabel : {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel : {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    series: [
        {
            name: '照明插座用电',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390,
                320, 332, 301, 334, 390,
                320, 332, 301, 334, 390,
                320, 332, 301, 334, 390,
                320, 332, 301, 334]
        },
        {
            name: '空调用电',
            type: 'bar',
            data: [220, 182, 191, 234, 290,
                220, 182, 191, 234, 290,
                220, 182, 191, 234, 290,
                220, 182, 191, 234, 290,
                220, 182, 191, 234]
        },
        {
            name: '动力用电',
            type: 'bar',
            data: [150, 232, 201, 154, 190,
                150, 232, 201, 154, 190,
                150, 232, 201, 154, 190,
                150, 232, 201, 154, 190,
                150, 232, 201, 154]
        },
        {
            name: '特殊用电',
            type: 'bar',
            data: [98, 77, 101, 99, 40,
                98, 77, 101, 99, 40,
                98, 77, 101, 99, 40,
                98, 77, 101, 99, 40,
                98, 77, 101, 99]
        }
    ]
};
myChart.setOption(option);
