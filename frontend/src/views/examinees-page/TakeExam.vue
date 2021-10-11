<template>
  <div>
    <!-- Take Exam  -->
      <b-card class="card w-50 align-center" v-show="helloShow">
        <h3>Hello there!</h3>
        <p>Your participation for this test is highly appreciated. Kindly click start to proceed to the test questions</p>
        <p><em>By clicking Start button TIMER will automatically start.</em></p>
        <b-button
      id="show-btn"
      @click="start()"
      variant="danger">
      Start
      </b-button>
      </b-card>
<!-- Timer  -->
  <!-- <BaseTimer v-show="isTimer"
      :time-left="timeLeft"
    /> -->
  <!-- Test Questions  -->
  <b-card v-show="formShow">
         <b-form @submit.prevent>
        <b-form-group label="Radios using sub-components" />
      <b-form-radio-group
        id="radio-group-2"
        v-model="selected"
        name="radio-sub-component"
        required
      >
      <!-- :aria-describedby="ariaDescribedby" -->
        <b-form-radio value="choiceA">A. Choice A</b-form-radio>
        <b-form-radio value="choiceB">B. Choice B</b-form-radio>
        <b-form-radio value="choiceC">C. None of the above</b-form-radio>
        <b-form-radio value="choiceD">D. All of the above</b-form-radio>
      </b-form-radio-group>
      <b-button
        type="submit"
        variant="danger"
        @click="submit()"
        >
        Submit
      </b-button>
     </b-form>
  </b-card>
  </div>
</template>

<script>
import {
  // BFormSelect,
  // BFormSelectOption,
  BCard,
  BButton,
  BForm,
  BFormGroup,
  BFormRadio,
  BFormRadioGroup,
} from 'bootstrap-vue'
// import BaseTimer from './BaseTimer.vue'

export default {
  components: {
    // BaseTimer,
    // BFormSelect,
    // BFormSelectOption,
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormRadio,
    BFormRadioGroup,
  },
  data() {
    return {
      // isTimer: false,
      formShow: false,
      helloShow: true,
      // isShow: false,
      selected: null,
      options: [
        { value: 'A', text: 'Questionnaire 1 (from options prop)' },
        { value: 'B', text: 'Questionnaire 2 (from options prop)' },
      ],
      // BaseTimer
      // timeLimit: 20,
      // timePassed: 0,
      // timeInterval: null,
    }
  },
  methods: {
    start() {
      // this.isTimer = true
      this.formShow = true
      this.helloShow = false
    },
    submit() {
      console.log('SUBMITTED__')
    },
    // BaseTimer
    // startTimer() {
    //   this.timerInterval = setInterval(() => {
    //     this.timePassed += 1
    //   }, 1000)
    // },
  },
  // BaseTimer
  // computed: {
  //   formattedTimeLeft() {
  //     const { timeLeft } = this.timeLeft
  //     // The largest round integer less than or equal to the result of time divided being by 60.
  //     const minutes = Math.floor(timeLeft / 60)
  //     // Seconds are the remainder of the time divided by 60 (modulus operator)
  //     let seconds = timeLeft % 60
  //     // If the value of seconds is less than 10,then display seconds with a leading zero
  //     if (seconds < 10) {
  //       seconds = `0${seconds}`
  //     }
  //     // The output in MM:SS format
  //     return `${minutes}:${seconds}`
  //   },
  // },
  // BaseTimer
  // mounted() {
  //   this.startTimer()
  // },
}
</script>

<style scoped lang="scss">
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
button {
  float: right;
}
</style>
