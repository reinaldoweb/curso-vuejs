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
    setChampionchip(state, newValue) {
      state.championship = newValue;
    }
  },
  actions: {
    changeChampionship(context, value) {
      context.commit('setChampionsip', value);
    }
  }



}