<template>
  <section class="content-page">
    <div class="container-fluid">
      <div class="container">

        <div class="row pb-3">
          <div class="col"><h3>Polityka Prywatności</h3></div>
        </div>

        <div class="row">
          <div class="col">

            <h4> 1. Informacje ogólne</h4>

            <ul>
              <li>W niniejszej Polityce prywatności określenia “my”, “nasza” odnosi się do spółki pod firmą Online Advertising Network Sp. z o.o. z siedzibą w Warszawie (05-075), przy ul. Żeromskiego 7, wpisaną do rejestru przedsiębiorców prowadzonego przez Sąd Rejonowy dla m.st. w Warszawy w Warszawie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem 0000524099, NIP: 9512384089, REGON: 147425174.
              </li>

              <li>
                Niniejsza Polityka ma zastosowanie w odniesieniu do świadczonych przez nas usług reklamowych w Internecie. Usługi reklamowe obejmują m.in. usługi reklamowe oparte o zainteresowania użytkowników oraz o usługi retargetingu.
              </li>

              <li>Skontaktować się można z nami tradycyjnie, pisząc na adres naszej siedziby, mailowo (team@oan.pl) i telefonicznie (225353050).
              </li>

              <li>W każdym przypadku dotyczącym przetwarzania danych można się skontaktować z osobą odpowiedzialną za ochronę danych pod następującym adresem: privacy@oan.pl
              </li>
            </ul>

          </div>

        </div>

      </div>
    </div>
  </section>
  <Cta>
    <template v-slot:col1>
      <div class="col cta-col cta-col-1 text-center">
        <h3>Porozmawiajmy o zwiększeniu konwersji</h3>
        <a class="oan-btn" href="#">Napisz do nas</a>
      </div>
    </template>
  </Cta>
  <Footer/>
</template>


<script>
import Cta from '@/components/Cta.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Cta,
    Footer,
  },
};
</script>
