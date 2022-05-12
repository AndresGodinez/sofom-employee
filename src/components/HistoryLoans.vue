<template>
  <div>
    <HeaderTopUser></HeaderTopUser>
    <ListLoansApplications :status="status"></ListLoansApplications>
  </div>
</template>
<script>
import HeaderTopUser from './partials/header-top-user.vue'
import ListLoansApplications from "@/components/LoansApplications/ListLoansApplications.vue";

export default {
  name: 'ListPendingLoanApplications',
  data() {
    return {
      status: 'closed'
    }
  },
  created() {
    if (this.$store.getters.getToken === '') {
      this.$router.push('/login')
    }
  },
  components: {
    HeaderTopUser,
    ListLoansApplications
  }
}
</script>


