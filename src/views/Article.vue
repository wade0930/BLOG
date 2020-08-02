<template>
   <article>
       <h2>{{filterByID[0].title}}</h2>
       <h5>{{filterByID[0].date}}</h5>
       <p v-html="filterByID[0].content"></p>
   </article>
</template>


<script>
import axios from 'axios'
import {mapGetters} from "vuex"
export default {
    mounted(){
        const id =this.$route.params.id
        this.artId=id
        this.$store.dispatch('CFI',id)
    //     const api ="https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
    //     axios.get(api).then(result=>{
    //     this.articles = result.data.data
    // })
    },
    data(){
        return{
            artId:null,
            articles:[],
        }
    },
    computed:{
        ...mapGetters(['filterByID'])
        // filterById:function(){
        //     return this.articles.filter(art => art.id ===this.artId)
        // }
    }
}
</script>

<style lang="scss" scoped>
    article{
        display: block;
        
        width: auto;
        height: 880px;
        box-sizing: border-box;
        padding:2rem;
        position:relative;
        top:3.5rem;
        text-align: left;

        font-family: Roboto,Helvetica Neue,Helvetica,Arial,PingFang TC,黑體-繁,Heiti TC,蘋果儷中黑,Apple LiGothic Medium,微軟正黑體,Microsoft JhengHei,sans-serif;
        font-size: 15px;
        h2{
            text-align: center;
        }
        h5{
            margin: 10px;
            text-align: center;
        }
}
</style>