<template>
    <ion-header class="header-nav">
        <ion-toolbar>
            <ion-buttons v-if="showBackButton" slot="start">
                <ion-button @click="$router.go(-1)">
                    <ion-icon :icon="arrowBack()"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>{{ currentTitle }}</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="$router.push({ name: 'Home' })">
                    <ion-icon :icon="football()" size="large"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import {
    IonApp, IonBackButton,
    IonButton,
    IonButtons, IonContent,
    IonHeader,
    IonIcon, IonInput, IonItem, IonLabel, IonList,
    IonPage, IonRouterOutlet,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from "@ionic/vue";
import {watch} from "vue";
import {arrowBack, balloon, football, searchOutline} from "ionicons/icons";
import axios from "axios";
export default {
    name: "HeaderNav",
    components: { IonPage, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonRouterOutlet, IonButtons, IonSearchbar, IonIcon, IonBackButton, searchOutline },
    data() {
        return {
            showSearch: false,
            query: "",
            currentTitle: "",
            showBackButton: false,
        };
    },
    created() {
        watch(() => this.$route, (to, from) => {
            this.updateTitleAndBackButton(to);
        }, { immediate: true });
    },
    methods: {
        football() {
            return football
        },
        arrowBack() {
            return arrowBack
        },
        searchOutline() {
            return searchOutline
        },
        search() {
            return searchOutline
        },
        updateTitleAndBackButton(route) {
            if (route.name === 'Home') {
                this.currentTitle = 'Accueil';
                this.showBackButton = false;
            } else if (route.name === 'LeagueTable') {
                this.currentTitle = 'Classement';
                this.showBackButton = true;
            } else if (route.name === 'ClubDetails') {
                this.currentTitle = 'Détails du club';
                this.showBackButton = true;
            } else if (route.name === 'Search') {
                this.currentTitle = 'Recherche';
                this.showBackButton = true;
            } else {
                // Update with other route names and titles as needed
                this.currentTitle = '';
                this.showBackButton = true;
            }
        },
    },
}
</script>

<style scoped>
.header-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>