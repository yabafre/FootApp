<template>
    <ion-footer class="footer-nav">
        <ion-toolbar>
            <ion-buttons class="footer-nav-buttons">
                <ion-button @click="$router.push({ name: 'LeagueTable', params: { id: league.id } })" v-for="league in leagues" :key="league.id">
                    {{ league.name }}
                </ion-button>
                <ion-button @click="$router.push({ name: 'Search' })">
                    <ion-icon :icon="search()"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-footer>
</template>

<script>
import { IonButton, IonButtons, IonFooter, IonToolbar, IonIcon } from '@ionic/vue';
import { searchOutline } from 'ionicons/icons';

export default {
    name: 'FooterNav',
    components: { IonFooter, IonToolbar, IonButtons, IonButton, IonIcon },
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
        search() {
            return searchOutline;
        },
    },
};
</script>

<style scoped>
.footer-nav-buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.footer-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
