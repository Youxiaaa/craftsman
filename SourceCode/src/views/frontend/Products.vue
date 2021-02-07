<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="productsSelBanner">
      <div class="row m-0">
        <div class="col">
          <ul class="d-flex productsTopmenu">
            <li class="list-unstyled mr-5"><a href="#" @click.prevent="isActive = 'All'" class="h5 text-secondary" :class="{'text-success': isActive === 'All'}">All <sup><small class="font-weight-bold">24</small> </sup></a></li>
            <li class="list-unstyled mr-5"><a href="#" @click.prevent="isActive = 'Bowl'" class="h5 text-secondary" :class="{'text-success': isActive === 'Bowl'}">Bowl <sup><small class="font-weight-bold">10</small> </sup></a></li>
            <li class="list-unstyled mr-5"><a href="#" @click.prevent="isActive = 'Cup'" class="h5 text-secondary" :class="{'text-success': isActive === 'Cup'}">Cup <sup><small class="font-weight-bold">8</small> </sup></a></li>
            <li class="list-unstyled mr-5"><a href="#" @click.prevent="isActive = 'Plate'" class="h5 text-secondary" :class="{'text-success': isActive === 'Plate'}">Plate <sup><small class="font-weight-bold">3</small> </sup></a></li>
            <li class="list-unstyled mr-5"><a href="#" @click.prevent="isActive = 'Vase'" class="h5 text-secondary" :class="{'text-success': isActive === 'Vase'}">Vase <sup><small class="font-weight-bold">3</small> </sup></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="responsiveProductsSelBanner mt-3">
      <div class="row m-0">
        <div class="col-12 d-flex responsiveTopmenu">
          <a href="#" class="h5 mx-2 my-4" @click.prevent="isActive = 'All' " :class="{'text-primary': isActive === 'All', 'text-secondary': isActive !== 'All'}">All<sup class="text-light" :class="{'text-primary': isActive === 'All', 'text-secondary': isActive !== 'All'}">24</sup></a>
          <a href="#" class="h5 mx-2 my-4" @click.prevent="isActive = 'Bowl' " :class="{'text-primary': isActive === 'Bowl', 'text-secondary': isActive !== 'Bowl'}">Bowl<sup class="text-light" :class="{'text-primary': isActive === 'All', 'text-secondary': isActive !== 'All'}">10</sup></a>
          <a href="#" class="h5 mx-2 my-4" @click.prevent="isActive = 'Cup' " :class="{'text-primary': isActive === 'Cup', 'text-secondary': isActive !== 'Cup'}">Cup<sup class="text-light" :class="{'text-primary': isActive === 'All', 'text-secondary': isActive !== 'All'}">8</sup></a>
          <a href="#" class="h5 mx-2 my-4" @click.prevent="isActive = 'Plate' " :class="{'text-primary': isActive === 'Plate', 'text-secondary': isActive !== 'Plate'}">Plate<sup class="text-light" :class="{'text-primary': isActive === 'All', 'text-secondary': isActive !== 'All'}">3</sup></a>
          <a href="#" class="h5 mx-2 my-4" @click.prevent="isActive = 'Vase' " :class="{'text-primary': isActive === 'Vase', 'text-secondary': isActive !== 'Vase'}">Vase<sup class="text-light" :class="{'text-primary': isActive === 'All', 'text-secondary': isActive !== 'All'}">3</sup></a>
        </div>
      </div>
    </div>
    <div class="productsArea preFade mt-5 mb-3">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4 p-1" v-for="item in products" :key="item.id">
            <div class="card my-1" @click="checkProduct(item.id)">
              <div class="card-header p-0">
                <img v-lazy="item.image" class="computerProductImg" alt="" width="100%">
                <img v-lazy="item.image" class="responsiveProductImg" alt="" width="100%" height="180px">
              </div>
              <div class="card-body">
                <h2 class="h4"> {{ item.title }} </h2>
                <div class="d-flex">
                  <span class="text-dark h6 mr-2"> {{ item.price | DollarsignFilter }} </span><del class="text-light h6" v-if="item.origin_price"> {{ item.origin_price | DollarsignFilter }} </del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination d-flex justify-content-center mb-5">
      <ul class="d-flex pl-0">
        <li class="list-unstyled mx-3"><a href="#" @click.prevent="page = 1" class="text-secondary h3" :class="{'text-success': page === 1, 'text-underLine': page === 1}">1</a></li>
        <li class="list-unstyled mx-3"><a href="#" @click.prevent="page = 2" class="text-secondary h3" :class="{'text-success': page === 2, 'text-underLine': page === 2}">2</a></li>
        <li class="list-unstyled mx-3"><a href="#" @click.prevent="page = 3" class="text-secondary h3" :class="{'text-success': page === 3, 'text-underLine': page === 3}">3</a></li>
      </ul>
    </div>
    <SubBanner></SubBanner>
  </div>
</template>
<script>
import SubBanner from '../frontend/SubBanner.vue'
export default {
  components: {
    SubBanner
  },
  data () {
    return {
      isLoading: false,
      products: [],
      isActive: 'All',
      page: 1
    }
  },
  methods: {
    checkProduct (id) {
      const vm = this
      vm.isLoading = true
      vm.$router.push(`products/${id}`)
    }
  },
  created () {
    const vm = this
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/products/all`
    document.documentElement.scrollTop = 0
    vm.isLoading = true
    vm.$http.get(api).then((res) => {
      if (res.data.success) {
        vm.isLoading = false
        vm.products = res.data.products
        document.querySelector('.preFade').classList.add('fadeIn')
      } else {
        vm.isLoading = false
      }
    })
    setTimeout(() => {
      vm.$bus.$emit('cartisOpen', false)
      vm.$bus.$emit('menuisOpen', false)
      vm.$bus.$emit('getPageLocation', 'products')
      vm.$bus.$emit('getPageName', 'products')
    }, 100)
  }
}
</script>
