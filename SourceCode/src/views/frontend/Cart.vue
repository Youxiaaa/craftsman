<template>
  <div>
    <!-- 載入效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- 遮罩 -->
    <div class="curtain" v-if="curtainShow" @click="cartisOpen = !cartisOpen, curtainShow = !curtainShow"></div>

    <div class="cart" :class="{'cartOpen': cartisOpen}">
      <div class="d-flex align-items-center">
        <h2 class="h1" :class="{'mr-auto': cartData.length === 0}">Cart List</h2>
        <sup class="h4 mr-auto ml-2 text-primary" v-if="cartData.length !== 0"> {{ cartData.length }}</sup>
        <a href="#" @click.prevent="cartisOpen = !cartisOpen, curtainShow = !curtainShow" class="text-dark"><i class="fas fa-times fa-2x"></i></a>
      </div>
      <div class="row mt-3">
        <div class="col-12 px-3 my-2" v-for="item in cartData" :key="item.id">
          <div class="d-flex justify-content-end cartBg">
            <img :src="item.image" alt="" width="112px" height="112px">
            <div class="d-flex flex-column mr-auto ml-4 justify-content-center">
              <h4 class="h5 ml-2"> {{ item.title }} </h4>
              <div class="ml-2">
                <span class="h5 text-secondary mr-2"> {{ item.price | DollarsignFilter }} </span><del v-if="item.origin_price"> {{ item.origin_price | DollarsignFilter }} </del>
              </div>
              <div class="btn-group mr-2 addBtn" role="group" aria-label="Second group">
                <button type="button" @click.prevent="minusQty(item)" class="btn bg-weak" :class="{'pageDisabled': item.qty === 1}"><span class="h4">-</span></button>
                <input type="number" :value="item.qty" min="1" max="10" disabled class="text-center bg-weak">
                <button type="button" @click.prevent="plusQty(item)" class="btn bg-weak"><span class="h4">+</span></button>
              </div>
            </div>
            <div class="d-flex flex-column align-items-end justify-content-between px-3 py-2">
              <a href="#" class="text-dark h4" @click.prevent="delCart(item)"><i class="fas fa-times"></i></a>
              <h3 class="h5"> {{ item.price * item.qty | DollarsignFilter }} </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3" v-if="cartData.length !== 0">
        <div class="col-3"></div>
        <div class="col-9 d-flex pr-3 pl-0">
          <span class="mr-auto h6 text-secondary">Subtotal</span>
          <span class="h6 text-secondary"> {{ gettotalPrice | DollarsignFilter }} </span>
        </div>
      </div>
      <div class="row mt-3" v-if="cartData.length !== 0">
        <div class="col-3"></div>
        <div class="col-9 d-flex pr-3 pl-0">
          <span class="mr-auto h6 text-secondary">Shipping</span>
          <span class="h6 text-secondary"> {{ shipping | DollarsignFilter }} </span>
        </div>
      </div>
      <div class="row mt-5" v-if="cartData.length !== 0">
        <div class="col-3"></div>
        <div class="col-9 d-flex pr-3 pl-0">
          <span class="mr-auto h4 text-dark">Total</span>
          <span class="h4 text-dark"> {{ gettotalPrice + shipping | DollarsignFilter }} </span>
        </div>
      </div>
      <div class="row mt-3 checkBtn" v-if="cartData.length !== 0">
        <div class="col-3"></div>
        <div class="col-9 pr-3 pl-0">
          <a href="#" class="btn btn-primary d-block py-3" @click.prevent="toCheckout">Checkout</a>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-flex flex-column align-items-center" v-if="cartData.length === 0">
            <span class="h3">購 物 車 目 前 是 空 的 唷</span>
            <button @click="cartisOpen = !cartisOpen, curtainShow = !curtainShow" class="p-0 mt-3 borderNone"><router-link to="/products" class="btn btn-dark p-3">前 往 商 品 頁</router-link></button>
          </div>
        </div>
      </div>
    </div>

    <div class="responsiveCart" :class="{'cartOpen': cartisOpen}">
      <div class="d-flex align-items-center">
      <h2 class="h1" :class="{'mr-auto': cartData.length === 0}">Cart List</h2>
      <sup class="h5 mr-auto ml-2 text-primary" v-if="cartData.length !== 0"> {{ cartData.length }}</sup>
      <a href="#" @click.prevent="cartisOpen = !cartisOpen, curtainShow = !curtainShow" class="text-dark"><i class="fas fa-times fa-2x"></i></a>
      </div>
      <div class="cartarea" :class="{'noIteminCart': cartData.length === 0}">
        <div class="row mt-3">
          <div class="col-12 my-2" v-for="item in cartData" :key="item.id">
            <div class="d-flex justify-content-end cartBg">
              <img :src="item.image" alt="" width="105px" height="105px" class="mr-3">
              <div class="d-flex flex-column justify-content-center mr-auto">
                <h4 class="h6 mb-1"> {{ item.title }} </h4>
                <div class="mb-3">
                  <span class="h6 text-secondary mr-2"> {{ item.price | DollarsignFilter }} </span>
                  <small><del v-if="item.origin_price" class="text-light"> {{ item.origin_price | DollarsignFilter }} </del></small>
                </div>
                <div class="btn-group responsiveCartAddBtn" role="group" aria-label="Second group">
                  <button type="button" @click.prevent="minusQty(item)" class="btn bg-weak" :class="{'pageDisabled': item.qty === 1}"><span class="h4">&minus;</span></button>
                  <input type="number" :value="item.qty" min="1" max="10" disabled class="text-center bg-weak">
                  <button type="button" @click.prevent="plusQty(item)" class="btn bg-weak"><span class="h4">&#43;</span></button>
                </div>
              </div>
              <div class="d-flex flex-column align-items-end justify-content-between pr-2 pl-1 py-2">
                <a href="#" class="text-dark h4" @click.prevent="delCart(item)"><i class="fas fa-times"></i></a>
                <h3 class="h5 mb-1"> {{ item.price * item.qty | DollarsignFilter }} </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex flex-column px-3" v-if="cartData.length !== 0">
            <div class="d-flex justify-content-between mt-3">
              <span class="mr-auto h6 text-secondary">Subtotal</span>
              <span class="h6 text-secondary"> {{ gettotalPrice | DollarsignFilter }} </span>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <span class="mr-auto h6 text-secondary">Shipping</span>
              <span class="h6 text-secondary"> {{ shipping | DollarsignFilter }} </span>
            </div>
            <div class="d-flex justify-content-between mt-3 mb-auto">
              <span class="mr-auto h4 text-dark">Total</span>
              <span class="h4 text-dark"> {{ gettotalPrice + shipping | DollarsignFilter }} </span>
            </div>
        </div>
      </div>
      <div class="row mt-auto" v-if="cartData.length !== 0">
        <div class="col-12 pr-3 px-3">
          <a href="#" class="btn btn-primary toCheckoutBtn" @click.prevent="toCheckout">Checkout</a>
        </div>
      </div>
      <div class="row mt-auto">
        <div class="col-12">
          <div class="d-flex flex-column align-items-center" v-if="cartData.length === 0">
            <span class="h3">購 物 車 目 前 是 空 的 唷</span>
            <button @click="cartisOpen = !cartisOpen, curtainShow = !curtainShow" class="p-0 mt-3 borderNone"><router-link to="/products" class="btn btn-dark p-3">前 往 商 品 頁</router-link></button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
      cartisOpen: false,
      curtainShow: false,
      local: JSON.parse(localStorage.getItem('cartData')) || [],
      cartData: [],
      shipping: 80
    }
  },
  methods: {
    getCart () {
      const vm = this
      vm.cartData = vm.local
    },
    delCart (cartItem) {
      const vm = this
      vm.local.filter((item, key) => {
        if (cartItem.id === item.id) {
          vm.cartData.splice(key, 1)
          localStorage.setItem('cartData', JSON.stringify(vm.local))
          vm.cartData = vm.local
          vm.$bus.$emit('updatecartLen', vm.cartData)
          vm.$noty.error(`${item.title} 已從購物車移除`)
        }
      })
    },
    plusQty (cartItem) {
      const vm = this
      vm.local.filter((item) => {
        if (cartItem.id === item.id) {
          item.qty += 1
          localStorage.setItem('cartData', JSON.stringify(vm.local))
        }
      })
    },
    minusQty (cartItem) {
      const vm = this
      vm.local.filter((item) => {
        if (cartItem.id === item.id) {
          item.qty -= 1
          localStorage.setItem('cartData', JSON.stringify(vm.local))
        }
      })
    },
    toCheckout () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart`
      const cacheId = []
      let cacheData = []

      vm.isLoading = true
      vm.$http.get(api).then((res) => {
        cacheData = res.data.data.carts
        cacheData.forEach((item) => {
          cacheId.push(item.id)
        })
      }).then(() => {
        cacheId.forEach((item) => {
          vm.$http.delete(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart/${item}`)
        })
      }).then(() => {
        vm.local.forEach((item) => {
          const cache = {
            product_id: item.id,
            qty: item.qty
          }
          vm.$http.post(api, { data: cache }).then((res) => {
            vm.cartData = []
            localStorage.removeItem('cartsData')
            localStorage.setItem('cartData', JSON.stringify(vm.cartData))
            vm.isLoading = false
            vm.$router.push('/checkout')
            vm.$bus.$emit('updatecartLen', vm.cartData)
          })
        })
      })

      vm.cartisOpen = false
      vm.curtainShow = false
    }
  },
  computed: {
    gettotalPrice () {
      const vm = this
      let total = 0
      vm.cartData.forEach((item) => {
        total += (item.price * item.qty)
      })
      return parseInt(total)
    }
  },
  created () {
    const vm = this
    setTimeout(() => {
      vm.getCart()
    }, 50)
    vm.$bus.$on('cartisOpen', (isOpen) => {
      vm.cartisOpen = isOpen
      vm.curtainShow = isOpen
    })
    vm.$bus.$on('updateCart', (cartData) => {
      vm.cartData = cartData
      vm.local = cartData
    })
  }
}
</script>
