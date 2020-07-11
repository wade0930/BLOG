<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">BLOG</b-navbar-brand>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item >
              <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item >
              <router-link to="/about">About</router-link>
            </b-nav-item>
            <b-nav-item >
              <router-link to="/login">Login</router-link>
            </b-nav-item>
            <b-form-input v-model="searchKey" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button @click.prevent="submitSearchKey" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import{mapActions} from 'vuex'
export default {

  data(){
    return{
      searchKey:"",
    }
  },
  methods:{
    ...mapActions(['CSK']),
    submitSearchKey:function(){
    this.CSK(this.searchKey)
    }
  },

}
</script> 

<style lang="scss" scoped>
div{
  position: relative;

  .nav-item{
    margin-right: 1rem;
  }
}
  
</style>