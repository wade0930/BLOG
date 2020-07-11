<template>
  <div>
    <b-form >
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
        <b-form-input class="w-25 p-3 mb-3 mx-auto text-dark"
        id="input-1"
        v-model="form.account"
        type="email"
        required
        placeholder="輸入帳號"
        ></b-form-input>

        <b-form-input class="w-25 p-3 mb-3 mx-auto text-dark"
        id="input-2"
        v-model="form.password"
        type="password"
        required
        placeholder="輸入密碼"
        ></b-form-input>

        
        <b-button @click="routeToAdmin" class="mr-3 " type="submit" variant="secondary">登入</b-button>
        <b-button @click="routeToRegister" class="ml-3" type="reset" variant="secondary">註冊</b-button>

      </b-form-group>

      <!-- <b-form-group 
        id="input-group-2" 
        label="會員密碼:" 
        label-for="input-2"
      >
        <b-form-input class="w-25 p-3 mb-1 mx-auto text-dark"
        id="input-2"
        v-model="form.password"
        type="password"
        required
        placeholder="輸入密碼"
        ></b-form-input>
      </b-form-group> -->

      

    </b-form>
    
  </div>
</template>

<script>

export default {
    methods:{
        routeToAdmin:function(){
            this.$router.push({name:"Admin-Home"})
        },
        routeToRegister:function(){
            this.$router.push({name:"Register"})
        }
    },
    data(){
        return{
            form:{
                account:"",
                password:"",
            }
        }
    }
}
</script>

<style lang="scss" scoped>
div{
  
  min-height: 40rem;
  background: url("../img/bg-masthead.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
}
</style>