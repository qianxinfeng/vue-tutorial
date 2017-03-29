<template>
  <div id="app">
    <el-menu theme="dark" mode="horizontal" :router="true" :default-active="menuActived">
      <el-menu-item index="/dashboard">
        仪表盘
      </el-menu-item>
      <el-menu-item index="/heroes">
       英雄列表
      </el-menu-item>
    </el-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed:{
       menuActived(){
         let currentRoute=this.$route.path;
         return currentRoute=="/"?"/dashboard":currentRoute;
       }
    },
    created() {
      this.$store.dispatch('getAllHeroes');
    }
  }
</script>

<style lang="less">
  body {
    margin: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    overflow: auto;
    -webkit-font-smoothing: antialiased;
  }

  .el-menu {
    a {
      text-decoration: none;
    }
  }
</style>

