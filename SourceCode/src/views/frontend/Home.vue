<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="computerHomepage">
      <div class="banner">
      <div class="row m-0">
        <div class="col-md-6 d-flex justify-content-center flex-column bannerLeft">
          <p>
            <span class="h1">
              Enjoy Your
            </span>
            <br>
            <span class="h1">
              Minimalist Lifestyle.
            </span>
          </p>
          <p>
            <span class="text-secondary h5">The best crafts in Taiwan. Get your free</span>
            <br>
            <span class="text-secondary h5">shipping on the first order.</span>
          </p>
          <div>
            <router-link class="btn btn-lg btn-primary mt-5" to="products">Shop now</router-link>
          </div>
        </div>
        <div class="col-md-6 bannerBg">
        </div>
      </div>
      </div>
      <div class="homeContent mt-5">
        <div class="container">
          <div class="row preFade">
            <div v-lazy-container="{ selector: 'img' }" class="col-md-6 d-flex align-items-center">
              <img data-src="https://images.unsplash.com/photo-1473230841016-ca42011196d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" alt="" width="100%">
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center p-5">
              <p class="h3 pl-5">
                Special Clays
              </p>
              <p class="pl-5 my-3">
                A general body formulation for contemporary earthenware is 25% kaolin, 25% ball clay, 35% quartz and 15% feldspar.
              </p>
              <a href="#" class="pl-5">Lear More</a>
            </div>
          </div>
          <div class="row my-4 flex-row-reverse preFade">
            <div v-lazy-container="{ selector: 'img' }" class="col-md-6 d-flex align-items-center">
              <img data-src="https://images.unsplash.com/photo-1572725394982-fbee32027b77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" width="100%">
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center p-5">
              <p class="h3 px-5 text-right">
                Less is more
              </p>
              <p class="px-5 my-3 text-right">
                Trimming pottery can transform a weighty Earth-bound pot into one that is a pleasure to hold, look at, and use.
              </p>
              <a href="#" class="px-5 text-right">Lear More</a>
            </div>
          </div>
          <div class="row preFade">
            <div v-lazy-container="{ selector: 'img' }" class="col-md-6 d-flex align-items-center">
              <img data-src="https://images.unsplash.com/photo-1541085478756-418a3402fcb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="" width="100%">
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center p-5">
              <p class="h3 px-5">
                Special Clays
              </p>
              <p class="px-5 my-3">
                A general body formulation for contemporary earthenware is 25% kaolin, 25% ball clay, 35% quartz and 15% feldspar.
              </p>
              <a href="#" class="px-5">Lear More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-banner preFade">
        <div class="row h-100 mx-0">
          <div class="col-md-6 d-flex justify-content-center align-items-center px-0">
            <p class="text-white h3">
              “I want to make the life
              <br>
              more simple by crafts.”
            </p>
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center px-0">
            <p class="h6 text-white">Art Director</p>
            <p class="text-white h3">YoYo游</p>
            <div class="mt-3 d-flex justify-content-end">
              <a href="https://www.instagram.com/youxiaaaaaa/" target="_blank" class="ml-5 pl-5">Instagram</a>
              <a href="https://www.facebook.com/YuTsungChih/" target="_blank" class="ml-5">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="responsiveHomepage">
      <div class="row m-0">
        <div class="responsiveHomeBanner d-flex flex-column justify-content-center align-items-center">
          <h2 class="text-white bannerTitle lh-fix mt-auto">
            <span>
            Enjoy Your
            </span>
            <br>
            <span>
            Minimalist
            </span>
            <br>
            <span>
            Lifestyle.
            </span>
          </h2>
          <p class="h5 bannerText text-center mt-4">
            <span>
              The best crafts in Taiwan. Get your free
            </span>
            <br>
            <span>
              shipping on the first order.
            </span>
          </p>
          <router-link to="/products" class="btn btn-primary mt-auto py-3 toProductsBtn">Shop now</router-link>
        </div>
      </div>
      <div class="row m-0 mt-5 px-2">
        <div class="col-12 text-center preFade">
          <img src="https://images.unsplash.com/photo-1473230841016-ca42011196d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" alt="" width="100%">
        </div>
        <div class="col-12 mt-5 pl-4 preFade">
          <h3>Special Clays</h3>
          <p>
            A general body formulation for contemporary earthenware is 25% kaolin, 25% ball clay, 35% quartz and 15% feldspar.
          </p>
          <a href="#">learn more</a>
        </div>
        <div class="col-12 text-center my-5 preFade">
          <img src="https://images.unsplash.com/photo-1572725394982-fbee32027b77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" width="100%">
        </div>
        <div class="col-12 pl-4 preFade">
          <h3>Less is more</h3>
          <p>
            Trimming pottery can transform a weighty Earth-bound pot into one that is a pleasure to hold, look at, and use.
          </p>
          <a href="#">learn more</a>
        </div>
        <div class="col-12 text-center mt-5 preFade">
          <img src="https://images.unsplash.com/photo-1541085478756-418a3402fcb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="" width="100%">
        </div>
        <div class="col-12 my-5 pl-4 preFade">
          <h3>Marvelous Detail</h3>
          <p>
            In Craftsman, the art director, working with marketers, develops or creates an idea of a new creation.
          </p>
          <a href="#">learn more</a>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-12 p-0 preFade">
        <div class="responsiveBottombanner">
          <div class="d-flex flex-column pr-5 pt-4">
            <h3 class="h1 text-white mb-auto pl-3">
              “I want to make the life more simple by crafts.”
            </h3>
            <p class="mt-5 pt-5 pl-3">
              <span class="color-fix">Art Director</span>
              <br>
              <span class="text-white h4">YoYo游</span>
              <br>
              <br>
              <span><a href="#">Instagram</a></span><span class="ml-3"><a href="#">Facebook</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ProductsCarousel></ProductsCarousel>
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
      isLoading: false
    }
  },
  methods: {
    addfadeIn () {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      document.querySelectorAll('.preFade').forEach((item) => {
        const itemPos = item.offsetTop
        if ((scrollTop + windowHeight) > (itemPos + 200)) {
          item.classList.add('fadeIn')
        }
      })
    }
  },
  created () {
    const vm = this
    window.addEventListener('scroll', vm.addfadeIn)
    document.documentElement.scrollTop = 0
    setTimeout(() => {
      vm.$bus.$emit('getPageLocation', 'home')
    }, 10)
    setTimeout(() => {
      document.querySelector('.banner').classList.add('fadeIn')
      document.querySelector('.responsiveHomeBanner').classList.add('fadeIn')
    }, 200)
    vm.$bus.$emit('getPageName', 'home')
  }
}
</script>
