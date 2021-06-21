<template>
  <div>
    <!-- 头部 -->
    <Home></Home>

    <!-- 中间部分 -->
    <router-view></router-view>

    <!-- 底部 -->
    <Footer v-if="!$route.meta.isFooterHide"></Footer>
  </div>
</template>

<script>
// 引入home footer 组件
import Home from './components/Home'
import Footer from './components/Footer'
export default {
  name: 'APP',
  components:{
    Home,
    Footer
  }

}
</script>

<style lang='less' scoped>

</style>
