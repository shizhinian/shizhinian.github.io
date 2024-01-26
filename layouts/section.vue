<template lang="">
    <div class="slidev-layout section-1 grid grid-cols-3">
        <!-- pt-[45%]：设置元素的上边距为 45% 的父元素的高度。
px-2：设置元素的左右内边距为 2 个单位。 -->
        <div class="pt-[45%] px-2">
            <slot />
        </div>
        <div class="my-auto pt-[10%]">
            <slot name="middle" />
        </div>
        <div class="my-auto pt-[10%]">
            <slot name="right" />
        </div>
        
    </div>
</template>

<style lang="postcss">
.slidev-layout.section-1 {


  @apply grid;

  h1 {
    @apply text-5xl leading-15;
  }

  h2 {
    @apply text-2xl;
  }

  h2+p {
    @apply -mt-0;
  }
}
</style>


