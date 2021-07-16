<template>
  <div class="container-fluid">
    <div class="mb-sm-1 mb-lg-3">
      <span class="h2"
        ><b>Stock Edit {{ $route.params.id }}</b></span
      >
    </div>
    <hr />
    <div class="row justify-content-center mb-3">
      <div class="col col-auto col-md-4 bg-dark pb-3">
        <form @submit.prevent="submitForm">
          <!--Start Input Product Id -->
          <div class="mb-3">
            <label for="product_code" class="form-label text-light fs-5"
              >Product Code</label
            >
            <input
              type="number"
              disabled="true"
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
            <label for="product_name" class="form-label text-light fs-5"
              >Product Name</label
            >
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
            <label for="product_stock" class="form-label text-light fs-5"
              >Product Stock</label
            >
            <div class="input-group">
              <input
                type="number"
                v-model.number="form.product_stock"
                class="form-control"
                required
                placeholder="Stock"
                id="product_stock_input"
              />
              <span class="input-group-text bg-white border border-0">PTC</span>
            </div>
          </div>
          <!--End Input Product Stock -->

          <!--Start Input Product Price -->
          <div class="mb-3">
            <label for="product_price" class="form-label text-light fs-5"
              >Product Price</label
            >
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

          <!--Start Input Product Active -->
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              v-model="form.product_active"
            />
            <label class="form-check-label text-light" for="exampleCheck1"
              >Active</label
            >
          </div>
          <!--End Input Product Active -->

          <!--Start Input Product Image -->
          <div class="mb-4">
            <label for="product_image" class="form-label text-light fs-5"
              >Product Image</label
            >
            <input type="file" @change="onFileSelected" class="form-control" />
          </div>
          <!--End Input Product Image -->

          <div class="d-flex justify-content-center container p-0 mb-2">
            <img
              v-if="imageURL"
              :src="imageURL"
              class="mb-2 container"
              alt="@/assets/no_image.jpg"
            />
          </div>

          <!--Start Button  -->
          <div class="d-flex justify-content-end mt-3">
            <button type="submit" class="btn btn-success me-3">Edit</button>
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
import { onMounted, reactive, ref } from "vue";
import jwt_decode from "jwt-decode";
import { useStore } from "vuex";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import { imageUrl_server } from "../constatns";
// import router from "@/router/index";
export default {
  name: "StockEdit",
  setup() {
    const form = reactive({
      product_code: null,
      product_name: null,
      product_stock: null,
      product_price: null,
      product_active: false,
      product_image: null,
    });
    const imageURL = ref(null);
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      fetchData();
    });

    const fetchData = async () => {
      await store.dispatch({
        type: "getProductById",
        id: route.params.id,
      });

      console.log(
        JSON.parse(JSON.stringify(store.state.stock.isGet.data.result[0]))
      );
      form.product_code = store.state.stock.isGet.data.result[0].product_code;
      form.product_name = store.state.stock.isGet.data.result[0].product_name;
      form.product_stock = store.state.stock.isGet.data.result[0].product_stock;
      form.product_price = store.state.stock.isGet.data.result[0].product_price;
      form.product_active =
        store.state.stock.isGet.data.result[0].product_active;
      imageURL.value =
        imageUrl_server + store.state.stock.isGet.data.result[0].product_image;
      form.product_image = store.state.stock.isGet.data.result[0].product_image;
      console.log(form.product_image);
    };

    const checkImg = () => {
      if (imageURL.value) {
        return imageURL.value;
      } else {
        return "@/assets/no_image.jpg";
      }
    };

    function onFileSelected(e) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageURL = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.form.product_image = e.target.files[0];
    }

    const submitForm = () => {
      const token = localStorage.getItem("token");
      try {
        const decode = jwt_decode(token);
        const formData = new FormData();

        console.log(form.product_code.toString().length);
        if (form.product_code.toString().length > 9) {
          return Swal.fire({
            icon: "error",
            title: "Product Code No more than 9 characters",
          });
        }

        if (form.product_stock.toString().length > 9) {
          return Swal.fire({
            icon: "error",
            title: "Product Stock No more than 9 characters",
          });
        }

        if (form.product_price.toString().length > 9) {
          return Swal.fire({
            icon: "error",
            title: "Product Price No more than 9 characters",
          });
        }

        formData.append("product_code", form.product_code);
        formData.append("product_name", form.product_name);
        formData.append("product_price", form.product_price);
        formData.append("product_stock", form.product_stock);
        formData.append("product_active", form.product_active);
        formData.append("product_image", form.product_image);
        formData.append("updatedBy", decode.email);

        store.dispatch({
          type: "updatedProductById",
          form: formData,
          id: route.params.id,
        });

        // ? Check Data from formData
        // for (let value of formData.values()) {
        //   console.log(value);
        // }
      } catch (err) {
        localStorage.clear();
      }
      // router.push("/stock");
    };

    return { form, submitForm, onFileSelected, imageURL, checkImg };
  },
};
</script>

<style>
</style>