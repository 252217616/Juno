<template>
  <div class="financial">
     <div id="financialEnum" >
      <el-row class="tac" >
        <el-col :span="3">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#ffffee"
            router >
            <el-menu-item index="/asset">
             <i class="el-icon-menu"></i>
              <span slot="title">财务分析</span>
             
            </el-menu-item>
            <el-menu-item index="/Liabilities">
              <i class="el-icon-share"></i>
              <span slot="title">建设中</span>
            </el-menu-item>
            <el-menu-item index="/fcash" >
              <i class="el-icon-document"></i>
              <span slot="title">建设中</span>
            </el-menu-item>
            <el-menu-item index="/result" disabled>
              <i class="el-icon-setting"></i>
              <span slot="title" >建设中</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        
      </el-row>
     </div>
     <div class="child">
       <div style="margin-top:20px ; height:800px;overflow:auto">
         <transition name="fade" >
            <router-view ></router-view>
          </transition>
       </div>
     </div>
     
  </div>
</template>

<script>
export default {
  name: 'financial',
  data () {
    return {
      msg: '',
      lu: 'sb'
    }
  },
  methods:{
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.financial{
  height: 800px  ;
  
}
#financialEnum{
  margin-top:-20px;
  height: 100%;
  width: 20%;
  background-color:  rgb(255, 255, 238);
  float: left;
}
.child{
  float: left;
  
   width: 78%;
   
   margin-top:-20px;
}
.el-col-3{
  width: 100%;
}
.el-menu-vertical-demo, .el-menu{
  border-right: 0;
}
</style>
