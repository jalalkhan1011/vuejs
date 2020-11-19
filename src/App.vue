<template>
  <div>
    <compHeader/>
    <comp-footer/>
    <child-header :myName="name1"></child-header>
    <child-header :my-student="students"></child-header>
    <p>{{name}}</p>
  </div>
</template>

<script>
import compHeader from './Components/Header_Footer/Header';
import compFooter from './Components/Header_Footer/Footer';
import ChildHeader from './Components/Parent_Control_Chil/Header';
export default {
  data(){
    return{
      name: 'jalal',
      name1: 'khan',
      students:['jalal','jehad','rume','arman']
    }
  },
  components: {
    compHeader,
    compFooter,
    ChildHeader
  }
}
</script>
<!--global style-->
<style>
/*div{*/
/*  color: red;*/
/*}*/
body{
  font-family: 'Roboto', sans-serif;
}
</style>
