<template>

    <div class="container" id="app" style = "margin-bottom: 35px">
    <div class="row">
        
        <b-modal id="modal-center" centered title="Checkout" v-model="isCheckoutSection">
            You bought it.

            <div slot="modal-footer" class="w-100">
                <b-btn size="sm" class="float" variant="primary" type="submit" @click="closeModal">
                    {{ closeLabel }}
                </b-btn>
            </div>
        </b-modal>
            
        <div class="col-lg-9 col-md-8 col-12 my-1">
            <div class="card h-100">
                <center><img :src="product.image" class="card-img-top image-responsive" style = "height:50%;width:50%"></center>
                <div class="card-body">
                    <!-- <b-card class="right">
                        This is some text within the default card block.
                    </b-card> -->
                    <div class="card-title" style = "font-weight: bold">
                        {{ product.title }}
                    </div>
                    <div>
                        <h2><b-badge>${{ product.price }}</b-badge></h2>
                    </div>
                    <div>
                        <i v-if="product.ratings === 1" class="fa fa-star"></i>
                        <i v-if="product.ratings === 2" class="fa fa-star"></i>
                        <i v-if="product.ratings === 2" class="fa fa-star"></i>
                        <i v-if="product.ratings === 3" class="fa fa-star"></i>
                        <i v-if="product.ratings === 3" class="fa fa-star"></i>
                        <i v-if="product.ratings === 3" class="fa fa-star"></i>
                        <i v-if="product.ratings === 4" class="fa fa-star"></i>
                        <i v-if="product.ratings === 4" class="fa fa-star"></i>
                        <i v-if="product.ratings === 4" class="fa fa-star"></i>
                        <i v-if="product.ratings === 4" class="fa fa-star"></i>
                        <i v-if="product.ratings === 5" class="fa fa-star"></i>
                        <i v-if="product.ratings === 5" class="fa fa-star"></i>
                        <i v-if="product.ratings === 5" class="fa fa-star"></i>
                        <i v-if="product.ratings === 5" class="fa fa-star"></i>
                        <i v-if="product.ratings === 5" class="fa fa-star"></i>
                    </div>
                    <div>
                        <!-- <p>{{ product.description }}</p> -->
                        <ul v-for = "desc in product.description" :key = "desc">
                            <li>{{desc}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-4 col-12 my-1" style = "height:10%">
            <div class="card h-100">
                <div class="card-body">
                    <div class="select is-rounded is-small">
                        <b-form-select v-model="selected" :options="quantityArray" class="mb-3" @input="onSelectQuantity(product.id)"/>
                    </div>
                <div>
                    <b-btn size="md" class="float" variant="secondary" type="submit" v-if="!isAddedBtn"
                        @click="saveToFavorite(product.id)"
                        v-show="!product.isFavourite"
                        style = "width:100%">
                        Add to Wishlist
                    </b-btn>
                </div>
                <hr/>
                <div>
                    <b-btn size="md" class="float" variant="primary" style = "width:100%" type="submit" v-if="!product.isAddedToCart" @click="addToCart(product.id)">
                    Add To Cart
                    </b-btn>
                    <hr/>
                    <b-btn size="md" class="float" variant="success" style = "width:100%" type="submit" v-if="!product.isAddedToCart" @click="onNextBtn">
                    Buy Now
                    </b-btn>

                    <b-btn size="md" class="float" variant="danger" type="submit" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">
                    Remove From Cart
                    </b-btn>
                </div>
                </div>
            </div>
        </div>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'product-detail-component',
  
  data () {
    return {
      addToCartLabel: 'Add to cart',
      removeFromCartLabel: 'Remove from cart',
      product: {},
      selected: 1,
      quantityArray: [],
      closeLabel: 'Close',
      isCheckoutSection: false
    };
  },

  mounted () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }
  },

  computed: {
      openModal () {
		if (this.$store.getters.isCheckoutModalOpen) {
					return true;
				} else {
					return false;
				}	
	    },
    isAddedBtn () {
      return this.product.isAddedBtn;
    },
    isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		}
  },

  methods: {
    closeModal () {
        console.log('Close button')
        this.isCheckoutSection = false;
    },
    addToCart (id) {
      let data = {
        id: id,
        status: true
      }

      this.$store.commit('addToCart', id);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    onSelectQuantity (id) {
        console.log('Clicked', id)
        console.log(this.selected)
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    },
    saveToFavorite (id) {
      console.log('Clicked')
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    onNextBtn () {
        if (this.isUserLoggedIn) {
            this.isCheckoutSection = true;
        } else {
            this.$store.commit('showCheckoutModal', false);
            this.$store.commit('showLoginModal', true);
        }
    }
  }
};
</script>
