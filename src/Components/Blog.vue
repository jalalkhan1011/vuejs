<template>
  <div>
    <h1>Blog Article</h1>
    <div v-for="(blog,id) in blogs" :key="id">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blogs:[]
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
      console.log(data);
      this.blogs = data.body.slice(0,10)
    })
  }
}
</script>
//git problem