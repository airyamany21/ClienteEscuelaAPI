import Vue from 'vue'
import VueRouter from 'vue-router'
import EstudentsTable from "../components/MiTablaEstudiantes.vue";
import CursosTable from "../components/CursosTable.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/estudiantes",
    name: "Estudents-Table",
    component: EstudentsTable
  },
  {
    path: "/cursos",
    name: "Cursos-Table",
    component: CursosTable
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
