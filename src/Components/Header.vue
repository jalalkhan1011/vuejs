<template>
  <ul class="nav nav-pills bg-primary">
<!--    <li class="nav-item">-->
<!--      <router-link class="nav-link  text-white" to="/">Home</router-link>-->
<!--    </li>-->
<!--    <li class="nav-item">-->
<!--      <router-link class="nav-link text-white" to="/customer">Customer</router-link>-->
<!--    </li>-->

      <router-link active-class="active" exact style="cursor: pointer" tag="li" class="nav-link nav-item text-white" to="/">Home</router-link>


      <router-link active-class="active" exact style="cursor: pointer" tag="li" class="nav-link nav-item text-white" to="/customer">Customer</router-link>

     <router-link active-class="active" exact style="cursor: pointer" tag="li" class="nav-link nav-item text-white" to="/about">About</router-link>

<!--    <li class="nav-item">-->
<!--      <router-link class="nav-link text-white" to="/customer/2">Customer 2</router-link>-->
<!--    </li>-->
  </ul>
</template>
<style scoped>
ul .nav-item{
  color: white
}
ul .active{
  color: red!important;
}
</style>