<template>
  
    <form @submit.prevent class = "updateform">
      <p>Title</p>
      <input type='text' v-model="title">
      <p>Updated Description</p>
      <input type='text' v-model="description">
      <p>Updated Link</p>
      <input type='text' v-model="url">

      <button @click='submitForm()'>Submit</button>

    </form>
  
    
</template>
  
<script>
  export default {
    emits : [ "updateresource"], 
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

          this.$emit('updateresource', payload) ;
        //   console.log("abcd") ;
      }
    }
  };
</script>

<style scoped >
.updateform{
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
}
</style>