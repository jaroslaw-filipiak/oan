<template>
  <section class="our-group">
    <div class="container-fluid">
      <div class="container">

        <div class="row">
          <div class="col" data-aos="fade-up">
            <h3 class="text-center">Grupa Cloud Technologies</h3>
          </div>
        </div>

        <div class="row pt-5 pb-5">
          <div class="col d-flex justify-content-center">
            <img src="@/assets/img/cloud-technologies-footer-logo.png" alt="">
          </div>
        </div>

        <div class="row d-flex justify-content-center" data-aos="fade-up">
          <div class="col-12 col-lg-9">
            <p class="text-justify">Cloud Technologies jest liderem rynku Big Data w Polsce. Zajmuje się Big Data marketingiem i monetyzacją danych. To największa hurtownia danych w Europie i najszybciej rozwijająca się spółka na giełdzie NewConnect. Firma opracowała innowacyjne narzędzia analityczne, w zasięgu których znajduje się praktycznie każdy polski internauta. Dane Cloud Technologies pozwalają marketerom na personalizację kampanii reklamowych w Sieci oraz rozbudowywanie rozwiązań klasy BI w firmach.
            </p>
          </div>
        </div>

        <div class="our-brands row d-flex justify-content-center pb-5">

          <!-- oan-->
          <div class="our-brands--item col-12 col-lg-9 d-flex flex-column align-items-center flex-lg-row" data-aos="fade-up">
            <div class="our-brands--logo"><img src="@/assets/img/our-group-oan-logo.png" alt=""></div>
            <div class="our-brands--excerpt">
              <p>OAN - jesteśmy firmą, która łączy tradycyjne kompetencje z nowoczesnym podejściem do planowania i prowadzenia kampanii online. Realizujemy je w modelu programmatic, korzystając z wysokiej jakości danych o klientach. Prowadzimy efektywne kampanie - od strategicznego planu przez stałą optymalizację po monitorowanie efektów. W działaniach wykorzystujemy dane o internautach, najważniejsze kanały i formaty reklamowe.
              </p>
            </div>
          </div>

          <!-- Audience Network-->
          <div class="our-brands--item col-12 col-lg-9 d-flex flex-column align-items-center flex-lg-row" data-aos="fade-up">
            <div class="our-brands--logo"><img src="@/assets/img/our-group-an-logo.png" alt=""></div>
            <div class="our-brands--excerpt">
              <p>Audience Network zajmuje się kompleksową obsługą reklamodawców w zakresie Data Consultingu i dotarcia do odbiorców z komunikatem przy użyciu m.in. narzędzi OnAudience.com. Posiada niezwykle doświadczony Trading Desk mający dostęp do najpopularniejszych reklamowych marketplace’ów w Europie. Realizuje kampanie retargetingowe, a także oferuje wyjątkowe rozwiązania analizy ruchu i konwersji w witrynach.

              </p>
            </div>
          </div>

          <!-- OnAudience.com -->
          <div class="our-brands--item col-12 col-lg-9 d-flex flex-column align-items-center flex-lg-row" data-aos="fade-up">
            <div class="our-brands--logo"><img src="@/assets/img/our-group-onaudience-logo.png" alt=""></div>
            <div class="our-brands--excerpt">
              <p>OnAudience.com to działająca na 40 rynkach platforma dla reklamodawców i wydawców oferująca kompleksowe produkty pozwalające skutecznie wzbogacać i monetyzować dane. Posiada unikatową technologię DMP (Data Management Platform) do integracji i zarządzania danymi pochodzącymi z różnych źródeł. OnAudience.com posiada także największy zbiór danych 3rd party w Europie składający się z ponad 50 mld profili internautów z całego świata.

              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurGroup',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.our-group {
  padding-top: 90px;
}

.our-brands {
  &--item {
    margin-top: 40px;
  }
  &--logo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 30%;
    @include max-lg {
      margin-bottom: 30px;
    }
  }
  &--excerpt {
    padding-left: 30px;
    position: relative;
    @include lg {
      &:before {
        content: '';
        width: 21px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 40px;
        top: -30px;
        transform: translate(-50% , 0%);
      }
    }

  }
}
</style>
