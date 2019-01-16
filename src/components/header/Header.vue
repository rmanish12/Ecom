<template>
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">
    <router-link :to="{ path: '/', name: 'homepage-component' }" class="navbar-item" style = "color: cornsilk">
      <h3>ECommerce</h3>
    </router-link>
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav> -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" v-model="value"
			  :placeholder="placeholder"
			  @input="search(value)"/>
        <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="search(value)">Search</b-button> -->
      </b-nav-form>

      <!-- <input
			class="input is-rounded"
			type="text"
			v-model="value"
			:placeholder="placeholder"
			@keyup="search(value)"
		> -->

      <!-- <b-navbar-nav class="navbar-item shopping-cart" @click="showCheckoutModal">
        <div class="navbar-item shopping-cart">
          <span class="icon">
            <i class="fa fa-shopping-cart"></i>
          </span>
          <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
        </div>
      </b-navbar-nav> -->
      <div class="text-center" @click="showCheckoutModal">
        <b-button variant="dark">
          Cart
          <b-badge variant="light">
            {{ numProductsAdded }} <span class="sr-only"></span>
          </b-badge>
        </b-button>
      </div>

      <b-navbar-nav>
          <b-nav-item href="#" v-if="!isUserLoggedIn" @click="showSignupModal">
            {{ signupLabel }}
          </b-nav-item>
          <b-nav-item href="#" v-if="!isUserLoggedIn" @click="showLoginModal">
            {{ loginLabel }}
          </b-nav-item>
      </b-navbar-nav>

      <!-- <b-nav-item-dropdown text="Lang" right v-if="isUserLoggedIn">
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown> -->

      <b-nav-item-dropdown right v-if="isUserLoggedIn">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>Welcome {{ getUserName }}</em>
        </template>
        <b-dropdown-item href="#">
          <router-link class="navbar-item" :to="{ path: '/wishlist', name: 'wishlist-container-component' }" style = "color:black">
					  {{ wishlistLabel }}
				  </router-link>
        </b-dropdown-item>
        <b-dropdown-item href="#" @click="logout(true)" style = "color:black">{{ logoutLabel }}</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</template>

<script>
  export default {
    data () {
      return {
          value: '',
          wishlistLabel: 'Wishlist',
          logoutLabel: 'Log out',
          loginLabel: 'Log in',
          signupLabel: 'Sign up'
      }
    },
    computed: {
      placeholder () {
        return 'Search..'
      },
      isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
    },
    numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      },
		getUserName () {
			let name = this.$store.getters.getUserName;
			
			if (name === '') {
				return 'user';
			} else {
				return name;
			}
		}
	},
	methods: {
		search (value) {
      console.log('search clicked')
			if (value.length > 0) {
				this.$store.commit('setHasUserSearched', true);
        this.$store.commit('setProductTitleSearched', value);
        console.log('Inside if block')  
			} else {
				this.$store.commit('setHasUserSearched', false);
				this.$store.commit('setProductTitleSearched', '');
			}
    },
    logout (reloadPage) {
      if (reloadPage) {
				window.location.reload();
			}
      
      this.$router.push({ name: 'homepage-component' }); 
		},
		showLoginModal () {
      console.log('Login Button')
			this.$store.commit('showLoginModal', true);
		},
		showSignupModal () {
			this.$store.commit('showSignupModal', true);
    },
    showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
	}
}
</script>

