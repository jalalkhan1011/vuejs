<template>
    <div>
        <!--    I am a list helper-->
        <!--    <slot name="mylist"></slot>-->
        <!--    <slot name="para"></slot>-->
        <!--    <slot name="other">Loading....</slot>-->

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
                this.isSelected = true
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