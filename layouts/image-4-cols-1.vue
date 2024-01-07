<template>
    <div class="slidev-layout px-2 py-2">
        <div class=" px-4 py-4 h-full">
            <!-- 文字部分（标题） -->
            <slot/>
            <div class="mt-6 grid grid-cols-4 gap-x-2">
                <div v-for="image in images" :key="image.id" class="group relative">
                
                    <!-- 图片部分 -->
                    <div class="w-full rounded-md ">
                        <img :src="image.imageSrc" 
                        class="h-full w-full object-cover"/>
                    </div>
                    <!-- 文字部分 -->
                    <div class="mt-4">
                        <slot :name=image.text />
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
    image4:{
        type:String,
        required:true,
    }
})
const images =[
    {
        id: 1,
        imageSrc: props.image1,
        text: "text1",
    },
    {
        id:2,
        imageSrc: props.image2,
        text: "text2",
    },
    {
        id:3,
        imageSrc: props.image3,
        text: "text3",
    },
    {
        id:4,
        imageSrc: props.image4,
        text: "text4",
    }
]
</script>