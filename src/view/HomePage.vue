<template>
  <div class="">
  	<div class="alert-notification">
      <el-alert
        title='首页'
        :showIcon='true'>
      </el-alert>
    </div>
    <div class="home-page-table" ref="chartsTable"></div>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  import 'echarts/lib/chart/pie'

  import { getTypes } from '../api'

  import { Alert } from 'element-ui'
  import Vue from 'vue'

  Vue.use(Alert)

  export default {
    name: 'home-page',
    components: {
    	
    },
    mounted(){
      const tableEle = this.$refs.chartsTable
      const myChart = echarts.init(tableEle)

      getTypes(data => {
        myChart.setOption({
            title : {
                text: 'ALL CURRENT EXAMPLES',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Element', 'Echarts']
            },
            series : [
                {
                    name: '目前情况',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:data.elements, name:'Element'},
                        {value:data.echarts, name:'Echarts'},
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
        });
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .home-page-table {
    width: 600px;
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
