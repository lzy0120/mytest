<template>
    <div class="zhibojian">
        <div class="item"
             v-for="(item, index) in zbjList"
             :key="index"
             @click="toCaseDetails(item.code)"
        >
            <div class="left">
                <img :src="imgLink(item.imgUrl)" alt="">
            </div>
            <div class="right">
                <h3>{{item.name}}</h3>
                <p>{{item.city}} | {{item.houseName}} | {{item.acreage}}㎡</p>
                <p>{{item.juZhuangType}} | ￥{{item.totalPrice}}</p>
                <p>改造时间：{{item.decorationTime}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data: () => ({
            zbjList: null,
            cityCode: 3101
        }),
        created () {
            this.getZbjListData()
        },
        methods: {
            getZbjListData () {
                this.$axios({
                    api: '/v2/icolor/wxma/lives',
                    needToken: false,
                    formData: {
                        cityCode: this.cityCode
                    }
                }).then(res => {
                    this.zbjList = res.data
                })
            },
            imgLink (behindUrl) {
                return `https://www.icolor.com.cn${behindUrl}`
            },
            toCaseDetails (code) {
                this.$toPage(`/details/${code}`)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .zhibojian {
        .item {
            width: 90%
            margin: 10px 5%
            padding: 7px
            border: 1px solid #ddd
            border-radius: 4px
            display: flex
            justify-content: space-between
            align-content: center
            align-items: center
            .left {
                width: 2.8rem
                height: 2.1rem
            }
            .right {
                width: 3.5rem
                font-size: 12px
                h3 {
                    font-size: 14px
                    font-weight: bold
                    margin-bottom: 16px
                    no-wrap()
                }
                p {
                    line-height: 1.4
                }
            }
        }
    }

</style>
