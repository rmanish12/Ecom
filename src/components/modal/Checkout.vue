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
            <div v-for="product in products" :key="product.id" v-if="!isCheckoutSection">
                <!-- <button class="is-pulled-right button is-info is-inverted" @click="removeFromCart(product.id)">{{ removeLabel }}</button> -->
                <!-- <b-btn size="sm" class="delete" variant="primary" type="submit">
                    Login
                </b-btn> -->
                <p><span style = "font-weight: bold">{{ product.title }}</span> <span style = "font-style: italic"> {{ product.quantity > 0 ?  ` -  ${product.quantity} Qt. ` : ''}} </span> <span style = "font-weight: bold">{{ product.price }} &euro; per peice</span>
                    <b-btn size="sm" class="float" variant="danger" type="submit" @click="removeFromCart(product.id)">
                    X
                </b-btn>
                </p>
                
            </div>

            <div v-if="products.length === 0">
                <p>{{ cartEmptyLabel }}</p>
            </div>

            <div v-if="isCheckoutSection">
                <p>You bought it.</p>
            </div>

            <div slot="modal-footer" class="w-100">
                <b-btn size="sm" class="float" variant="primary" type="submit" @click="onNextBtn" v-show="products.length > 0 && !isCheckoutSection">
                    {{ buyLabel }}
                </b-btn>

                <b-btn size="sm" class="float" variant="primary" type="submit" @click="closeModal">
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
			isCheckoutSection: false
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
				return `Buy ${totalProducts} ${productLabel} at ${finalPrice}€`;
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

