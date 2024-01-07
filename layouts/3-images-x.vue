<script setup> 
import {computed} from 'vue'

const props = defineProps({
    image1:{
        type:String,
        required:true,
    },
    image2:{
        type:String,
        required:true,
    },
    image3:{
        type:String,
        required:true,
    },
    imageOrder:{
        type:Number,
        required:true
    }
})

const imageOrder = computed(() => props.imageOrder===1?'order-1':'order-2')
const textAlignment = computed(()=>props.imageOrder===1?'text-left order-2 justify-end':'text-left order-1 justify-start')
</script>

<template>
    <div class=" slidev-layout h-full grid px-12 pt-16 pd-8" >
        <div class = "flex justify-center">
            <div class=" w-1/2 flex flex-col justify-center item-center px-8  object-cover" :class="imageOrder">
                <div class="bg-red-100 h-1/3">
                    <img :src="image1" class="rounded-2x1 border-image h-full object-contain shadow-xl"  />
                </div>
                <div class="bg-red-200 h-1/3">
                    <img :src="image2" class="rounded-2x1 border-image h-full object-contain shadow-xl"  />
                </div>
                <div class="bg-red-300 h-1/3 ">
                    <img :src="image3" class="rounded-2x1 border-image h-full object-contain shadow-xl"  />
                </div>
            </div>
            <div class=" w-1/2 flex flex-col justify-left" :class="textAlignment">
            <slot />
            </div>

        </div>

    </div>

   
</template>