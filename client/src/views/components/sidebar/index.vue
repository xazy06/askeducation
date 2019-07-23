<template>
    <div class="b-sidebar">
        <img class="b-logo" alt="logo" src="@/assets/img/logo.png"/>
        <bmenu/>
        <sidebar-bottom/>
    </div>
</template>

<script>
    import bmenu from '@/views/components/bmenu'
    import sidebarBottom from '@/views/components/sidebar/sidebar-bottom'

    export default {
        name: "sidebar",
        components: {
            bmenu,
            sidebarBottom
        }
    }
</script>

<style scoped lang="scss">
    .b-sidebar {
        padding: 73px 30px 0 57px;
    }

    .b-logo {
        margin-bottom: 40px;
    }
</style>