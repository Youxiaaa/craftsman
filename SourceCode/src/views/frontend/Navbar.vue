<template>
  <div>
    <div class="computerHeader">
      <header>
        <nav class="computerHeader d-flex justify-content-center">
          <router-link to="/"><h1 class="logo"><a href="#" class="text-dark h5">Craftsman</a></h1></router-link>
          <ul class="d-flex ml-auto align-items-center mt-3 computerTopmenu">
            <li class="list-unstyled topMenu mx-3">
              <router-link to="/products" :class="{'text-white': pageLocation === 'home', 'text-dark': pageLocation !== 'home', 'navActive': pageLocation === 'products'}">Products</router-link>
            </li>
            <li class="list-unstyled topMenu mx-3"><a href="https://www.facebook.com/YuTsungChih" target="_blank" :class="{'text-white': pageLocation === 'home', 'text-dark': pageLocation !== 'home', 'navActive': pageLocation === 'blog'}">Blog</a></li>
            <li class="list-unstyled topMenu mx-3"><a href="https://github.com/Youxiaaa" target="_blank" :class="{'text-white': pageLocation === 'home', 'text-dark': pageLocation !== 'home', 'navActive': pageLocation === 'contact'}">Contact</a></li>
            <li class="list-unstyled topMenu mx-3 d-flex cartIcon"><a href="#" @click.prevent="openCart" :class="{'text-white': pageLocation === 'home', 'text-dark': pageLocation !== 'home'}"><i class="fas fa-shopping-cart"></i></a> <h6><span class="badge badge-danger" v-if="getcartLen !== 0" @click.prevent="openCart"> {{ getcartLen }} </span></h6> </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="responsiveHeadser">
      <div class="row m-0 pt-4">
        <div class="col-4 text-left">
          <span class="text-white">
            <a href="#" @click.prevent="menuOpen = !menuOpen" class="h4 ml-2"><i class="fas fa-bars text-white" :class="{'text-dark': pageLocation !== 'home', 'text-white': pageLocation === 'home'}"></i></a>
          </span>
        </div>
        <div class="col-4 text-center">
          <router-link to="/"><h1 class="h4"><a href="#" class="text-white" :class="{'text-dark': pageLocation !== 'home'}">Craftsman</a></h1></router-link>
        </div>
        <div class="col-4 text-right responsiveCartIcon">
          <a href="#" class="h4 mr-2 " @click.prevent="openCart"><i class="fas fa-shopping-cart text-white" :class="{'text-white': pageLocation === 'home', 'text-dark': pageLocation !== 'home'}"></i></a> <h6><span class="badge badge-danger" v-if="getcartLen !== 0" @click.prevent="openCart"> {{ getcartLen }} </span></h6>
        </div>
      </div>
    </div>
    <div class="responsiveMenu" :class="{'menuOpen': menuOpen}">
      <div class="row pl-2">
        <div class="col-12 d-flex justify-content-between">
          <i class="fas fa-arrow-left fa-2x" @click="menuOpen = !menuOpen, menuHide = true"></i>
          <i class="fas fa-shopping-cart fa-2x"></i>
        </div>
      </div>
      <div class="row mt-5 px-2">
        <div class="col-12">
          <ul class="pl-0">
            <li class="list-unstyled menuList d-flex justify-content-between align-items-center" @click="menuHide = !menuHide">
              <a href="#" class="text-dark h3" to="/products">Product</a>
              <i class="fas fa-chevron-up" v-if="!menuHide"></i><i class="fas fa-chevron-down" v-if="menuHide"></i>
            </li>
            <hr>
            <li class="list-unstyled flex-column menuHide" :class="{'menuShow': !menuHide}">
              <router-link to="/products" class="text-light h5 my-2">All<sup class="text-light">24</sup></router-link>
              <a href="#" class="text-light h5 my-2">Bowl<sup class="text-light">10</sup></a>
              <a href="#" class="text-light h5 my-2">Cup<sup class="text-light">8</sup></a>
              <a href="#" class="text-light h5 my-2">Plate<sup class="text-light">3</sup></a>
              <a href="#" class="text-light h5 my-2">Vase<sup class="text-light">3</sup></a>
            </li>
            <hr class="menuHide" :class="{'menuShow': !menuHide}">
            <li class="list-unstyled menuList"><a href="https://github.com/Youxiaaa" target="_blank" class="text-dark h3">Blog</a></li>
            <hr>
            <li class="list-unstyled menuList"><a href="https://github.com/Youxiaaa" target="_blank" class="text-dark h3">Contact</a></li>
            <hr>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      pageLocation: '',
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      menuOpen: false,
      menuHide: true
    }
  },
  methods: {
    openCart () {
      const vm = this
      vm.$bus.$emit('cartisOpen', true)
    }
  },
  computed: {
    getcartLen () {
      const vm = this
      return vm.cartData.length
    }
  },
  created () {
    const vm = this
    vm.$bus.$on('getPageLocation', (pageName) => {
      vm.pageLocation = pageName
    })
    vm.$bus.$on('updatecartLen', (cartData) => {
      vm.cartData = cartData
    })
    vm.$bus.$on('menuisOpen', (isOpen) => {
      vm.menuOpen = isOpen
    })
  }
}
</script>
