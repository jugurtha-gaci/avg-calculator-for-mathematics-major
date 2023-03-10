<script setup>

    import { ref } from "vue";

    import s3 from "./../data/licence/S3"
    import s4 from "./../data/licence/S4"

    import Calcul from "../utilities/Calcul";
    import Year from "../utilities/Year";

    import Form from "../components/Form.vue";

    

    // ----------------------------------------- Year Configuration --------------------------------
    const { program_s1, program_s2 } = Year(s3, s4)







    // ----------------------------------------- CALCUL ------------------------------------
    const { S1, S2, Annee } = Calcul(program_s1, program_s2)


    for(const unite of program_s1) {
        unite.calculateUEAvg()
        console.log(unite.avg);
    }


        // S1
    let _avg1 = ref(0), 
        _credits1 = ref(0),
        // S2
        _avg2 = ref(0), 
        _credits2 = ref(0), 
        // ANNEE
        _avg = ref(0),
        _credits = ref(0), 
        _status = ref('Ajourné') 

    const calculate = () => {

        let { avg1, credits1 } = S1()
        let { avg2, credits2 } = S2()
        let { avg, credits, status } = Annee()


        _avg1.value = avg1,
        _avg2.value = avg2
        _credits1.value = credits1,
        _credits2.value = credits2,
        _avg.value = avg,
        _credits.value = credits,
        _status.value = status

    }


</script>
<template>
    <div>
        <h5 class="special-heading px-1 text-center py-4 border shadow-sm mb-4 bg-light ">Licence 2 Mathématiques</h5>
        <div class="pb-5">
            <h5 class="pb-3">Premier Semestre :</h5>
            <Form
                :unites="program_s1"
            />
        </div>
        <div class="pb-3">
            <h5 class="pb-3">Deuxiéme Semestre :</h5>
            <Form
                :unites="program_s2"
            />
        </div>
        <button @click.prevent="calculate" class="btn btn-success btn-block w-100 py-3 text-center">Calculer</button>

        <div class="results pt-5">
            <h5 class="pb-3">Résultats :</h5>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td>Moyenne Semestre 1</td>
                        <th class="bg-light">{{ _avg1.toFixed(2) }}</th>
                    </tr>
                    <tr>
                        <td>Crédit Obtenu dans Semestre 1</td>
                        <th class="bg-light">{{ _credits1 }}</th>
                    </tr>
                    <tr>
                        <td>Moyenne Semestre 2</td>
                        <th class="bg-light">{{ _avg2.toFixed(2) }}</th>
                    </tr>
                    <tr>
                        <td>Crédit Obtenu dans Semestre 2</td>
                        <th class="bg-light">{{ _credits2 }}</th>
                    </tr>
                    
                    <tr>
                        <td class="bg-light">Moyenne Générale</td>
                        <th class="bg-light">{{ _avg.toFixed(2) }}</th>
                    </tr>
                    <tr>
                        <td>Crédits obtenu au terme de l'année académique</td>
                        <th class="py-3">
                            {{ _credits }}
                            <span 
                                :class="_status.toLowerCase().includes('admis') ? 'text-success' : 'text-danger'"
                            >
                                ( {{ _status }} )
                            </span>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped>
    table {
        border-color: #aeaeae;
    }
    td, th {
        padding: 0.5rem 0;
        padding-left: 20px;

    }
</style>
