<template>
<section class="why-us" data-aos="fade-up">
  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col text-center" data-aos="fade-up">
          <h3>Dlaczego <span class="underline">programmatic?</span>
          </h3>
        </div>
      </div>

      <!--table start-->
      <div class="row why-us-table--container" >

        <div class="row d-flex justify-content-center">
          <div class="why-us-table--header col-12 col-lg-8">

            <div class="why-us-table--row why-us-table--header row d-flex justify-content-center" style="width: 100%">
              <div class="col col-4 d-flex align-items-center justify-content-center ">
              </div>
              <div class="col col-4 d-flex align-items-center justify-content-center ">
                Zakup mediów w modelu programmatic
              </div>
              <div class="col col-4 d-flex align-items-center justify-content-center ">
                Zakup mediów w modelu tradycyjnym
              </div>
            </div>

          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="why-us-table--body col-12 col-lg-8">

            <!-- row-->
            <div class="why-us-table--row row d-flex justify-content-center">
              <div class="col col-4 border d-flex align-items-center justify-content-start">
                Personalizcja przekazu
              </div>
              <div class="col col-4 border d-flex align-items-center justify-content-center why-us-table--stars">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
              </div>
              <div class="col col-4 border d-flex align-items-center justify-content-center why-us-table--stars">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-outline.svg" alt="">
              </div>
            </div>

            <!-- row-->
            <div class="why-us-table--row row d-flex justify-content-center">
              <div class="col col-4 border d-flex align-items-center justify-content-start">
                Wybór dystrybutorów danych
              </div>
              <div class="col col-4 border d-flex align-items-center justify-content-center why-us-table--stars">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
              </div>
              <div class="col col-4 border d-flex align-items-center justify-content-center why-us-table--stars">
                <img src="@/assets/img/icons/star-outline.svg" alt="">
                <img src="@/assets/img/icons/star-outline.svg" alt="">
                <img src="@/assets/img/icons/star-outline.svg" alt="">
              </div>
            </div>

            <!-- row-->
            <div class="why-us-table--row row d-flex justify-content-center">
              <div class="col col-4 border d-flex align-items-center justify-content-start">
                Zasięg kampanii
              </div>
              <div class="col col-4 border d-flex align-items-center justify-content-center why-us-table--stars">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
              </div>
              <div class="col col-4 border d-flex align-items-center justify-content-center why-us-table--stars">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-filled.svg" alt="">
                <img src="@/assets/img/icons/star-outline.svg" alt="">
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'why-us',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.why-us {
  padding-top: 90px;
  padding-bottom: 110px;


  &-table--header {
    background-color: $blue;
    color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    padding: 0px 4px;
    @include boxShadow;
    @include lg {
      font-size: 18px;
      font-weight: bold;
      padding: 10px 4px;
    }
  }

  &-table--row {
    .col {
      padding: 10px 5px;
      @include lg {
        height: 53px;
      }
    }
  }

  &-table--stars {
    gap: 3px;
    @include lg {
      gap: 5px;
    }

    img {
      width: 16px;
      @include lg {
        width: 21px;
      }
    }

  }

  &-table--body {
    position: relative;
    @include boxShadow;

    @include max-lg {
      font-size: 12px;
    }

    @include lg {
      &:after {
        content: '';
        display: block;
        width: 36%;
        height: 180%;
        border: 2px solid $yellow;
        position: absolute;
        left: 50%;
        top: -110px;
        border-radius: 10px;
        transform: translate(-50% , 0%);
      }
    }

  }

  h3 {
    margin-bottom: 70px;
  }
}

</style>
