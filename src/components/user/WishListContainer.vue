<template>
  <div class = "container">
    <div class = "row">
        <div v-for="product in productsInWishlist" :key="product.id" class="col-md-4 col-6 my-1" v-if="productsInWishlist.length !== 0">
            <div class="card h-100">
                <div style = "height: inherit"><center><img :src="product.image" class="card-img-top" style = "height:60%; width: 60%; padding: 10%;"></center></div>
                <div class="card-body">
                    <div class="card-title">
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
                            }" >
                            <center>{{ product.title }}</center>
                        </router-link>
                    </div>
                    <div>
                        <center><h5><b-badge>{{ product.price }} &euro;</b-badge></h5></center>
                        <center><b-btn size="sm" class="float" variant="link" type="submit" @click="removeFromFavourite(product.id)" style = "color: red">
                            Remove From Wishlist
                        </b-btn></center>
                    </div>
                </div>
            </div>
            
            

        </div>
        <div v-if="productsInWishlist.length === 0">
                <center><h4>Your Wishlist is empty.</h4></center>
            </div>
    </div>     
  </div>
</template>

<script>
import ProductsComponent from '../Products';
import { getByTitle } from '../../filters';

export default {
  name: 'wishlist-container-component',
  data () {
    return {
      pageTitle: 'Your Wishlist',
      noProductLabel: 'Your wishlist is empty',
      removeFromFavouriteLabel: 'Remove from favourite'
    }
  },

  components: {
    'products-component': ProductsComponent
  },

  computed: {
    productsInWishlist () {
      console.log('product in wishlist')
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.getters.productsAddedToFavourite;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.getters.productsAddedToFavourite,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      console.log('getProduct')
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    },
    removeFromFavourite (id) {
    console.log('Remove')
      this.$store.commit('removeFromFavourite', id);
    }
  }
}
</script>



