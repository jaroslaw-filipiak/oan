<template>
<section class="testimonials">
  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col text-center" data-aos="fade-up">
          <h3>Zmieniamy potrzeby w efekty</h3>
        </div>
      </div>

        <carousel  :wrap-around="true" :items-to-show="1.0">

          <slide v-for="slide in 10" :key="slide">
            <div class="testimonial" data-aos="fade-up">
              <div class="testimonial--quote-1 d-none d-xl-block">
                <img src="@/assets/img/quote-1.png" alt="">
              </div>
              <div class="testimonial--quote-2 d-none d-xl-block">
                <img src="@/assets/img/quote-2.png" alt="">
              </div>
              <div class="testimonial--content">
                <p>"OAN to świetny doradca na każdym etapie współpracy. Dzięki propozycji odpowiednich kanałów dotarcia, znacząco podnieśliśmy wskaźniki efektywnościowe w naszych kampaniach."
                </p>
              </div>
              <div class="testimonial--footer">
                <div class="testimonial--person">Małgorzata Daniłczuk</div>
                <div class="testimonial--subinfo">
                  Kierownik Działu Marketingu
                  J.W. Construction Holding S.A.
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>


      <div class="flex-column align-items-center d-none d-lg-flex overflow-hidden section-indicator--wrapper">
        <img class="section-indicator" src="@/assets/img/section-indicator-2.png" alt="">
      </div>

    </div>
  </div>
</section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Navigation,
} from 'vue3-carousel';

export default {
  name: 'testimonials',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

:global(.carousel__viewport) {
  padding: 0px !important;
}


:global(.carousel__prev) {
  background-color: transparent !important;
  color: $accent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  transform: scale(4);
}

:global(.carousel__next) {
  background-color: transparent !important;
  color: $accent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  transform: scale(4);
}

.testimonials {

  h3 {
    margin: 60px 0px 30px 0px;
  }
}

.testimonial {
  padding: 30px 25px;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    z-index: 2;
  }

  @include lg {
    min-width: 850px;
    max-width: 850px;
    padding: 46px 34px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-bottom: 30px;
    @include boxShadow;
  }


  &--quote-1 {
    position: absolute;
    left: -35px;
    top: -44px;
    z-index: 1;
  }

  &--quote-2 {
    position: absolute;
    right: -35px;
    bottom: -44px;
    z-index: 1;
  }

  &--content {
    p {
      font-size: 24px;
      font-weight: 300;
      font-style: italic;
      position: relative;
      z-index: 3;

      &:after {
        content: '';
        display:block;
        width: 22px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 50%;
        bottom: -34px;
        transform: translate(-50% , -50%);
      }

    }

  }

  &--footer {
    padding-top: 35px;
  }

  &--person {
    position: relative;
    font-weight: bold;
    font-size: 18px;
    z-index: 3;
  }

  &--subinfo {
    z-index: 3;
    position: relative;
    font-size: 18px;
    max-width: 260px;
    text-align: center;
    margin: 0 auto;
  }
}

.section-indicator--wrapper {
  margin-top: 30px;
}

</style>
