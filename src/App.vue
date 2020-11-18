<template>
  <div>
    <compHeader/>
    <p>{{name}}</p>
  </div>
</template>

<script>
import compHeader from './Components/Header_Footer/Header';
export default {
  data(){
    return{
      name: 'jalal',
    }
  },
  components: {
    compHeader,
  }
}
</script>
<style></style>
