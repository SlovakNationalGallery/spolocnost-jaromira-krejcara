import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Faq from './views/Faq.vue'
import Home from './views/Home.vue'
import NewsDetail from './views/NewsDetail.vue'

require('./bootstrap')


const i18n = createI18n({
    locale: 'sk',
    fallbackLocale: 'sk',
    messages: {}
})

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/', redirect: '/sk'
    }, {
        path: '/:locale',
        component: {
            template: '<router-view></router-view>'
        },
        beforeEnter: (to, from, next) => {
            const locale = to.params.locale
            const supported_locales = ['sk', 'en']
            if (!supported_locales.includes(locale)) return next('sk')
            if (i18n.global.locale !== locale) {
                i18n.global.locale = locale
            }
            return next()
        },
        children: [
            { path: '', name: 'Home', component: Home },
            { path: 'news/:id', name: 'NewsDetail', component: NewsDetail },
            { path: 'faq', name: 'Faq', component: Faq },
        ]
    }]
})

const app = createApp(App)
    .use(i18n)
    .use(router)
    .component('Footer', Footer)

app.config.globalProperties.$i18nRoute = function (to) {
    return {
        ...to,
        params: { locale: this.$i18n.locale, ...to.params }
    }
}

app.mount('#app')

router.beforeEach((to, from, next) => {
    app.menuShown = false
    next()
})