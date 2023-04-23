<template>
    <ion-page>
        <header-nav></header-nav>
        <ion-content class="ion-content">
                <ion-list>
                    <ion-item v-for="league in leagues" :key="league.id" @click="openLeague(league.id)" button>
                        <ion-label>{{ league.name }}</ion-label>
                    </ion-item>
                </ion-list>
        </ion-content>
        <footer-nav></footer-nav>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/vue';
import App from "@/App.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";
export default {
    name: 'Home',
    components: {
        FooterNav,
        HeaderNav,
        App,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
    },
    data() {
        return {
            leagues: [
                { id: 4334, name: 'Ligue 1' },
                { id: 4401, name: 'Ligue 2' },
                { id: 4637, name: 'National' },
            ],
        };
    },
    methods: {
        openLeague(leagueId) {
            this.$router.push({ name: 'LeagueTable', params: { id: leagueId } });
        },
    },
};
</script>

<style scoped>
.ion-content {
    --padding-top: 50px;
    --padding-bottom: 50px;
}
</style>