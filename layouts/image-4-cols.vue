<template>
    <div class="bg-[#93c39d] slidev-layout px-2 py-2">
        <div class="bg-[#d98a91] px-4 py-4 h-full">
            <!-- 文字部分（标题） -->
            <slot/>
            <div class="mt-6 grid grid-cols-4 gap-x-4">
                <div class="group relative">
                    <!-- 图片部分 -->
                    <div class="w-full rounded-md group-hover:opacity-75">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" 
                        class="h-full w-full object-cover"/>
                    </div>
                    <!-- 文字部分 -->
                    <div class="mt-4">
                        <slot name="text1"/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
// const imsges =[
//     {
//         id: 1,
//         imageSrc: image1,
//     }
// ]
</script>