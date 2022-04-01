<template>
<div>
    <h1>Cart: {{cartCount}}</h1>
    <h1>productACount: {{productACount}}</h1>
    <h2>Count: {{count}}</h2>
    <button type="button" @click="increment">더하기</button>
</div>
</template>

<script>
    export default {
        computed: {
            count() {
                return this.$store.state.count;
            },
            cartCount() {
                return this.$store.getters.cartCount;
            },
            productACount() {
                return this.$store.getters.productACount;
            }
        },
        methods: {
            increment() {
                this.$store.commit("increment");
            }
        }
    }
</script>

<style scoped>

</style>