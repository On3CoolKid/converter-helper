<template>
  <div class="age-calculator">
    <el-card shadow="hover">
      <template #header>
        <h2>年龄计算器</h2>
      </template>
      <el-form label-position="top">
        <el-form-item label="出生日期 （格式为 yyyy-MM-dd，例如 2023-04-15）">
          <el-date-picker
            v-model="birthDate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button @click="calculateAge">计算年龄</el-button>
          <el-button @click="clear">清除</el-button>
        </el-form-item>
      </el-form>
      <p v-if="age !== null">您的年龄是: {{ age }} 岁</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';

const birthDate = ref('');
const age = ref(null);

function calculateAge() {
  if (!birthDate.value) {
    ElMessage.error("请选择出生日期");
    return;
  }

  const birth = new Date(birthDate.value); // 获取出生日期
  // console.log("birthDate.value:",birthDate.value);
  // console.log("birth:",birth);
  
  const today = new Date();
  let calculatedAge = today.getFullYear() - birth.getFullYear();

  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    calculatedAge--;
  }

  age.value = calculatedAge;
}

function clear() {
  birthDate.value = '';
  age.value = null;
}
</script>

<style scoped>
.age-calculator {
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

h2 {
  color: #409eff;
}
</style>