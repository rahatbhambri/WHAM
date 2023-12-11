<template>
  <button @click='setChosen("allresource")'> Stored Resouces</button>
  <button @click='setChosen("addresource")'> Add Resource </button>
  <button @click='setChosen("editresource")'> Edit Resource</button>
  <KeepAlive>
    <all-resource v-if= 'getChosen("allresource")'  :resource="resource" :updatedRes="updatedRes">
    </all-resource>
  </KeepAlive>
  

  <KeepAlive>
    <add-resource v-if= 'getChosen("addresource")'  @newresource="SetNewResource" > 
    </add-resource>
  </KeepAlive>

  <KeepAlive>
    <edit-resource v-if= 'getChosen("editresource")' @updateresource="updateResource">
    </edit-resource>
  </KeepAlive>
  
</template>
  

<script>
  export default {
    data() {
      return {
        chosen: 'allresource', 
        resource : null,
        updatedRes : null
      };
    },
    methods : {
      setChosen(name){
        this.chosen = name ;
      }, 
      getChosen(name){
        if (this.chosen === name){
          return true ;
        }else{
          return false ;
        }
      }, 
      SetNewResource(payload){
        console.log(" adding a new resource" + JSON.stringify(payload)) ;
        this.resource = payload ;
      }, 
      updateResource(data){
        console.log(" updating") ;
        this.updatedRes = data;
      }
    }
  };
</script>

<style scoped>
button {
  background: #e62143;
  border-radius: 11px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Mija,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif;
  font-size: 1.15em;
  font-weight: 700;
  justify-content: center;
  line-height: 33.4929px;
  padding: .8em 1em;
  text-align: center;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  text-shadow: rgba(0, 0, 0, .3) 1px 1px 1px;
  text-underline-offset: 1px;
  transition: all .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 30%;
  word-break: break-word;
  border: 0;
}

button:active,
button:focus {
  border-bottom-style: none;
  border-color: #dadada;
  box-shadow: rgba(0, 0, 0, .3) 0 3px 3px inset;
  outline: 0;
}

button:hover {
  border-bottom-style: none;
  border-color: blue;
  background: orange;
}
</style>
