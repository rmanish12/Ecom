<template>
    <div>
        <b-modal id="modal-center" centered v-model="welcome">
            <div slot="modal-header" class="w-100">
                <h3>Welcome
                    <button type="button" class="close" aria-label="Close" @click="closeWelcomeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </h3>
            </div>
            
            <p class="heading">Now you are logged in</p>
            <p class="title">Please proceed with your purchase. Happy Shopping:)</p>

            <div slot="modal-footer" class="w-100">
            
            </div>
        </b-modal>

        <b-modal centered v-model="openModal" id = "modal-center" no-close-on-backdrop no-close-on-esc>
            <div slot="modal-header" class="w-100" title="Login">
                <h3>Login
                    <button type="button" class="close" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </h3>
                   
            </div>
            <b-form @submit="checkForm" action="#" method="post">
                <b-form-group id="InputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
                    <b-form-input id="exampleInput1"
                        type="email"                      
                        required
                        v-model="email"
                        @input="checkEmailOnKeyUp(email)"
                        placeholder="Enter email">
                    </b-form-input>
                </b-form-group>
                <span v-if="highlightEmailWithError !== null" class="icon is-small is-right">
                    <!-- <i :class="[highlightEmailWithError ? 'fas fa-exclamation-circle' : 'fas fa-check']">dsd</i> -->
                    <span v-if = "highlightEmailWithError" class = "fas fa-exclamation-circle" style = "color: red">Invalid Email</span>
                  </span>
                <b-form-group id="InputGroup1"
                    label="Password:"
                    label-for="Input1">
                    <b-form-input id="Input1"
                        type="password"                      
                        required
                        v-model="password"
                        @input="checkPasswordOnKeyUp(password)"
                        placeholder="Enter Password">
                    </b-form-input>
                </b-form-group>

                <span v-if="highlightPasswordWithError !== null" class="icon is-small is-right">
                  <!-- <i :class="[highlightPasswordWithError ? 'fas fa-exclamation-circle' : 'fas fa-check']"></i> -->
                  <span v-if = "highlightPasswordWithError" class = "fas fa-exclamation-circle" style = "color: red">Invalid Password</span>
                </span>

                <div slot="modal-footer" class="w-100">
                    <b-btn size="sm" class="float" variant="success" type="submit" style = "width: 100%">
                    Login
                    </b-btn>
                    <hr/>
                    <b-btn size="sm" class="float" variant="primary" style = "background-color:#3b5998;width: 100%">
                        <!-- <span class="icon icons-login_facebook_large"></span> -->
                        <img src = "../../../static/images/fb.png" style = "height: 5%; width: 5%"/>
                        <span class="label signup_only">Continue with Facebook</span>
                    </b-btn>
                    <hr/>
                    <b-btn size="sm" class="float" variant="primary" style = "background-color:white; color: darkgray; width: 100%">
                        <!-- <span class="icon icons-login_facebook_large"></span> -->
                        <img src = "../../../static/images/google.png" style = "height: 5%; width: 5%"/>
                        <span class="label signup_only">Continue with Google</span>
                    </b-btn>
                    <!-- <b-btn size="sm" class="float" variant="link" @click="closeModal">
                    Close
                    </b-btn> -->
                </div>
            </b-form>

            <div slot="modal-footer" class="w-100">
            
            </div>
        </b-modal>
    </div>

</template>

<script>
import { isValidEmail } from '../../validators';

export default {
  name: 'login-component',

  data () {
    return {
      modalTitle: 'Log in',
      modalTitleLoggedIn: 'Welcome!',
      primaryBtnLabel: 'Log in',
      emailRequiredLabel: 'Email required',
      passwordRequiredLabel: 'Password required',
      emailNotValidLabel: 'Valid email required',
      btnLoggedInLabel: 'Close',
      emailPlaceholder: 'Your email',
      email: '',
      password: '',
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      isFormSuccess: false,
      welcome: false
    };
  },

  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn;
    },
    openModal () {
      if (this.$store.getters.isLoginModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    closeModal () {
        console.log('X button')
      this.$store.commit('showLoginModal', false);
    },
    closeWelcomeModal () {
        this.welcome = false
    },
    checkForm (e) {
      e.preventDefault();
      console.log('Form submitted')
      this.welcome = true

      if (this.email && this.password) {
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        this.isFormSuccess = true;
        this.$store.commit('isUserLoggedIn', this.isFormSuccess);
        this.$store.commit('showLoginModal', false);
      }

      if (!this.email) {
        this.highlightEmailWithError = true;

        if (this.email && !isValidEmail(this.email)) {
          this.emailRequiredLabel = this.emailNotValidLabel;
        }
      } else {
        this.highlightEmailWithError = false;
      }

      if (!this.password) {
        this.highlightPasswordWithError = true;
      } else {
        this.highlightPasswordWithError = false;
      }
    },
    checkEmailOnKeyUp (emailValue) {
        console.log('Check email')
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail(emailValue)) {
          this.emailRequiredLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp (passwordValue) {
      if (passwordValue) {
        this.highlightPasswordWithError = false;
      } else {
        this.highlightPasswordWithError = true;
      }
    }
  }
};
</script>



