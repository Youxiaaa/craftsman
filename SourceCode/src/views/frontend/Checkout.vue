<template>
  <div>
    <!-- 載入效果 -->
    <loading :active.sync="isLoading"></loading>

    <!-- 頁面 -->
    <div class="checkoutBreadcrumb">
      <a href="#" class="mr-2"><router-link to="/products">Cart</router-link></a> > <span class="text-dark h6 mx-2"> Infomation</span> > <span class="text-secondary ml-2"> Payment</span>
    <div class="row checkoutArea">
      <div class="col-md-7">
        <validation-observer v-slot="{ invalid }">
          <form class="mt-3" @submit.prevent="toPayment(checkoutData)">
            <div class="form-row">
              <div class="form-group mt-3 col-md-12">
              <validation-provider rules="required|email" v-slot="{ errors, classes }">
              <label class="mb-2 h4" for="email">Contact information</label>
              <input id="email" type="email" name="電子信箱" v-model="checkoutData.user.email"
                  class="form-control p-4" :class="classes" placeholder="Email">
              <span class="invalid-feedback"> {{ errors[0] }} </span>
                <div class="form-check mt-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Keep me up to date on news and special offers
                  </label>
                </div>
              </validation-provider>
              </div>
            </div>
            <label class="mb-2 mt-3 h4" for="name">Shipping address</label>
            <div class="form-row">
              <div class="form-group mt-3 col-md-6">
              <validation-provider rules="required" v-slot="{ errors, classes }">
              <input id="name" type="text" name="Name" v-model="checkoutData.user.name"
                  class="form-control p-4" :class="classes" placeholder="Name">
              <span class="invalid-feedback"> {{ errors[0] }} </span>
              </validation-provider>
              </div>
              <div class="form-group mt-3 col-md-6">
              <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
              <input id="phone" type="tel" name="phone" v-model="checkoutData.user.tel"
                  class="form-control p-4" :class="classes" placeholder="Phone">
              <span class="invalid-feedback"> {{ errors[0] }} </span>
              </validation-provider>
              </div>
              <div class="form-group col-md-6">
              <validation-provider rules="required" v-slot="{ errors, classes }">
              <select name="country" class="form-control checkoutSelect" :class="classes" v-model="checkoutData.user.country">
                <option value="" selected disabled>Country/Region</option>
                <option value="California">California</option>
              </select>
              <span class="invalid-feedback"> {{ errors[0] }} </span>
              </validation-provider>
              </div>
              <div class="form-group col-md-6">
              <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
              <select name="country" class="form-control checkoutSelect" :class="classes" v-model="checkoutData.user.city">
                <option value="" selected disabled>City</option>
                <option value="Los Angeles">Los Angeles</option>
              </select>
              <span class="invalid-feedback"> {{ errors[0] }} </span>
              </validation-provider>
              </div>
              <div class="form-group col-md-12">
              <validation-provider rules="required" v-slot="{ errors, classes }">
              <input id="address" type="text" name="addr" v-model="checkoutData.user.address"
                  class="form-control p-4" :class="classes" placeholder="Address">
              <span class="invalid-feedback"> {{ errors[0] }} </span>
              </validation-provider>
              </div>
            </div>
          <div class="d-flex justify-content-end align-items-center mt-4">
            <a href="#"><router-link to="/products"><span class="mr-3"> &lt; </span> Return to cart</router-link></a>
          <button type="submit" class="btn btn-primary text-white mb-3 ml-auto py-3 px-5" :disabled="invalid">Continue to payment</button>
          </div>
          </form>
        </validation-observer>
        <hr>
        <div class="d-flex justify-content-start mb-5">
          <a href="#" class="text-secondary">Purchase Policy</a>
          <a href="#" class="text-secondary mx-5">Privacy Policy</a>
          <a href="#" class="text-secondary">Terms & Conditions</a>
        </div>
      </div>
      <div class="col-md-5">
        <div class="cartContent mt-4">
          <ul class="p-0">
            <li class="d-flex align-items-center my-3" v-for="item in carts" :key="item.id">
              <img v-lazy="item.product.image" alt="" width="48px" height="48px">
              <h5 class="h5 ml-3"> {{ item.product.title }} <span class="h6"> x {{ item.qty }} </span> </h5>
              <h5 class="ml-auto"> NT{{ item.product.price | DollarsignFilter }} </h5>
            </li>
          </ul>
          <hr>
          <ul class="p-0">
            <li class="d-flex">
              <h4 class="h6">Subtotal</h4>
              <h5 class="ml-auto h6"> NT{{ countTotal | DollarsignFilter }} </h5>
            </li>
            <li class="d-flex">
              <h4 class="h6">Shipping</h4>
              <h5 class="ml-auto h6"> NT{{ Shipping | DollarsignFilter }} </h5>
            </li>
          </ul>
          <hr>
          <ul class="p-0">
            <li class="d-flex">
              <h4 class="h4">Total</h4>
              <h5 class="ml-auto h4"> {{ countTotal + Shipping | DollarsignFilter }} </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    <div class="responsiveCheckoutArea">
      <div class="row">
        <div class="col-12">
          <div class="responsiveCartContent mt-4">
            <ul class="pl-0 mb-0">
              <li class="list-unstyled d-flex justify-content-between align-items-center" @click="cartListisOpen = !cartListisOpen">
                <span>Order Summary</span>
                <h5 class="ml-auto mr-4 h5 mb-0" v-if="!cartListisOpen"> {{ countTotal + Shipping | DollarsignFilter }} </h5>
                <i class="fas fa-chevron-up text-primary" v-if="cartListisOpen"></i>
                <i class="fas fa-chevron-down text-primary" v-if="!cartListisOpen"></i>
              </li>
            </ul>
            <ul class="p-0 precartListShow mt-5" :class="{'cartListShow': cartListisOpen}">
              <li class="d-flex align-items-center my-3" v-for="item in carts" :key="item.id">
                <img v-lazy="item.product.image" alt="" width="48px" height="48px">
                <h5 class="h5 ml-3"> {{ item.product.title }} <span class="h6"> x {{ item.qty }} </span> </h5>
                <h5 class="ml-auto"> NT{{ item.product.price | DollarsignFilter }} </h5>
              </li>
            </ul>
            <hr class="precartListShow" :class="{'cartListShow': cartListisOpen}">
            <ul class="p-0 precartListShow" :class="{'cartListShow': cartListisOpen}">
              <li class="d-flex">
                <h4 class="h6">Subtotal</h4>
                <h5 class="ml-auto h6"> NT{{ countTotal | DollarsignFilter }} </h5>
              </li>
              <li class="d-flex">
                <h4 class="h6">Shipping</h4>
                <h5 class="ml-auto h6"> NT{{ Shipping | DollarsignFilter }} </h5>
              </li>
            </ul>
            <hr class="precartListShow" :class="{'cartListShow': cartListisOpen}">
            <ul class="p-0 precartListShow" :class="{'cartListShow': cartListisOpen}">
              <li class="d-flex">
                <h4 class="h4">Total</h4>
                <h5 class="ml-auto h4"> {{ countTotal + Shipping | DollarsignFilter }} </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-5">
          <a href="#" class="mr-2 h5"><router-link to="/products">Cart</router-link></a> > <span class="text-dark h5 mx-2"> Infomation</span> > <span class="text-secondary ml-2 h5"> Payment</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="toPayment(checkoutData)">
              <div class="form-row">
                <div class="form-group col-md-12">
                <validation-provider rules="required|email" v-slot="{ errors, classes }">
                <label class="mb-2 ml-1 h3" for="email">Contact information</label>
                <input id="email" type="email" name="電子信箱" v-model="checkoutData.user.email"
                    class="form-control p-4" :class="classes" placeholder="Email">
                <span class="invalid-feedback"> {{ errors[0] }} </span>
                  <div class="form-check mt-2 ml-1">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label text-light" for="defaultCheck1">
                      Keep me up to date on news and special offers
                    </label>
                  </div>
                </validation-provider>
                <label class="mb-2 mt-3 h4" for="name">Shipping address</label>
                <div class="form-row">
                <div class="form-group col-12">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                <input id="name" type="text" name="Name" v-model="checkoutData.user.name"
                    class="form-control p-4" :class="classes" placeholder="Name">
                <span class="invalid-feedback"> {{ errors[0] }} </span>
                </validation-provider>
                </div>
                <div class="form-group col-12">
                <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                <input id="phone" type="tel" name="phone" v-model="checkoutData.user.tel"
                    class="form-control p-4" :class="classes" placeholder="Phone">
                <span class="invalid-feedback"> {{ errors[0] }} </span>
                </validation-provider>
                </div>
                <div class="form-group col-12">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                <select name="country" class="form-control checkoutSelect" :class="classes" v-model="checkoutData.user.country">
                  <option value="" selected disabled>Country/Region</option>
                  <option value="California">California</option>
                </select>
                <span class="invalid-feedback"> {{ errors[0] }} </span>
                </validation-provider>
                </div>
                <div class="form-group col-12">
                <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                <select name="country" class="form-control checkoutSelect" :class="classes" v-model="checkoutData.user.city">
                  <option value="" selected disabled>City</option>
                  <option value="Los Angeles">Los Angeles</option>
                </select>
                <span class="invalid-feedback"> {{ errors[0] }} </span>
                </validation-provider>
                </div>
                <div class="form-group col-12">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                <input id="address" type="text" name="addr" v-model="checkoutData.user.address"
                    class="form-control p-4" :class="classes" placeholder="Address">
                <span class="invalid-feedback"> {{ errors[0] }} </span>
                </validation-provider>
                </div>
              </div>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <button type="submit" class="btn btn-primary text-white submitBtn" :disabled="invalid">Continue to payment</button>
                <a href="#" class="mx-auto my-4 h5"><router-link to="/products"><span class="mr-2"> &lt; </span> Return to cart</router-link></a>
              </div>
              <hr>
              <ul class="pl-0">
                <li class="list-unstyled"><a href="#" class="text-light">Purchase Policy</a></li>
                <li class="list-unstyled my-4"><a href="#" class="text-light">Privacy Policy</a></li>
                <li class="list-unstyled"><a href="#" class="text-light">Terms & Conditions</a></li>
              </ul>
            </form>
          </validation-observer>
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
      checkoutData: {
        user: {
          name: '',
          email: '',
          tel: '',
          country: '',
          city: '',
          address: ''
        },
        message: ''
      },
      carts: [],
      Shipping: 80,
      cartListisOpen: false
    }
  },
  methods: {
    toPayment (checkoutData) {
      const vm = this
      vm.$router.push('/payment')
      setTimeout(() => {
        vm.$bus.$emit('getInfomation', checkoutData)
      }, 50)
    }
  },
  computed: {
    countTotal () {
      const vm = this
      let cache = 0
      vm.carts.forEach((item) => {
        cache += item.total
      })
      return cache
    }
  },
  created () {
    const vm = this
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart`
    document.documentElement.scrollTop = 0
    vm.$bus.$emit('getPageName', 'checkout')
    vm.isLoading = true
    vm.$http.get(api).then((res) => {
      if (res.data.success) {
        vm.isLoading = false
        vm.carts = res.data.data.carts
        document.querySelector('.checkoutArea').classList.add('fadeIn')
        document.querySelector('.responsiveCheckoutArea').classList.add('fadeIn')
      }
    })
    setTimeout(() => {
      vm.$bus.$emit('responsiveCheckoutArea', 'checkout')
    }, 50)
  }
}
</script>
