<template>
     <div>
        <h4>最新文章</h4>
        <hr>
        <ul>
            <li 
            v-for="(art,index) in prop_articles" 
            :key="index"
            @click="routeToArticle(art.id)"
            >
            {{art.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        prop_articles:Array
    },
    methods:{
        routeToArticle:function(id){
            this.$router.push({name:"Article",params:{id:id}})
        },
    }
}
</script>


<style lang="scss" scoped>
    div{
        width:25vw;
        position: fixed;
        top:4.5rem;
        right:1rem;
        background-color: #dddddd;
        border-radius: 16px;
        height:100%;
        padding-top:1rem;
        padding-right:0.5rem;

        h4{
            width:100%;
            display:inline-block;
            line-height:1.5rem;
            text-align: left;
            text-indent: 1rem;
        }
        ul{
            cursor: pointer;
        }
       
        
    }
</style>