<template>
  <div class="container" id="app">
    <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 col-6 my-1">
            <div class="card h-100">
                <div style = "height: inherit"><center><img :src="product.image" class="card-img-top img-responsive" style = "height:60%; width: 60%; padding: 10%;"></center></div>
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
                            }"
                                >
                            <center>{{ product.title }}</center>
                        </router-link>
                    </div>
                    <div>
                        <!-- <span class="badge badge-pill badge-info">{{ product.price }} &euro;</span> -->
                        <h5><b-badge>{{ product.price }} &euro;</b-badge></h5>
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
  name: 'products-list-component',
  
  components: {
    'products-component': ProductsComponent
  },
  
  data () {
    return {
      id: '',
      noProductLabel: 'No product found',
      productsFiltered: []
    };
  },

  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.state.products;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }

};
</script>


