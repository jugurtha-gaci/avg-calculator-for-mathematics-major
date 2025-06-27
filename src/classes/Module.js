import { ref } from "vue"

export default class Module
{
    constructor(module) {
        this.name = module.name
        this.credits = module.credits
        this.coef = module.coef

        this.creditsObtenu = 0

        this.noTD = module.noTD || false
        this.hasTP = module.hasTP || false

        this.td = ref(null)
        this.tp = ref(null)
        this.examen = ref(null)

    }
    calculateAvg() {
        let moyenne = 0

        if(this.noTD) 
            moyenne = (+this.examen._value * this.coef)
        
        else if(this.hasTP) 
            moyenne = (+this.examen._value * 0.67) + ((+this.td._value + +this.tp._value) / 2) * 0.33
        
        else
            moyenne = ((+this.examen._value * 0.67) + (+this.td._value * 0.33)) 

        this.calculateCreditsObtenu(moyenne)

        return moyenne
    }

    calculateCreditsObtenu(moyenne) {
        this.creditsObtenu = 0
        console.log(this.td);

        if(moyenne < 10) return; 

        this.creditsObtenu = this.credits
    }

  
}
