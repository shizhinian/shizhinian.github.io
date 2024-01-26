<script setup>
import { computed } from 'vue'

const props = defineProps({
    video: {
        type: String,
        required: true,
    }
})

const imageOrder = computed(() => props.imageOrder === 1 ? 'order-1' : 'order-2')
const textAlignment = computed(() => props.imageOrder === 1 ? 'text-left order-2 justify-end' : 'text-left order-1 justify-start')
</script>

<template>
    <div class="slidev-layout h-full px-12  pd-8 disply">
        <div class="text ">
            <slot />
        </div>

        <div class="video">
            <video controls="controls">
                <source :src="video" type="video/mp4" />
            </video>
            <div class="video-comment">
                运行演示
            </div>
        </div>
    </div>
</template>
<style scoped>
.text {
    max-height: 10%;
    /* background-color: aqua; */
}

.video {
    max-height: 90%;
    flex: 1;
    /* background-color: rgb(6, 78, 78); */
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.disply {
    display: flex;
    flex-direction: column;
}

.video video {
    /* width: 100%; */
    height: 95%;

}

.video .video-comment {

    text-align: center;
    flex: 1;
    font-size: 10px;
    padding: 0.5em;
    /* background-color: azure; */
    max-height: 5%;

}
</style>