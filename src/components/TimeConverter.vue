<template>
  <div class="timeConverter">
    <el-card shadow="hover">
        <template #header>
          <h2>时间转换器</h2>
        </template>
        <el-main>
          <el-input
            v-model="time"
            placeholder="输入时间数量"
            type="number"
            style="width: 100%; margin-bottom: 10px"
          ></el-input>
          <el-select v-model="fromUnit" placeholder="从单位" style="width: 100%; margin-bottom: 10px">
            <el-option label="秒" value="seconds"></el-option>
            <el-option label="分钟" value="minutes"></el-option>
            <el-option label="小时" value="hours"></el-option>
            <el-option label="天" value="days"></el-option>
            <el-option label="月" value="months"></el-option>
            <el-option label="年" value="years"></el-option>
          </el-select>
          <div class="to">到</div>
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
          <div v-if="resultStatus === 'success'" class="result-box">
            <p>
              <i class="fas fa-clock"></i>
              {{ resultTitle }}
            </p>
            <p>{{ resultSubtitle }}</p>
          </div>
        </el-main>
    </el-card>
  </div>
</template>

<script setup>
// <script setup>是Vue 3中的新特性，用于定义组合式组件。
import { ref } from "vue";
import TimeConverter from "../utils/timeConverter.js"; // 引入时间转换器
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
.timeConverter {
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.to{
  margin-left: 5px;
  margin-bottom: 10px;
}

.el-card {
  margin-bottom: 20px;
}

h2 {
  color: #409eff;
}


.el-input,
.el-select {
  width: 100%;
  margin-bottom: 10px;
}


.result-box {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #409eff;
  border-radius: 4px;
  background-color: #f0f0f0;
}

.result-box p {
  margin: 0;
}

.fas.fa-clock {
  color: #409eff;
  margin-right: 5px;
}

</style>