<template>
  
  <input type="text" :value="clubeName" 
  @keyup="updateClubeName($event.target.value)" 
  class="form-control" placeholder="Digite seu clube">

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  computed: mapGetters({
   clubName: 'getclubName'
    }),
  methods: mapActions(['updateClubeName'])
  
}
</script>

<style scoped>

</style>