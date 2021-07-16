<template>
  <div class="container-fluid position-relative p-0">
    <div class="d-flex justify-content-between">
      <h1>Sell</h1>
      <div class="d-flex justify-content-sm-between ">
        <h4 class="me-4 d-lg-block d-none">Total: {{ grandTotal }} Baht</h4>
        <h4 class="d-lg-block d-none">Qty: {{ qtyall }}</h4>
        <span class="me-4 d-lg-none fs-5">Total: {{ grandTotal }} B</span>
        <span class="d-lg-none fs-5">Qty: {{ qtyall }}</span>
        <div class="ms-2 me-2 ">
          <button class="btn btn-primary">Sell</button>
        </div>
      </div>
    </div>
    <hr />
    <div class="row m-0">
      <div
        class="col-auto col-md-6 col-lg-3 p-0"
        v-for="(
          {
            id,
            product_code,
            product_name,
            product_price,
            product_stock,
            product_image,
            qty,
          },
          index
        ) in dataProducts"
        :key="id"
      >
        <div class="container mb-3">
          <div
            class="card d-flex align-items-center bg-light border border-2"
            style="width: 100%; max-width: 260px; height: 360px"
          >
            <img
              :src="setPathImg(product_image)"
              class="card-img-top p-2"
              style="
                width: 100%;
                height: 100%;
                max-width: 240px;
                max-height: 150px;
              "
            />
            <div class="card-body p-1">
              <hr />
              <h5 class="card-title">{{ product_code }}</h5>
              <p class="card-text mb-0">Product Name: {{ product_name }}</p>
              <p class="card-text mb-0">Stock: {{ product_stock }}</p>
              <p class="card-text">Price: {{ product_price }} Baht</p>
              <div class="d-flex flex-row  justify-content-between">
                <div>
                  <button
                    class="btn btn-primary me-2"
                    @click="addProduct(index)"
                    :disabled="checkQty(index)"
                  >
                    +
                  </button>
                  <span>{{ qty }}</span>
                  <button
                    class="btn btn-primary ms-2"
                    @click="downProduct(index)"
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    class="btn btn-success ms-2"
                    @click="addCart(index, product_code)"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { imageUrl_server } from "../constatns";
import img from "@/assets/no_image.jpg";
export default {
  name: "Sell",
  setup() {
    const store = useStore();
    const grandTotal = ref(0);
    const qtyall = ref(0);
    const dataProducts = ref(null);
    const cart = ref([]);
    const btn_disable = ref([]);

    onMounted(async () => {
      await loadProducts();
    });

    const addProduct = (index) => {
      dataProducts.value[index].qty++;
    };

    const downProduct = (index) => {
      if (dataProducts.value[index].qty === 0) return;

      dataProducts.value[index].qty--;
    };

    const checkQty = (index) => {
      if (
        dataProducts.value[index].qty >= dataProducts.value[index].product_stock
      ) {
        return true;
      } else {
        return false;
      }
      // console.log(dataProducts.value[index].qty)
    };

    const addCart = async (index, product_code) => {
      // สร้างตัวแปรรับ loop หาค่า value ของ obj product_Code ที่ตรงกับ Parameter ที่รับเข้ามา
      const search = (obj) => obj.product_code === product_code;

      if (
        dataProducts.value[index].qty > dataProducts.value[index].product_stock
      )
        return alert("Error");
      if (dataProducts.value[index].qty === 0) {
        
        let indexCancelProductCode = JSON.parse(
          JSON.stringify(cart.value)
        ).findIndex(search);

        // console.log(indexCancelProductCode);
        if (indexCancelProductCode === -1) return alert("Error");
        cart.value.splice(indexCancelProductCode,1)
        calculateQtyAndTotal();
        return
      }
      if (dataProducts.value[index].qty > 0) {
        if (btn_disable.value.indexOf(product_code) !== -1) {
          // เอาค่า value ที่ loop ได้มาหา index ของค่าที่ obj ที่ต้องการ
          let indexProductCode = JSON.parse(
            JSON.stringify(cart.value)
          ).findIndex(search);

          // เอาค่า value ที่ loop ได้มาหา value ของค่าที่ obj ที่ต้องการ
          // let getClassname = JSON.parse(JSON.stringify(cart.value)).find(search);

          cart.value[indexProductCode] = dataProducts.value[indexProductCode];
          calculateQtyAndTotal();
          console.log(cart.value);
          return;
          // console.log(JSON.parse(JSON.stringify(cart.value)));
        } else {
          await cart.value.push(
            JSON.parse(JSON.stringify(dataProducts.value[index]))
          );

          btn_disable.value = [...btn_disable.value, product_code];

          calculateQtyAndTotal();
          console.log(cart.value);
          return;
        }
      }
      return;
    };

    const calculateQtyAndTotal = () => {
      qtyall.value = 0;
      for (let index = 0; index < cart.value.length; index++) {
        qtyall.value =
          qtyall.value +
          JSON.parse(
            JSON.stringify(JSON.parse(JSON.stringify(cart.value[index].qty)))
          );
      }
      console.log(qtyall.value);
    };

    const setPathImg = (imgurl) => {
      // console.log(imgurl == "null");
      if (imgurl == "null") {
        // console.log(image)
        return img;
      } else {
        return imageUrl_server + imgurl;
      }
    };

    const loadProducts = async () => {
      await store.dispatch({
        type: "getProducts",
      });

      dataProducts.value = JSON.parse(
        JSON.stringify(store.state.stock.isGet.data.result)
      );

      for (let index = 0; index < dataProducts.value.length; index++) {
        dataProducts.value[index].qty = 0;
        console.log(dataProducts.value[index]);
      }
    };

    return {
      loadProducts,
      dataProducts,
      setPathImg,
      grandTotal,
      addProduct,
      downProduct,
      addCart,
      btn_disable,
      qtyall,
      checkQty,
    };
  },
};
</script>

<style>
</style>