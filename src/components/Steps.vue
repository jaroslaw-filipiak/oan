<template>
<section class="steps">
  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col text-center">
          <h3>Skuteczność Twoich kampanii to nasz priorytet:</h3>
        </div>
      </div>

      <div class="row steps--wrapper">

        <div class="col step step-1">
          <img src="@/assets/img/step-1-icon.png" alt="">
          <p>Zwiększamy konwersję dzięki precyzyjnemu planowaniu kampanii</p>
        </div>

        <div class="col step step-2">
          <img src="@/assets/img/step-2-icon.png" alt="">
          <p>Zmniejszamy koszty dotarcia wykorzystując profilowanie użytkowników</p>
        </div>

        <div class="col step step-3">
          <img src="@/assets/img/step-3-icon.png" alt="">
          <p>Generujemy więcej leadów dzięki dotarciu przez właściwe kanały reklamowe</p>
        </div>

      </div>

    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'steps',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.steps {
  background-color: $bg-gray;
  margin-bottom: 100px;
  width: 100%;
  max-width: 100%;
  @include max-lg {
    padding-bottom: 75px;
  }

  &--wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include lg {
      gap: 20px;
      flex-direction: row;
    }

    @include xl {
      gap: 94px;
      flex-direction: row;
    }
  }

  h3 {
    padding: 75px 0px;
  }

  .step {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 34px;
    position: relative;

    @include boxShadow;
    @include lg {
      top: 30px;
    }

    &:after {
      content: "";
      color: #d8d8d8;
      font-size: 150px;
      position: absolute;
      right: -90px;
      top: 50%;
      font-weight: bold;
      transform: translate(-50%, -50%);
      z-index: 1;
      display: none;
      @include xl {
        display: block;
      }

    }

    &:before {
      content: "";
      background-color: #fff;
      position: absolute;
      right: 0px;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }


    &-1 {
      &:after {
        content: '1';
      }
    }

    &-2 {
      &:after {
        content: '2';
        right: -115px;
      }
    }

    &-3 {
      &:after {
        content: '3';
        right: -100px;
        @include xxl {
          right: -115px;
        }
      }
    }

    p , img {
      z-index: 4;
    }

    p {
      font-size: 18px;
      margin: 20px 0px 35px 0px;
      position: relative;

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

}

</style>
