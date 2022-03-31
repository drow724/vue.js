<template>
<div>
  <input type="text" v-model="valueModel" />
  <input type="number" v-model.number="valueModel2" />
  <textarea v-model="valueModel3"></textarea>
  <div>{{valueModel3}}</div>
</div>
</template>

<script>
  export default {
    name: 'ExampleView1',
    components: {

    },
    data() {
      return {
        valueModel: 'South Korea',
        valueModel2: 12, //vue에서 number 타입이 아닌 String으로 인식
        valueModel3: '안녕하세요.'
      };
    },
    setup() {
     
    },
    created() {
     
    },
    mounted() {
      let valueModel3 = 11;
      //this로 접근
      console.log(this.valueModel2);
      console.log(valueModel3);
    },
    unmounted() {
    
    },
    methods: {
    
    }
  }
</script>

<style scoped>

</style>