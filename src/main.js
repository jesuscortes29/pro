import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { VLayout } from 'vuetify/lib';

Vue.config.productionTip = false

new Vue({
    vuetify,
    components: {
        VLayout
    },
    render: h => h(App)
}).$mount('#app')

