<template>
<div>
  <input type="text" v-model.number="x1" />
  <input type="text" v-model.number="x2" />
  <!-- <button type="button" @click="plusNumber">계산</button> -->
  <input type="text" v-model="y" />
</div>
</template>

<script>
  export default {
    name: 'ExampleView9',
    components: {

    },
    data() {
      return {
        x1: 0,
        x2: 0,
        //y: 0,
      };
    },
    //많은 자원을 소모
    // watch: {
    //   x1(){
    //     this.y = this.x1 + this.x2;
    //   },
    //   x2(){
    //     this.y = this.x1 + this.x2;
    //   }
    // },
    computed: {
      y() {
        return this.x1 + this.x2;
      }
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
      plusNumber(){
        this.y = this.x1 + this.x2;
      }
    }
  }
</script>

<style scoped>

</style>