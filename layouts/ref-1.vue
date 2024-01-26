<template>
    <div class="slidev-layout flex" ref="slidevRef">
        <div class="part_photo" :class="imageOrder" ref="partPhotoRef">

            <div v-for=" (url, index) in images" :key="index">
                <img :src="url" :ref="el => (imageRefs[index] = el)" :style="{}">
            </div>

            <!-- <div class="photo-container" ref="photoConRef1"> -->
            <!-- <img :src="image1" class="img" ref="imageRef1" @load="updateSize" :style="{}" /> -->
            <!-- <img :src="image1" class="img" ref="imageRef1" @load="updateHeight1"
                :style="{ height: imageHeight1 / 2 + 'px' }" /> -->
            <!-- <div>{{ imageHeight1 }}</div>
            <div>{{ imageHeight2 }}</div>
            <div>{{ imageHeight3 }}</div> -->
            <!-- <div>{{ imageHeight1 + imageHeight2 + imageHeight3 }}</div> -->
            <!-- <div>{{ partPhotoRef }}</div> -->
            <!-- <div>{{ computedHeight1 }}</div> -->
            <!-- :style="{ height: imageRef1.value.clientHeight * ratio }" -->

            <!-- <div class="figure-comment">AMCL</div> -->
            <!-- </div> -->
            <!-- <div class="photo-container" ref="photoConRef2"> -->
            <!-- <img :src="image2" class="img" ref="imageRef2" @load="updateSize" :style="{}" /> -->
            <!-- <div class="figure-comment">aaa</div> -->
            <!-- </div> -->
            <!-- <div class="photo-container" ref="photoConRef3"> -->
            <!-- <img :src="image3" class="img" ref="imageRef3" @load="updateSize" /> -->
            <!-- <div class="figure-comment">人工势场法示意图</div> -->

            <!-- </div> -->
        </div>
        <div class="part_text" :class="textAlignment">
            <slot />
        </div>

    </div>
</template>
  
<!-- 组件式api的写法 -->
<!-- setup语法糖 -->
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
    // imageOrder: {
    //     type: Number,
    //     required: true
    // }
});
const images = [props.image1, props.image2, props.image3];

const slidevRef = ref(null);
const partPhotoRef = ref(null);
const imageRef1 = ref(null);
const imageRef2 = ref(null);
const imageRef3 = ref(null);
// const photoConRef1 = ref(null);
// const photoConRef2 = ref(null);
// const photoConRef3 = ref(null);

const imageRefs = reactive([]);
const imageHeights = reactive([]);

// const imageHeightTotal = ref(0);
const ratio = ref(0);

// const aaa = 150;


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

// const computedHeight1 = computed(() => imageHeight1.value * 0.6);
// const computedHeight2 = computed(() => imageHeight2.value * 0.6);
// const computedHeight3 = computed(() => imageHeight3.value * 0.6);

// console.log('photoConRef', partPhotoRef.value.clientHeight);



// watch(imageHeight1, (newValue, oldValue) => {
//     console.log('newValue:', newValue);
//     console.log('oldValue:', oldValue);
// }
// )
//console.log('bb imageHeight:', imageHeight1.value, imageHeight2.value, imageHeight3.value);


//ratio.value = partPhotoRef.value.clientHeight / imageHeightTotal.value;


//写一个计算当前图片总高度的函数
const calculateTotalHeight = () => {
    let totalHeight = 0;
    console.log('A这里是在挂载前or挂载后?', imageRefs)
    for (let i = 0; i < imageRefs.length; i++) {
        console.log('imageRefs[0].height:', imageRefs[i].height)
        totalHeight += imageRefs[i].clientHeight;
    }
    console.log('这里明明显示长度为', imageRefs.length)
    console.log('B这里是在挂载前or挂载后?', imageRefs)

    return totalHeight;
};


onBeforeMount(() => {
    console.log('挂载前imageRefs:', imageRefs);

})

onMounted(() => {




    console.log('挂载后imageRefs:', imageRefs);
    // console.log(imageRefs.length);
    console.log('imageHeightTotal:', calculateTotalHeight());
    //console.log('后', slidevRef.value.clientHeight);
    //console.log('后', slidevRef.value.clientWidth);
    // console.log('image property', props.image1);
    // console.log('photoConRef1', photoConRef1.value.clientHeight, photoConRef1.value.clientWidth);
    // console.log('photoConRef2', photoConRef2.value.clientHeight, photoConRef2.value.clientWidth);
    // console.log('photoConRef3', photoConRef3.value.clientHeight, photoConRef3.value.clientWidth);




    //console.log('imageRef1', imageRef1.value.clientHeight, imageRef1.value.clientWidth);
    //console.log('imageRef2', imageRef2.value.clientHeight, imageRef2.value.clientWidth);
    //console.log('imageRef3', imageRef3.value.clientHeight, imageRef3.value.clientWidth);

    //console.log('imageHeight', imageHeight1.value, imageHeight2.value, imageHeight3.value);

    //console.log('partPhotoRef', partPhotoRef.value.clientHeight, partPhotoRef.value.clientWidth);

    //console.log('imageheight1', updateHeight.imageheight1);

    // const updateHeight = () => {
    // imageHeightTotal.value = imageRef1.value.clientHeight + imageRef2.value.clientHeight + imageRef3.value.clientHeight;
    //imageHeightTotal.value = imageHeight1.value + imageHeight2.value + imageHeight3.value;
    // imageHeightTotal.value = 100;
    // var ratio = partPhotoRef.value.clientHeight / imageHeightTotal.value;

    //const ratio = computed(() => partPhotoRef.value.clientHeight / imageHeightTotal.value);
    // }

    // updateHeight;
    //console.log('imageHeightTotal:', imageHeightTotal.value);
    //console.log('ratio:', ratio.value);
})
const imageOrder = computed(() => props.imageOrder === 1 ? 'order-1' : 'order-2')
const textAlignment = computed(() => props.imageOrder === 1 ? 'text-left order-2 justify-end' : 'text-left order-1 justify-start')
</script>

<style scoped></style>