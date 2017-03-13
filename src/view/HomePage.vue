<template>
  <div class="">
  	<div class="alert-notification">
      <el-alert
        title='这特么只是一个测试用的东西。'
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
                      {value:5, name:'Element'},
                      {value:4, name:'Echarts'},
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
