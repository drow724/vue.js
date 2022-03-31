<template>
<div>
    <page-title :title="title" />
    <child-component-view :likes="23" :isOk="true" :commentIds="[1,5,2,3]" :author="author"/>
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
        
        }
    }
</script>

<style scoped>

</style>