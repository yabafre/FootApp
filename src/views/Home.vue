<template>
    <ion-page>
        <header-nav></header-nav>
        <ion-content class="ion-content">
                <ion-card>
                    <iframe src="https://giphy.com/embed/vp2V5Rf8t4jHpx1bKk" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    <ion-card-header>
                        <ion-card-title>FootApp</ion-card-title>
                    </ion-card-header>
                </ion-card>
        </ion-content>
        <footer-nav></footer-nav>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue';
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";
export default {
    name: 'Home',
    components: {
        FooterNav,
        HeaderNav,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonCard,
        IonCardHeader,
        IonCardTitle,
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