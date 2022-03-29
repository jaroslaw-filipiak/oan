<template>
<section class="counters">
  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col text-center" data-aos="fade-up">
          <h3>OAN w <span class="underline">liczbach</span> </h3>
        </div>
      </div>

      <div class="row d-flex align-items-center justify-content-center counters--items-wrapper" >

        <div class="col counter-item" data-aos="fade-up">
          <div class="d-flex align-items-center">
            <img src="@/assets/img/counter-1.png" alt="">
            <div class="counter--value">80</div>
          </div>
          <p>Analizujemy 80 mln plików cookies polskich internautów</p>
        </div>

        <div class="col counter-item" data-aos="fade-up">
          <div class="d-flex align-items-center">
            <img src="@/assets/img/counter-2.png" alt="">
            <div class="counter--value">950</div>
          </div>
          <p>Ponad 950 zrealizowanych kampanii rocznie</p>
        </div>

        <div class="col counter-item" data-aos="fade-up">
          <div class="d-flex align-items-center">
            <img src="@/assets/img/counter-3.png" alt="">
            <div class="counter--value">70</div>
          </div>
          <p>Ponad 700 klientów rocznie</p>
        </div>

      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Counters',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.counters {
  padding-top: 80px;
  padding-bottom: 80px;

  &--items-wrapper {
    @include lg {
      gap: 150px;
    }
  }

  h3 {
    margin-bottom: 70px;
  }

  .counter-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    text-align: center;
    border: 1px solid #fff;

    @include max-lg {
      min-width: 80%;
      margin-bottom: 60px;
    }

    .counter--value {
      font-weight: bold;
      font-size: 60px;
      color: #dddddd;
    }

    p {
      margin-top: 20px;
      position: relative;

      &:after {
        content: '';
        width: 21px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translate(-50% , 0%);
      }

    }


  }

}

</style>
