<template>
    <div class="slidev-layout cover" :style="style">
        <div class="absolute top-0 left-0 right-0 flex ">
            <div class="w-1/2 justify-start flex ">
                <img src="D:\OneDrive\Obsidian\MyRepository\附件\cover-地理科学学院.png" alt="" class="h-90px">
                <img src="D:\OneDrive\Obsidian\MyRepository\附件\cover-虚拟地理环境教育部重点实验室.png" alt="" class="h-90px">
            </div>
            <div class="w-1/2 justify-end flex ">
                <img src="D:\OneDrive\Obsidian\MyRepository\附件\cover-校徽.png " alt="" class="h-60px pt-3">
                <img src="D:\OneDrive\Obsidian\MyRepository\附件\cover-校名.png" alt="" class="h-60px pt-3 pr-2">
            </div>
        </div>
        <div class="absolute top-52 w-full text-center "
            style="font-weight: bold; font-size: 36px;font-family: 微软雅黑;color: white;">
            <slot />
        </div>
        <div class="absolute top-70 w-full text-center " style=" font-size: 24px;font-family: 微软雅黑;color: white;">
            <div class="" v-if="coverAuthor || coverDate">汇报人：
                <TextWithOptionalLink :link="coverAuthorUrl" :text="coverAuthor" />
                <span v-if="coverDate">{{ coverAuthor && coverDate ? ` 时间： ${coverDate}` : coverDate }}</span>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 text-center pb-1 flex flex-col space-y-1 ">
            <div style="font-family: 微软雅黑; font-size: 18px;color: white;">南京师范大学地理科学学院</div>
            <div style="font-family: 微软雅黑;font-size: 18px;color: white;">虚拟地理环境教育部重点实验室</div>
            <div class="" style="font-family: 微软雅黑;font-size: 18px;color: white;">
                江苏省地理信息资源开发与利用协同创新中心</div>
        </div>
    </div>
</template>
  
<script setup lang="ts">

import { computed } from 'vue';
// import { handleBackground } from '../layout-helper';
import type { CSSProperties } from 'vue';

function resolveAssetUrl(url: string) {
    if (url.startsWith('/')) return import.meta.env.BASE_URL + url.slice(1);//如果是以/开始，就剪切掉第一个字符，然后拼接上BASE_URL
    return url;//否则直接返回url
}

function handleBackground(background?: string, dim = false): CSSProperties {
    const isColor = background && ['#', 'rgb', 'hsl'].some((v) => background.indexOf(v) === 0);

    const style = {
        background: isColor ? background : undefined,
        backgroundImage: isColor
            ? undefined
            : background
                ? dim
                    ? `linear-gradient(#0009, #0009), url(${resolveAssetUrl(background)})`
                    : `url("${resolveAssetUrl(background)}")`
                : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    if (!style.background) delete style.background;

    return style;
}

const { coverBackgroundUrl } = withDefaults(
    defineProps<{
        coverAuthor?: string;
        coverAuthorUrl?: string;
        coverBackgroundUrl?: string;
        coverBackgroundSource?: string;
        coverBackgroundSourceUrl?: string;
        coverDate?: string | Date;
    }>(),
    { coverDate: new Date().toLocaleDateString() },
);

// 这里返回的style是处理背景图片的
const style = computed(() => handleBackground(coverBackgroundUrl, false));
</script>
  