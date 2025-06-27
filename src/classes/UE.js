import Swal from "sweetalert2"
export default class UE 
{
    constructor(name) {
        
        this.name = name

        this.totalCredits = 0
        this.creditsObtenu = 0

        this.totalCoef = 0

        this.modules = []
        this.avg = 0
    }

    addModule(module) {
        this.modules.push(module)
        this.totalCoef += module.coef
        this.totalCredits += module.credits
    }
    

    calculateUEAvg() {

        if(this.modules.length <= 0) 
            return
        
        this.avg = 0
        this.creditsObtenu = 0

        // vérification des entrées
        for(const module of this.modules) {
            if(module.td._value > 20 || module.tp._value > 20 || module.examen._value > 20 || module.td._value < 0 || module.tp._value < 0 || module.examen._value < 0)  {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Veuillez vérifier les données saisies',
                })
                return
            }
            const avgModule = module.calculateAvg()
            if(avgModule >= 10) 
                this.creditsObtenu += module.credits

            this.avg += (avgModule * module.coef)
        }
            
        // calcul
        this.avg /= this.totalCoef
        if(this.avg >= 10) this.creditsObtenu = this.totalCredits
        
    }
}
