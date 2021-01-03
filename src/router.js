import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

// регистрируем роутер как плагин
Vue.use(Router)

export default new Router({
    mode: 'history', // слэш в путях
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
            // подключение lazy
        }

    ]
})