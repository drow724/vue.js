<template>
  <div>
    <!-- <img v-bind:src="url"> -->
    <input type="text" v-model="textValue">
    <button type="button" v-bind:disabled="textValue==''">Click</button>
  </div>
</template>

<script>
  export default {
    name: 'ExampleView3',
    components: {

    },
    data() {
      return {
        url:'https://kr.vuejs.org/images/logo.png',
        textValue: ''
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