import { createRouter, createWebHistory } from 'vue-router'

import LoginViewVue from '@/views/LoginView.vue'
import DashboardViewVue from '@/views/DashboardView.vue'
import AlunosViewVue from '@/views/AlunosView.vue'
import AlunosDetailsViewVue from '@/views/AlunosDetailsView.vue'
import SalasDetailsViewVue from '@/views/SalasDetailsView.vue'
import AlunosListComponent from '@/components/AlunosListComponent.vue'
import SalaListComponent from '@/components/SalaListComponent.vue';
import SalaDetailsComponent from '@/components/SalaDetailsComponent.vue'
import SalasView from '@/views/SalasView.vue'
import Game from '@/components/Game.vue'




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
      props: (route) => ({ aluno: route.params.aluno }),
      children:[
        {
          path: '/alunos-cadastrar',
          name: 'alunos-cadastrar-editar',
          component: AlunosDetailsViewVue
        },
        {
          path: '/alunos-cadastrar',
          name: 'alunos-cadastrar-excluir',
          component: AlunosDetailsViewVue
        }
      ]
    },
    {
      path: '/salas',
      name: 'Salas',
      component: SalasView,
      meta: { requiresAuth: true } // Esta meta propriedade indica que a rota requer autenticação
    },
    {
      path: '/salas/details',
      name: 'SalasDetails',
      component: SalasDetailsViewVue,
      meta: { requiresAuth: true }, // Esta meta propriedade indica que a rota requer autenticação
      props: (route) => ({ sala: route.params.sala }),
      children:[
        {
          path: '/salas-cadastrar',
          name: 'salas-cadastrar-editar',
          component: SalasDetailsViewVue
        },
        {
          path: '/salas-cadastrar',
          name: 'salas-cadastrar-excluir',
          component: SalasDetailsViewVue
        }
      ]
    },
    {
      path: '/teste',
      name: 'Teste',
      component: SalaDetailsComponent,
      meta: { requiresAuth: true } // Esta meta propriedade indica que a rota requer autenticação
    },
    {
      path: '/jogos',
      name: 'Jogos',
      component: Game,
      meta: { requiresAuth: true } // Esta meta propriedade indica que a rota requer autenticação
    },
    
  ]
})

export default router
