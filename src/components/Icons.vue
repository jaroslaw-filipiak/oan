<template>
  <section class="icons" :class="theme" data-aos="fade-up">
    <div class="container-fluid">
      <div class="container">

        <div class="row">
          <div class="col text-center">
            <h3>
              <slot name="title"></slot>
            </h3>
          </div>
        </div>

        <div class="row d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center icons--items-wrapper" data-aos="fade-up">
          <slot name="icons"></slot>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps(['theme']);
console.log(props.theme);

</script>

<style lang="scss">
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.icons {
  padding-top: 80px;
  padding-bottom: 80px;

  &--items-wrapper {
    @include lg {
      gap: 80px;
    }
    @include xxl {
      gap: 80px;
    }
  }

  h3 {
    max-width: 550px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 70px;
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid #fff;

    @include max-lg {
      min-width: 80%;
      margin-bottom: 60px;
    }


  }

  // variations props styles
  // ============================

  &__layout-1 {

    .icon-item {
      @include boxShadow;
      padding: 24px 40px 54px 40px;
      max-width: 300px;

      @include lg {
        max-width: 310px;
        min-width: 310px;
        height: 290px;
      }
      @include xl {
        height: 290px;
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

  &__layout-2 {

    .icon-item {

      p {
        @include max-lg {
          text-align: center;
        }
        margin-top: 20px;
        text-align: left;
      }
    }
  }

}

</style>
