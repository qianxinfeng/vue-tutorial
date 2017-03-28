<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <el-card>
        <div slot="header">
          <span>查询</span>
        </div>
        <el-autocomplete
      v-model="searchKey"
      custom-item="filter-item"
      :fetch-suggestions="filterHeroes"
      placeholder="名称"
      @select="edit" icon="search"
    ></el-autocomplete>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card>
        <div slot="header">
          <span>顶级英雄</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="4" v-for="(hero,index) in topHeroes" :key="hero.id">
            <div class="top-hero" @click="edit(hero)">{{hero.name}} </div>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Vue from 'vue';
Vue.component('filter-item', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { }, [item.name])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
  export default {
    data() {
      return {
        searchKey:''
      };
    },
    computed: {
      heroes() {
        return this.$store.state.heroes;
      },
      topHeroes() {
        return this.$store.getters.topHeroes;
      }
    },
    methods: {
      filterHeroes(key,cb){
        let vm=this;
        let heroes=vm.heroes;
        let results=key?heroes.filter(obj=>obj.name.indexOf(key)!=-1):heroes;
        cb(results);
      },
      edit(item){
       this.$router.push({ name: 'heroeDetail', params: {id:item.id}});
      }
    },
    components:{
      "filter-item":{
        functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { }, [item.name])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-autocomplete{
    display:block;
  }
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
