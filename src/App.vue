<template>
  <div class="app">
    <nav-bar></nav-bar>
    <div class="main-content">
      <transition name='main-content-fade'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import Vue from 'vue'
  import 'normalize.css'

  export default {
    name: 'app',
    components: {
      'nav-bar': NavBar
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  $navbarWidth: 150px;

  .app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
    font-size: 14px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    nav {
      width: $navbarWidth;
      height: 100%;
      background-color: #324157;
      float: left;
    }

    .main-content {
      width: calc(100% - #{$navbarWidth});
      height: 100%;
      background-color: #ccc;
      float: left;
      overflow: hidden;
      position: relative;
    }

    .main-content-fade-enter-active, .main-content-fade-leave-active {
      transition: opacity .6s;
    }

    .main-content-fade-enter, .main-content-fade-leave-active {
      opacity: 0;
    }
  }
</style>
