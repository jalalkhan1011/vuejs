<template>
  <div>
    <h2>Customer page</h2>
    <p>{{ loadedId }}</p>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Go to home</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      loadedId: this.$route.params.id
    }
  },
  watch:{
    '$route'(to){
      this.loadedId = to.params.id;
    }
  },
  methods:{
    navigateToHome(){
      this.$router.push('/')
    }
  }
}
</script>