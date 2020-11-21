<template>
  <div>
    <ListHelper>
      <ul slot="mylist">
        <li v-for="li in list" :key="li">{{ li }}</li>
      </ul>
      <p slot="para">User also knows php</p>
      <p :slot="loader">See you again</p>
    </ListHelper>
    <compHeader/>
    <comp-footer/>
    <child-header :myName="name1"></child-header>
    <child-header :my-student="students"></child-header>
    <parent-footer
        :firstname="fname"
        :lastname="lname"
        :age="myAge"
        @updatevalue = "fname = $event"
    ></parent-footer>

    <p>{{name}}</p>
  </div>
</template>

<script>
import compHeader from './Components/Header_Footer/Header';
import compFooter from './Components/Header_Footer/Footer';
import ChildHeader from './Components/Parent_Control_Chil/Header';
import ParentFooter from './Components/Child_Control_Parent/Footer';
import ListHelper from './Components/LisHelper';
export default {
  data(){
    return{
      name: 'jalal',
      name1: 'khan',
      students:['jalal','jehad','rume','arman'],
      fname:'uzzal',
      lname: 'khan',
      myAge: 21,
      list:['Html','css','java script'],
      loader: ''
    }
  },
  components: {
    compHeader,
    compFooter,
    ChildHeader,
    ParentFooter,
    ListHelper
  },
  created() {
    setTimeout(()=>{
      this.loader = 'other';
    },3000)
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
