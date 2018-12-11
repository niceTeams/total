var myChart = echarts.init(document.getElementById('mouths'));
option = {
    title : {
        text: '24小时电量曲线分析',

    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['照明插座用电', '空调用电', '动力用电', '特殊用电']
    },

    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['01:00', '02:00', '03:00', '04:00', '05:00',
                '06:00','07:00','08:00','09:00','10:00',
                '11:00','12:00','13:00','14:00','15:00',
                '16:00','17:00','18:00','19:00','20:00',
                '21:00','22:00','23:00','24:00']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'照明插座用电',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[320, 332, 301, 334, 390,
                320, 332, 301, 334, 390,
                320, 332, 301, 334, 390,
                320, 332, 301, 334, 390,
                320, 332, 301, 334]
        },
        {
            name:'空调用电',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[220, 182, 191, 234, 290,
                220, 182, 191, 234, 290,
                220, 182, 191, 234, 290,
                220, 182, 191, 234, 290,
                220, 182, 191, 234]
        },
        {
            name:'动力用电',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[150, 232, 201, 154, 190,
                150, 232, 201, 154, 190,
                150, 232, 201, 154, 190,
                150, 232, 201, 154, 190,
                150, 232, 201, 154 ]
        },
        {
            name:'特殊用电',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[98, 77, 101, 99, 40,
                98, 77, 101, 99, 40,
                98, 77, 101, 99, 40,
                98, 77, 101, 99, 40,
                98, 77, 101, 99  ]
        }
    ]
};

myChart.setOption(option);