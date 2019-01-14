<template>
  <div class="container" id="app">
    <div class="row">
        <div>
            <div class="card h-100">
                <img src="/images/note8.png" class="card-img-top">
                <div class="card-body">
                    <div class="card-title">Item Name</div>
                    <div>
                        <span class="badge badge-pill badge-info">Item Price</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


<!-- card-1.vue -->

    <router-link
      class="details"
      :to="{
        path: '/product-detail',
        name: 'product-detail-component',
        params: {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'products-component',
  props: ['product'],
  
  data () {
    return {
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove from cart',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      selected: 1,
      quantityArray: []
    }
  },

  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: true
      }
      this.$store.commit('addToCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    }
  }
}
</script>



