export default {

  state: {
    championship: 'Campeonato Brasileiro',

  },
  getters: {
    getChampionship(state) {
      return state.championship
    }
  },
  mutations: {
    setChampionship(state, newValue) {
      state.championship = newValue;
    },
    setClubeName(state, newName){
      state.ClubeName = newName;
    }
  },

  actions: {
    changeChampionship(context, value) {
      console.log(value);
      context.commit('setChampionship', value);
    },

    updateClubeName(context, value){
      context.commit('setClubeName', value);
    }
  }



}