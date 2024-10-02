<template>
  <div class="search-results">
    <el-button @click="goBack" class="back-button">返回</el-button>
    <h1>搜索结果</h1>
    <p>查询关键词: {{ query }}</p>
    <p>这里可以展示搜索结果...</p>
    <el-row>
      <el-col :span="24">
        <el-card v-for="(page, index) in pages" :key="index" shadow="hover">
          <h2>{{ page.title }}</h2>
          <p>{{ page.description }}</p>
          <el-button @click="navigateToPage(page.path)">跳转</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const query = ref(route.query.query || "");
const pages = ref([
  {
    title: "时间转换器",
    description: "这是一个时间转换工具",
    path: "/time-converter",
  },
  { title: "主页", description: "这是主页", path: "/" },
]);

onMounted(() => {
  if (route.query.query) {
    query.value = route.query.query;
  }
  console.log("查询关键词:", query.value);
});

function goBack() {
  router.go(-1); // 返回上一级页面
}

function navigateToPage(path) {
  router.push(path);
}
</script>

<style scoped>
.search-results {
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

h1 {
  color: #409eff;
}

.el-card {
  margin-bottom: 20px;
}
</style>