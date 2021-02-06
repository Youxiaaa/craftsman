<template>
  <div>
    <!-- 載入效果 -->
    <loading :active.sync="isLoading"></loading>

    <!-- 頁面 -->
    <div class="container productDetail">
      <div class="row detailArea">
        <div class="col-md-7">
          <img :src="product.image" alt="" width="100%" class="detailImg">
        </div>
        <div class="col-md-5">
          <div class="detailCard">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-white p-0">
                <li class="breadcrumb-item"><router-link class="text-secondary" to="/">Home</router-link></li>
                <li class="breadcrumb-item"><router-link class="text-secondary" to="/products">Product</router-link></li>
                <li class="breadcrumb-item active text-secondary" aria-current="page"> {{ product.category }} </li>
              </ol>
            </nav>
            <h3 class="text-dark mt-3 h1"> {{ product.title }} </h3>
            <p class="text-right">
              <del v-if="product.origin_price" class="h6 text-secondary"> {{ product.origin_price | DollarsignFilter }} </del>
              <br>
              <span class="h4 text-dark"> {{ product.price * productQty | DollarsignFilter }} </span>
            </p>
            <div class="d-flex">
              <div class="btn-group mr-2 addBtn" role="group" aria-label="Second group">
                <button type="button" @click="productQty -= 1"  class="btn bg-weak" :class="{'pageDisabled': productQty === 1}"><span class="h4">-</span></button>
                <input type="number" :value="productQty" min="1" max="10" disabled class="text-center bg-weak">
                <button type="button" @click="productQty += 1"  class="btn bg-weak" :class="{'pageDisabled': productQty === 10}"><span class="h4">+</span></button>
              </div>
              <button type="button" class="btn btn-primary form-control py-4 d-flex justify-content-center align-items-center" @click="addtoCart" :class="{'pageDisabled': addBtn}"><span>Add to cart</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-8">
              <h3 class="h5 text-dark">
                This beautiful light grey cup comes from Taiwan. Add some minimalist scenes to your lifetime and use this cup for tea, coffee, dessert, or to place small items as a dish tray.
              </h3>
            </div>
            <div class="col-md-4">
              <p class="h6 text-secondary">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 px-3">
      </div>
    </div>
    <div class="reponsiveDetail mt-3">
      <div class="row m-0">
        <div class="col-12 p-0">
          <img :src="product.image" alt="" width="100%">
        </div>
      </div>
      <div class="card">
        <div class="card-body d-flex flex-column">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white p-0">
              <li class="breadcrumb-item"><router-link class="text-secondary h5" to="/">Home</router-link></li>
              <li class="breadcrumb-item"><router-link class="text-secondary h5" to="/products">Product</router-link></li>
              <li class="breadcrumb-item active text-secondary h5" aria-current="page"> {{ product.category }} </li>
            </ol>
          </nav>
          <h3 class="h1"> {{ product.title }} </h3>
          <div class="d-flex justify-content-between mt-3">
            <div class="btn-group mr-2 addBtn" role="group" aria-label="Second group">
              <button type="button" @click="productQty -= 1"  class="btn bg-weak" :class="{'pageDisabled': productQty === 1}"><span class="h4">-</span></button>
              <input type="number" :value="productQty" min="1" max="10" disabled class="text-center bg-weak py-4 px-4">
              <button type="button" @click="productQty += 1"  class="btn bg-weak" :class="{'pageDisabled': productQty === 10}"><span class="h4">+</span></button>
            </div>
            <div class="d-flex flex-column">
              <del class="text-right h5 text-light"> NT{{ product.origin_price | DollarsignFilter }} </del>
              <span class="h3"> NT{{ product.price | DollarsignFilter }} </span>
            </div>
          </div>
          <button type="button" class="btn btn-primary form-control d-flex justify-content-center align-items-center mt-4 addtoCartBtn" @click="addtoCart" :class="{'pageDisabled': addBtn}"><span class="h4 my-3">Add to cart</span></button>
        </div>
      </div>
      <div class="card p-0 mt-4">
      <p class="text-secondary h5">
        <span>This beautiful light grey cup comes from</span>
        <span> Taiwan. Add some minimalist scenes to your</span>
        <span> lifetime and use this cup for tea, coffee,</span>
        <span> dessert, or to place small items as a dish tray.</span>
      </p>
      <p class="text-light my-4">
        <span>Made in Taiwan</span>
        <br>
        <span>8 x 8 x 6 cm</span>
        <br>
        <span>Dishwasher and Microwave-safe</span>
      </p>
      </div>
    </div>
      <h3 class="h2 text-dark px-5 ml-4 carouselTitle">You might also like…</h3>
      <h3 class="responsiveCarouselTitle">You might also like…</h3>
    <ProductsCarousel class="mt-5"></ProductsCarousel>
    <SubBanner></SubBanner>
  </div>
</template>
<script>
import ProductsCarousel from '../frontend/ProductsCarousel.vue'
import SubBanner from '../frontend/SubBanner.vue'
export default {
  components: {
    ProductsCarousel,
    SubBanner
  },
  data () {
    return {
      isLoading: false,
      cacheId: '',
      product: {},
      productQty: 1,
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      addBtn: false
    }
  },
  watch: {
    cacheId: function () {
      const vm = this
      const htmlHref = window.location.href.replace(/^http:\/\/[^/]+/, '')
      const addr = htmlHref.substr(htmlHref.lastIndexOf('/', htmlHref.lastIndexOf('/') - 1) + 1)
      const index = addr.lastIndexOf('/')
      const addrLast = decodeURI(addr.substring(index + 1, addr.length))
      vm.cacheId = addrLast
      vm.isLoading = true
      document.documentElement.scrollTop = 0
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/product/${vm.cacheId}`
      vm.$http.get(api).then((res) => {
        if (res.data.success) {
          vm.isLoading = false
          vm.product = res.data.product
        } else {
          vm.isLoading = false
        }
      })
    }
  },
  methods: {
    addtoCart () {
      const vm = this
      const cacheId = []

      if (vm.addBtn) { return }
      vm.addBtn = true

      setTimeout(() => {
        vm.addBtn = !vm.addBtn
      }, 1500)

      vm.cartData.forEach((item) => {
        cacheId.push(item.id)
      })

      if (cacheId.indexOf(vm.product.id) === -1) {
        const cache = {
          id: vm.product.id,
          title: vm.product.title,
          origin_price: vm.product.origin_price,
          price: vm.product.price,
          qty: vm.productQty,
          image: vm.product.image
        }
        vm.cartData.push(cache)
        localStorage.setItem('cartData', JSON.stringify(vm.cartData))
        vm.$bus.$emit('updateCart', vm.cartData)
        vm.$bus.$emit('updatecartLen', vm.cartData)
        vm.$noty.show(`${vm.product.title} 已加入購物車`)
      } else {
        vm.cartData.forEach((item, key) => {
          if (item.id === vm.product.id) {
            let { qty } = item
            const cache = {
              id: vm.product.id,
              title: vm.product.title,
              origin_price: vm.product.origin_price,
              price: vm.product.price,
              qty: qty += vm.productQty,
              image: vm.product.image
            }
            vm.cartData.splice(key, 1)
            vm.cartData.push(cache)
            localStorage.setItem('cartData', JSON.stringify(vm.cartData))
            vm.$bus.$emit('updateCart', vm.cartData)
            vm.$bus.$emit('updatecartLen', vm.cartData)
            vm.$noty.show(`${vm.product.title} 已加入購物車`)
          }
        })
      }
    }
  },
  created () {
    const vm = this
    vm.isLoading = true

    const htmlHref = window.location.href.replace(/^http:\/\/[^/]+/, '')
    const addr = htmlHref.substr(htmlHref.lastIndexOf('/', htmlHref.lastIndexOf('/') - 1) + 1)
    const index = addr.lastIndexOf('/')
    const addrLast = decodeURI(addr.substring(index + 1, addr.length))
    vm.cacheId = addrLast

    setTimeout(() => {
      if (vm.cacheId) {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/product/${vm.cacheId}`
        vm.$http.get(api).then((res) => {
          document.documentElement.scrollTop = 0
          if (res.data.success) {
            vm.product = res.data.product
            document.querySelector('.productDetail').classList.add('fadeIn')
            document.querySelector('.reponsiveDetail').classList.add('fadeIn')
            vm.isLoading = false
          } else {
            vm.isLoading = false
          }
        })
      }
    }, 10)
    setTimeout(() => {
      vm.$bus.$emit('getPageLocation', 'products')
    }, 10)

    vm.$bus.$on('getProductId', (id) => {
      vm.cacheId = id
      vm.productQty = 1
    })
  }
}
</script>
