<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <!-- <vuexy-logo /> -->
        <b-img :src="require('@/assets/images/logo/header-logo.png')" />
        <h2 class="brand-text text-danger ml-1">
          ML OEx
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            ML OEx Mlhuillier Online Exam
          </b-card-title>
          <b-card-text class="mb-2">
            Please fill in input fields
          </b-card-text>

          <!-- form -->
          <validation-observer ref="registerValidation">
            <b-form
              class="auth-register-form mt-2"
              @submit.prevent="validationForm"
            >
              <!-- name -->
              <b-form-group
                label="Name"
                label-for="name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Name"
                  rules="required"
                >
                  <b-form-input
                    id="name"
                    v-model="register.username"
                    :state="errors.length > 0 ? false:null"
                    name="name"
                    placeholder="Full Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- email -->
              <b-form-group
                label="Email"
                label-for="email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="email"
                    v-model="register.email"
                    :state="errors.length > 0 ? false:null"
                    name="email"
                    placeholder="name.test@mlhuillier.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group
                label="Password"
                label-for="password"
              >
                <validation-provider
                  #default="{ errors }"
                  rules="required"
                  name="password"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="password"
                      v-model="register.password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- confirm password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="confirmPassword">Confirm Password</label>
                  <!-- <b-link :to="{name:'auth-forgot-password-v2'}">
                    <small>Forgot Password?</small>
                  </b-link> -->
                </div>
                <validation-provider
                  #default="{ errors }"
                  rules="required|confirmPassword:@password"
                  name="confirmPassword"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="confirmPassword"
                      v-model="register.password_confirmation"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="confirmPassword"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="danger"
                block
              >
              Register
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <span>Already have an account? </span>
            <b-link :to="{name:'login'}">
              <span>&nbsp;Sign in</span>
              <!-- <router-link to="/registration">Register</router-link> -->
            </b-link>
          </b-card-text>
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
// import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BCardText, BCardTitle, BImg, BForm, BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
// import axios from '../libs/axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// import { mapActions } from 'vuex'

extend('confirmPassword', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match',
})

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    // VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      register: {
        status: '',
        username: '',
        password: '',
        email: '',
        password_confirmation: '',
      },
      sideImg: require('@/assets/images/pages/register-shared-goals.svg'),
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-shared-goals.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    validationForm() {
      console.log('VUE COMPONENT', this.register)
      this.$refs.registerValidation.validate().then(async success => {
        console.log(success)
        if (success) {
          this.$router.push({ name: 'user-login' })
          const register = await this.$store.dispatch('Register', this.register)
          console.log('Response Component', register)
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
          setTimeout(() => {
            this.$router.push({ name: 'user-login' })
          }, 2000)
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
