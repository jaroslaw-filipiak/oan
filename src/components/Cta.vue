<template>
<section class="cta">
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <slot name="col1"></slot>
        <slot name="col2"></slot>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'cta',
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";

.cta {
  background-color: $blue;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #fff;

  .row {
    display: flex;
    flex-direction: column;
    @include lg {
      flex-direction: row;
    }
  }

  p {
    font-size: 18px;
  }

  &-col-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      max-width: 60%;
    }
  }

  &-col-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    @include max-lg {
      padding-top: 40px;
    }
  }

  .oan-btn {
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 40px;
  }
}

</style>
