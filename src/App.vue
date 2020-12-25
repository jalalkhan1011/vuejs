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
<!--<template>-->
<!--  <div class="container">-->
<!--    <button @click="componentToRender='CompHome'">Home</button>-->
<!--    <button @click="componentToRender='CompContact'">Contact</button>-->
<!--    <button @click="componentToRender='CompAbout'">About</button>-->
<!--    <keep-alive>-->
<!--      <component :is="componentToRender"></component>-->
<!--    </keep-alive>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import CompHome from './Components/Home';-->
<!--import CompAbout from './Components/About';-->
<!--import CompContact from './Components/Contact';-->
<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--      componentToRender: 'CompHome'-->
<!--    }-->
<!--  },-->
<!--  components:{-->
<!--    CompHome,-->
<!--    CompAbout,-->
<!--    CompContact-->
<!--  }-->
<!--}-->
<!--</script>-->
<template>
  <div>
    <!--    I am a list helper-->
    <!--    <slot name="mylist"></slot>-->
    <!--    <slot name="para"></slot>-->
    <!--    <slot name="other">Loading....</slot>-->
<div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>From Handeling</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
                type="text"
                id="email"
                class="form-control" v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                class="form-control" v-model="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
                type="number"
                id="age"
                class="form-control" v-model="userData.age">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>

          <textarea
              id="message"
              rows="5"
              class="form-control" v-model="message">
                    </textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                  type="checkbox"
                  id="sendmail"
                  value="SendMail" v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                  type="checkbox"
                  id="sendInfomail"
                  value="SendInfoMail" v-model="sendMail"> Send Infomail
            </label>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
                type="radio"
                id="male"
                value="Male" v-model="gender"> Male
          </label>
          <label for="female">
            <input
                type="radio"
                id="female"
                value="Female" v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
              id="priority"
              class="form-control" v-model="selectedPriorities">
            <option v-for="priority in priorities" :key="priority">
              {{ priority }}
            </option>
          </select>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
              class="btn btn-primary" @click.prevent="submitted">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSelected">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail:{{ userData.email }}</p>
            <p>Password:{{ userData.password }}</p>
            <p>Age:{{ userData.age }}</p>
            <p style="white-space: pre-line">Message:{{ message }} </p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="mail in sendMail" :key="mail">
                {{mail}}
              </li>
            </ul>
            <p>Gender:{{ gender }}</p>
            <p>Priority: {{ selectedPriorities }}</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
</div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      userData:{
        email:'',
        password:'',
        age: 0
      },
      message:'',
      sendMail:[],
      gender:'Male',
      selectedPriorities:'',
      priorities:['High','Medium','Low'],
      isSelected: false

    }
  },
  methods:{
    submitted(){
      this.isSelected = true;
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        Email : this.userData.email,
        Password : this.userData.password,
        Age : this.userData.age,
        Message : this.message,
        SendMail : this.sendMail,
        Gender : this.gender,
        Priority : this.priorities
      }).then((data)=>{
        console.log(data);
      });
    }
  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }
}
</script>
<style scoped>
ul li{
  /*color: darkgoldenrod;*/
  list-style-type: none;
}
</style>