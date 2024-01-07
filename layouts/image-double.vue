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
    imageOrder:{
        type:Number,
        required:true
    }
})

const imageOrder = computed(() => props.imageOrder===1?'order-1':'order-2')
const textAlignment = computed(()=>props.imageOrder===1?'text-right order-2 justify-end':'text-left order-1 justify-start')
</script>

<template>
    <div class="bg-red-400 slidev-layout h-full grid image-x" >
        <div class = "my-auto flex">
            <div class="w-1/3 flex justify-center item-center p-0 max-h-md object-cover" :class="imageOrder">
                <img :src="image1" class="rounded-2 border-image h-full object-cover"  />
            </div>
            <div class="w-1/3 flex justify-center item-center p-0 max-h-md object-cover" :class="imageOrder">
                <img :src="image2" class="rounded-2 border-image h-full object-cover"  />
                
            </div>
            <div class="w-1/3 flex flex-col iten-center justify-center p-0 max-h-md object-cover" :class="textAlignment">
            <slot />
            </div>

        </div>

    </div>

   
</template>