<template>
    <div id="app">
        <router-view/>
        <!--消息交互框-->
        <MessagePopup></MessagePopup>
    </div>
</template>

<script type="text/ecmascript-6">
    import MessagePopup from 'components/MessagePopup/MessagePopup'

    export default {
        name: `app`,
        components: {
            MessagePopup
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
