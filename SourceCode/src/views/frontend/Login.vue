<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="loginPage d-flex flex-column justify-content-center align-items-center">
      <h2 class="h1">後 台 系 統 登 入</h2>
      <div class="loginCard mt-4 mb-5">
        <form @submit.prevent="login">
          <label for="email" class="font-weight-bold h5 my-2">電子信箱</label>
          <br>
          <input type="email" id="email" v-model="user.username" class="form-control">
          <br>
          <label for="password" class="font-weight-bold h5 my-2">密碼</label>
          <br>
          <input type="password" id="password" v-model="user.password" @keyup.enter="login" class="form-control">
          <br>
          <button type="submit" class="btn btn-dark d-flex ml-auto">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    login () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      vm.isLoading = true
      vm.$http.post(api, vm.user).then((res) => {
        if (res.data.success) {
          const token = res.data.token
          const expired = res.data.expired
          document.cookie = `youxiaaaToken=${token}; expires=${new Date(expired)};`
          vm.$router.push('/admin/products')
        } else {
          vm.isLoading = false
          alert(res.data.message)
        }
      })
    }
  }
}
</script>
