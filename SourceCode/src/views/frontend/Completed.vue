<template>
  <div>
    <div class="row m-0 computerCompleted">
      <div class="col-md-6 d-flex align-items-center completedLeftside">
        <div class="d-flex flex-column">
          <h3 class="h1 text-dark font-weight-bold">Well Done!</h3>
          <p class="mt-4 mb-5">
            <span class="text-secondary h5">Your order has been received. We’II email</span>
            <br>
            <span class="text-secondary h5">you an order confirmation with details.</span>
          </p>
          <router-link to="/products"><a href="#" class="btn btn-primary px-5 py-3">Continue shopping</a></router-link>
        </div>
      </div>
      <div class="col-md-6 px-0">
        <div class="completedBanner"></div>
      </div>
    </div>
    <div class="row m-0 responsiveCompleted">
      <div class="completedBanner d-flex flex-column align-items-center justify-content-center">
        <h3 class="text-white font-weight-bold mt-auto completedTitle">Well Done!</h3>
        <p class="mt-4 mb-auto text-center">
          <span class="color-fix h6">Your order has been received. We’II email</span>
          <br>
          <span class="color-fix h6">you an order confirmation with details.</span>
        </p>
        <router-link to="/products" class="btn btn-primary mb-3 continueBtn">Continue shopping</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    const vm = this
    document.documentElement.scrollTop = 0
    vm.$bus.$emit('getPageLocation', 'home')
    vm.$bus.$emit('getPageName', 'completed')
  }
}
</script>
