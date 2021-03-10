
<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <h3>Você está vendo notícia do: {{ championship }}</h3>
      </div>
    </div>

    <component :is="currentComponent"></component>

    <div class="container">
      <div class="row my-club mt-5">
        <div class="col-6">Seu clube é: {{ clubName }}</div>
        <div class="col-6">
          <h2><HcodeInput v-model="myClub" /></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HcodeSectionBanner from "./HcodeSectionBanner";
import HcodeInput from "./HcodeInput";
import { mapState } from "vuex";

export default {
  components: {
    HcodeSectionBanner,
    HcodeSectionNews: () => import("./HcodeSectionNews"), //Assync Component
    HcodeInput,
  },
  data() {
    return {
    }
  },

  props: {
    currentComponent: String,
  },
  computed: {
    ...mapState(['championship']),
    ...mapState({
      myClub: 'clubName',
      })
  }
  }
</script>

<style scoped>
</style>