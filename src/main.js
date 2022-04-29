import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'

import Home from '../src/components/Home.vue'
import Contactanos from '../src/components/Contactanos.vue'
import Galeria from '../src/components/Galeria.vue'
import Clasificados from '../src/components/Clasificados.vue'

const routes = [
    {
        path:'/', component: Home,
    },{
        path:'/Galeria', component: Galeria,
    },{
        path:'/Clasificados', component: Clasificados,
    },{
        path:'/Contactanos', component: Contactanos,
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

const app = createApp(App)
app.use(router)

app.mount('#app')


