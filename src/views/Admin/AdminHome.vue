<template>
<div>
    <b-table  :fields="fields" :items="articles">
        <template v-slot:cell(content)="data">
            {{ data.value | subcontent}}
        </template>

        <template v-slot:cell(date)="data">
            {{ data.value | ToDate}}
        </template>

        <template v-slot:cell(id)="data">
            <b-button-group>
                <b-button @click="editArticle(data.value)">修改</b-button>
                <b-button @click="deletArticle(data.value)">刪除</b-button>
            </b-button-group>
        </template>
    </b-table>
</div>
   
</template>
<script>
import {mapState,mapActions} from "vuex"

export default {
    data(){
        return{
            fields:[
                {key:"title",label:"文章標題"},
                {key:"date",label:"上傳日期"},
                {key:"content",label:"文章內容"},
                {key:"id",label:"修改/刪除"},
            ]
        }
    },
    methods:{
        ...mapActions(['fetchArticles','delArticle']),
        editArticle:function(id){
            this.$router.push({name:"Admin-Edit",params:{id:id}})
        },
        deletArticle:function(id){
            const ensure = confirm("請問是否要繼續刪除這篇文章")
            if(ensure){
                this.delArticle(id)
            }
            console.log(id)
        }
    },
    computed:{
        ...mapState(["account","articles"])//裡面的名稱是綁定store的account
    },
    filters:{
        subcontent:(content)=>{
            return content.substring(0,80).replace(/<[^>]*>/g,"")+"..."
        },
        ToDate:timestamp =>{
            const date =new Date(timestamp)
            let Y = date.getFullYear()
            let M = date.getMonth()
            let D = date.getDate()
            let H= date.getHours()
            let min =(Array(2).join("0") + date.getMinutes()).slice(-2)
            return `${Y}/${M+1}/${D} ${H}:${min}`;        
        }
  },  
}
</script>