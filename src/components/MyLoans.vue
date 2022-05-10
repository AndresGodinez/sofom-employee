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
  name: 'MyLoans',
  data() {
    return {
      status: 'approved'
    }
  },
  components: {
    HeaderTopUser,
    ListLoansApplications
  }
}
</script>


