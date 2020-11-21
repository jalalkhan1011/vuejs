<template>
  <div>
    <p>First Name:{{firstname}}</p>
    <p>Last Name:{{lastname}}</p>
    <p>Age:{{age}}</p>
    <button @click="updateName">Click Me</button>
  </div>
</template>

<script>
export default {
  props:{
    firstname: String,
    lastname: String,
    age: Number
  },
  methods:{
    updateName(){
      // this.firstname = 'danger'
      this.$emit('updatevalue','danger')
    }
  }
}
</script>
<style scoped>
div{
  color: aquamarine;
}
</style>