<template>
  <!-- <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}"> -->
  <!-- <div class="container" v-bind:class="[activeClass, redClass]"> -->
  <!-- <div v-bind:style="styleObject"> -->
  <div v-bind:style="[baseStyle, addStyle]">
    Class Binding
  </div>
</template>

<script>
  export default {
    name: 'ExampleView4',
    components: {

    },
    data() {
      return {
        isActive: true,
        isRed: true,
        activeClass: 'active',
        redClass: 'text-red',
        styleObject: {
          backgroundColor: 'yellow',
          color: 'red',
          fontWeight: 'bold'
        },
        baseStyle: 'background-color: yellow;  width: 100%; height: 200px;',
        addStyle: 'color: red; font-weight: bold;',
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
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>