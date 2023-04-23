<template>
    <ion-page>
        <header-nav></header-nav>
        <ion-content class="ion-content">
            <ion-list>
                <ion-item v-for="(club, index) in leagueTable" :key="club.idTeam" class="rounded-item">
                    <img :src="club.strTeamBadge" class="team-logo" alt="team logo" />
                    <ion-label>{{ index + 1 }}. {{ club.strTeam }} - {{ club.intPoints }} points</ion-label>
                    <ion-button slot="end" color="success" @click="openClub(club.idTeam)">Détails</ion-button>
                </ion-item>
            </ion-list>
        </ion-content>
        <footer-nav></footer-nav>
    </ion-page>
</template>


<script>
import api from '@/services/api';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonBackButton } from '@ionic/vue';
import App from "@/App.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
    name: 'LeagueTable',
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
        IonButton,
        IonBackButton,
    },
    data() {
        return {
            leagueTable: [],
        };
    },
    async created() {
        const leagueId = this.$route.params.id;
        const response = await api.getLeagueTable(leagueId);
        this.leagueTable = response.data.table;
        console.log(this.leagueTable)
    },
    methods: {
        openClub(clubId) {
            this.$router.push({ name: 'ClubDetails', params: { id: clubId } });
        },
    },
};
</script>
<style scoped>
.rounded-item {
    border-radius: 15px;
    overflow: hidden;
}

.ion-content {
    --padding-top: 50px;
    --padding-bottom: 50px;
}

.team-logo {
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: 10px;
}
</style>
