import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import TeacherView from '../views/TeacherView.vue';
import StudentView from '../views/StudentView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/teacherHome',
      name: 'TeacherHome',
      component: TeacherView,
    },
    {
      path: '/studentHome',
      name: 'StudentHome',
      component: StudentView,
    },
  ],
});

export default router;
