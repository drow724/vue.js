<template>
<div>
  <input type="text" v-model="lastName" />
  <input type="text" v-model="firstName" />
  <h1>Hello, {{fullName}}</h1>
  <h1>Hello, {{fullName}}</h1>
  <h1>Hello, {{fullName}}</h1>
  <h1>Hello, {{fullName}}</h1>
</div>
</template>

<script>
  export default {
    name: 'ExampleView8',
    components: {

    },
    data() {
      return {
        firstName: '재석',
        lastName: '유'
      };
    },
    //연산이 한번만 일어남
    computed: {
      fullName() {
        return this.lastName + this.firstName;
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
      //호출 할 때마다 연산이 일어남
      getFullName() {
        return this.lastName + this.firstName;
      }
    }
  }
</script>

<style scoped>

</style>