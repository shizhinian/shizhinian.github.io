<template>
    <!-- <footer class=" absolute top-0 left-0 right-0 py-0 px-4 flex">
        <div class=" w-1/3"></div>
        <div class=" w-1/3"></div>
        <div class=" w-1/3 flex justify-end">
            <img src="D:\OneDrive\Obsidian\MyRepository\附件\NNU校徽校名.png" class="my-1 h-12" />
        </div>
    </footer> -->

    <footer v-if="$slidev.nav.currentPage > 2 && $slidev.nav.currentPage < $slidev.nav.total"
        class="bg-[#efefef] absolute bottom-0 left-0 right-0 py-0.5 px-4 flex">
        <div class="w-1/3">
            NNU
            <!-- {{ $slidev.nav.currentPage - 1 }} -->
            <!-- {{ simpliyTrees }} -->
        </div>
        <div class="w-1/3 text-center">
            {{ filledSimpliyTrees[$slidev.nav.currentPage - 1].title }}
            <!-- {{ filledSimpliyTrees }} -->
        </div>
        <div class="w-1/3 flex justify-end">
            <SlideCurrentNo /> /
            <SlidesTotal />
        </div>
    </footer>
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

function fillMissingSlides(slides) {
    // let maxPath = Math.max(...slides.map(slide => Number(slide.path)));找到最大的path，
    //如果不是以一级标题结尾，那么就会出错，解决方法是通过$slidev.nav.total来获得总页数total
    let filledSlides = [];
    let lastTitle = '';

    for (let i = 1; i <= total; i++) {
        let slide = slides.find(slide => slide.path == i);
        if (slide) {
            lastTitle = slide.title;
            filledSlides.push(slide);
        } else {
            filledSlides.push({ path: i.toString(), title: lastTitle });
        }
    }

    return filledSlides;
}

let filledSimpliyTrees = fillMissingSlides(simpliyTrees);
</script>