<template>
  <div class="container" id="app" style = "margin-bottom: 650px">
    <div class="row">
        <div v-for="product in productsInWishlist" :key="product.id" class="col-md-4 col-6 my-1">
            <div class="card h-100">
                <center><img :src="product.image" class="card-img-top" style = "height:50%; width: 50%; padding: 10%;"></center>
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
                            {{ product.title }}
                        </router-link>
                    </div>
                    <div>
                        <span class="badge badge-pill badge-info">${{ product.price }}</span>
                    </div>
                </div>
            </div>
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
      noProductLabel: 'Your wishlist is empty'
    }
  },

  components: {
    'products-component': ProductsComponent
  },

  computed: {
    productsInWishlist () {
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
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }
}
</script>



