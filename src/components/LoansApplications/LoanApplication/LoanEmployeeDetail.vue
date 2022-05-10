<template>
    <b-row>
        <b-container>
            <b-card>
                <b-card-title>
                    Datos del Empleado
                </b-card-title>
                <b-card-body>
                    <b-form-row>
                        <b-form-group label="No. Nómina" label-for="pay_roll_number" class="col-md-6">
                            <b-input type="text" id="pay_roll_number" name="pay_roll_number"
                                     v-model="employee.pay_roll_number" disabled></b-input>
                        </b-form-group>

                        <b-form-group label="Nombre" label-for="name" class="col-md-6">
                            <b-input type="text" id="name" name="name"
                                     v-model="employee.name" disabled></b-input>
                        </b-form-group>
                    </b-form-row>
                </b-card-body>
            </b-card>
        </b-container>
    </b-row>
</template>

<script>
export default {
    name: 'LoanEmployeeDetail',
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    data: () => {
        return {}
    },
    methods: {}
}
</script>
