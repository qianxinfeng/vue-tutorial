<template>
  <div>
    <el-form :model="form" :inline="true">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addHeroe()">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="heroes">
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
             <el-button type="text"  size="small" @click="deleteHeroe(scope.row.id)" >删除</el-button>
             <el-button type="text"  size="small" @click="edit(scope.row.id)" >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: ""
        }
      }
    },
    computed: {
      heroes() {
        return this.$store.state.heroes;
      }
    },
    methods: {
      addHeroe() {
        let vm=this;
        vm.$store.dispatch('saveHeroe', this.form).then(()=>{
            vm.form.name = "";
            vm.$message({
              type: 'success',
              message: '添加成功!'
            });
        }).catch(()=>{
          vm.$message({
              type: 'error',
              message: '添加失败!'
            });
        });
      },
      deleteHeroe(id) {
        let vm = this;
        vm.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          vm.$store.dispatch('deleteHeroe', id).then(() => {
            vm.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            vm.$message({
              type: 'error',
              message: '删除失败!'
            });
          })
        });

      },
      edit(id){
       this.$router.push({ name: 'heroeDetail', params: {id}});
      }
    }
  }
</script>

<style lang="less">
  .el-form {
    .el-form-item {
      margin: 10px;
    }
  }

  .el-table {
    width: 100%;
  }
</style>
