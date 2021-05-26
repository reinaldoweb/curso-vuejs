export default{

  state:{

    clubeName: 'Hcode Treinamentos'
  },

  getters: {
    getClubeName(state){
      return state.clubeName
    }
  },
  mutations:{
    setClubeName(state, newName){
      state.clubeName = newName;
    }
  },
  actions:{
    updateClubeName(context, value){
      context.commit('setClubeName', value)
    }
  }

}
