<template>
<div>
    <button type="button" @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>배송료</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product,i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
import MonitoringMixin from '../monitoring.js'

    export default {
        name: 'ServerData',
        mixins: [
            MonitoringMixin
        ],
        components: {

        },
        data() {
            return {
                productList: []
            };
        },
        setup() {
         
        },
        beforeCreate() {

        },
        created() {
         
        },
        beforeMount() {

        },
        mounted() {

            console.log("컴포넌트 mounted()");
        },
        beforeUpdate() {

        },
        updated() {
            
        },
        beforeUnmount() {

        },
        unmounted() {
        
        },
        methods: {
            async getProductList() {
                this.productList = await this.$api('https://9e01831b-4737-46a0-a0f9-394c7a8af127.mock.pstmn.io/productList','GET',{});
                console.log(this.productList);
            }
        }
    }
</script>

<style scoped>

</style>