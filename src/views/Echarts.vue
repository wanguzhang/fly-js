<template>
    <div>
        <div id="myChart" :style="{width: '800px', height: '400px'}"></div>
    </div>
</template>

<script>
import echarts from 'echarts';

export default {
    mounted() {
        this.initEcharts();
    },
    methods: {
        initEcharts() {
            const myChart = echarts.init(document.getElementById('myChart'));
            const scaleData = [
                {
                    name: '这是文案',
                    value: 60,
                },
                {
                    name: '这是文案',
                    value: 60,
                },
                {
                    name: '这是文案',
                    value: 130,
                },
            ];

            const grid = {
                left: '5px', // 与容器左侧的距离
                right: '5px', // 与容器右侧的距离
                top: '5px', // 与容器顶部的距离
                bottom: '5px', // 与容器底部的距离
            };
            const placeHolderStyle = {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: true,
                    },
                    index: -100,
                    color: '#FFFFFF20',
                    borderColor: '#FFFFFF20',
                    borderWidth: 0,
                },
            };
            const data = [];
            const color = ['#5CF9FE'];
            scaleData.forEach((item) => {
                data.push(
                    {
                        value: item.value,
                        name: item.name,
                        label: {
                            color: '#dfe9e3',
                        },
                        labelLine: {
                            show: true,
                            length: 20,
                            length2: 40,
                            lineStyle: {
                                color: '#053256',
                                width: 2,
                            },
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                shadowBlur: 20,
                                borderColor: '#00f948',
                                shadowColor: '#12b4ff',
                            },
                        },
                    },
                    {
                        value: 0.5,
                        name: '',
                        itemStyle: placeHolderStyle,
                    },
                );
            });
            const seriesObj = [
                {
                    type: 'gauge',
                    name: '外层辅助',
                    radius: '60%',
                    startAngle: '225',
                    endAngle: '-134.999',
                    splitNumber: '100',
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1,
                        },
                    ],
                    title: {
                        show: true,
                        offsetCenter: [0, 30],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 20,
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [[1, '#00FFFF']],
                            width: 2,
                            opacity: 1,
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                        length: 20,
                        lineStyle: {
                            color: '#051932',
                            width: 0,
                            type: 'solid',
                        },
                    },
                    axisLabel: {
                        show: false,
                    },
                },
                {
                    type: 'gauge',
                    name: '外层辅助',
                    radius: '45%',
                    startAngle: '225',
                    endAngle: '-134.999',
                    splitNumber: '100',
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1,
                        },
                    ],
                    // data: [{value: 1, name: 90}],
                    title: {
                        show: true,
                        offsetCenter: [0, 30],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 20,
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [[1, '#00FFFF']],
                            width: 2,
                            opacity: 1,
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        length: 20,
                        lineStyle: {
                            color: '#051932',
                            width: 0,
                            type: 'solid',
                        },
                    },
                    axisLabel: {
                        show: false,
                    },
                },

                {
                    name: '',
                    type: 'pie',
                    clockWise: false,
                    radius: ['50%', '56%'],
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'outside',
                                color: '#f4fff7',
                                formatter(params) {
                                    let percent = 0;
                                    let total = 0;
                                    for (let i = 0; i < scaleData.length; i++) {
                                        total += scaleData[i].value;
                                    }
                                    percent = ((params.value / total) * 100).toFixed(0);
                                    if (params.name !== '') {
                                        return `${params.name}\n` + `${percent}%`;
                                    }
                                    return '';
                                },
                            },
                        },
                    },
                    data,
                },
            ];
            const option = {
                // backgroundColor: '#04243E',
                color,
                grid,
                tooltip: {
                    show: false,
                },
                legend: {
                    show: false,
                },
                series: seriesObj,
            };
            myChart.setOption(option);
        },
    },
};
</script>
