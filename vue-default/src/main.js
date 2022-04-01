import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(VueSweetalert2)
app.use(router)
app.directive('focus', {
    mounted(el) {
        el.focus();
    }
});
app.mixin(mixins)
app.mount('#app')
