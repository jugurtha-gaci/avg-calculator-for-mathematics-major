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
        const moyenne = this.noTD ? 
                        (+this.examen._value * this.coef) : 
                        (this.hasTP) ?
                            ((+this.examen._value * 0.6) + (((+this.td._value + +this.tp._value) / 2) * 0.4)) 
                            :
                            ((+this.examen._value * 0.6) + (+this.td._value * 0.4)) 

        this.calculateCreditsObtenu(moyenne)

        return moyenne
    }

    calculateCreditsObtenu(moyenne) {
        this.creditsObtenu = 0
        console.log(this.td);

        if(moyenne < 10) return 
        this.creditsObtenu = this.credits
    }

  
}