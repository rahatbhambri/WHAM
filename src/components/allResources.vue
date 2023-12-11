<template>
    <ul>
        <li v-for="res in resources" :key="res.title">
            <h2> <a :href=res.link target="_blank">  {{  res.title  }}  </a></h2>
            <h3> {{ res.description }}</h3>
        </li>
    </ul>
    <!-- <p>{{ updatedRes }}</p> -->
</template>
 
  
<script>
    export default {
      props: {
        'resource' : Object, 
        'updatedRes' : Object
      }, 
      data() {
        return {
          resources : [
            {
                id : 1,
                title : "Google", 
                description : "Modern search engine", 
                link : "http://www.google.com"
            }, 
            {
                id : 2, 
                title : "Wikipedia", 
                description : "The free encyclopedia", 
                link : "http://www.wikipedia.org"
            }
          ]
        };
      },
      watch : {
        resource: {
            handler(newv, oldv){
                console.log("resource received" + newv + "  " + oldv ) ;
                if (newv !== null ){
                    this.resources.push(newv) ;
                    console.log(this.resources) ;
                }
            },
            immediate: true,
        }, 
        updatedRes: {
            handler(newv, oldv){
                console.log("resource updated" + newv + "  " + oldv ) ;
                if (newv !== null ){
                    let searchR = this.resources.find(item => item.title.toLowerCase() === newv.title.toLowerCase()) ;
                    if (searchR){
                        searchR.link = newv.link ;
                        searchR.description = newv.description ;
                    }
                }
            },
            deep : true, 
            immediate: true,
        }, 
      }
    };
</script>

<style scoped>

    li {
        background-color: green;
        margin-bottom: 10%;
    }
    
    li:hover {
        border-bottom-style: none;
        border-color: blue;
        background: purple
    }

    ul {
        background-color: blue;
    }
</style>
    