<template>
<div>
  <!-- v-on 축약 -> @ -->
  <button type="button" @click="increaseCounter">Add 1</button>
  <p>The count is : {{counter}}</p>

  <button type="button" @click="one(), two()">one,two</button>

  <select v-model="city" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>

  <input type="text" v-model="textValue" @keyup.enter="showValue">
</div>
</template>

<script>
  export default {
    name: 'ExampleView7',
    components: {

    },
    data() {
      return {
        counter: 0,
        city: "서울",
        textValue: ""
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
      increaseCounter() {
        this.counter = this.counter + 1;
      },
      one() {
        alert('One');
      },
      two() {
        alert('Two');
      },
      changeSelect() {
        alert(this.city);
      },
      showValue() {
        //tab, delete, esc, space, up, down, left, right
        alert(this.textValue);
      }
    }
  }
</script>

<style scoped>

</style>