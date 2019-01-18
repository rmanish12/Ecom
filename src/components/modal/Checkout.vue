<template>
	<div>
        <b-modal id="modal-center" centered v-model="openModal">
            <div slot="modal-header" class="w-100">
                <h3>Checkout
                    <button type="button" class="close" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </h3>
                   
            </div>
            <!-- <b-table striped hover :items="products">
            </b-table> -->
            <!-- <div v-for="product in products" :key="product.id" v-if="!isCheckoutSection">
                <p><span style = "font-weight: bold">{{ product.title }}</span> <span style = "font-style: italic"> {{ product.quantity > 0 ?  ` -  ${product.quantity} Qt. ` : ''}} </span> <span style = "font-weight: bold">{{ product.price }} &euro; per peice</span>
                    <b-btn size="sm" class="float" variant="danger" type="submit" @click="removeFromCart(product.id)">
                    X
                </b-btn>
                </p>                
            </div> -->
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
                            <td>{{ product.title }}</td>
                            <td>{{ product.quantity > 0 ?  `${product.quantity}` : ''}}</td>
                            <!-- <td><b-form-select v-model="selected" :options="quantityArray" class="mb-3" @input="onSelectQuantity(product.id)"/></td> -->
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
                <p>{{ cartEmptyLabel }}</p>
            </div>

            <div v-if="isCheckoutSection">
                <p>You bought it.</p>
            </div>

            <div slot="modal-footer" class="w-100">
                <b-btn size="sm" class="float" variant="primary" type="submit" @click="onNextBtn" v-show="products.length > 0 && !isCheckoutSection">
                    Buy
                </b-btn>

                <b-btn size="sm" class="float" variant="link" type="submit" @click="closeModal">
                    {{ closeLabel }}
                </b-btn>
            </div>
        </b-modal>
    </div>
</template>

<script>
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
            quantityArray: [1,2,3,4],
            selected: 1
		}
	},

    mounted () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 20; i++) {
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
		}
	}
}
</script>

