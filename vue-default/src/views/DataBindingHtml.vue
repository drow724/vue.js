<template>
  <div v-html="htmlstring"></div>
</template>

<script>
  export default {
    name: 'DataBindingHtml',
    components: {
      
    },
    data() {
      return {
        htmlstring: '<p style="color:red;">This is a red string.</p>'
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