<template>
  <div>
    I am a list helper
    <slot name="mylist"></slot>
    <slot name="para"></slot>
    <slot name="other">Loading....</slot>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style scoped>
ul li{
  color: darkgoldenrod;
}
</style>