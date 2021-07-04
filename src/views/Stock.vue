<template>
  <div class="container">
    <!-- col-sm-3 -->
    <div class="row justify-content-md-center align-items-center">


      <div class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box">

        <div class="box-total-text">
          <h3>Total</h3>
        </div>

        <div class="box-total-img">
          <img class="img" src="@/assets/shopping-cart.png" alt="" />
        </div>

        <p>18</p>

      </div>

      <div
        class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box "
      >
        <div class="box-soldout-text">
          <h3>Sold-Out</h3>
        </div>

        <div class="box-soldout-img">
          <img class="img" src="@/assets/sold-out.png" alt="" />
        </div>

        <p>18</p>

      </div>

      <div class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box ">

        <div class="box-return-text">
          <h3>Return</h3>
        </div>

        <div class="box-return-img">
          <img class="img" src="@/assets/return.png" alt="" />
        </div>

        <p>18</p>

      </div>

      <div
        class="col-auto col-xl-3 col-xxl-3 p-0 align-self-center box "
      >
        <div class="box-discount-text">
          <h3>Discount</h3>
        </div>

        <div class="box-discount-img">
          <img class="img" src="@/assets/discount.png" alt="" />
        </div>

        <p>18</p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
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

.box-total-text{
  width: 100%;
}

.box-total-img {
  width: 100%;
  background-color: rgb(5, 255, 5);
}

.box-soldout-text{
  width: 100%;
}

.box-soldout-img {
  width: 100%;
  background-color: orange;
}

.box-return-text{
  width: 100%;
}

.box-return-img {
  width: 100%;
  background-color: red;
}

.box-discount-text{
  width: 100%;
}

.box-discount-img {
  width: 100%;
  background-color: rgb(0, 229, 255);
}

p {
  position: absolute;
  top: 35%;
  left: 10%;
  font-size: 20px;
}

.row {
  border: 5px solid red;
}

.col-auto {
  border: 5px solid yellow;
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
  .col-auto{
    width: 25%;
  }
}

@media only screen and (max-width: 1090px) {
  .col-auto {
    width: 50%;
  }

  h3,
  img {
    margin-left: 30%;
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

  h3,
  img {
    margin-left: 20%;
  }


}

@media only screen and (max-width: 768px) {
  .col-auto {
    width: 50%;
  }

  h3,
  img {
    margin-left: 10%;
  }

 
}

@media only screen and (max-width: 704px) {
  .col-auto {
    width: 50%;
  }

  h3,
  img {
    margin-left: 5%;
  }

 
}

@media only screen and (max-width: 680px) {
  .col-auto {
    width: 100%;
  }

  h3,
  img {
    margin-left: 30%;
  }

  
}

@media only screen and (max-width: 540px) {
  h3,
  img {
    margin-left: 20%;
  }


}

@media only screen and (max-width: 500px) {
  h3 {
    font-size: 23px;
  }
}

@media only screen and (max-width: 400px) {
  h3{
    font-size: 23px;
  }


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

  p{
    top: 55%;
  }

}



</style>