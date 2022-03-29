<template>
<section class="map">
  <div class="container-fluid" data-aos="fade-up" :style="{'background-image': 'url(' + require('@/assets/img/map-placeholder.jpg') + ')'}">
    <div class="container">
      <div class="row d-flex justify-content-center justify-content-xl-start">
        <div class="col-12 col-lg-3  map--infobox" data-aos="fade-up">
          <div data-aos="fade-up" class="map--infobox-city h3">Warszawa</div>
          <div data-aos="fade-up" class="map--infobox-address">
            ul. Marszałkowska 89 <br>
            00-693 Warszawa
          </div>
          <a data-aos="fade-up" class="oan-btn" href="#">Pokaż dojazd</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'map',
};
</script>

<style lang="scss" scoped>

@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.map {
  margin-top:- 74px;

  .container-fluid {
    height: 50vh;
    @include max-lg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @include lg {
      height: 660px;
    }

    .row {

      @include max-lg {
        padding-top: 74px;
        padding-bottom: 144px;
      }

    }
  }

  &--infobox {
    background-color: #fff;
    padding: 30px 24px;
    max-width: 240px;

    @include max-lg {
      margin-top: 74px;
    }

    @include lg {
      margin-top: 180px;
    }

    &-city {
      position: relative;
      margin-bottom: 40px;

      &:after {
        content: '';
        width: 21px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 10px;
        bottom: -23px;
        transform: translate(-50% , 0%);
      }
    }
    a {
      display: inline-flex;
      margin-top: 30px;
    }

  }
}

</style>
