<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <!-- <vuexy-logo /> -->
        <b-img :src="require('@/assets/images/logo/header-logo.png')" />
        <h2 class="brand-text text-danger ml-1">ML OEx</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
         <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
            <!-- Welcome to MLhuillier Evaluation Test! 👋 -->
            A new password will be send to your email
          </b-card-title>
          <br><br><br>
          <b-card-text class="mb-2">
            <!-- A new password will be send to your email -->
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
              <!-- email -->
              <b-form-group label="Email" label-for="login-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="data.email"
                    :state="errors.length > 0 ? false : null"
                    name="login-email"
                    placeholder="name.test@mlhuillier.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- submit button -->
              <b-button
                type="submit"
                variant="danger"
                block
                @click="validationForm"
              >
                Send
              </b-button>
              <p v-if="isError" id="isError">Incorrect Credentials</p>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable eol-last */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
// import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
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
} from 'bootstrap-vue';
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// import { mapActions } from 'vuex'
// import * as userTypes from '../store/types/users'
// import * as auth from '../store/module/auth'


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
      isError: false,
      status: '',
      data: {
        email: '',
      },
      sideImg: require('@/assets/images/pages/login-accept-task.svg'),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-accept-task.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    validationForm() {
    
      this.$refs.loginValidation.validate().then(async success => {
        if (success) {
          console.log(this.data)
          const login = await this.$store.dispatch('ResetPassword', this.data)
          console.log('LOGIN_', login)
          // const token = this.$store.getters.StateToken
          console.log(login.data.token)
          // const message = login.data.message
          // if (!token) {
          //   this.$toast({
          //   component: ToastificationContent,
          //   props: {
          //     title: `${message}`,
          //     icon: 'EditIcon',
          //     variant: 'danger',
          //   },
          // }) 
          // console.log(token)
          // } else {
          //   console.log(token)
          //   this.$router.push({ name: 'home' })
          //   console.log(login.data.message)
          // }
        }
      })
    },
    }
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>



