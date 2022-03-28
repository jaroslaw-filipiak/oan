<template>
<section data-aos="fade-up" :style="{'background-image': 'url(' + require('@/assets/img/about-us-hero-bg.png') + ')'}" class="about-us-hero">
  <div class="container-fluid">
    <div class="container">
      <div class="row d-flex flex-column flex-lg-row flex-lg-nowrap align-items-lg-start justify-content-center">
        <div class="col text-center text-lg-start" data-aos="fade-up">
          <h1>Online Advertising Network</h1>
        </div>
        <div class="col">
          <div class="about-us-hero--slider-wrapper">
            <carousel  :wrap-around="true" :items-to-show="1.0">
              <slide v-for="slide in 3" :key="slide">
                <div class="about-us-hero--slide" data-aos="fade-up">
                  <h4>Nowoczesne kampanie programmatic zasilane analityką Big Data</h4>
                  <p>Łączymy tradycyjne kompetencje z nowoczesnym podejściem do planowania i prowadzenia kampanii online. Realizujemy je w modelu programmatic, korzystając z wysokiej jakości danych o klientach.
                  </p>
                  <div class="about-us-hero--number">
                    {{slide}}
                  </div>
                </div>
              </slide>

              <template #addons>
                <div class="about-us-hero--slider__nav" data-aos="fade-up">
                  <navigation />
                </div>

                <pagination/>
              </template>
            </carousel>
          </div>
        </div>
      </div>

      <div class="row justify-content-center pt-3 d-none d-lg-flex">
        <img style="max-width: 600px;"  src="@/assets/img/about-hero-indicator.png" alt="">
      </div>
    </div>
  </div>
</section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Navigation, Pagination,
} from 'vue3-carousel';

export default {
  name: 'AboutUsHero',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
};
</script>

<style lang="scss" scoped>

@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.about-us-hero {
  background-size: 40%;
  background-position: left 85%;
  background-repeat: no-repeat;
  padding-bottom: 65px;
  padding-top: 30px;

  @include max-lg {
    background-size: 0%;
  }

  @include xl {
    background-size: 50%;
    background-position: 5% 25%;
  }

  &--slider-wrapper {
    max-width: 660px;
    padding: 34px 36px 0px 36px;
    border-radius: 15px;
    background-color: #fff;
    @include boxShadow;
  }

  &--slider__nav {
    position: relative;
    top: -54px;
    z-index: 3;
  }

  &--slide {
    position: relative;
    margin-bottom: 40px;
    h4 {
      margin-bottom: 50px;
    }

    p {
      margin-bottom: 50px;
      @include xl {
        margin-bottom: 80px;
      }
    }

  }

  &--number {
    color: #f4f4f4;
    font-weight: bold;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: -47px;
    transform: translate(-50%, 0%);
    text-align: center;
  }

  h1 {
    @include max-lg {
      margin-bottom: 30px;
      font-size: 39px;
    }

    @include lg {
      max-width: 320px;
      margin-bottom: 0px;
    }
  }

  :global(.carousel__prev) {
    background-color: transparent !important;
    color: $accent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    transform: scale(2) !important;
  }

  :global(.carousel__next) {
    background-color: transparent !important;
    color: $accent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    transform: scale(2) !important;
  }

  :global(.carousel__next:hover) {
    opacity: .8;
  }
  :global(.carousel__prev:hover) {
    opacity: .8;
  }

  :global(.carousel__pagination) {
    padding-left: 0px;
    top: -54px !important;
    position: relative;
  }

  :global(.carousel__pagination-button--active) {
    background-color: $yellow !important;
  }
  :global(.carousel__pagination-button) {
    background-color: $accent;
    border-radius: 0px;
    width: 20px;
    height: 5px;
  }
  :global(.carousel__pagination-button:hover) {
    opacity: .8;
  }

}

</style>
