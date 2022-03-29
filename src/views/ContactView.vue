<template>

  <ContactForm/>
  <Map/>
  <CompanyData/>
  <OurGroup/>
  <Footer/>


</template>

<script>

import Footer from '@/components/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';
import Map from '@/components/Map.vue';
import CompanyData from '@/components/CompanyData.vue';
import OurGroup from '@/components/OurGroup.vue';

export default {
  components: {
    OurGroup,
    CompanyData,
    Map,
    Footer,
    ContactForm,
  },
};

</script>
