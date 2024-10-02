<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="handleSelect">
    <el-menu-item v-for="item in menuItems" :key="item.path" :index="item.path">
      {{ item.label }}
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'; // 
import { ref } from 'vue';
import { menuItems } from '../config/menuItems'; // 

const router = useRouter();

function handleSelect(path) {
  router.push(path);
}
</script>

<style scoped>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 100vh; /* 设置为全高 */
  background-color: #f5f7fa;
}

.el-menu-item {
  padding: 12px 20px;
  border-left: 4px solid transparent;
}

.el-menu-item.is-active {
  border-left-color: #409eff;
  background-color: #e6f7ff;
  color: #409eff;
}

.el-menu-item:hover {
  background-color: #e6f7ff;
  color: #409eff;
}
</style>