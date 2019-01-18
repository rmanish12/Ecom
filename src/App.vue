<template>
  <div class="root">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
    <login-modal-component></login-modal-component>
    <registration-modal-component></registration-modal-component>
    <checkout-modal-component></checkout-modal-component>
  </div>
</template>

<script>
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer';
import LoginModal from './components/modal/Login';
import RegistrationModal from './components/modal/Registration';
import CheckoutModal from './components/modal/Checkout';

export default {
  name: 'app',
  components: {
    'header-component': Header,
    'footer-component': Footer,
    'login-modal-component': LoginModal,
    'registration-modal-component': RegistrationModal,
    'checkout-modal-component': CheckoutModal
  }
};
</script>

<style scoped>
  .root{
    min-height: 100vh;
    background-color: aliceblue
  }
</style>
