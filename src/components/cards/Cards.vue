<template>
  <div class="container">
    <!-- col-sm-3 -->
    <div class="row justify-content-md-center align-items-center">
      <div class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box">
        <div class="box-total-text">
          <h3>Total</h3>
        </div>

        <div class="box-total-img d-flex justify-content-center">
          <img class="img" src="@/assets/shopping-cart.png" alt="" />
        </div>

        <p>18</p>
      </div>

      <div class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box">
        <div class="box-soldout-text">
          <h3>Sold-Out</h3>
        </div>

        <div class="box-soldout-img d-flex justify-content-center">
          <img class="img" src="@/assets/sold-out.png" alt="" />
        </div>

        <p>18</p>
      </div>

      <div class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box">
        <div class="box-return-text">
          <h3>Return</h3>
        </div>

        <div class="box-return-img d-flex justify-content-center">
          <img class="img" src="@/assets/return.png" alt="" />
        </div>

        <p>18</p>
      </div>

      <div class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box">
        <div class="box-discount-text">
          <h3>Discount</h3>
        </div>

        <div class="box-discount-img d-flex justify-content-center">
          <img class="img" src="@/assets/discount.png" alt="" />
        </div>

        <p>18</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style scoped>
.img-sale {
  width: 120px;
  border: 4px solid red;
}

.box {
  position: relative;
  display: flex;
}

.box-total-text {
  width: 100%;
}

.box-total-img {
  width: 100%;
  background-color: rgb(5, 255, 5);
  border : 2px solid black;
  margin: 3px;
}

.box-soldout-text {
  width: 100%;
}

.box-soldout-img {
  width: 100%;
  background-color: orange;
  border : 2px solid black;
  margin: 3px;
}

.box-return-text {
  width: 100%;
}

.box-return-img {
  width: 100%;
  background-color: red;
  border : 2px solid black;
  margin: 3px;
}

.box-discount-text {
  width: 100%;
}

.box-discount-img {
  width: 100%;
  background-color: rgb(0, 229, 255);
  border : 2px solid black;
  margin: 3px;
}

p {
  position: absolute;
  top: 35%;
  left: 10%;
  font-size: 20px;
}

/* .row {
  border: 5px solid red;
} */

.col-auto {
  border: 2px solid rgb(0, 0, 0);
  padding-bottom: 10px;
}

.img {
  display: inline;
  width: 100%;
  max-width: 100px;
}

.img-shopping-cart {
  width: 100%;
  max-width: 100px;
}

@media only screen and (max-width: 1295px) {
  .img {
    display: inline;
    width: 100%;
    max-width: 80px;
  }
}

@media only screen and (max-width: 1200px) {
  .col-auto {
    width: 25%;
  }
}

@media only screen and (max-width: 1090px) {
  .col-auto {
    width: 50%;
  }
}

@media only screen and (max-width: 1050px) {
  .img {
    display: inline;
    width: 100%;
    max-width: 75px;
  }
}

@media only screen and (max-width: 1022px) {
  .col {
    width: 200px;
  }
}

@media only screen and (max-width: 837px) {
  .col-auto {
    width: 50%;
  }
}

@media only screen and (max-width: 797px) {
  .col-auto {
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  .col-auto {
    width: 50%;
  }
}

@media only screen and (max-width: 704px) {
  .col-auto {
    width: 50%;
  }
}

@media only screen and (max-width: 680px) {
  .col-auto {
    width: 100%;
  }

}


@media only screen and (max-width: 500px) {
  h3 {
    font-size: 23px;
  }
}

@media only screen and (max-width: 400px) {
  h3 {
    font-size: 20px;
  }

  /* p {
    top: 58%;
  } */
}

@media only screen and (max-width: 357px) {
  h3 {
    font-size: 20px;
  }
}

@media only screen and (max-width: 326px) {
  h3 {
    width: 30px;
    font-size: 18px;
  }

  .img {
    display: inline;
    width: 100%;
    max-width: 65px;
  }

  p {
    top: 55%;
  }
}
</style>