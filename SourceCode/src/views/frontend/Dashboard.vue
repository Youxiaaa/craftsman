<template>
  <div>
    <div class="content-area">
      <navBar></navBar>
      <router-view></router-view>
    </div>
    <footerBar></footerBar>
    <Cart></Cart>
  </div>
</template>
<script>
import navBar from '../frontend/Navbar.vue'
import footerBar from '../frontend/FooterBar.vue'
import Cart from '../frontend/Cart.vue'
export default {
  components: {
    navBar,
    footerBar,
    Cart
  },
  created () {
    const vm = this
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)youxiaaaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    vm.$http.defaults.headers.common.Authorization = myCookie
  }
}
</script>
