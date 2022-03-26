<template>

  <Hero/>
  <Features/>
  <Cta/>
  <Why-us/>
  <Steps/>
  <Testimonials/>
  <Logos-slider/>
  <Cta/>
  <Footer/>

</template>

<script>

import Hero from '@/components/Hero.vue';
import Features from '@/components/Features.vue';
import Cta from '@/components/Cta.vue';
import WhyUs from '@/components/Why-us.vue';
import Steps from '@/components/Steps.vue';
import Testimonials from '@/components/Testimonials.vue';
import LogosSlider from '@/components/Logos-slider.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
    LogosSlider,
    Testimonials,
    Steps,
    WhyUs,
    Cta,
    Features,
    Hero,
  },
};

</script>
