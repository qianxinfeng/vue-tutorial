<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <el-card>
        <div slot="header">
          <span>查询</span>
        </div>
        <el-input placeholder="名称" icon="search" v-model="searchKey" :on-icon-click="search">
        </el-input>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card>
        <div slot="header">
          <span>顶级英雄</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="4" v-for="(hero,index) in topHeroes" :key="hero.id">
            <div class="top-hero" @click="edit(hero.id)">{{hero.name}} </div>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        searchKey: ''
      };
    },
    computed: {
      topHeroes() {
        return this.$store.getters.topHeroes;
      }
    },
    methods: {
      search() {

        this.searchKey = '';
      },
      edit(id){
       this.$router.push({ name: 'heroeDetail', params: {id}});
      }
    }
  }
</script>

<style lang="less" scoped>
  .top-hero {
    text-align: center;
    line-height: 100px;
    color: #eee;
    background-color: #607D8B;
    &:hover {
      background-color: #EEE;
      cursor: pointer;
      color: #607d8b;
    }
  }
</style>
