import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/pages/master/dashboard.vue';
import home from '@/pages/home.vue';
import profile from '@/pages/profile.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
]
const router = Router();
export default router;
function Router() {
    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
    });
    return router;
}