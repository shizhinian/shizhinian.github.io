<style scoped>
.toc {
    font-size: 24px;
    padding: 0.5em;
}
</style>

<template>
    <div class="slidev-layout center h-full grid place-content-center">
        <div class="my-auto" v-for="(item, index) in simpliyTrees" :key="index">
            <div class="toc" v-if="index !== 0">
                {{ index }}
                .
                {{ item.title }}
            </div>

            <!-- <slot /> -->
        </div>
    </div>
</template>

<script setup>
let tree = $slidev.nav.tree
let simpliyTrees = []
let total = $slidev.nav.total
// console.log(Total)

for (let i = 0; i < tree.length; i++) {
    let simpliyTreeItem = {
        path: tree[i].path,
        title: tree[i].title
    }
    simpliyTrees.push(simpliyTreeItem)
}

// function fillMissingSlides(slides) {
//     // let maxPath = Math.max(...slides.map(slide => Number(slide.path)));找到最大的path，
//     //如果不是以一级标题结尾，那么就会出错，解决方法是通过$slidev.nav.total来获得总页数total
//     let filledSlides = [];
//     let lastTitle = '';

//     for (let i = 1; i <= total; i++) {
//         let slide = slides.find(slide => slide.path == i);
//         if (slide) {
//             lastTitle = slide.title;
//             filledSlides.push(slide);
//         } else {
//             filledSlides.push({ path: i.toString(), title: lastTitle });
//         }
//     }

//     return filledSlides;
// }

// let filledSimpliyTrees = fillMissingSlides(simpliyTrees);
</script>