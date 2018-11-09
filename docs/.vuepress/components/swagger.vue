<template>
    <div id="redoc-container"></div>
</template>
<script>
export default {
    props: ['src'],
    mounted() {
        Redoc.init(this.src, { scrollYOffset: 50 }, document.getElementById('redoc-container'));
    }
}
</script>

    