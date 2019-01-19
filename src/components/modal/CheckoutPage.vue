<template>
    <div>
        <div>
            <div v-if="products.length !== 0 & !isCheckoutSection">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="product in products" :key="product.id">
                            <!-- <td><span @click="goToProduct(product.id)">{{ product.title }}</span></td> -->
                            <td><router-link
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
    >{{ product.title }}</router-link></td>
                            <!-- <td>{{ product.quantity > 0 ?  `${product.quantity}` : ''}}</td> -->
                            <td><b-form-select v-model="selected" :options="quantityArray" class="mb-3" @input="onSelectQuantity(product.id)"/></td>
                            <td>{{ product.price }} &euro;</td>
                            <td>
                                <b-btn size="sm" class="float" variant="danger" type="submit" @click="removeFromCart(product.id)">
                                    X
                                </b-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <hr/>

                <div style="text-align: right; font-weight: bold;">Total: <span v-show="products.length > 0 && !isCheckoutSection">{{ buyLabel }}</span></div>
            </div>

            <div v-if="products.length === 0">
                <center><h3><p>{{ cartEmptyLabel }}</p></h3></center>
            </div>

            <div v-if="isCheckoutSection">
                <center><h3>You bought it.</h3></center>
            </div>

            <center><b-btn size="sm" class="float" variant="success" type="submit" @click="onNextBtn" v-show="products.length > 0 && !isCheckoutSection" style = "width: 40%; background-color: darkcyan">
                    Buy
                </b-btn></center>
            
        </div>
    </div>
</template>

<script>
import ProductsComponent from '../Products';

export default {
	name: 'checkout-component',
    
	data () {
		return {
			modalTitle: 'Checkout',
			removeLabel: 'Remove from cart',
			cartEmptyLabel: 'Your cart is empty',
			closeLabel: 'Close',
            isCheckoutSection: false,
            fields: ['Product', 'Quantity', 'Price', ''],
            quantityArray: [1,2,3,4,5,6,7,8,9,10],
            selected: 1
		}
    },
    
    components: {
    'products-component': ProductsComponent
  },

    mounted () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }
  },

	computed: {
			products () {
				return this.$store.getters.productsAdded;
			},
			openModal () {
				if (this.$store.getters.isCheckoutModalOpen) {
					return true;
				} else {
					return false;
				}
			},
			buyLabel () {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
						productLabel = '',
						finalPrice = '',
						quantity = 1;

				productsAdded.forEach(product => {

					if (product.quantity >= 1) {
						quantity = product.quantity;
					}

					pricesArray.push((product.price * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
				
				if (totalProducts > 1) { // set plural or singular
					productLabel = 'products';
				} else {
					productLabel = 'product';
				}
				// return `Buy ${totalProducts} ${productLabel} at ${finalPrice}€`;
				return `${finalPrice}€`;
		},
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		}
	},

	methods: {
		closeModal () {
            this.$store.commit('showCheckoutModal', false);
            this.isCheckoutSection = false;
		},
		removeFromCart (id) {
			let data = {
					id: id,
					status: false
			}
			this.$store.commit('removeFromCart', id);
			this.$store.commit('setAddedBtn', data);
		},
		onNextBtn () {
			if (this.isUserLoggedIn) {
				this.isCheckoutSection = true;
			} else {
				this.$store.commit('showCheckoutModal', false);
				this.$store.commit('showLoginModal', true);
			}
		},
		onPrevBtn () {
			this.isCheckoutSection = false;
		},
        onSelectQuantity (id) {
            console.log('Clicked', id)
            console.log(this.selected)
            let data = {
                id: id,
                quantity: this.selected
            }
            this.$store.commit('quantity', data);
            this.selected = 1
        },
        goToProduct (id) {
            this.$store.commit('showCheckoutModal', false);
            this.isCheckoutSection = false;
            
            var path = window.location.pathname
            console.log(path)
            location.reload()
        }
	}
}
</script>

