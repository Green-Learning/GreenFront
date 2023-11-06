import { createRouter, createWebHistory } from 'vue-router'

import LoginViewVue from '@/views/LoginView.vue'
import DashboardViewVue from '@/views/DashboardView.vue'
import AlunosViewVue from '@/views/AlunosView.vue'
import AlunosDetailsViewVue from '@/views/AlunosDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginViewVue
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardViewVue,
      meta: { requiresAuth: true } // Esta meta propriedade indica que a rota requer autenticação
    },
    {
      path: '/alunos',
      name: 'Alunos',
      component: AlunosViewVue,
      meta: { requiresAuth: true } // Esta meta propriedade indica que a rota requer autenticação
    },
    {
      path: '/alunos/details',
      name: 'AlunosDetails',
      component: AlunosDetailsViewVue,
      meta: { requiresAuth: true }, // Esta meta propriedade indica que a rota requer autenticação
      props: (route) => ({ aluno: route.params.aluno })
    },
    
  ]
})

export default router
