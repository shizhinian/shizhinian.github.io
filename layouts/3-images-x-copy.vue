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
    image3: {
        type: String,
        required: true,
    },
    imageOrder: {
        type: Number,
        required: true
    }
})

const imageOrder = computed(() => props.imageOrder === 1 ? 'order-1' : 'order-2')
const textAlignment = computed(() => props.imageOrder === 1 ? 'text-left order-2 justify-end' : 'text-left order-1 justify-start')
</script>

<template>
    <div class="slidev-layout h-full grid px-12 pt-16 pd-8 ">
        <div class="flex justify-center background">
            <div class=" w-1/2 h-full flex flex-col justify-center item-center px-8  object-cover left" :class="imageOrder">
                <div class=" py-1  photo-container ">
                    <img :src="image1" class="    shadow-md img" />
                    <div class="figure-comment">AMCL</div>
                </div>
                <div class=" py-1 photo-container">
                    <img :src="image2" class="    shadow-md img" />
                    <div class="figure-comment">色深</div>
                </div>
                <div class=" py-1  photo-container">
                    <img :src="image3" class="    shadow-md  img" />
                    <div class="figure-comment">人工势场法示意图</div>

                </div>
            </div>
            <div class=" w-1/2 flex flex-col justify-left" :class="textAlignment">
                <slot />
            </div>

        </div>

    </div>
</template>