<template>
    <div class="main-wrapper clearfix">
        <sidebar/>
        <bmain class="b-aside">
            <router-view class="content"/>
            <bfooter/>
        </bmain>
    </div>
</template>

<script>
    import sidebar from '@/views/components/sidebar'
    import bmain from '@/views/components/bmain'
    import bfooter from '@/views/components/bfooter'

    export default {
        name: 'layout',
        components: {
            sidebar,
            bmain,
            bfooter
        }
    }
</script>

<style lang="scss">
    .content {
        height: 100%;
        padding: 126px 14px 640px;
    }

    .main-wrapper {
        height: 100%;
    }

    .b-sidebar {
        width: 339px;
        float:left;
        background-color: #f7f7f7;
        height:100%;
    }

    .b-aside {
        margin: 0 0 0 339px;
        overflow: hidden;
        height:100%;
        background-color: #fff;
    }

</style>
