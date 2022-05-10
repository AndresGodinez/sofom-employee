<template>
    <div class="row col-md-12">
        <div class="col-md-9">
            <LoanEmployeeDetail :employee="loanApplication.employee"></LoanEmployeeDetail>
            <LoanDetail :loanApplication="loanApplication"></LoanDetail>
            <AmortizationTable
                :loanApplicationPayments="loanApplication.loan_application_payments"
                :capital="loanApplication.total_loan_amount"
            ></AmortizationTable>
        </div>
        <div class="col-md-3">
            <Preauthorize :loanApplication="loanApplication"></Preauthorize>
        </div>
    </div>
</template>
<script>
import LoanEmployeeDetail from "./LoanEmployeeDetail";
import LoanDetail from "./LoanDetail";
import AmortizationTable from "./AmortizationTable";
import Preauthorize from "./PreAuthorize";

export default {
    name: 'ApplicationLoanDetail',
    props: {
        loanApplication: {
            type: Object,
            required: true
        }
    },
    data: () => {
        return {}
    },
    components: {
        AmortizationTable,
        LoanEmployeeDetail,
        LoanDetail,
        Preauthorize
    }
}
</script>
