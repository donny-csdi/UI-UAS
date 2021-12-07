import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'


Vue.use(Router)

const router = new Router ({
    mode: 'history',
    routes: [
        {path: '/', 
        component: Home, 
        name: "E-LIB",
        meta: { title: 'E-LIB' },
        },
        {path: "/login",
        name: "Login",
        meta: { title: 'Login'},
        component: Login,
        },
        {path: "/register",
        name: "Register",
        meta: { title: 'Register'}, 
        component: Register,
        },
        {path: "/about",
        name: "About",
        meta: { title: 'About'}, 
        component: About,
        },
        {path: "/team",
        name: "Team",
        meta: { title: 'Team'}, 
        component: Team,
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;