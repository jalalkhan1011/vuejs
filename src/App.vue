<!--<template>-->
<!--  <div>-->
<!--    <ListHelper>-->

<!--    </ListHelper>-->
<!--&lt;!&ndash;    <compHeader/>&ndash;&gt;-->
<!--&lt;!&ndash;    <comp-footer/>&ndash;&gt;-->
<!--&lt;!&ndash;    <child-header :myName="name1"></child-header>&ndash;&gt;-->
<!--&lt;!&ndash;    <child-header :my-student="students"></child-header>&ndash;&gt;-->
<!--&lt;!&ndash;    <parent-footer&ndash;&gt;-->
<!--&lt;!&ndash;        :firstname="fname"&ndash;&gt;-->
<!--&lt;!&ndash;        :lastname="lname"&ndash;&gt;-->
<!--&lt;!&ndash;        :age="myAge"&ndash;&gt;-->
<!--&lt;!&ndash;        @updatevalue = "fname = $event"&ndash;&gt;-->
<!--&lt;!&ndash;    ></parent-footer>&ndash;&gt;-->

<!--&lt;!&ndash;    <p>{{name}}</p>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// import compHeader from './Components/Header_Footer/Header';-->
<!--// import compFooter from './Components/Header_Footer/Footer';-->
<!--// import ChildHeader from './Components/Parent_Control_Chil/Header';-->
<!--// import ParentFooter from './Components/Child_Control_Parent/Footer';-->
<!--import ListHelper from './Components/LisHelper';-->
<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--      name: 'jalal',-->
<!--      name1: 'khan',-->
<!--      students:['jalal','jehad','rume','arman'],-->
<!--      fname:'uzzal',-->
<!--      lname: 'khan',-->
<!--      myAge: 21,-->
<!--      list:['Html','css','java script'],-->
<!--      loader: ''-->
<!--    }-->
<!--  },-->
<!--  components: {-->
<!--    // compHeader,-->
<!--    // compFooter,-->
<!--    // ChildHeader,-->
<!--    // ParentFooter,-->
<!--    ListHelper-->
<!--  },-->
<!--  created() {-->
<!--    setTimeout(()=>{-->
<!--      this.loader = 'other';-->
<!--    },3000)-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--&lt;!&ndash;global style&ndash;&gt;-->
<!--<style>-->
<!--/*div{*/-->
<!--/*  color: red;*/-->
<!--/*}*/-->
<!--body{-->
<!--  font-family: 'Roboto', sans-serif;-->
<!--}-->


<!--</style>-->
<template>
  <div class="container">
    <button @click="componentToRender='CompHome'">Home</button>
    <button @click="componentToRender='CompContact'">Contact</button>
    <button @click="componentToRender='CompAbout'">About</button>
    <keep-alive>
      <component :is="componentToRender"></component>
    </keep-alive>
  </div>
</template>

<script>
import CompHome from './Components/Home';
import CompAbout from './Components/About';
import CompContact from './Components/Contact';
export default {
  data(){
    return{
      componentToRender: 'CompHome'
    }
  },
  components:{
    CompHome,
    CompAbout,
    CompContact
  }
}
</script>