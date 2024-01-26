<style scoped>
.photo-container1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    justify-content: space-between;
}

.img {
    object-fit: contain;
    height: 90%;
    flex: 1;
}

.figure-comment {
    text-align: center;
    flex: 1;
    font-size: 10px;
    padding-top: 0.25em;
    height: 10%;
}
</style>

<template>
    <div class="slidev-layout flex" ref="slidevRef">
        <div class="part_photo" :class="imageOrder" ref="partPhotoRef">
            <div v-for=" (url, index) in images" :key="index" class="photo-container1" :class="hs[index]">
                <img :src="url" class="img shadow-md" :ref="el => (imageRefs[index] = el)" :style="{}">
                <div class="figure-comment"> {{ comments[index] }} </div>
            </div>
        </div>
        <div class="part_text" :class="textAlignment">
            <slot />
        </div>

    </div>
</template>
  
<script setup>

import { computed, ref, onMounted, watch, reactive, onBeforeMount } from 'vue';

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

const slidevRef = ref(null);
const partPhotoRef = ref(null);
const imageRef1 = ref(null);
const imageRef2 = ref(null);
const imageRef3 = ref(null);


const imageRefs = reactive([]);
const imageHeights = reactive([]);

const ratio = ref(0);




const imageHeight1 = ref(0);//确保图片加载完成后再获取高度
const imageHeight2 = ref(0);
const imageHeight3 = ref(0);

const heightUpdated = ref(false);//避免发生无限循环，导致图片高度一直更新

const updatedImageHeight1 = ref(0);



const updateSize = (event) => {
    const img = event.target;
    const partPhoto = partPhotoRef.value;
    const ratioWidth = partPhoto.clientWidth / img.naturalWidth;
    const ratioHeight = partPhoto.clientHeight / img.naturalHeight;
    const ratio = Math.min(ratioWidth, ratioHeight);
    img.style.width = img.naturalWidth * ratio * 0.6 + 'px';
    img.style.height = img.naturalHeight * ratio * 0.6 + 'px';
};

const reLayout = (event) => {
    const img = event.target;
    const partPhoto = partPhotoRef.value;
    img.style.width = partPhoto.clientWidth + 'px';
    //在上一页面刷新时，partPhoto还未加载，所以clientWidth为0，导致图片宽度为0
    //这可能是因为下一页的元素被隐藏了（例如，通过 CSS 的 display: none），
    //或者下一页的元素被延迟渲染了（例如，通过 Vue 的 v-if 指令）。
}

const updateHeight1 = () => {
    // if (!heightUpdated.value) {
    imageHeight1.value = imageRef1.value.clientHeight;
    console.log('imageHeight1:', imageHeight1.value);
    // heightUpdated.value = true;
    // }

}

const updateHeight2 = () => {
    imageHeight2.value = imageRef2.value.clientHeight;
    console.log('imageHeight2:', imageHeight2.value);
}

const updateHeight3 = () => {
    imageHeight3.value = imageRef3.value.clientHeight;
    console.log('imageHeight3:', imageHeight3.value);
}


//写一个计算当前图片总高度的函数
const calculateTotalHeight = () => {
    let totalHeight = 0;
    for (let i = 0; i < imageRefs.length; i++) {
        console.log('imageRefs[0].height:', imageRefs[i].height)
        totalHeight += imageRefs[i].clientHeight;
    }
    return totalHeight;
};


onMounted(() => {
    //console.log('当前界面挂载完毕，但是未进行渲染或未进行布局计算，所以partPhotoRef.value.clientWidth=', partPhotoRef.value.clientWidth);
    console.log('hs:', hs);
})
const imageOrder = computed(() => props.imageOrder === 1 ? 'order-1' : 'order-2')
const textAlignment = computed(() => props.imageOrder === 1 ? 'text-left order-2 justify-end' : 'text-left order-1 justify-start')
</script>

