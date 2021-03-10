<template>
  
  <input type="text" :value="clubName" 
  @keyup="updateClubName($event.target.value)" 
  class="form-control" placeholder="Digite seu clube">

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  computed: mapGetters({
   clubName: 'getclubName'
    }),
  methods: mapActions(['updateClubName'])
  
}
</script>

<style scoped>

</style>