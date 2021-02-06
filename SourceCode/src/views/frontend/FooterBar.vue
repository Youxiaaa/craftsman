<template>
  <div>
    <footer>
      <div class="computerFooterBar">
        <div class="d-flex flex-row-reverse align-items-center">
          <ul class="d-flex">
            <li class="list-unstyled"><a href="#" class="text-white">Purchase Policy</a></li>
            <li class="list-unstyled mx-5"><a href="#" class="text-white">Privacy Policy</a></li>
            <li class="list-unstyled"><a href="#" class="text-white">Terms & Conditions</a></li>
          </ul>
          <h5 class="h6 mr-auto text-white">© 2021. All Rights Reserved.</h5>
          <h3 class="h5"><a href="#" class="text-white mr-3">CRAFTsMAN</a></h3>
        </div>
      </div>
      <div class="reponsiveFooterBar" v-if="isOpen">
        <div class="d-flex flex-column pl-3 py-4">
          <h2 class="text-white h3">Craftsman</h2>
          <ul class="pl-0 py-4">
            <li class="list-unstyled my-3"><a href="#" class="text-white">Purchase Policy</a></li>
            <li class="list-unstyled my-3"><a href="#" class="text-white">Privacy Policy</a></li>
            <li class="list-unstyled my-3"><a href="#" class="text-white">Terms & Conditions</a></li>
          </ul>
          <h3 class="color-fix h6">© 2021. All Rights Reserved.</h3>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },
  created () {
    const vm = this
    vm.$bus.$on('getPageName', (page) => {
      if (page === 'completed' || page === 'checkout' || page === 'payment') {
        vm.isOpen = false
      } else {
        vm.isOpen = true
      }
    })
  }
}
</script>
