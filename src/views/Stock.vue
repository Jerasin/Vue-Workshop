<template>
  <div class="container-fluid p-0">
    <Cards />

    <div class="container-fluid mt-5 p-0">
      <div class="">
        <h3>Stock</h3>
        <button class="btn btn-primary mb-2">Create Product</button>
      </div>
      <table class="table table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/cards/Cards.vue";
export default {
  name: "Stock",
  components: {
    Cards,
  },
};
</script>

<style>
</style>