<template>
<section class="logos-slider">
  <div class="container-fluid">
    <div class="container">
      <div class="row d-flex flex-xl-nowrap align-items-center justify-content-center">
        <div class="logos-slider--logo col col-sm-6 col-xl-2">
          <img src="@/assets/img/logos/jw-logo.png" alt="">
        </div>
        <div class="logos-slider--logo col col-sm-6 col-xl-2">
          <img src="@/assets/img/logos/sn-logo.png" alt="">
        </div>
        <div class="logos-slider--logo col col-sm-6 col-xl-2">
          <img src="@/assets/img/logos/get-response-logo.png" alt="">
        </div>
        <div class="logos-slider--logo col col-sm-6 col-xl-2">
          <img src="@/assets/img/logos/ecocar-logo.png" alt="">
        </div>
        <div class="logos-slider--logo col col-sm-6 col-xl-2">
          <img src="@/assets/img/logos/pg-logo.png" alt="">
        </div>
        <div class="logos-slider--logo col col-sm-6 col-xl-2">
          <img src="@/assets/img/logos/ipg-logo.png" alt="">
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'logos-slider',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.logos-slider {
  margin-top: 80px;
  margin-bottom: 80px;

  &--logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}



</style>
