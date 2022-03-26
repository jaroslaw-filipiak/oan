<template>

  <ContactForm/>
  <Map/>
  <Footer/>

</template>

<script>

import Footer from '@/components/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';
import Map from '@/components/map.vue';

export default {
  components: {
    Map,
    Footer,
    ContactForm,
  },
};

</script>
