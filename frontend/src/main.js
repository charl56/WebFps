import { createApp } from 'vue'
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})
// Particules
import Particles from "vue3-particles";


const app = createApp(App)

app.config.globalProperties.$backendAddress = import.meta.env.VITE_BACK_URL || "http://127.0.0.1:3000/"     // Addresse du back pour les requêtes

app.use(vuetify);
app.use(Particles);

app.mount('#app');
