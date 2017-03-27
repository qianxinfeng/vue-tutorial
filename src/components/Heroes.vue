<template>
<div>
  <el-form :model="form">
    <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="submit"  @click="addHeroe()" >保存</el-button>
  </el-form-item>
  </el-form>
  <form >
    <el-input placeholder="名称" icon="search" v-model="name" >
        </el-input>
        <el-button type="submit"  @click="addHeroe()" >保存</el-button>
  </form>
  <el-table :data="heroes">
    <el-table-column prop="id" label="ID">
    </el-table-column>
    <el-table-column prop="name" label="姓名">
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
          <el-button type="text"  size="small" @click="deleteHeroe(scope.row.id)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>

</template>

<script>
  export default {
    data() {
      return {
        form:{
          name:""
        }
      }
    },
    computed: {
      heroes() {
        return this.$store.state.heroes;
      }
    },
    created() {
      this.$store.dispatch('getAllHeroes');
    },
    methods: {
      addHeroe(){
        this.$store.dispatch('saveHeroe',this.form)
        this.form.name="";
      },
      deleteHeroe(id) {
        this.$store.dispatch('deleteHeroe',id);
      }
    }
  }
</script>

<style lang="less">
  .el-form{
    width:50%
  }
  .el-table {
    width: 100%;
  }
</style>
