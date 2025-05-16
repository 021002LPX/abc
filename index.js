



import Playlist from '../views/Playlist.vue';
import Ranking from '../views/Ranking.vue';
import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Geshou from "@/views/Geshou.vue";
import Fenlei from "@/views/Fenlei.vue";
import GEM from "@/views/GEM.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/playlist',
        name: 'Playlist',
        component: Playlist
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: Ranking
    },
    {
        path: '/geshou',
        name: 'Geshou',
        component: Geshou
    },
    {
        path: '/fenlei',
        name: 'Fenlei',
        component:Fenlei
    },
    {
        path: '/gem',
        name: 'Gem',
        component: GEM
    }
    // 路由配置项
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router