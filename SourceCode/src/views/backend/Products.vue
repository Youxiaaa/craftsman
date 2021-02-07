<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mx-0">
      <div class="col">
        <div class="d-flex justify-content-end">
          <button class="btn btn-dark my-3 mx-2" @click="openProductModal(true)">新增商品</button>
          <button class="btn btn-outline-dark my-3 mx-2" @click="logout">登出</button>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table">
        <tr>
          <th width="80px"></th>
          <th>
            產品名稱
          </th>
          <th width="100px">
            原價
          </th>
          <th width="100px">
            售價
          </th>
          <th width="100px" class="text-center">
            是否啟用
          </th>
          <th width="200px" class="text-center">
            編輯
          </th>
        </tr>
        <tr v-for="item in products" :key=item.id>
          <td>
            <img :src="item.image" alt="" width=80px>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td class="text-right">
            {{ item.origin_price | DollarsignFilter }}
          </td>
          <td class="text-right">
            {{ item.price | DollarsignFilter}}
          </td>
          <td class="text-center">
            <span v-if="item.is_enabled" class="text-success">是</span>
            <span v-else class="text-danger">否</span>
          </td>
          <td class="text-center">
            <button class="btn btn-sm btn-dark mx-1" @click="openProductModal(false, item)">編輯</button>
            <button class="btn btn-sm btn-outline-danger mx-1" @click="opendelProductModal(item)">刪除</button>
          </td>
        </tr>
      </table>
    </div>
    <!-- model -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="tempProduct.image">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files">
                </div>
                <img :src="tempProduct.image"
                  class="img-fluid" alt="">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題" v-model="tempProduct.title">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model="tempProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit"
                      placeholder="請輸入單位" v-model="tempProduct.unit">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價" v-model="tempProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model="tempProduct.price">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                    placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                    placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delModal -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct(tempProduct.id)">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import $ from 'jquery'

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      tempProduct: {},
      isNew: false
    }
  },
  methods: {
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/products/all`
      vm.isLoading = true
      vm.$http.get(api).then((res) => {
        vm.products = res.data.products
        vm.isLoading = false
      })
    },
    openProductModal (isNew, item) {
      const vm = this
      if (!isNew) {
        vm.tempProduct = { ...item }
        vm.isNew = false
      } else {
        vm.tempProduct = {}
        vm.isNew = true
      }
      $('#productModal').modal('show')
    },
    opendelProductModal (item) {
      const vm = this
      vm.tempProduct = { ...item }
      $('#delProductModal').modal('show')
    },
    delProduct (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/product/${id}`
      vm.isLoading = true
      vm.$http.delete(api).then((res) => {
        if (res.data.success) {
          $('#delProductModal').modal('hide')
          vm.getProducts()
        }
      })
    },
    updateProduct () {
      const vm = this
      vm.isLoading = true
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/product/${vm.tempProduct.id}`
      let apiMethod = 'put'

      if (vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/product`
        apiMethod = 'post'
      }

      vm.$http[apiMethod](api, { data: vm.tempProduct }).then((res) => {
        if (res.data.success) {
          vm.isLoading = false
          vm.getProducts()
          $('#productModal').modal('hide')
        } else {
          vm.isLoading = false
          $('#productModal').modal('hide')
        }
      })
    },
    logout () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/logout`

      vm.$http.post(api)
      vm.$router.push('/login')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
