<template>
    <div>
  <!-- <b-btn v-b-modal.modal-center>Launch centered modal</b-btn> -->

  <!-- Modal Component -->
        <b-modal id="modal-center" centered v-model="openModal">
            <div slot="modal-header" class="w-100">
                <h3>Sign Up
                    <button type="button" class="close" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </h3>
                   
            </div>
            <b-form @submit="checkForm" action="#" method="post">
                <b-form-group id="InputGroup2"
                    label="Name:"
                    label-for="Input1">
                    <b-form-input id="Input1"
                        type="text"                      
                        required
                        v-model="name"
                        @keyup="checkNameOnKeyUp(name)"
                        placeholder="Name">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="InputGroup2"
                    label="Email:"
                    label-for="Input2">
                    <b-form-input id="Input2"
                        type="email"                      
                        required
                        v-model="email"
                        @keyup="checkEmailOnKeyUp(email)"
                        placeholder="Email">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="InputGroup2"
                    label="Password:"
                    label-for="Input3">
                    <b-form-input id="Input3"
                        type="password"                      
                        required
                        v-model="password"
                        @keyup="checkPasswordOnKeyUp(password)"
                        placeholder="Password">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="InputGroup2"
                    label="Repeat Password:"
                    label-for="Input4">
                    <b-form-input id="Input4"
                        type="password"                      
                        required
                        v-model="repeatPassword"
                        @keyup="checkRepeatPasswordOnKeyUp(repeatPassword)"
                        placeholder="Repeat Password">
                    </b-form-input>
                </b-form-group>

                <div slot="modal-footer" class="w-100">
                    <b-btn size="sm" class="float" variant="primary" type="submit">
                    Sign Up
                    </b-btn>
                    <b-btn size="sm" class="float" variant="primary" @click="closeModal">
                    Close
                    </b-btn>
                </div>
            </b-form>

            <div slot="modal-footer" class="w-100">
            
            </div>
        </b-modal>

        <b-modal id="modal-center" centered title="Sign Up" v-model="isUserSignedUp">
            Welcome {{ name }}
        </b-modal>
    </div>

</template>

<script>
    export default {
        data () {
    return {
      modalTitle: 'Sign up',
      modalTitleRegistered: 'Welcome ',
      primaryBtnLabel: 'Sign up',
      btnRegisteredLabel: 'Close',
      namePlaceholder: 'Name*',
      emailPlaceholder: 'Email*',
      passwordPlaceholder: 'Password*',
      repeatPasswordPlaceholder: 'Repeat Password*',
      notEqualErrorLabel: 'Passwords must be equal',
      passwordErrorLabel: 'Password required',
      nameErrorLabel: 'Name required',
      emailErrorLabel: 'Email required',
      emailNotValidLabel: 'Valid email required',
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      highlightNameWithError: null,
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      highlightRepeatPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserSignedUp () {
      return this.$store.getters.isUserSignedUp;
    },
    openModal () {
      if (this.$store.getters.isSignupModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    closeModal () {
      this.$store.commit('showSignupModal', false);
    },
    checkForm (e) {
      e.preventDefault();

      if (this.name && this.email && this.password && this.repeatPassword) {
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        this.isFormSuccess = true;
        this.$store.commit('setUserName', this.name);
        this.$store.commit('isUserSignedUp', this.isFormSuccess);
        this.$store.commit('isUserLoggedIn', this.isFormSuccess);
      }

      if (!this.name) {
        this.highlightNameWithError = true;
      } else {
        this.highlightNameWithError = false;
      }

      if (!this.email) {
        this.highlightEmailWithError = true;

        if (this.email && !isValidEmail(this.email)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      } else {
        this.highlightEmailWithError = false;
      }

      if (!this.password) {
        this.highlightPasswordWithError = true;
      } else {
        this.highlightPasswordWithError = false;
      }

      if (!this.repeatPassword) {
        this.highlightRepeatPasswordWithError = true;
      } else {
        this.highlightRepeatPasswordWithError = false;
      }
    },
    checkNameOnKeyUp (nameValue) {
      if (nameValue) {
        this.highlightNameWithError = false;
      } else {
        this.highlightNameWithError = true;
      }
    },
    checkEmailOnKeyUp (emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail (emailValue)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp (passwordValue) {
      if (passwordValue) {
        this.highlightPasswordWithError = false;

        if (this.repeatPassword === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightPasswordWithError = true;
      }
    },
    checkRepeatPasswordOnKeyUp (repeatPasswordValue) {
      if (repeatPasswordValue) {
        if (repeatPasswordValue === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightRepeatPasswordWithError = true;
      }
    }
  }
    }
</script>

