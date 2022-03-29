<template>
<section class="company-data">
  <div class="container-fluid">
    <div  class="container" :style="{'background-image': 'url(' + require('@/assets/img/company-data-box-bg.png') + ')'}">
      <div class="row d-flex flex-column flex-lg-row align-items-center">
        <div class="col company-data-col company-data-col-1">
         <h3 data-aos="fade-up">Dane rejestrowe</h3>
          <p data-aos="fade-up">Online Advertising Network Sp. z o.o. <br>
            ul. Żeromskiego 7, 05-075 Warszawa
          </p>
        </div>
        <div class="col company-data-col company-data-col-2">
          <p data-aos="fade-up"> NIP: 9522167057<br>
            REGON: 36812865700000<br>
            KRS: 0000691949<br>
            Kapitał zakładowy: 250.000,00 zł</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'CompanyData',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.company-data {

  .container {
    position: relative;
    margin-top: -74px;
    background-color: #fff;
    padding: 60px 55px 40px 55px;
    @include boxShadow;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
  }

  &-col-1 {
    p {
      position: relative;
      margin: 40px 0px;
      &:after {
        content: '';
        width: 21px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 10px;
        top: -20px;
        transform: translate(-50% , 0%);
      }
      &:before {
        content: '';
        width: 21px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 10px;
        bottom: -20px;
        transform: translate(-50% , 0%);
      }
    }
  }
}


</style>
