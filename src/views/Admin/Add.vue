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
import {mapState,mapActions} from "vuex"

export default {
    data(){
        return{
            formData:{
                title:"",
                date:"",
                content:"",
            }
        }
    },

    methods:{
        ...mapActions(['addArticle']),
        resetFormData:function(){
            this.formData ={
                title:"",
                date:"",
                content:"",
            }
        },
        submitFormData:function(){
            this.formData.date =new Date().getTime();
            this.addArticle(this.formData)  
        },
    },

    computed:{
        ...mapState(["account"])//裡面的名稱是綁定store的account
    }      
}
</script>