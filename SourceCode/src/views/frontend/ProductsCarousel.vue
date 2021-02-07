<template>
  <div>
    <div class="row m-0">
        <div class="col carouselPrefade">
            <carousel :per-page="1" :mouse-drag="false">
            <slide>
              <div class="row px-5 mx-0">
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[0].image" alt="" width="100%" height="280px" @click="checkDetail(products[0].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[0].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[0].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[0].origin_price"> {{ products[0].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[1].image" alt="" width="100%" height="280px" @click="checkDetail(products[1].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[1].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[1].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[1].origin_price"> {{ products[1].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[2].image" alt="" width="100%" height="280px" @click="checkDetail(products[2].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[2].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[2].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[2].origin_price"> {{ products[2].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[3].image" alt="" width="100%" height="280px" @click="checkDetail(products[3].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[3].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[3].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[3].origin_price"> {{ products[3].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row px-5">
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[4].image" alt="" width="100%" height="280px" @click="checkDetail(products[4].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[4].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[4].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[4].origin_price"> {{ products[4].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[5].image" alt="" width="100%" height="280px" @click="checkDetail(products[5].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[5].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[5].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[5].origin_price"> {{ products[5].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[6].image" alt="" width="100%" height="280px" @click="checkDetail(products[6].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[6].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[6].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[6].origin_price"> {{ products[6].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-flex justify-content-center">
                  <div class="card">
                    <div class="card-header p-0">
                      <img v-lazy="products[7].image" alt="" width="100%" height="280px" @click="checkDetail(products[7].id)">
                    </div>
                    <div class="card-body">
                      <h3 class="h5"> {{ products[7].title }} </h3>
                      <div class="d-flex">
                        <span class="text-dark mr-2"> {{ products[7].price | DollarsignFilter }} </span><del class="text-secondary" v-if="products[7].origin_price"> {{ products[7].origin_price | DollarsignFilter }} </del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="col responsiveCarouselPrefade">
          <carousel :per-page="1" :mouse-drag="false">
            <slide v-for="item in products" :key="item.id">
              <div class="card">
                <div class="card-header p-0">
                  <img :src="item.image" alt="" width="100%"  @click="checkDetail(item.id)">
                </div>
                <div class="card-body">
                  <h3> {{ item.title }} </h3>
                  <span class="h5"> {{ item.price | DollarsignFilter }} </span> <del class="text-light"> {{ item.origin_price | DollarsignFilter }} </del>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    checkDetail (id) {
      const vm = this
      vm.$router.push(`/products/${id}`)
      setTimeout(() => {
        vm.$bus.$emit('getProductId', id)
      }, 50)
    }
  },
  created () {
    const vm = this
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/products/all`

    vm.$http.get(api).then((res) => {
      if (res.data.success) {
        vm.products = res.data.products
        document.querySelector('.carouselPrefade').classList.add('fadeIn')
      }
    })
  }
}
</script>
