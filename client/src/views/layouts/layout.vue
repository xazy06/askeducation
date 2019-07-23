<template>
    <div class="main-wrapper clearfix">
        <sidebar/>
        <main class="b-aside">
            <router-view class="content"/>
        </main>

    </div>
</template>

<script>
    import sidebar from '@/views/components/sidebar'
    import main from '@/views/components/main'

    export default {
        name: 'layout',
        components: {
            sidebar,
            main
        }
    }
</script>

<style lang="scss">
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
