<template>
  <div>
    <HeaderTopUser></HeaderTopUser>
    <CTitle :title="title"></CTitle>
    <ListLoansApplications :status="status" :emptyMessage="emptyMessage"></ListLoansApplications>
  </div>
</template>
<script>
import HeaderTopUser from './partials/header-top-user.vue'
import ListLoansApplications from "@/components/LoansApplications/ListLoansApplications.vue";
import CTitle from "@/components/LoansApplications/Partials/c-title";

export default {
  name: 'ListPendingLoanApplications',
  data() {
    return {
      status: 'closed',
      title: 'Historial de préstamos',
      emptyMessage: 'Aún no cuentas con un historico de préstamos.'
    }
  },
  created() {
    if (this.$store.getters.getToken === '') {
      this.$router.push('/login')
    }
  },
  components: {
    HeaderTopUser,
    ListLoansApplications,
    CTitle
  }
}
</script>


