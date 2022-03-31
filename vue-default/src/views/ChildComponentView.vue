<template>
<div>
    <button ref="child_btn" type="button" @click="childFunc">자식에 있는 클릭(alert 함수 호출)</button>
    <button type="button" @click="sendFromChild">자식에 있는 클릭(부모에게 영향주는 버튼)</button>
    <button type="button" @click="changeData">자식에 있는 클릭(자신 데이타 변경)</button>
    <div> likes: {{likes}}</div>
    <div> isOk: {{isOk}}</div>
    <div> author: {{author.name}}</div>
    <h1>{{msg}}</h1>
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
                msg:'자식에 있던 메시지'
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
            },
            sendFromChild() {
                this.$emit('send-msg', this.msg);
            },
            changeData() {
                this.msg = '자신이 변경한 메시지'
            }
        }
    }
</script>

<style scoped>

</style>