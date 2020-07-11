<template>
  <div class="home">
    <section class="home-articles">
      <article v-for="(art,index) in filterBySearchKey" :key="index">
        <h3 @click="routerToArticle(art.id)">{{art.title}}</h3>
        <i>{{art.date}}</i>
        <span > {{art.content | subcontent}} </span>
      </article>
    </section>

    <section class="home-side-bar"> 
      <SideBar :prop_articles="articles"></SideBar>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import SideBar from "../components/SideBar"
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState(["articles"]),
    ...mapGetters(['filterBySearchKey'])
  },
  methods:{
    routerToArticle:function(id){
      this.$router.push({name:"Article",params:{id:id}})
    }
  },
  filters:{
    subcontent:(content)=>{
      return content.substring(0,150).replace(/<[^>]*>/g,"")
    }
  },
  components:{
    SideBar,
  }
}
</script>

<style lang="scss" scoped>
  article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    height: 200px;
    width: 70vw;

    margin: 20px;
    padding-left: 5px;

    background-color: #dddddd;
    border-radius: 16px;
  }
  i{
    color: #cccccc;
  }
</style>
