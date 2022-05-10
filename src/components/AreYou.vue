<template>
  <div>
    <HeaderTop></HeaderTop>
    <v-container>
      <AreYouText></AreYouText>
      <CardInformationEmployee
          :companyName="companyName"
          :dateOfAdmission="dateOfAdmission"
          :phone="phone">
      </CardInformationEmployee>

    </v-container>
  </div>
</template>
<script>
import HeaderTop from './partials/header-top.vue'
import AreYouText from './partials/are-you-text.vue'
import CardInformationEmployee from './partials/employee/card-information-employee.vue'
import ObjectUtils from "@/Utils/ObjectUtils";

export default {
  name: 'Register',
  data() {
    return {
      companyName: '',
      dateOfAdmission: '',
      phone: ''
    }
  },
  mounted() {
    this.companyName = this.$store.getters.getCompanyName;
    this.dateOfAdmission = this.$store.getters.getDateOfAdmission;
    this.phone = this.$store.getters.getPhone;

  },
  created() {
    let employee = this.$store.getters.getEmployee;

    if (ObjectUtils.isEmpty(employee)) {
      this.$router.push({name: 'register'});
    }
  },

  computed: {},


  components: {
    HeaderTop,
    AreYouText,
    CardInformationEmployee
  }
}
</script>


