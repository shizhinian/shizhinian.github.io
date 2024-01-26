<!-- 这个是单纯为了实现1横2竖图片布局而设计的布局 -->
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
    }

})
</script>

<template>
    <div class="slidev-layout">
        <div class="top">
            <slot />
        </div>
        <div class="down">
            <div class="down-up ">
                <img :src="image1" alt="" class="img1">
                <div class="figure-comment">blender几何节点设置</div>
            </div>
            <div class="down-down">
                <div>
                    <img :src="image2" alt="" class="img2">
                    <div class="figure-comment">点云文件转换前</div>
                </div>
                <div class="w-1/4"></div>
                <div>
                    <img :src="image3" alt="" class="img2">
                    <div class="figure-comment">点云文件转换后</div>
                </div>

            </div>

        </div>
    </div>
</template>