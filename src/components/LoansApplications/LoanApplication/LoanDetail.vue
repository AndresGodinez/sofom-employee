<template>
    <b-row>
        <b-container>
            <b-card>
                <b-card-title>
                    Datos de la solicitud de préstamo
                </b-card-title>
                <b-card-body>
                    <b-form-row>
                        <b-form-group label="Cantidad Solicitada" label-for="total_loan_amount" class="col-md-6">
                            <b-input type="text" id="total_loan_amount" name="total_loan_amount"
                                     v-model="loanApplication.total_loan_amount" disabled></b-input>
                        </b-form-group>

                        <b-form-group label="Plazo" label-for="frequency_payments" class="col-md-6">
                            <b-input type="text" id="frequency_payments" name="frequency_payments"
                                     v-model="loanApplication.frequency_payments" disabled></b-input>
                        </b-form-group>

                        <b-form-group label="Pagos" label-for="quantity_loan" class="col-md-6">
                            <b-input type="text" id="quantity_loan" name="quantity_loan"
                                     v-model="loanApplication.quantity_loan" disabled></b-input>
                        </b-form-group>

                        <b-form-group label="cantidad total a pagar" label-for="total_amount_to_pay" class="col-md-6">
                            <b-input type="text" id="total_amount_to_pay" name="total_amount_to_pay"
                                     v-model="loanApplication.total_amount_to_pay" disabled></b-input>
                        </b-form-group>

                    </b-form-row>

                    <b-form-row>

                        <b-form-group label="Fecha de inicio" label-for="start_date" class="col-md-6">
                            <b-input type="text" id="start_date" name="start_date"
                                     v-model="loanApplication.start_date" disabled></b-input>
                        </b-form-group>

                        <b-form-group label="Fecha fin estimada" label-for="end_date" class="col-md-6">
                            <b-input type="text" id="end_date" name="end_date"
                                     v-model="loanApplication.end_date" disabled></b-input>
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
        loanApplication: {
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
