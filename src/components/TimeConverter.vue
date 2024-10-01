<template>
  <div id="timeConverter">
    <el-container>
      <el-header>
        <h1>时间转换器</h1>
      </el-header>
      <el-main>
        <el-input
          v-model="time"
          placeholder="输入时间数量"
          type="number"
        ></el-input>
        <el-select v-model="fromUnit" placeholder="从单位">
          <el-option label="秒" value="seconds"></el-option>
          <el-option label="分钟" value="minutes"></el-option>
          <el-option label="小时" value="hours"></el-option>
          <el-option label="天" value="days"></el-option>
          <el-option label="月" value="months"></el-option>
          <el-option label="年" value="years"></el-option>
        </el-select>
        到
        <el-select v-model="toUnit" placeholder="到单位">
          <el-option label="秒" value="seconds"></el-option>
          <el-option label="分钟" value="minutes"></el-option>
          <el-option label="小时" value="hours"></el-option>
          <el-option label="天" value="days"></el-option>
          <el-option label="月" value="months"></el-option>
          <el-option label="年" value="years"></el-option>
        </el-select>
        <el-button @click="convert">转换</el-button>
        <el-button @click="clear">清除</el-button>
        <!-- <el-result
          :status="resultStatus"
          :title="resultTitle"
          :sub-title="resultSubtitle"
        ></el-result> -->
        <div v-if="resultStatus === 'success'" class="result-box">
          <p>
            <i class="fas fa-clock"></i> 
            {{ resultTitle }}
          </p>
          <p>{{ resultSubtitle }}</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TimeConverter from "../utils/TimeConverter"; // 引入时间转换器
import { ElMessage } from "element-plus"; // 引入提示框

// 定义时间数量的响应式变量
const time = ref("");
// 定义转换前时间单位的响应式变量
const fromUnit = ref("seconds");
// 定义转换后时间单位的响应式变量
const toUnit = ref("minutes");
// 定义转换结果的响应式变量
const result = ref("");
// 定义结果状态的响应式变量
const resultStatus = ref("");
// 定义结果标题的响应式变量
const resultTitle = ref("");
// 定义结果副标题的响应式变量
const resultSubtitle = ref("");

/**
 * 执行时间转换的函数
 * 检查时间数量是否为空，然后使用TimeConverter进行转换
 * 转换结果将显示在页面上
 */
const convert = () => {
  if (!time.value) {
    ElMessage.error("请输入时间数量");
    return;
  }

  const converter = new TimeConverter();
  let seconds = converter.convertToSeconds(time.value, fromUnit.value);
  result.value = converter.convertFromSeconds(seconds, toUnit.value).toFixed(2);

  resultStatus.value = "success";
  resultTitle.value = "转换结果";
  resultSubtitle.value = `${result.value} ${toUnit.value}`;
};

/**
 * 清空所有输入和输出的函数
 * 将所有相关变量重置为其初始值
 */
const clear = () => {
  time.value = "";
  fromUnit.value = "seconds";
  toUnit.value = "minutes";
  result.value = "";
  resultStatus.value = "";
  resultTitle.value = "";
  resultSubtitle.value = "";
};
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
}

#timeConverter {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.el-button {
  margin: 10px;
}
/* .el-input, .el-select {
  width: 200px;
} */
</style>