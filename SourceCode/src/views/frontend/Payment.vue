<template>
  <div>
    <!-- 載入效果 -->
    <loading :active.sync="isLoading"></loading>

    <div class="checkoutBreadcrumb">
      <a href="#" class="mr-2"><router-link to="/products">Cart</router-link></a> > <router-link to="/checkout" class="text-secondary">Infomation</router-link> > <span class="text-dark h6 ml-2"> Payment</span>
      <div class="row paymentArea">
        <div class="col-md-7">
          <h2 class="h3 mt-5">Infomation</h2>
          <div class="sildeBar">
            <ul class="m-0">
              <li class="list-unstyled d-flex justify-content-between align-items-center pb-2 pt-3" @click="contactisOpen = !contactisOpen">
                <span class="h5">Contact</span>
                <a class="text-secondary h6 computerEllipsis"> {{ infomation.user.name }} / {{ infomation.user.email }} / {{ infomation.user.tel }} </a>
                <i class="fas fa-chevron-up mr-3 mb-3 text-primary" v-if="contactisOpen === false"></i>
                <i class="fas fa-chevron-down mr-3 mb-3 text-primary" v-else></i>
              </li>
              <div class="preInfomationShow mb-3" :class="{'cartListShow': contactisOpen === true}">
                <span class="text-light"> {{ infomation.user.name }} </span>
                <br>
                <span class="text-light"> {{ infomation.user.email }} </span>
                <br>
                <span class="text-light"> {{ infomation.user.tel }} </span>
              </div>
            </ul>
          </div>
          <div class="sildeBar">
            <ul class="m-0">
              <li class="list-unstyled d-flex justify-content-between align-items-center pb-2 pt-3" @click="shipisOpen = !shipisOpen">
                <span class="h5">Ship to</span>
                <a href="#" class="text-secondary h6 computerEllipsis"> {{ infomation.user.address }} / {{ infomation.user.city }} / {{ infomation.user.country }} </a>
                <i class="fas fa-chevron-up mr-3 mb-3 text-primary" v-if="shipisOpen === false"></i>
                <i class="fas fa-chevron-down mr-3 mb-3 text-primary" v-else></i>
              </li>
                <div class="preInfomationShow mb-3" :class="{'cartListShow': shipisOpen === true}">
                  <span class="text-light"> {{ infomation.user.address }} </span>
                </div>
            </ul>
          </div>
          <label class="h3 mt-5" for="creditNumber">Credit Card</label>
            <validation-observer v-slot="{ invalid }">
              <form @submit.prevent="payment">
                <div class="form-row">
                  <div class="form-group m-0 my-1 col-md-12">
                  <validation-provider rules="required|max:16" v-slot="{ errors, classes }">
                  <input id="creditNumber" type="text" maxlength="16" name="creditCard" v-model="creditCard.num"
                      class="form-control p-4" :class="classes" placeholder="Card number">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group m-0 my-1 col-md-12">
                  <validation-provider rules="required" v-slot="{ errors, classes }">
                  <input id="cardMaster" type="text" name="credit card name" v-model="creditCard.name"
                      class="form-control p-4" :class="classes" placeholder="Name of card">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                </div>
                  <div class="form-row">
                  <div class="form-group m-0 my-1 col-md-6">
                  <validation-provider rules="required|max:5" v-slot="{ errors, classes }">
                  <input id="creditDate" type="text" maxlength="5" name="creditDate" v-model="creditCard.date"
                      class="form-control p-4" :class="classes" placeholder="Expiration date (MM / YY)">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                  <div class="form-group m-0 my-1 col-md-6">
                  <validation-provider rules="required|max:3" v-slot="{ errors, classes }">
                  <input id="security" type="text" maxlength="3" name="security" v-model="creditCard.code"
                      class="form-control p-4" :class="classes" placeholder="Security code">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                </div>
                <div class="d-flex justify-content-end align-items-center mt-4">
                  <a href="#"><router-link to="/checkout"><span class="mr-3"> &lt; </span> Return to information</router-link></a>
                <button type="submit" class="btn btn-primary text-white mb-3 ml-auto py-3 payBtn" :disabled="invalid">Pay now</button>
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
        <div class="cartContent mt-5">
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

    <div class="responsivePaymentArea">
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
              <li class="d-flex align-items-center mb-3" v-for="item in carts" :key="item.id">
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
      <div class="row m-0 mt-4">
        <div class="col-md-7 px-0">
          <a href="#" class="mr-2"><router-link to="/products">Cart</router-link></a> > <router-link to="/checkout" class="text-secondary">Infomation</router-link> > <span class="text-dark h6 ml-2"> Payment</span>
          <h2 class="h3 ml-1 mt-4">Infomation</h2>
          <div class="sildeBar">
            <ul class="m-0 p-3">
              <li class="list-unstyled d-flex justify-content-between align-items-center" @click="contactisOpen = !contactisOpen">
                <span class="h5">Contact</span>
                <span class="text-secondary h6 ellipsis"> {{ infomation.user.name }} / {{ infomation.user.email }} / {{ infomation.user.tel }} </span>
                <i class="fas fa-chevron-up mr-3 mb-3 text-primary" v-if="contactisOpen === false"></i>
                <i class="fas fa-chevron-down mr-3 mb-3 text-primary" v-else></i>
              </li>
                <div class="preInfomationShow" :class="{'cartListShow': contactisOpen === true}">
                  <span class="text-light"> {{ infomation.user.name }} </span>
                  <br>
                  <span class="text-light"> {{ infomation.user.email }} </span>
                  <br>
                  <span class="text-light"> {{ infomation.user.tel }} </span>
                </div>
            </ul>
          </div>
          <div class="sildeBar">
            <ul class="m-0 p-3">
              <li class="list-unstyled d-flex justify-content-between align-items-center ol-2" @click="shipisOpen = !shipisOpen">
                <span class="h5">Ship to</span>
                <span class="text-secondary h6 ellipsis"> {{ infomation.user.address }} / {{ infomation.user.city }} / {{ infomation.user.country }} </span>
                <i class="fas fa-chevron-up mr-3 mb-3 text-primary" v-if="shipisOpen === false"></i>
                <i class="fas fa-chevron-down mr-3 mb-3 text-primary" v-else></i>
              </li>
                <div class="row">
                  <div class="col-8">
                    <div class="preInfomationShow" :class="{'cartListShow': shipisOpen === true}">
                      <span class="text-light"> {{ infomation.user.address }} </span>
                    </div>
                  </div>
                </div>
            </ul>
          </div>
          <label class="h3 mt-5 ml-1" for="creditNumber">Credit Card</label>
            <validation-observer v-slot="{ invalid }">
              <form @submit.prevent="payment">
                <div class="form-row">
                  <div class="form-group m-0 my-1 col-md-12">
                  <validation-provider rules="required|max:16" v-slot="{ errors, classes }">
                  <input id="creditNumber" type="text" maxlength="16" name="creditCard" v-model="creditCard.num"
                      class="form-control p-4" :class="classes" placeholder="Card number">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group m-0 my-1 col-md-12">
                  <validation-provider rules="required" v-slot="{ errors, classes }">
                  <input id="cardMaster" type="text" name="nameMaster" v-model="creditCard.name"
                      class="form-control p-4" :class="classes" placeholder="Name of card">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                </div>
                  <div class="form-row">
                  <div class="form-group m-0 my-1 col-md-6">
                  <validation-provider rules="required|max:5" v-slot="{ errors, classes }">
                  <input id="creditDate" type="text" maxlength="5" name="creditDate" v-model="creditCard.date"
                      class="form-control p-4" :class="classes" placeholder="Expiration date (MM / YY)">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                  <div class="form-group m-0 my-1 col-md-6">
                  <validation-provider rules="required|max:3" v-slot="{ errors, classes }">
                  <input id="security" type="text" maxlength="3" name="security" v-model="creditCard.code"
                      class="form-control p-4" :class="classes" placeholder="Security code">
                  <span class="invalid-feedback"> {{ errors[0] }} </span>
                  </validation-provider>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-end align-items-center mt-4">
                  <button type="submit" class="btn btn-primary text-white mb-3 py-3 responsivePayBtn" :disabled="invalid">Pay now</button>
                  <a href="#"><router-link to="/checkout"><span class="mr-3"> &lt; </span> Return to information</router-link></a>
                </div>
              </form>
            </validation-observer>
            <hr>
            <ul class="pl-0">
              <li class="list-unstyled"><a href="#" class="text-light">Purchase Policy</a></li>
              <li class="list-unstyled my-3"><a href="#" class="text-light">Privacy Policy</a></li>
              <li class="list-unstyled"><a href="#" class="text-light">Terms & Conditions</a></li>
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
      isLoading: false,
      infomation: {},
      carts: [],
      creditCard: {
        num: '',
        name: '',
        date: '',
        code: ''
      },
      Shipping: 80,
      orderId: '',
      cartListisOpen: false,
      contactisOpen: false,
      shipisOpen: false
    }
  },
  methods: {
    payment () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/order`
      vm.isLoading = true
      vm.$http.post(api, { data: vm.infomation }).then((res) => {
        if (res.data.success) {
          vm.orderId = res.data.orderId
        }
      }).then(() => {
        vm.$http.post(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/pay/${vm.orderId}`).then((res) => {
          if (res.data.success) {
            vm.$router.push('/completed')
          }
        })
      })
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
    vm.isLoading = true
    document.documentElement.scrollTop = 0
    vm.$bus.$emit('getPageName', 'payment')
    vm.$bus.$on('getInfomation', (infomation) => {
      vm.infomation = infomation
    })

    vm.$http.get(api).then((res) => {
      if (res.data.success) {
        vm.isLoading = false
        vm.carts = res.data.data.carts
        document.querySelector('.paymentArea').classList.add('fadeIn')
        document.querySelector('.responsivePaymentArea').classList.add('fadeIn')
      }
    })
  }
}
</script>
