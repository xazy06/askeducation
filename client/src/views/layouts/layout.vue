<template>
    <div class="main-wrapper clearfix">
        <sidebar/>
        <bmain class="b-aside">
          <div class="content-outer">
            <div class="content">
              <router-view />
            </div>
            <bfooter/>
          </div>
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

<style lang="scss" scoped>
  .content-outer {
    height: 100%;
    min-height: 100%;
    overflow: auto;
  }
  .content {
    margin-bottom: 515px;
  }

  .main-wrapper {
    height: 100%;
    overflow: hidden;
  }

  .b-aside {
      margin: 0 0 0 339px;
      overflow: hidden;
      height:100%;
      background-color: #fff;
  }

</style>
