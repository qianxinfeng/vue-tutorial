<template>
  <el-form :model="heroe"  v-if="heroe">
  <el-form-item label="ID">
        <el-input v-model="heroe.id" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="heroe.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  @click="goBack()">返回</el-button>
        <el-button type="primary" @click="save()">保存</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
import {apiUrl} from '@/api'
  export default {
    data(){
      return {
        heroe:null
      }
    },
    created(){
      let vm=this;
      let id=vm.$route.params.id;
      vm.$http.get(apiUrl+`heroes/${id}`).then((response)=>{
       vm.heroe= response.data;
      });
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      save(){
        let vm=this;
        vm.$store.dispatch('saveHeroe', this.heroe).then(()=>{
            vm.goBack();
        }).catch((error)=>{
          console.log(error);
          vm.$message({
              type: 'error',
              message: '保存失败!'
            });
        });
      }
    }
  }
</script>
