import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/Home.vue';
import LeagueTable from '@/views/LeagueTable.vue';
import ClubDetails from '@/views/ClubDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ligues/:id',
    name: 'LeagueTable',
    component: LeagueTable,
  },
  {
    path: '/clubs/:id',
    name: 'ClubDetails',
    component: ClubDetails,
  },
  {
    path: "/player/:playerId",
    name: "PlayerProfile",
    component: () => import("@/views/PlayerProfile.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search.vue"),
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
