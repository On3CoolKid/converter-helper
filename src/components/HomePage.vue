<template>
  <div class="home-page">
    <!-- <GlobalSearch /> -->
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover">
          <h1>转换器介绍</h1>
          <p>
            欢迎使用转换器！这是一个简单易用的转换工具.
          </p>
          <h2>主要功能</h2>
          <ul>
            <li>支持多种格式的转换。</li>
            <li>用户友好的界面设计。</li>
            <li>实时预览转换结果。</li>
          </ul>
          <h2>使用方法</h2>
          <ol>
            <li>在输入框中输入需要转换的东西。</li>
            <li>点击“转换”按钮。</li>
            <li>查看转换后的结果。</li>
          </ol>
          <h2>联系我们</h2>
          <p>
            如果您有任何问题或建议，请随时联系我们：
            <a href="mailto:1545782809@qq.com">1545782809@qq.com</a>
          </p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// import GlobalSearch from './search/GlobalSearch.vue';

</script>

<style scoped>
.home-page {
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.el-card {
  margin-bottom: 20px;
}

h1, h2 {
  color: #409eff;
}

ul, ol {
  list-style-type: none;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

a {
  color: #409eff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>