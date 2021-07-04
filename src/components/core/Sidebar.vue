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
              d-none d-sm-inline d-flex
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
                    <div class="col icon"><i class="fas fa-warehouse" /></div>
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
                    <div class="col icon"><i class="fas fa-file-alt" /></div>
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
                    <div class="col icon"><i class="fas fa-book-open" /></div>
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
                    <div class="col icon"><i class="fas fa-users me-2" /></div>
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
                  <div class="col icon" @click="isLogOut">
                    <i class="fas fa-sign-out-alt me-2 logout"/>
                  </div>
                  <div class="col d-none d-sm-block">
                    <span
                      class="ms-1 d-none d-sm-inline text-warning logout"
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

.icon {
  width: 45px;
  text-align: start;
  padding: 0px 10px;
}
</style>