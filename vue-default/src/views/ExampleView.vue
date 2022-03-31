<template>
<div>
    <button type="button" @click="callChildFunc">부모 클릭</button>
    <page-title :title="title" />
    <child-component-view :likes="23" :isOk="true" :commentIds="[1,5,2,3]" :author="author" ref="child_component"/>
</div>
</template>

<script>
import PageTitle from '../components/PageTitle';
import ChildComponentView from './ChildComponentView';

    export default {
        name: 'ExampleView',
        components: {
            'page-title':PageTitle,
            'child-component-view':ChildComponentView
        },
        data() {
            return {
                title: '타이틀',
                likes: 23,
                isOk: true,
                commentIds: [1,5,2,3],
                author: {name:'홍길동', company:'회사이름'}
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
            callChildFunc(){
                this.$refs.child_component.$refs.child_btn.click();
            }
        }
    }
</script>

<style scoped>

</style>