<template>
    <ion-page>
        <header-nav></header-nav>
        <ion-content class="ion-content">
            <ion-card>
                <img :src="dernierEvenement.strThumb" class="md" alt="team"/>
                <ion-card-header>
                    <ion-card-title>{{ dernierEvenement.strEvent }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-card-title>{{ dernierEvenement.intHomeScore }} - {{ dernierEvenement.intAwayScore }}</ion-card-title>
                    <ion-card-subtitle>{{ dernierEvenement.strStatus }} / {{ dernierEvenement.dateEvent }}</ion-card-subtitle>
                </ion-card-content>
            </ion-card>
            <ion-list>
                <ion-list-header>
                    <ion-label>Derniers événements</ion-label>
                </ion-list-header>
                <template v-for="(evenement, index) in derniersEvenements">
                    <ion-item @click="toggleVisibility(evenement)" button>
                        <ion-label>{{ evenement.strEvent }}</ion-label>
                        <ion-note slot="end">{{ evenement.dateEvent }}</ion-note>
                    </ion-item>
                    <ion-card v-if="evenement.visible">
                        <ion-card-header>
                            <ion-card-title>{{ evenement.strEvent }}</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-card-title>{{ evenement.intHomeScore }} - {{ evenement.intAwayScore }}</ion-card-title>
                            <ion-card-subtitle>{{ evenement.strStatus }} / {{ evenement.dateEvent }}</ion-card-subtitle>
                        </ion-card-content>
                    </ion-card>
                </template>
            </ion-list>
        </ion-content>
        <footer-nav></footer-nav>
    </ion-page>
</template>

<script>
import api from '@/services/api';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonListHeader, IonNote, IonBackButton, IonCardSubtitle } from '@ionic/vue';
import App from "@/App.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
    name: 'ClubDetails',
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
        IonButton,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonListHeader,
        IonNote,
        IonBackButton,
        IonCardSubtitle
    },
    data() {
        return {
            dernierEvenement: {},
            derniersEvenements: [],
        };
    },
    async created() {
        const clubId = this.$route.params.id;
        try {
            const response = await api.getLastEventsForClub(clubId);
            console.log(response.data.results);
            this.dernierEvenement = response.data.results[0];
            this.derniersEvenements = response.data.results.slice(1).map(evenement => ({...evenement, visible: false }));
        } catch (error) {
            console.error(error);
            // Afficher un message d'erreur ou rediriger l'utilisateur vers une page d'erreur
        }
    },
    methods: {
        toggleVisibility(evenement) {
            evenement.visible = !evenement.visible;
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