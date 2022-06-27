<template>
<nav class="navbar navbar-expand-sm navbar-light" role="navigation" style="background-color: #786dde">
  <div class="container">

    <router-link to="/" class="navbar-brand mr-auto">Acheter des Transformers en ligne</router-link>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTop"
        aria-controls="navbarTop"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTop" :class="{show: isNavOpen}">
      <ul class="navbar-nav mr-auto">

      </ul>
      <ul class="nav navbar-nav">
        <router-link to="/login" tag="li" v-if="!isLoggedIn" class="nav-item" active-class="active">
          <a class="nav-link">Se connecter</a>
        </router-link>
        <li v-if="isLoggedIn" class="li-pointer nav-item">
          <a @click="logout" class="nav-link">Se deconnecter {{ userEmail }}</a>
        </li>
        <router-link to="/register" tag="li" v-if="!isLoggedIn" class="nav-item" active-class="active">
          <a class="nav-link">Créer un compte</a>
        </router-link>
        <li>
          <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
            Panier <span class="badge badge-light">{{ numItems }} ({{ cartValue }} €)</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- /.container -->
</nav>
</template>

<script>
import {
  mapActions, mapGetters
} from 'vuex';
export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'cartValue', 'currentUser', 'cartItemList']),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total
      }, 0);
    },
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : ''
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>


<style scoped lange="sass">
.navbar-btn a {
  color: rgb(255, 255, 255);
}

.li-pointer {
  cursor: pointer;
}

.li-pointer:hover {
  cursor: pointer;
}
</style>
