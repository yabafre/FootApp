<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Recherche Par joueur</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="$router.go(-1)">
                        <ion-icon :icon="closeOutline()"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item>
                <ion-label>Search Player</ion-label>
                <ion-searchbar v-model.debounce="query" @ionInput="search" :placeholder="'Rechercher...'"></ion-searchbar>
            </ion-item>
            <ion-list>
                <template v-for="player in filteredPlayers">
                    <ion-item :href="`/player/${player.idPlayer}`">
                        <ion-avatar slot="start">
                            <img :src="player.strThumb" />
                        </ion-avatar>
                        <ion-label>{{ player.strPlayer }}</ion-label>
                    </ion-item>
                </template>
            </ion-list>
        </ion-content>
        <footer-nav></footer-nav>
    </ion-page>
</template>

<script>
import axios from "axios";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonList,
    IonIcon,
    IonButtons,
    IonAvatar,
    IonSearchbar
} from "@ionic/vue";
import { closeOutline } from "ionicons/icons";
import FooterNav from "@/components/FooterNav.vue";

export default {
    components: {
        FooterNav,
        IonIcon,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonList,
        IonButtons,
        IonAvatar,
        IonSearchbar
    },
    data() {
        return {
            query: "",
            players: []
        };
    },
    computed: {
        filteredPlayers() {
            if (!this.query) {
                return []
            }
            if (this.players !== null) {
                return this.players.filter(player => player.strSport === "Soccer" && player.strThumb !== null && player.strPlayer.toLowerCase().includes(this.query.toLowerCase()));
            } else {
                return []
            }
        }
    },
    methods: {
        closeOutline() {
            return closeOutline;
        },
        async search() {
            if (this.query.trim() === "") {
                this.players = [];
                return false;
            }
            try {
                const response = await axios.get(
                    `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${this.query}`
                );
                this.players = response.data.player;
                console.log(this.players)
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
