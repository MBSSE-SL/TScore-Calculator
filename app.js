

var tscores = new Vue({
    el: '#tscores',
    data: {
        qa:60,
        va :78,
        mat:98,
        eng:95,
        gs:70,
        agg:401,
        avgqa:61,
        avgva :71,
        avgmat:70,
        avgeng:70,
        avggs:71,
        avgagg:370,
        stdqa:10 ,
        stdva :10,
        stdmat:20,
        stdeng:12,
        stdgs:15,
        tqa:'',
        tva :'',
        tmat:'',
        teng:'',
        tgs:'',
        tagg:'',

    },
    methods: {
      
        tscore_calculate(){
           this.tqa =  50+10*(parseInt(this.qa)-parseInt(this.avgqa))/this.stdqa
           this.tva =  50+10*(parseInt(this.va)-parseInt(this.avgva))/this.stdva
           this.tmat =  50+10*(parseInt(this.mat)-parseInt(this.avgmat))/this.stdmat
           this.teng =  50+10*(parseInt(this.eng)-parseInt(this.avgeng))/this.stdeng
           this.tgs =  50+10*(parseInt(this.gs)-parseInt(this.avggs))/this.stdgs
           this.agg = 
           this.agg =  parseInt(this.qa)+parseInt(this.va)+parseInt(this.mat)+parseInt(this.eng)+parseInt(this.gs)
           this.avgagg =  parseInt(this.avgqa)+parseInt(this.avgva)+parseInt(this.avgmat)+parseInt(this.avgeng)+parseInt(this.avggs)
           this.tagg =  parseInt(this.tqa)+parseInt(this.tva)+parseInt(this.tmat)+parseInt(this.teng)+parseInt(this.tgs)
    },
    
}



})