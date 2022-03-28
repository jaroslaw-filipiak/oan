<template>
<section class="home-features" >
  <div class="container-fluid">
    <div class="container">
      <div class="row" data-aos="fade-up">
        <div class="col text-center">
          <h3>W zakresie usług data & programmatic oferujemy</h3>
        </div>
      </div>
      <div class="row">
        <!-- trading desk-->
        <div class="col-6 home-feauters--item" data-aos="fade-up">
            <div>
              <img src="@/assets/img/trading-desk-icon.png" alt="">
            </div>
            <div>
              <h4>Trading Desk</h4>
              <p>Nauczymy Cię jak samodzielnie rozpocząć przygodę z programmatic.</p>
              <a class="oan-btn" href="#">Więcej</a>
            </div>
        </div>

        <!-- Dane oraz technologia DMP-->
        <div class="col-6 home-feauters--item" data-aos="fade-up">
          <div>
            <img src="@/assets/img/trading-desk-icon.png" alt="">
          </div>
          <div>
            <h4>Dane oraz technologia DMP</h4>
            <p>Segmenty wysokiej jakości danych stworzone specjalnie na potrzeby Twojej kampanii, np. rowerzyści w Twoim mieście.
            </p>
            <a class="oan-btn" href="#">Więcej</a>
          </div>
        </div>

        <!-- Dedykowane modele zwiększające konwersje-->
        <div class="col-6 home-feauters--item" data-aos="fade-up">
          <div>
            <img src="@/assets/img/trading-desk-icon.png" alt="">
          </div>
          <div>
            <h4>Dedykowane modele zwiększające konwersje
            </h4>
            <p>Przeprowadzimy analizę użytkowników Twojego serwisu oraz powiemy czym kierują się wybierając Twój produkt.
            </p>
            <a class="oan-btn" href="#">Więcej</a>
          </div>
        </div>

        <!-- Kampanie programmatic -->
        <div class="col-6 home-feauters--item" data-aos="fade-up">
          <div>
            <img src="@/assets/img/trading-desk-icon.png" alt="">
          </div>
          <div>
            <h4>Kampanie programmatic
            </h4>
            <p>Prowadzimy skuteczne kampanie programmatic maksymalizujące sprzedaż.</p>
            <a class="oan-btn" href="#">Więcej</a>
          </div>
        </div>

        <!-- Optymalizacja kampanii reklamowych-->
        <div class="col-6 home-feauters--item" data-aos="fade-up">
          <div>
            <img src="@/assets/img/trading-desk-icon.png" alt="">
          </div>
          <div>
            <h4>Optymalizacja kampanii reklamowych
            </h4>
            <p>Wykorzystujemy technologię do zwiększania skuteczności Twoich kampanii.</p>
            <a class="oan-btn" href="#">Więcej</a>
          </div>
        </div>

        <!-- Szkolenia programmatic & data-->
        <div class="col-6 home-feauters--item" data-aos="fade-up">
          <div>
            <img src="@/assets/img/trading-desk-icon.png" alt="">
          </div>
          <div>
            <h4>Szkolenia programmatic & data</h4>
            <p>Prowadzimy szkolenia dla marketerów z zakresu wykorzystania danych i technologii w kampaniach programmatic.</p>
            <a class="oan-btn" href="#">Więcej</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style  lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";

.home-feauters {
  &--item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 50px;
    border: 1px solid $gray;

    @include max-lg {
      width: 100%;
      text-align: center;
    }

    @include xl {
      flex-direction: row;
      align-items: flex-start;
    }

    h4 {
      margin-bottom: 25px !important;
      margin-top: 25px !important;
      @include lg {
        margin-bottom: 50px !important;
      }
    }

    .oan-btn {
      display: inline-block;
      margin-top: 25px !important;
      @include lg {
        margin-top: 35px !important;
      }
    }

    img {
      @include max-lg {
        transform: scale(.7);
      }
      @include xl {
        padding-right: 25px;
        padding-top: 30px;
      }

    }
  }
}

h3 {
  margin-bottom: 44px;
}
</style>
