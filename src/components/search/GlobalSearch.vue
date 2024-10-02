<template>
  <el-input
    placeholder="搜索"
    prefix-icon="el-icon-search"
    v-model="searchQuery"
    @keyup.enter="handleSearch"
    class="global-search"
  >
    <template #append>
      <el-button @click="handleSearch" type="primary">搜索</el-button>
    </template>
  </el-input>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus"; // 引入提示框

const searchQuery = ref("");

const router = useRouter();

function handleSearch() {
  // 处理搜索逻辑
  if (searchQuery.value.trim() === "") {
    ElMessage.error("请输入搜索关键词");
    return;
  }

  // 跳转到搜索结果页面
  router.push(`/search?query=${encodeURIComponent(searchQuery.value)}`);
}
</script>

<style scoped>
.global-search {
  margin-bottom: 20px;
}
</style>