<template>
<section class="company-timeline" id="company-timeline">

  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col text-center">
          <h3>Jak się rozwijaliśmy</h3>
        </div>
      </div>

      <div class="flex-column align-items-center d-none d-lg-flex overflow-hidden mb-4 position-relative">
        <img class="indicator" src="@/assets/img/section-indicator.png" alt="">
        <img class="indicator-icon" src="@/assets/img/icons/arrow-down.svg" alt="">
      </div>

    </div>
  </div>

  <div class="container-fluid bg-gray">
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center" style="position:relative;">

          <carousel  :wrap-around="true" :items-to-show="1.0">

            <slide v-for="slide in 6" :key="slide">
              <div class="company-timeline--item">
                <div>
                  <img src="@/assets/img/2012-icon.png" alt="">
                </div>
                <div class="text-center text-lg-start">
                  <h5 class="h3">2012</h5>
                  <p>Startujemy - powstaje internetowa sieć reklamowa Online Advertising Network, specjalizująca się w monetyzacji powierzchni reklamowych wydawców.
                  </p></div>
              </div>
            </slide>

              <template #addons>

                <div class="company-timeline--slider__pagination d-none d-lg-block">
                  <pagination />
                </div>

                <div class="company-timeline--slider__nav" data-aos="fade-up">
                  <navigation />
                </div>
              </template>

          </carousel>

        </div>
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
  name: 'CompanyTimeline',
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

.company-timeline {
  h3 {
    margin-bottom: 90px;
  }

  .bg-gray {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  &--slider__nav {
    z-index: 3;
    position: absolute;
    top: 50%;
    width: 100%;
  }

  :global(.carousel__pagination-button) {
    background-color: #00a6eb;
    border-radius: 50px;
    width: 11px;
    height: 11px;
    position: relative;
  }

  :global(li.carousel__pagination-item) {
    position: relative !important;
  }

  ::v-deep(li.carousel__pagination-item button) {
    position: absolute !important;
    left: 0 !important;
    top: -10px !important;
    z-index: 99 !important;
  }

  :global(.carousel__prev) {
    background-color: transparent !important;
    position: absolute;
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

    cursor: pointer;
    transform: scale(2) !important;
  }


  .carousel__pagination {
    padding-left: 0px;
    top: -155px !important;
    position: absolute;
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &::after {
      content: '';
      width: 100%;
      height:2px;
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      border-top: 1px dashed $blue;
      z-index: 1;
    }

  }

  &--item {
    background-color: #fff;
    border-radius: 15px;
    padding: 16px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include lg {
      max-width: 830px;
      flex-direction: row;
      padding: 16px 29px;
      @include boxShadow;
    }

    img {
      padding-right: 14px;
    }

    p {

    }
  }

  .carousel {
    max-width: 85%;
    @include lg {
      max-width: 944px;
    }
  }

}

.icon {
  position: relative;
  top: -13%;
}

.indicator {
  margin-bottom: 80px;
}

.indicator-icon {
  position: absolute;
  top: 16px;
  width: 14px;
}

</style>
