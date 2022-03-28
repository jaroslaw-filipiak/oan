<template>

  <AboutUsHero/>
  <CompanyTimeline/>
  <Counters/>

  <Cta>
    <template v-slot:col1>
      <div class="col cta-col cta-col-1 text-center">
        <h3>Czekamy na Ciebie:</h3>
        <p>Porozmawiajmy o precyzyjnym dotarciu do Twoich klientów:</p>
        <a class="oan-btn" href="#">Kontakt</a>
      </div>
    </template>
  </Cta>

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
