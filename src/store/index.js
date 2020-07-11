import Vue from 'vue'
import Vuex from 'vuex'
import axios from"axios"
import _ from"lodash"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    account:"Wade",
    searchKey:""
  },
  mutations: {
    fetchArticles:(state,payload)=>{
      state.articles= payload
    },
    CSK:(state,payload)=>{
      state.searchKey = payload
    },
    addArticle:(state,payload)=>{
      state.articles=[payload,...state.articles]  
    },
  },
  actions: {
    fetchArticles:async ({commit})=>{
      const api ="https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
      const result= await axios.get(api)
      const payload = result.data.data
      commit('fetchArticles',payload)
    },
    CSK:({commit},payload)=>{
      commit('CSK',payload)
    },
    addArticle:({commit},payload)=>{
      const ID = _.random(10000)
      payload.id ="newArt"+ID
      commit("addArticle",payload)
    }
  }, 
  getters:{
    filterBySearchKey:(state)=>{
      if(state.articles.length){
        if(state.searchKey===""){
          return state.articles
        }
        else{
          return state.articles.filter(art=>art.title ===state.searchKey)
        }
      }
      
    },
  }
})
