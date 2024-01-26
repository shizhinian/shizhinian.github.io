<template>
    <div class="slidev-layout flex">
        <div class="part_photo" :class="imageOrder">
            <div v-for=" (url, index) in images" :key="index" class="photo-container" :class="hs[index]">
                <img :src="url" class="img shadow-md">
                <div class="figure-comment"> {{ comments[index] }} </div>
            </div>
        </div>
        <div class="part_text" :class="textAlignment">
            <slot />
        </div>

    </div>
</template>
  
<script setup>

import { computed } from 'vue';

const props = defineProps({
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    image3: {
        type: String,
        required: true,
    },
    imageComment1: {
        type: String,
        required: true,
    },
    imageComment2: {
        type: String,
        required: true,
    },
    imageComment3: {
        type: String,
        required: true,
    },
    imageRatio1: {
        type: String,
        required: true,
    },
    imageRatio2: {
        type: String,
        required: true,
    },
    imageRatio3: {
        type: String,
        required: true,
    },
    imageOrder: {
        type: Number,
        required: true
    }
});
const images = [props.image1, props.image2, props.image3];
const comments = [props.imageComment1, props.imageComment2, props.imageComment3];
const hs = [props.imageRatio1, props.imageRatio2, props.imageRatio3];
const imageOrder = computed(() => props.imageOrder === 1 ? 'order-1' : 'order-2')
const textAlignment = computed(() => props.imageOrder === 1 ? 'text-left order-2 justify-end' : 'text-left order-1 justify-start')
</script>

<style scoped>
/* .dashed-border {
    border: 2px dashed #000000;
} */
/* .slidev-layout {
    h1 {
        @apply text-xl;
    }

    h2 {
        @apply text-xl;
    }
} */
</style>