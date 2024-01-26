<template>
    <div class="slidev-layout">
        <!-- <img src="D:\OneDrive\Obsidian\MyRepository\附件\cover.png" alt="" class="img-cover"> -->
        <img :src="image" class="img-cover">
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    image: {
        type: String,
        required: true,
    }


})

// coverBackgroundUrl 是一个常量
// withDefault函数接受两个对象，一个是通过defineProps定义的props对象
// 一个是默认对象。
// const { coverBackgroundUrl } = withDefaults(
//     defineProps<{
//         coverAuthor?: String;
//         coverDate?: String | Date;
//     }>(),
//     { coverDate: new Date().toLocaleDateString() },
// );

// const style =computed(()=>)
</script>