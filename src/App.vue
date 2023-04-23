<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet} from '@ionic/vue';
</script>




<style>
/* Couleurs personnalisées */
:root {
    --ion-color-primary: #122c34;
    --ion-color-primary-contrast: #ffffff;

    --ion-color-secondary: #224870;
    --ion-color-secondary-contrast: #ffffff;

    --ion-color-tertiary: #2a4494;
    --ion-color-tertiary-contrast: #ffffff;

    --ion-color-quaternary: #4ea5d9;
    --ion-color-quaternary-contrast: #ffffff;

    --ion-color-quinary: #44cfcb;
    --ion-color-quinary-contrast: #ffffff;

    /* Autres styles */
    --ion-toolbar-background: var(--ion-color-primary);
    --ion-toolbar-color: var(--ion-color-primary-contrast);
    --ion-background-color: var(--ion-color-secondary);
    --ion-text-color: var(--ion-color-primary-contrast);
}

</style>
