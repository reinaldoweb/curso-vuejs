<template>
  <div id="app">
    <HcodeHeader 
    @select-championship="changeChampionship"
    @change-component="changeComponent"
     />

    <HcodeSection 
    :championship="championship" 
    :current-component="currentSectionComponent"
    />

    <HcodeFooter />
  </div>
</template>

<script>
import HcodeFooter from  './components/HcodeFooter'
import HcodeHeader from  './components/HcodeHeader'
import HcodeSection from './components/HcodeSection'
import { mapMutations } from 'vuex'

export default {
  name: "App",
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },

  data() {
    return {
      currentSectionComponent: 'HcodeSectionBanner'
    }
  },
  methods:{
    ...mapMutations({
      changeChampionship: 'setChampionship'
    }),

    changeComponent(value){
      
      let component;
      switch(value){
        case 'home':
          default:
            component = 'HcodeSectionBanner'
            break;

        case 'news':
          component="HcodeSectionNews"
          break;
      }

      this.currentSectionComponent = component;

    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
