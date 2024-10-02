import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
// 将 dayjs 语言包设置为中文
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/es/locale/lang/zh-cn';

const app = createApp(App);
app.use(ElementPlus,{locale});// 配置中文
// app.use(ElementPlus);
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')
