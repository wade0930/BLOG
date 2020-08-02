<template>
  <div>
    <b-form >
        <b-form-group
            id="input-group-1"
            label="輸入標題:" 
            label-for="input-1"
        >
        <b-form-input
            id="input-1"
            v-model="formData.title"
            type="text"
            required
            placeholder="title"
        ></b-form-input>
      </b-form-group>

        <b-form-group 
            id="input-group-2" 
            label="輸入文章:" 
            label-for="input-2"
        >
        <b-form-textarea
        id="input-group-2"
        v-model="formData.content"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      </b-form-group>

        <b-button @click="submitFormData" class="mr-3 " type="submit" variant="info">送出</b-button>
        <b-button @click="resetFormData" class="ml-3" type="reset" variant="secondary">重置</b-button>
    </b-form>
    
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"

export default {
   
   mounted(){
       if(this.$route.name ==="Admin-Edit"){
            const id =this.$route.params.id
            this.mode="edit"
            this.$store.dispatch('CFI',id)
       }
   },

    data(){
        return{
            mode:"add",
            formData:{
                title:"",
                date:"",
                content:"",
            }
        }
    },

    methods:{
        ...mapActions(['addArticle','updateArticle']),
        resetFormData:function(){
            this.formData ={
                title:"",
                date:"",
                content:"",
            }
        },
        submitFormData:function(){
            this.formData.date =new Date().getTime();
            if(this.mode === "edit"){
                this.updateArticle({id:this.$route.params.id,
                newArticle:this.formData})
            }
            else{
                 this.addArticle(this.formData)  
            }
        },
    },

    computed:{
        ...mapState(["account","articleChange"]),//裡面的名稱是綁定store的account
        ...mapGetters(['filterByID']),
    },
    watch:{
        filterByID:function(){
            this.formData.title =this.filterByID.title
            this.formData.content =this.filterByID.content
        },
        articleChange:function(){
            this.$router.push({name:"Admin-Home"})
        }
    }
}
</script>