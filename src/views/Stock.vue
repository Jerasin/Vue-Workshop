<template>
  <div class="container-fluid p-0">
    <Cards />

    <div class="container-fluid mt-5 p-0">
      <div class="">
        <h3>Stock</h3>
        <button class="btn btn-primary mb-2">Create Product</button>
      </div>
      <div class="loading" v-if="isLoading">Loading ...</div>
      <div v-else-if="error">
        {{ error.message }} <button @click="fetchData">try again</button>
      </div>
      <table class="table m-md-2 table-hover table-bordered table-striped table-responsive text-center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Stock</th>
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ id, product_name, product_price, product_stock } in data"
            :key="id"
          >
            <th scope="row">{{ id }}</th>
            <td>{{ product_name }}</td>
            <td>{{ product_stock }}</td>
            <td>{{ product_price }}</td>
            <td>
              <i class="fas fa-edit me-3 pointer"/>
              <i class="fas fa-trash  pointer"/>
            </td>
          </tr>
        </tbody>
      </table>


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
import axios from "axios";
import { ref } from "vue";
export default {
  name: "Stock",
  components: {
    Cards,
  },
  setup() {
    const isLoading = ref(false);
    const error = ref(null);
    const data = ref(null);

    const fetchData = async () => {
      isLoading.value = true;
      try {
        const json = await axios.get(
          "http://127.0.0.1:4000/api/stock/products"
        );
        data.value = json.data.result;
        isLoading.value = false;
        console.log("Stock Component is Run");
      } catch (err) {
        localStorage.clear();
        console.log(err);
      }
    };

    return { fetchData, isLoading, error, data };
  },
  async mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.loading{
  position: absolute;
  top: 60%;
  left: 50%;
  background-color: bisque;
}

.pointer{
  cursor: pointer;
}

@media only screen and (max-width: 682px) {
  .loading{
  position: absolute;
  top: 90%;
  left: 50%;
  background-color: bisque;
}
}
</style>