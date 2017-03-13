<template>
  <nav>
    <el-menu class="el-menu-vertical-demo" @select="handleSelect" theme="dark" :router="true">
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">Element示例</template>
        <el-menu-item-group>
          <template slot="title">原始</template>
          <el-menu-item index="/elements/alert">Alert</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">改动</template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">Echarts示例</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/echarts/first">First</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </nav>
</template>

<script>
  import { Menu, MenuItem, Submenu, MenuItemGroup } from 'element-ui'
  import Vue from 'vue'

  Vue.use(Menu)
  Vue.use(MenuItem)
  Vue.use(Submenu)
  Vue.use(MenuItemGroup)
  
  export default {
  	methods: {
  		handleSelect(){
  			
  		}
  	}
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
