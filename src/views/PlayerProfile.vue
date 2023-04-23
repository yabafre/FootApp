<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="$router.go(-1)">
                        <ion-icon :icon="arrowBack()"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>{{ player.strPlayer }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-img :src="player.strThumb"></ion-img>
                <ion-card-header>
                    <ion-card-title>{{ player.strPlayer }}</ion-card-title>
                    <ion-button @click="toggleDescription" expand="block" size="small">
                        {{ showDescription ? 'Masquer la description' : 'Afficher la description' }}
                    </ion-button>
                </ion-card-header>
                <ion-card-content>
                    <ion-text v-if="showDescription">
                        <p>{{ player.strDescriptionEN }}</p>
                    </ion-text>
                </ion-card-content>
            </ion-card>
            <ion-card v-if="images.length > 0">
                <swiper :options="slideOpts">
                    <swiper-slide v-for="(photo, index) in images" :key="index">
                        <ion-img :src="photo"></ion-img>
                    </swiper-slide>
                </swiper>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Informations</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-label>Date de naissance :</ion-label>
                            <ion-text>{{ player.dateBorn }}</ion-text>
                        </ion-item>
                        <ion-item>
                            <ion-label>Lieu de naissance :</ion-label>
                            <ion-text>{{ player.strBirthLocation }}</ion-text>
                        </ion-item>
                        <ion-item>
                            <ion-label>Nationalité :</ion-label>
                            <ion-text>{{ player.strNationality }}</ion-text>
                        </ion-item>
                        <ion-item>
                            <ion-label>Position :</ion-label>
                            <ion-text>{{ player.strPosition }}</ion-text>
                        </ion-item>
                        <ion-item>
                            <ion-label>Club actuel :</ion-label>
                            <ion-text>{{ player.strTeam }}</ion-text>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import axios from "axios";
import {
    IonButtons,
    IonButton,
    IonIcon,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
} from "@ionic/vue";
import { arrowBack } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";

export default {
    components: {
        IonButtons,
        IonButton,
        IonIcon,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonText,
        IonRow,
        IonCol,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        Swiper,
        SwiperSlide,
        IonImg
    },
    data() {
        return {
            player: {},
            images: [],
            slideOpts: {
                initialSlide: 0,
                speed: 400,
            },
            showDescription: false,
        };
    },
    methods: {
        arrowBack() {
            return arrowBack;
        },
        toggleDescription() {
            this.showDescription = !this.showDescription;
        },
    },
    async mounted() {
        const playerId = this.$route.params.playerId;
        const response = await axios.get(
            `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerId}`
        );
        this.player = response.data.players[0];
        if (response.data.players[0].strFanart1 != null) {
            this.images.push(response.data.players[0].strFanart1);
        }
        if (response.data.players[0].strFanart2 != null) {
            this.images.push(response.data.players[0].strFanart2);
        }
        if (response.data.players[0].strFanart3 != null) {
            this.images.push(response.data.players[0].strFanart3);
        }
        if (response.data.players[0].strFanart4 != null) {
            this.images.push(response.data.players[0].strFanart4);
        }
        console.log(response);
        console.log(this.images);
    },

};
</script>
