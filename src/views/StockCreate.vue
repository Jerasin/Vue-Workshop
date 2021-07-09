<template>
  <div class="container-fluid">
    <div class="mb-sm-1 mb-lg-3">
      <span class="h2"><b>Stock Create</b></span>
    </div>
    <hr />
    <div class="row justify-content-center ">
      <div class="col col-auto col-md-4 bg-dark pb-3">
        
    <form @submit.prevent="submitForm">
      <!--Start Input Product Id -->
      <div class="mb-3">
        <label for="product_code" class="form-label text-light fs-5">Product Code</label>
        <input
          type="number"
          v-model.number="form.product_code"
          placeholder="Code"
          class="form-control"
          id="product_code_input"
          required
          aria-describedby="emailHelp"
        />
      </div>
      <!--End Input Product Id -->

      <!--Start Input Product Name -->
      <div class="mb-3">
        <label for="product_name" class="form-label text-light fs-5">Product Name</label>
        <input
          type="text"
          v-model.trim="form.product_name"
          class="form-control"
          id="product_name_input"
          required
          placeholder="Name"
        />
      </div>
      <!--End Input Product Name -->

      <!--Start Input Product Stock -->
      <div class="mb-3">
        <label for="product_stock" class="form-label text-light fs-5">Product Stock</label>
        <div class="input-group">
          <input
          type="number"
          v-model.number="form.product_stock"
          class="form-control"
          required
          placeholder="Stock"
          id="product_stock_input"
        />
        <span class="input-group-text bg-white border border-0 ">PTC</span>
        </div>
      </div>
      <!--End Input Product Stock -->

      <!--Start Input Product Price -->
      <div class="mb-3">
        <label for="product_price" class="form-label text-light fs-5">Product Price</label>
        <div class="input-group">
          <input
            type="number"
            aria-label="Amount (to the nearest dollar)"
            v-model.number="form.product_price"
            class="form-control"
            placeholder="Price"
            required
            id="product_price_input"
          />
          <span class="input-group-text bg-white border border-0">THB</span>
        </div>
      </div>
      <!--End Input Product Price -->

      <!--Start Input Product Image -->
      <div class="mb-5">
        <label for="product_image" class="form-label text-light fs-5">Product Image</label>
        <input type="file" @change="onFileSelected" class="form-control" />
      </div>
      <!--End Input Product Image -->

      <img v-if="imgeURL" :src="imgeURL" class="mb-2" alt="" />

      <!--Start Button  -->
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-success me-3">Create</button>
        <router-link to="/stock"
          ><button type="submit" class="btn btn-danger">
            Cancel
          </button></router-link
        >
      </div>
      <!--End Button  -->
    </form>
  
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "StockCreate",
  setup() {
    const form = reactive({
      product_code: null,
      product_name: null,
      product_stock: null,
      product_price: null,
      product_image: null,
    });

    const imgeURL = ref(null);

    function onFileSelected(e) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imgeURL = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.form.product_image = e.target.files[0];
    }

    const submitForm = () => {
      console.log(form);
    };

    return { form, submitForm, onFileSelected, imgeURL };
  },
};
</script>

<style>
</style>