<template>
  <GDPRhero/>

  <Icons theme="icons__layout-1" data-aos="fade-up">
    <template v-slot:title>
     Zbieranie oraz <span class="underline">anonimizowanie</span> danych
    </template>

    <template v-slot:icons>
      <div class="col icon-item">
        <div class="d-flex align-items-center">
          <img src="@/assets/img/data-icon-1.png" alt="">
        </div>
        <p>Pozyskujemy surowe dane</p>
      </div>

      <div class="col icon-item">
        <div class="d-flex align-items-center">
          <img src="@/assets/img/data-icon-1.png" alt="">
        </div>
        <p>Informacje są poddawane procesowi anonimizacji</p>
      </div>

      <div class="col icon-item">
        <div class="d-flex align-items-center">
          <img src="@/assets/img/data-icon-1.png" alt="">
        </div>
        <p>Przechowujemy i udostępniamy wyłącznie anonimowe dane</p>
      </div>
    </template>

  </Icons>

  <Icons theme="icons__layout-2" data-aos="fade-up">
    <template v-slot:title>
     Wykorzystujemy wysokiej jakości dane w zgodzie z regulacjami RODO
    </template>

    <template v-slot:icons>
      <div class="col icon-item">
        <div class="d-flex align-items-center">
          <img src="@/assets/img/rodo-icon-1.png" alt="">
        </div>
        <p>EY Law wykonało analizę prawną platformy OnAudience.com, z której pozyskujemy dane o Internautach.
        </p>
        <p> Zgodność naszych usług z RODO potwierdziły analizy prawne</p>
      </div>

      <div class="col icon-item">
        <div class="d-flex align-items-center">
          <img src="@/assets/img/rodo-icon-2.png" alt="">
        </div>
        <p>Jakość danych o Internautach, które pozyskujemy z platformy OnAudience.com, została zweryfikowana testem Nielsen DAR.
          <a href="#">Zobacz wyniki testów naszych danych.</a>
        </p>
        <p> Badanie Nielsen DAR potwierdziło wysoką jakość naszych danych</p>
      </div>

      <div class="col icon-item">
        <div class="d-flex align-items-center">
          <img src="@/assets/img/rodo-icon-3.png" alt="">
        </div>
        <p>Platforma OnAudience.com, z której korzystamy, przetwarza wyłącznie anonimowe dane. Zobacz jak OnAudience.com przygotował się do RODO i
          <a href="#">jak anonimizuje dane.</a>
        </p>
        <p> Przetwarzamy wyłącznie anonimowe dane</p>
      </div>
    </template>

  </Icons>

  <Cta>
    <template v-slot:col1>
      <div class="col cta-col cta-col-1 text-center">
        <h3>Chcesz dowiedzieć się więcej o naszej polityce prywatności ?</h3>
        <a class="oan-btn" href="#">Napisz do nas</a>
      </div>
    </template>
  </Cta>

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
