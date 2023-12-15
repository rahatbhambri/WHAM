<template>
<body>


<p style="font-size: xx-large ; font-style: initial; color: rgb(24, 7, 93);"> <strong> Wack a mole! </strong> </p>
<button @click = "startGame()" v-if="!start"> Start Game </button>
<button @click = "endGame()" v-if="!end" style="background-color: red;"> End Game</button>

  <div class = "score" v-if="start">
    <strong><p> {{  score }}</p></strong>
  </div>

  <div class = "game" v-if=start>
    
      
      <div class = "hole hole1" @click="whack($event)"> 
        <div class = "mole mole1" id ="mole1" >
        </div>
      </div>
      <div class = "hole hole2" @click="whack($event)"> 
        <div class = "mole" id ="mole2">
        </div>
      </div>
      <div class = "hole hole3" @click="whack($event)"> 
        <div class = "mole" id ="mole3">
        </div>
      </div>
      <div class = "hole hole4" @click="whack($event)"> 
        <div class = "mole" id ="mole4">
        </div>
      </div>
      <div class = "hole hole5" @click="whack($event)"> 
        <div class = "mole" id ="mole5">
        </div>
      </div>
      <div class = "hole hole6" @click="whack($event)"> 
        <div class = "mole" id ="mole6">
        </div>
      </div>
  </div>
  <br>
  <br>

  
  <div class = "endscreen" v-if=isEnded>
    <p> Game over! Your overall score is {{ score }}</p>
  </div>
  
</body>
</template>
  

<script>
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  export default({
    data(){
      return {
        start : false,
        score : 0, 
        end : false
      }
    }, 
    computed : {
      isEnded(){
        return this.end ;
      }
    },
    methods :{
       async startGame (){
        this.end = false;
        this.start = true;
        this.score = 0 ;
        setTimeout(()=>{
          this.end = true ;
          this.start = false;
        }, 15000) ;

        while(!this.end){
          await this.toggleMole();
        }
        

      }, 
      incScore(){
        this.score++ ;
      }, 
      endGame(){
        this.start = false ;
        this.end = true ;
      }, 
      async toggleMole(){
        var hole = document.querySelectorAll('.hole') ;
        const rand = String(getRandomInteger(0, 5))
        console.log(rand) ;
        hole = hole[rand] ;
        if(hole){
          var sty = hole.classList ;
          sty.toggle('up') ;
          await new Promise(resolve => setTimeout(resolve, 1000) ) ;
          sty.toggle('up') ;
        }
      },

      async whack(event){
        const hole = event.target ;
        const mole = hole.querySelector('.mole');
        
        if (hole.classList.contains('up')){
          this.incScore() ;
          console.log("whacked") ;
          mole.classList.add('wacked');
          await new Promise(resolve => setTimeout(resolve, 500) ) ;
          hole.classList.remove('up'); //this refers to item clicked
          mole.classList.remove("wacked") ;

        }
        
      }     
  
    }
  })
</script>

<style scoped>
html {
    font-size: 35px;
    background: #466136;
}

body {
    padding: 0;
    margin: 0;
    text-align: center;
    background-color: rgb(189, 141, 83);
}

h1 {
    text-align: center;
    font-size: 100px;
    line-height: 1;
    margin-bottom: 0;
}

.endscreen {
    background:rgb(90, 1, 110);
    padding: 0 48px;
    display: flex;
    width: 10%;
    line-height: 1;
    border-radius: 16px;
    color: #ffffff;
    /* margin-left: 340px; */
    margin: 0 auto; /* Horizontally center */
    border-color: rgb(255, 255, 255);
    outline: solid 5px rgb(212, 255, 0);
}

.score {
    background:rgb(156, 189, 9);
    padding: 0 48px;
    display: flex;
    width: 10%;
    line-height: 2;
    border-radius: 16px;
    color: #000000;
    margin: 0 auto;
    margin-top: 5%;
    font-size: x-large;

}

.game {
    width: 800px;
    height: 500px;
    display:flex;
    flex-wrap:wrap;
    margin: 0 auto;
    background-color: aquamarine;
    border-color: black;
    outline: solid 5px black;
    
    
}


.hole{
    flex: 1 0 33.33%;
    overflow:visible;
    position: relative;
}

.hole:after{
    display:block;
    background: url(dirt.png) bottom center no-repeat;
    background-size:contain;
    content: '';
    width: 100%;
    height: 100px;
    position: absolute;
    z-index: 2;
    padding-top: 50%;
    /* bottom: -30px; */
}

.mole {
    background: url('mole.png') bottom center no-repeat;
    background-size: 50%;
    position: absolute;
    top: 35%;
    width: 60%;
    height: 70px;
    transition: all 0.4s;
    padding: 10%;
    padding-left: 20%;
}

.mole.wacked {
    background: url('mole_wacked.png') bottom center no-repeat;
    background-size: 50%;
    position: absolute;
    top: 35%;
    width: 60%;
    height: 70px;
    transition: all 0.4s;
    padding: 10%;
}

.hole.up .mole{
    top:25%;
}

button{
    width:175px;
    font-size: 35px;
    height: 120px;
    color: #fff;
    background-color: blue;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 90px;
    border-color: rgb(255, 255, 255);
    outline: solid 5px black;
}
</style>
