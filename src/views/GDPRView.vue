<template>
  <GDPRhero/>
  <Icons/>
  <Icons/>
  <Cta/>
  <Footer/>

</template>

<script>

import Cta from '@/components/Cta.vue';
import Footer from '@/components/Footer.vue';
import GDPRhero from '@/components/GDPRhero.vue';
import Icons from '@/components/Icons.vue';

export default {
  components: {
    Icons,
    GDPRhero,
    Cta,
    Footer,
  },
};

</script>
