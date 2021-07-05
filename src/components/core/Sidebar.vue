<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-xl-2 px-sm-2 px-0 bg-dark">
        <div
          class="
            d-flex
            flex-column
            align-items-center align-items-sm-start
            px-3
            pt-2
            text-white
            min-vh-100
          "
        >
          <!-- Start Main Sidebar -->

          <!--Start buttom Meun -->
          <div
            class="
              fs-5
              d-sm-inline d-flex
              align-items-center
              pb-3
              mb-md-0
              me-md-auto
              text-align-center
              fs-4
              text-white text-decoration-none
            "
          >
            <b>Menu</b>
          </div>
          <!--End buttom Meun -->

          <!-- Start List Menu -->
          <ul
            class="
              nav nav-pills
              flex-column
              mb-sm-auto mb-0
              align-items-center align-items-sm-start
            "
            id="menu"
          >
            <!-- Start  Menu Stock -->
            <li>
              <div data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <router-link class="text-decoration-none" to="/stock">
                  <div class="row">
                    <div class="col icon hover">
                      <i class="fas fa-warehouse" />
                      <span class="tooltiptext">Stock</span>
                    </div>
                    <div class="col d-none d-sm-block">
                      <span class="ms-1 d-none d-sm-inline text-warning">
                        Stock
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </li>
            <!-- End  Menu Stock -->

            <!-- Start  Menu Report -->
            <li>
              <div class="nav-link px-0 align-middle">
                <router-link class="text-decoration-none" to="/report">
                  <div class="row">
                    <div class="col icon hover">
                      <i class="fas fa-file-alt" />
                      <span class="tooltiptext">Report</span>
                    </div>
                    <div class="col d-none d-sm-block">
                      <span class="ms-1 d-none d-sm-inline text-warning">
                        Report
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </li>
            <!-- End  Menu Report -->

            <!-- Start  Menu About -->
            <li>
              <div data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <router-link class="text-decoration-none" to="/about">
                  <div class="row">
                    <div class="col icon hover">
                      <i class="fas fa-book-open" />
                      <span class="tooltiptext">About</span>
                    </div>
                    <div class="col d-none d-sm-block">
                      <span class="ms-1 d-none d-sm-inline text-warning">
                        About
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </li>
            <!-- End  Menu About -->

            <!-- Start  Menu About -->
            <li>
              <div data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <router-link class="text-decoration-none" to="/users">
                  <div class="row">
                    <div class="col icon hover">
                      <i class="fas fa-users me-2" />
                      <span class="tooltiptext">User</span>
                    </div>
                    <div class="col d-none d-sm-block">
                      <span class="ms-1 d-none d-sm-inline text-warning"
                        >User
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </li>
            <!-- End  Menu About -->

            <!-- Start  Menu Logout -->
            <li>
              <div data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <div class="row">
                  <div class="col icon hover" @click="isLogOut">
                    <i class="fas fa-sign-out-alt me-2 logout" />
                    <span class="tooltiptext">Logout</span>
                  </div>
                  <div class="col d-none test d-sm-block">
                    <span
                      class="ms-1 d-sm-inline text-warning logout"
                      @click="isLogOut"
                    >
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <!-- End  Menu About -->
          </ul>
          <!-- End Main Sidebar -->
        </div>
      </div>
      <div class="col py-3">
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
import Content from "@/components/core/Content";
import { useStore } from "vuex";
export default {
  name: "Sidebar",
  components: {
    Content,
  },
  setup() {
    const store = useStore();
    const isLogOut = () => {
      store.dispatch({
        type: "doLogout",
      });
    };

    return { isLogOut };
  },
};
</script>

<style scoped>
.link {
  list-style-type: none;
}

.logout {
  cursor: pointer;
}

.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 0, 0, 0.476);
  color: rgb(201, 201, 201);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 999;
}

.icon {
  width: 45px;
  text-align: start;
  padding: 0px 10px;
}

@media only screen and (max-width: 400px) {
  .hover:hover .tooltiptext {
    visibility: visible;
  }
}
</style>