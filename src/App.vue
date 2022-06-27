<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <message-component></message-component>
      <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
              <router-view></router-view>
              <div class="card panel-warning d-none d-sm-flex" id="reset-store-panel">
                <div class="card-header">Admin Panel (Beta)</div>
                  <div class="card-body text-center">
                    <button class="btn btn-warning">Reset</button>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </main>

    <footer class="navbar-default navbar-light" style="background-color: #fff333">
      <div class="container-fluid">
            
      </div>
    </footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './components/Header.vue';
  import MessageComponent from './components/common/MessageComponent.vue';
  export default {
    components: {
      appHeader: Header,
      MessageComponent
    },
    methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
  }
</script>

<style>
  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  footer {
    height: 40px;
    color: #fff333;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #fff333;
  }
  footer a:hover {
    color: #040404;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  }
</style>
