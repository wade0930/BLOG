<template>
    <div>
        <h1>404</h1>
        <h4>this Page is NotFound!</h4>
        <b-button @click="GoBackHome">Go Back</b-button>
    </div>
</template>

<script>
export default {
    methods:{
        GoBackHome:function(){
            this.$router.push({name:"Home"})
        }
    }
}
</script>

