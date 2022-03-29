<template>
  <section class="home-hero" data-aos="fade-up">
    <div class="container-fluid">
      <div class="container">

        <div class="row d-flex flex-column flex-lg-row align-items-center justify-content-between">

          <div class="col text-center text-lg-start">

            <h1>Programmatic & <span class="underline">Data solutions</span></h1>
            <h2>Sprawdź jak wdrożyć działania programmatic wspierane analizą Big Data</h2>
            <div class="d-flex flex-column flex-lg-row">
              <label for="email">
                <input class="home-hero--input" type="text" name="email" id="email" placeholder="Twój email">
              </label>
              <label for="submit-btn">
                <input class="oan-btn" name="submit-btn" id="submit-btn" type="submit" value="Wyślij">
              </label>
            </div>
          </div>

          <div class="col">
            <img class="home-hero--icon img-fluid" src="@/assets/img/hero-icon.png" alt="">
          </div>

          <div class="flex-column align-items-center d-none d-lg-flex overflow-hidden">
            <img class="home-hero--indicator" src="@/assets/img/section-indicator.png" alt="">
            <img class="home-hero--indicator-icon" src="@/assets/img/icons/arrow-down.svg" alt="">
          </div>

        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-11 text-center">
            <h3>Według IAB Europe do 2021 roku <strong>ponad 85% reklam </strong> w Europie <br> będzie realizowanych w modelu programmatic. Czas na Twoją kampanię.
            </h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";

.home-hero {

  h1 {
    @include max-lg {font-size: 39px;}
    max-width: 473px;
  }

  &--icon {
    position: relative;
    top: -13%;
  }

  &--indicator-icon {
    margin-top: -15px;
    width: 16px;
  }
}

h2 {
  font-weight: 400;
  margin-bottom: 45px;
  max-width: 550px;
}

h3 {
  font-weight: 400;
  font-size: 1.5rem;
  padding: 50px 70px;
}

:global(.home-hero--input)  {
  padding: 4px 38px;
  outline: none;
  border: none;
  border: 1px solid $gray;

  @include lg {
    margin-right: 15px;
  }

}

.oan-btn , .home-hero--input {
  @include max-lg {
    //width: 100%;
    text-align: center;
  }

}

input[type="text"] {
  @include lg { min-width: 380px !important;}
  text-align: center;

  &:focus {
    background-color: $yellow;
    border-color: $yellow;
  }

}

</style>
