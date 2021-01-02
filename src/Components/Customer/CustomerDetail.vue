<template>
  <div>
    <h2>Customer detail {{ $route.params.id }}</h2>

<!--    <router-link tag="button" :to="{ name:'customerEdit', params:{id:$route.params.id} }"-->
<!--                 class="btn btn-primary">Edit profile</router-link>-->
    <router-link tag="button" :to="{ name:'customerEdit', params:{id:$route.params.id}, query:{local:'en',q:100}}"
                 class="btn btn-primary">Edit profile</router-link>
    <!--                 :to="'/customer/'+$route.params.id+'/edit'"-->
  </div>
</template>
