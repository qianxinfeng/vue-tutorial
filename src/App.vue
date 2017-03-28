<template>
  <div id="app">
    <el-menu theme="dark" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/dashboard">仪表盘</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/heroes">英雄列表</router-link>
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
    created() {
      this.$store.dispatch('getAllHeroes');
    },
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

