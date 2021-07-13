<template>
  <div class="container-fluid p-0">
    <Cards :count="count" />

    <div class="container-fluid mt-5 p-0">
      <div class="row justify-content-center">
        <h3>Stock</h3>
        <router-link to="/stock-create">
          <button class="btn btn-primary mb-2">Create Product</button>
        </router-link>
        <div class="col col-10 bg-light p-0">
          <div class="table table-responsive-sm">
            <table
              class="
                table
                m-md-2
                table-hover table-bordered table-striped
                text-center
              "
            >
              <!-- <span>{{ data }}</span> -->
              <!-- <span>{{ $store.state.product.isGet }}</span> -->
              <thead>
                <tr>
                  <th scope="col">Product Code</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Stock</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="{
                    id,
                    product_code,
                    product_name,
                    product_price,
                    product_stock,
                  } in data"
                  :key="id"
                >
                  <th scope="row">{{ product_code }}</th>
                  <td>{{ product_name }}</td>
                  <td>{{ product_stock }}</td>
                  <td>{{ product_price }}</td>
                  <td>
                    <span @click="editItem(id)">
                      <i class="fas fa-edit me-3 pointer" />
                    </span>
                    <span @click="deleteItem(id)">
                      <i class="fas fa-trash pointer" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/cards/Cards.vue";
import router from "@/router/index";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "Stock",
  components: {
    Cards,
  },
  setup() {
    const isLoading = ref(false);

    const store = useStore();
    const data = ref(null);
    const count = ref(null);

    onMounted(async () => {
      await loadProducts();
      await setCount();
    });

    const loadProducts = async () => {
      await store.dispatch({
        type: "getProducts",
      });
      // console.log(JSON.parse(JSON.stringify(store.state.stock.isGet.data.count)))
      data.value = JSON.parse(
        JSON.stringify(store.state.stock.isGet.data.result)
      );
    };

    const setCount = () => {
      count.value = JSON.parse(
        JSON.stringify(store.state.stock.isGet.data.count)
      );
    };

    const deleteItem = async (id) => {
      // console.log("isLoading");
      isLoading.value = true;
      await store.dispatch({ type: "deleteItem", id: id });
      await loadProducts();
      await setCount();
      isLoading.value = false;
    };

    const editItem = (data) => {
      router.push(`/stock-edit/${data}`);
    };

    return {
      editItem,
      loadProducts,
      data,
      deleteItem,
      isLoading,
      setCount,
      count,
    };
  },
};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 60%;
  left: 50%;
  background-color: bisque;
}

.pointer {
  cursor: pointer;
}

@media only screen and (max-width: 682px) {
  .loading {
    position: absolute;
    top: 90%;
    left: 50%;
    background-color: bisque;
  }
}
</style>