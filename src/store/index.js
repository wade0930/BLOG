import Vue from 'vue'
import Vuex from 'vuex'
import axios from"axios"
import _ from"lodash"
import {db} from "./firebase.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    account:"Wade",
    searchKey:"",
    focusId:"",
    articleChange:false,
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
      state.articleChange = !state.articleChange
    },
    CFI:(state,payload) =>{
      state.focusId = payload
    },
    updateArticle:(state,{id,newArticle})=>{
      const index = state.articles.map(art => art.id).indexOf(id)
      state.articles[index]=newArticle
      state.articleChange = !state.articleChange
    },
    delArticle:(state,payload)=>{
      const index = state.articles.map(art => art.id).indexOf(payload)
      state.articles.splice(index,1)
    }
  },
  actions: {
    fetchArticles:async ({commit})=>{
      const ref = db.collection("Articles")
      const result = await ref.get()
      var payload=[]

      result.forEach(art =>{
        payload.push({id:art.id,...art.data()})
      })
      commit('fetchArticles',payload)
      // const api ="https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
      // const result= await axios.get(api)
      // const payload = result.data.data
      // commit('fetchArticles',payload)
      // console.log(db)
    },
    CSK:({commit},payload)=>{
      commit('CSK',payload)
    },
    addArticle: async({commit},payload)=>{
      const ref =db.collection("Articles")
      const addRef = await ref.add(payload)
      commit("addArticle",{id:addRef.id,...payload})
      // const ID = _.random(10000)
      // payload.id ="newArt"+ID
      // commit("addArticle",payload)
    },
    CFI:({commit},payload) =>{
      commit('CFI',payload)
    },
    updateArticle:async({commit},payload)=>{
      const docRef = db.collection("Articles").doc(payload.id)
      await docRef.update(payload.newArticle)
      commit('updateArticle',payload)
    },
    delArticle:async({commit},payload) =>{
      const docRef = db.collection("Articles").doc(payload)
      await docRef.delete()
      commit('delArticle',payload)
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
    filterByID:(state)=>{
      if(state.articles.length){
       return state.articles.filter(art => art.id === state.focusId)[0]
      }

    },
  }
})
