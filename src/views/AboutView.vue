<template>

  <AboutUsHero/>
  <CompanyTimeline/>
  <Counters/>
  <Cta/>
  <Footer/>

</template>

<script>

import Footer from '@/components/Footer.vue';
import AboutUsHero from '@/components/AboutUsHero.vue';
import CompanyTimeline from '@/components/CompanyTimeline.vue';
import Counters from '@/components/Counters.vue';
import Cta from '@/components/Cta.vue';

export default {
  components: {
    Cta,
    Counters,
    CompanyTimeline,
    AboutUsHero,
    Footer,
  },
};

</script>
