<template>
    <div class="slidev-layout display">
        <div class="col-left">
            <slot />
        </div>
        <div class="col-right">
            <slot name="right" />
        </div>
    </div>
</template>

<style scoped>
.display {
    display: flex;
    flex-direction: row;
    width: 100%;

}

.col-left {
    width: 50%;
    /* padding: 0 2rem;
    overflow: auto; */
}

.col-right {
    width: 50%;
    /* align-items: center; */
    justify-content: center;
    display: flex;
    flex-direction: column;
    /* padding: 0 2rem;
    overflow: auto; */
}
</style>