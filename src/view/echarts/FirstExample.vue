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
  import { Alert } from 'element-ui'
  import Vue from 'vue'
  import echarts from 'echarts/lib/echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'

  Vue.use(Alert)

  export default {
    name: 'first-example',
    components: {
    	
    },
    mounted(){
      const tableEle = this.$refs.chartsTable
      const myChart = echarts.init(tableEle);

      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
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
