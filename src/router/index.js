// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import TimeConverter from '../components/TimeConverter.vue';
import AgeCalculator from '../components/AgeCalculator.vue';
// import SearchResults from '../components/SearchResults.vue'; // 新增搜索结果页面

const routes = [
  { path: '/', component: HomePage },
  { path: '/time-converter', component: TimeConverter },
  { path: '/age-calculator', component: AgeCalculator },
  
  // { path: '/search', component: SearchResults }, // 新增搜索结果页面
  // Add more
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;