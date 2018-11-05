<template>
    <div class="smallTitle">
        <h2 class="title">{{title}}</h2>
        <a :href="titleMore" class="titleMore" v-if="titleMore">MORE>></a>
    </div>
</template>

<script>
    export default {
        name: 'SmallTitle',
        props: {
            title: {
                type: String,
                default: ''
            },
            titleMore: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .smallTitle {
        display: flex
        justify-content: space-between
        width: 90%
        border-left: 2px solid #00cacf
        padding-left: 10px
        margin: 10px auto 0
        .title{
            font-size: 18px
            line-height: 1.2
            font-weight: bold
            color: #333
        }
        .titleMore{
            color: #00cacf
            font-size :12px
        }
    }
</style>
