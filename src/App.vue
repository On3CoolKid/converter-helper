<template>
  <!-- <TimeConverter></TimeConverter> -->
  <div id="app">
    <el-container>
      <el-aside width="240px">
        <!-- 侧边栏菜单 -->
        <SidebarMenu />
      </el-aside>
      <el-main>
        <!-- 路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 引入ref，用于创建响应式数据
import SidebarMenu from './components/SidebarMenu.vue'; // 导入侧边栏菜单组件
// import { ElMessage } from 'element-plus'; // 导入Element Plus的消息提示组件

</script>

<style>
/* 清除默认边距和填充 */
html, body, #app, .el-container {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
