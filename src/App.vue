<template>

  <div id="app">
    <div class="menuBack" style="width: 100%;">
      <div id = "logo" >
        <img src="./assets/logo.png" alt="logo" style="width:100%;height:100%">
      </div>
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545264"
        text-color="#fff"
        active-text-color="#ffd04b"
        router 
        >
        <el-menu-item index="/" ><i class="el-icon-news" style="color:white"></i>Home</el-menu-item>
        <el-menu-item index="Financial" ><i class="el-icon-edit" style="color:white"></i>Financial Analysis</el-menu-item>
        <el-menu-item index="PDF"><i class="el-icon-tickets" style="color:white"></i>PDF Split</el-menu-item>
        <el-menu-item index="Tools"><i class="el-icon-goods" style="color:white"></i>Common Tools</el-menu-item>
        <el-menu-item index="Add" disabled><i class="el-icon-more-outline" style="color:white"></i>待添加</el-menu-item>
      </el-menu>
    </div>
    </div>
    <div style="margin-top: 20px;">
     <transition name="fade" >
      <router-view ></router-view>
      </transition>
    </div>
    
        
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
Vue.use(ElementUI);

export default {
  name: "App",
  data() {
    return {
      list: {},
      activeIndex: "1"
    };
  },
  created() {},

  methods: {
    getList() {
      axios.get("url").then(res => {
        this.list = res.data.result;
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 255, 238);
}
.menu {
  
  margin:auto;
  bottom:0;
  padding-top: 240px;
  
  

}
.menuBack{
  height: 300px;
  background-color:  rgb(255, 255, 238);
  position:relative;
  margin:auto;
}
#logo{
  width:500px;
  height:210px;
  position: absolute;
  left: 40%;
  margin: auto;
  margin-top: 20px;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
