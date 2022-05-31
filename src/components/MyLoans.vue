<template>
  <div>
    <HeaderTopUser></HeaderTopUser>
    <CTitle :title="title"></CTitle>
    <ListLoansApplications :status="status"></ListLoansApplications>
  </div>
</template>
<script>
import HeaderTopUser from './partials/header-top-user.vue'
import ListLoansApplications from "@/components/LoansApplications/ListLoansApplications.vue";
import CTitle from "@/components/LoansApplications/Partials/c-title.vue";

export default {
  name: 'MyLoans',
  data() {
    return {
      status: 'approved',
      title: "Préstamos activos"
    }
  },
  components: {
    HeaderTopUser,
    ListLoansApplications,
    CTitle
  }
}
</script>


