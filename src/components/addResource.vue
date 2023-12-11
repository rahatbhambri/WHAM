<template>
  
    <form @submit.prevent class = "addform">
      <p>Title</p>
      <input type='text' v-model="title">
      <p>Description</p>
      <input type='text' v-model="description">
      <p>Link</p>
      <input type='text' v-model="url">

      <button @click='submitForm()'>Submit</button>

    </form>
  
    
</template>
  
<script>
  export default {
    emits : ["newresource"], 
    data (){
      return {
        title: '',
        description : '',
        url : ''
      }
    },
    methods : {
      submitForm(){
          var payload = {
            "id" : Math.floor(Math.random()*100), 
            "title" : this.title,
            "description" : this.description, 
            "link" : "http://" + this.url
          } ;

          this.$emit('newresource', payload) ;
          // console.log("abcd") ;
      }
    }
  };
</script>

<style scoped>
.addform{
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(115deg, red 10%, blue 90%);
  }
</style>