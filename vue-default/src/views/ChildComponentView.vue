<template>
<div>
<button ref="child_btn" type="button" @click="childFunc">자식 클릭</button>
<div> likes: {{likes}}</div>
<div> isOk: {{isOk}}</div>
<div> author: {{author.name}}</div>
</div>
</template>

<script>
    export default {
        name: 'ChildConponentView',
        props: {
            likes: {
                type: Number,
                default: 0
            },
            isOk: {
                type: Boolean,
                default: false
            },
            commentIds: {
                type: Array
            },
            author: {
                type : Object
            }
        },
        components: {

        },
        data() {
            return {
                
            };
        },
        setup() {
         
        },
        created() {
         
        },
        mounted() {
            console.log(this.commentIds);
        },
        unmounted() {
        
        },
        methods: {
            childFunc() {
                alert("부모가 누름");
            }
        }
    }
</script>

<style scoped>

</style>