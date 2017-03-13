<template>
  <div class="alert-notification">
    <el-alert
      title='这特么只是一个测试用的东西。'
      :showIcon='true'>
    </el-alert>
  </div>
</template>

<script>

  import { Alert } from 'element-ui'
  import Vue from 'vue'

  Vue.use(Alert)

  export default { 
    name: 'alert'
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .alert-notification{
    width: 300px;
    position: fixed;
    right: 20px;
    top: 30px;
  }
</style>
