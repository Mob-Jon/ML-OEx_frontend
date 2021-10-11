<template>
  <div>
    <div
      v-for="questionnaire in questionnaires"
      :key="questionnaire.id">
      <!-- <b-card @click="showDetails"> -->
      <b-card v-b-toggle="'accordion-details'+ questionnaire.id" id="detailsShow">
        <!-- <b-button @click="showDetails(questionnaire.id) == !showDetails(questionnaire.id)" id="detailsShow">Show Details</b-button> -->
      <h5>{{ questionnaire.title }}</h5>
      <!-- toggle  -->
      <div :id="questionnaire.id">
      <b-collapse v-bind:id="'accordion-details'+ questionnaire.id">
      <h3>{{ questionnaire.course }}</h3>
    </b-collapse>
      </div>
    </b-card>
    </div>
  </div>
</template>

<script>
import { BCard, VBToggle, BCollapse } from 'bootstrap-vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {
    BCard,
    BCollapse,
  },
  directives: {
    'b-toggle': VBToggle,
  },
  data() {
    return {
      isShowDetails: false,
      seen: false,
    }
  },
  computed: {
    ...mapGetters({
      questionnaires: 'GET_QUESTIONNAIRE',
    }),
    ...mapState({
      // questionnaires: 'questionnaires',
    }),
  },
  async mounted() {
    await this.GET_QUESTIONNAIRES()
  },
  methods: {
    ...mapActions({
      GET_QUESTIONNAIRES: 'ACTION_GET_QUESTIONNAIRE',
    }),
    showDetails(id) {
      let counter = 0
      const show = document.getElementById(id)
      if (String(id) === show.id) {
        this.isShowDetails = String(id)
      }
      this.seen = true
      counter += 1
      console.log(String(id), show.id, counter)
      // if (show.style.visibility === 'none') {
      //   show.style.visibility === 'block'
      // } else {
      //   show.style.visibility === 'none'
      // }
      // counter += 1
      // console.log(String(id), show.id, counter)
    },
  },
}
</script>

<style scoped>

</style>
