<template>

  <div id="app">
    <img src="./assets/logo.png" alt="love">
    <div style="width: 100%;">
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router 
        >
        <el-menu-item index="/" >Home</el-menu-item>
        <el-menu-item index="Financial" >Financial Analysis</el-menu-item>
        <el-menu-item index="PDF">PDF Split</el-menu-item>
        <el-menu-item index="Add" disabled>待添加</el-menu-item>
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
*{
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
  width: 50%;
  margin: 0 auto;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active{
   transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
