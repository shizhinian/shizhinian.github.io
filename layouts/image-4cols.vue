<script setup>
  const props = defineProps({
    image1:{
        type:String,
        required:true,
    }
})
  
  </script>

<template>
    
    <div class="bg-red-200 slidev-layout h-full grid grid-cols-4">
        <div class="my-auto  h-full bg-black px-2 pt-[10%] ">
            <img :src="image1" />
            <div style="font-size: 10px">
            <slot  name="text1"/>
        </div>
        </div>
        <div class="my-auto mt-6 h-full bg-black px-2 pt-[10%] ">
        <img src="https://d33wubrfki0l68.cloudfront.net/273aa82ec83b3e4357492a201fb68048af1c3e6a/8f657/logo.svg" />
        <div style="font-size: 15px;">
        <slot name="text2"/>
        </div>
        </div>
        <div class="my-auto mt-6 h-full bg-black px-2 pt-[10%] ">
        <img src="https://d33wubrfki0l68.cloudfront.net/273aa82ec83b3e4357492a201fb68048af1c3e6a/8f657/logo.svg" />
        <slot name="text3"/>
        </div>
        <div class="my-auto mt-6 h-full bg-black px-2 pt-[10%] ">
        <img src="https://d33wubrfki0l68.cloudfront.net/273aa82ec83b3e4357492a201fb68048af1c3e6a/8f657/logo.svg" />
        <slot name="text4"/>
        </div>
  </div>
  </template>
  
  