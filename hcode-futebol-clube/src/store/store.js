import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    championship: 'Campeonato Brasileiro',
    ClubName: 'Hcode Treinamentos',
    news: [
      {
        id: 1,
        title: "Começam os treinos para a nova temporada",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi molestiae tenetur excepturi at accusantium laborum cupiditate reprehenderit quidem optio id! Doloremque enim ratione voluptate voluptas voluptatum nulla reiciendis deserunt commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore ipsum excepturi sit saepe voluptates reiciendis quis officia, repellat quas. Libero vero maiores officiis. Odio incidunt qui enim repellat nulla.",
        date: "2021-01-02",
        img: "news1.jpg",
        imgInfo: "Noticia 1"
      },
      {
        id: 2,
        title: "A inauguração do novo estadio",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi molestiae tenetur excepturi at accusantium laborum cupiditate reprehenderit quidem optio id! Doloremque enim ratione voluptate voluptas voluptatum nulla reiciendis deserunt commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore ipsum excepturi sit saepe voluptates reiciendis quis officia, repellat quas. Libero vero maiores officiis. Odio incidunt qui enim repellat nulla.</p>",
        date: "2-01-2021",
        img: "news2.jpg",
        imgInfo: "Noticia 2"
      },
      {
        id: 3,
        title: "O primeiro jogo do ano",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi molestiae tenetur excepturi at accusantium laborum cupiditate reprehenderit quidem optio id! Doloremque enim ratione voluptate voluptas voluptatum nulla reiciendis deserunt commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore ipsum excepturi sit saepe voluptates reiciendis quis officia, repellat quas. Libero vero maiores officiis. Odio incidunt qui enim repellat nulla.",
        date: "8-01-2021",
        img: "news3.jpg",
        imgInfo: "Noticia 3"
      }
    ]

  },

  getters: {
    getChampionship(state) {
      return state.championship
    },
    getClubName(state){
      return state.clubName
    },
    getNews(state){
      return state.news;
    }

  },
  mutations:{
    setChampionchip(state, newValue){
      state.championship = newValue;
    }
  }



})