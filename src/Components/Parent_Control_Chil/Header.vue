<template>
  <div>
    <p>{{myName}}</p>
    <ul>
      <li v-for="stu in myStudent" :key="stu">{{ stu}}</li>
    </ul>
  </div>
</template>
<!--props as array-->
<!--<script> -->
<!--export default {-->
<!--  props:['myName']-->
<!--}-->
<!--</script>-->
<!--props ad object-->
<script>
export default {
  props:{
    myName:{
      type: String,
      required: true
    },
    myStudent:{
      type: Array,
      required: true,
    }
  }
}
</script>
<style scoped>
div{
  color:yellowgreen;
}
</style>