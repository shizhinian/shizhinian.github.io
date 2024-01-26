<template>
    <div class="slidev-layout flex">
        <div class="part_text dashed-border">
            <slot />
        </div>

    </div>
</template>

<style scoped>
.dashed-border {
    border: 1px dashed #000000;
}

.slidev-layout {
    h1 {
        @apply text-xl;
    }

    h2 {
        @apply text-2xl;
    }
}
</style>