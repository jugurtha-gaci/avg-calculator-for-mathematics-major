<script setup>

    import { reactive, ref } from 'vue';

    const Fondamentale = reactive({
        Modules: {
            Algebre:{
                td: null, 
                examen: null, 
                coef: 3, 
                credits: 5
            },
            Analyse: {
                td: null, 
                examen: null, 
                coef: 4,
                credits: 7
            },
            Topologie: {
                td: null, 
                examen: null, 
                coef: 4, 
                credits: 7
            }
        },
        credits: 18
    })


    const Methodologie = reactive({
        Modules: {
            AnalyseNumerique:{
                td: null, 
                examen: null, 
                coef: 3, 
                credits: 4
            },
            Logique: {
                td: null, 
                examen: null, 
                coef: 2, 
                credits: 3
            },
            Opm: {
                td: null, 
                examen: null, 
                coef: 1, 
                credits: 3
            }
        },
        credits: 18
    })
  
    const Decouverte = reactive({
        Modules: {
            Histoire: {
                examen: null, 
                coef: 1, 
                credits: 2
            }
        }
    })

    let moyenneGenerale = ref(0)
    const calculate = () => {

        const Analyse = ((+Fondamentale.Modules.Analyse.examen * 0.6) + (+Fondamentale.Modules.Analyse.td * 0.4)) * (+Fondamentale.Modules.Analyse.coef),
            Algebre = ((+Fondamentale.Modules.Algebre.examen * 0.6) + (+Fondamentale.Modules.Algebre.td * 0.4)) * (+Fondamentale.Modules.Algebre.coef),
            Topologie = ((+Fondamentale.Modules.Topologie.examen * 0.6) + (+Fondamentale.Modules.Topologie.td * 0.4)) * (+Fondamentale.Modules.Topologie.coef),

            AnalyseNumerique = ((+Methodologie.Modules.AnalyseNumerique.examen * 0.6) + (+Methodologie.Modules.AnalyseNumerique.td * 0.4)) * (+Methodologie.Modules.AnalyseNumerique.coef),
            Logique = ((+Methodologie.Modules.Logique.examen * 0.6) + (+Methodologie.Modules.Logique.td * 0.4)) * (+Methodologie.Modules.Logique.coef),
            Opm = ((+Methodologie.Modules.Opm.examen * 0.6) + (+Methodologie.Modules.Opm.td * 0.4)) * (+Methodologie.Modules.Opm.coef),

            Histoire = ((+Decouverte.Modules.Histoire.examen * 0.6) + (+Decouverte.Modules.Histoire.examen * 0.4)) * (+Decouverte.Modules.Histoire.coef)
            
        moyenneGenerale.value = (Analyse + Algebre + Topologie + AnalyseNumerique + Logique + Opm + Histoire) / 17

        
        
    }

</script>



<template>
    <div class="row pt-5 container justify-content-center">
        <form class="col-md-8">
            <table class="table table-responsive table-bordered form-group">
                <tr>
                    <td></td>
                    <th class="bg-light">Module</th>
                    <th class="bg-light">Note TD</th>
                    <th class="bg-light">Note Examen</th>
                </tr>
                <!-- Unité fondamentale -->
                <tr>
                    <td rowspan="3" class="bg-light px-2">Unité fonamentale 1</td>
                    <td>Analyse 3</td>
                    <td>
                        <input v-model="Fondamentale.Modules.Analyse.td" type="text" placeholder="TD" class="form-control border-0">
                    </td>
                    <td>
                        <input v-model="Fondamentale.Modules.Analyse.examen" type="text" placeholder="Examen" class="form-control border-0">
                    </td>
                </tr>
                <tr>
                    <td>Algébre 3</td>
                    <td>
                        <input v-model="Fondamentale.Modules.Algebre.td" type="text" placeholder="TD" class="form-control border-0">
                    </td>
                    <td>
                        <input v-model="Fondamentale.Modules.Algebre.examen" type="text" placeholder="Examen" class="form-control border-0">
                    </td>
                </tr>
                <tr>
                    <td>Topologie</td>
                    <td>
                        <input type="text" v-model="Fondamentale.Modules.Topologie.td" placeholder="TD" class="form-control border-0">
                    </td>
                    <td>
                        <input type="text" v-model="Fondamentale.Modules.Topologie.examen" placeholder="Examen" class="form-control border-0">
                    </td>
                </tr>
                <!-- Unité de méthodologie -->
                <tr>
                    <td rowspan="3" class="bg-light px-2">Unité de méthodologie</td>
                    <td>Analyse Numérique 1</td>
                    <td>
                        <input v-model="Methodologie.Modules.AnalyseNumerique.td" type="text" placeholder="TD" class="form-control border-0">
                    </td>
                    <td>
                        <input v-model="Methodologie.Modules.AnalyseNumerique.examen" type="text" placeholder="Examen" class="form-control border-0">
                    </td>
                </tr>
                <tr>
                    <td>Logique Mathématique</td>
                    <td>
                        <input v-model="Methodologie.Modules.Logique.td" type="text" placeholder="TD" class="form-control border-0">
                    </td>
                    <td>
                        <input v-model="Methodologie.Modules.Logique.examen" type="text" placeholder="Examen" class="form-control border-0">
                    </td>
                </tr>
                <tr>
                    <td>Outils de programmation</td>
                    <td>
                        <input v-model="Methodologie.Modules.Opm.td" type="text" placeholder="TD" class="form-control border-0">
                    </td>
                    <td>
                        <input v-model="Methodologie.Modules.Opm.examen" type="text" placeholder="Examen" class="form-control border-0">
                    </td>
                </tr>
                <!-- Unité de découverte -->
                <tr>
                    <td rowspan="3" class="bg-light px-2">Découverte</td>
                    <td>Histoire des mathématiques</td>
                    <td colspan="2">
                        <input v-model="Decouverte.Modules.Histoire.td" type="text" placeholder="Examen" class="form-control border-0">
                    </td>
                </tr>

            </table>
            <button @click.prevent="calculate" class="btn btn-success btn-block w-100 py-3 text-center">Calculer</button>
        </form>
        <h3 class="pt-2">
            Moyenne Générale : {{ moyenneGenerale.toFixed(2) }}
        </h3>
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
    input {
        min-width: 50px;
    }
</style>