<template>
<div>
    <!-- v-if는 false일 경우 렌더링 안함 -->
    <h1 v-if="type=='A'">A</h1>
    <h1 v-else-if="type=='B'">B</h1>
    <h1 v-else-if="type=='C'">C</h1>
    <h1 v-else>Other</h1>
    <!-- v-show는 display:none 처리 -->
    <h1 v-show="bRender">True</h1>
</div>
</template>

<script>
  export default {
    name: 'ExampleView6',
    components: {

    },
    data() {
      return {
        bRender: true,
        type: 'D'
      };
    },
    setup() {
     
    },
    created() {
     
    },
    mounted() {
    
    },
    unmounted() {
    
    },
    methods: {
    
    }
  }
</script>

<style scoped>

</style>