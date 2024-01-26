<script setup>
import { computed } from 'vue'

const props = defineProps({
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    // image3: {
    //     type: String,
    //     required: true,
    // },
    imageOrder: {
        type: Number,
        required: true
    }
})

const imageOrder = computed(() => props.imageOrder === 1 ? 'order-1' : 'order-2')
const textAlignment = computed(() => props.imageOrder === 1 ? 'text-left order-2 justify-end' : 'text-left order-1 justify-start')
</script>

<template>
    <div class="slidev-layout flex ">
        <div class="part_photo" :class="imageOrder">
            <div class="photo-container ">
                <img :src="image1" class="shadow-md img" />
                <div class="figure-comment">摄影测量三维重建模型</div>
            </div>
            <div class="photo-container">
                <video controls="controls">
                    <source src="D:\OneDrive\Obsidian\MyRepository\附件\2024-01-14 21-22-58.mp4" type="video/mp4" />
                </video>
                <div class="figure-comment">仿真演示</div>
            </div>
        </div>
        <div class="part_text" :class="textAlignment">
            <slot />
        </div>

    </div>
</template>

<style scoped>
.photo-container {
    max-height: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
}

.photo-container video {
    /* width: 100%; */
    height: 90%;
    object-fit: contain;
}
</style>