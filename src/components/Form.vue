<script setup>

    const props = defineProps(['unites'])
  
</script>



<template>
    <div>
        <form>
            <table v-if="unites.filter(unit => unit.modules.length === 0).length != unites.length" class="table table-bordered">
                <thead>
                    <tr>
                        <td></td>
                        <th class="bg-light">Module</th>
                        <th class="bg-light">Note TD</th>
                        <th class="bg-light">Note TP</th>
                        <th class="bg-light">Note Examen</th>
                    </tr>
                </thead>
                <tbody v-for="unite in unites">
                    <tr v-for="(_module, index) in unite.modules">
                        <td v-if="index == 0" :rowspan="unite.modules.length" class="bg-light px-2">{{ unite.name }}</td>
                        <td>{{ _module.name }}</td>
                        <td v-if="!_module.noTD" :colspan="!_module.hasTP && 2">
                            <input max="20" min="0" :class="(_module.td.value > 20 || _module.td < 0) && 'border-danger'" max="20" v-model="_module.td.value"  type="number" placeholder="TD" class="form-control border-none">
                        </td>
                        <td v-if="_module.hasTP">
                            <input max="20" min="0" :class="(_module.tp.value > 20 || _module.tp < 0) && 'border-danger'" max="20" v-model="_module.tp.value"  type="number" placeholder="TP" class="form-control border-none">
                        </td>
                        <td :colspan="(_module.noTD && !_module.hasTP) ? 3 : 2">
                            <input max="20" min="0" :class="(_module.examen.value > 20 || _module.examen.value < 0) && 'border-danger'" max="20" v-model="_module.examen.value" type="number" placeholder="Examen" class="form-control border-none">
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </form>

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
        border: 1px solid transparent;
    }
    form {
        overflow-x: auto;
        
    }
</style>
