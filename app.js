

var tscores = new Vue({
    el: '#tscores',
    data: {
        qa: 60 ,
        va :78,
        mat: 98,
        eng:95,
        gs:70,
        agg:401,
        avgqa: 80 ,
        avgva :80,
        avgmat: 70,
        avgeng:70,
        avggs:70,
        avgagg:370,
        stdqa: 10 ,
        stdva :10,
        stdmat: 20,
        stdeng:12,
        stdgs:15,
        tqa: '' ,
        tva :'',
        tmat: '',
        teng:'',
        tgs:'',
        tagg:'',

    },
    methods: {
      
        tscore_calculate(){
           this.tqa =  50+10*(this.qa-this.avgqa)/this.stdqa
           this.tva =  50+10*(this.va-this.avgva)/this.stdva
           this.tmat =  50+10*(this.mat-this.avgmat)/this.stdmat
           this.teng =  50+10*(this.eng-this.avgeng)/this.stdeng
           this.tgs =  50+10*(this.gs-this.avggs)/this.stdgs
           this.agg =  this.qa+this.va+this.mat+this.eng+this.gs
           this.avgagg =  this.avgqa+this.avgva+this.avgmat+this.avgeng+this.avggs
           this.tagg =  this.tqa+this.tva+this.tmat+this.teng+this.tgs
           

    },
    
}



})