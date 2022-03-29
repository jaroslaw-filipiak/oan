<template>
<section class="contact-form" data-aos="fade-up">
  <div class="container-fluid">

    <div class="container box-shadow">

      <div class="row d-flex flex-column flex-lg-row">

        <div  class="col col-lg-5 pb-5 pb-lg-0" data-aos="fade-up">
          <h1><span class="underline">Cześć</span></h1>
          <p>Napisz do nas i porozmawiajmy, jak dotrzeć do twoich nowych klientów.</p>
          <p>Online Advertising Network Sp. z o.o. <br>
            ul. Zajęcza 4<br>
            00-351 Warszawa<br>
            team@oan.pl<br>
            (+48) 606 414 898<br>
          </p>
        </div>

        <div  class="col col-lg-7 d-flex justify-content-end" data-aos="fade-up">

          <form action="" data-aos="fade-up">

            <label for="name">
              <input type="text" id="name" placeholder="imię i nazwisko">
            </label>

            <label for="email">
              <input type="email" id="email" placeholder="E-mail">
            </label>

            <label for="message">
              <textarea placeholder="Tu napisz w czym możemy pomóc" name="message" id="message" cols="30" rows="10"></textarea>
            </label>

            <div class="d-flex justify-content-end">
              <input class="oan-btn" type="submit" value="Wyślij">
            </div>

          </form>

        </div>
      </div>

    </div>

  </div>
</section>
</template>

<script>
export default {
  name: 'ContactForm',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.contact-form {
  position: relative;
  z-index: 2;

  .container {
    padding: 60px 55px;
    margin-top: 20px;
    background-color: #fff;
  }

  p{
    margin-top: 40px;
    position: relative;

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
  }

  form {
    @include max-lg {
      max-width: 100%;
    }
    max-width: 506px;
    label {
      width: 100%;
    }
    input:not([type="submit"]) , textarea {
      width: 100%;
      margin-bottom: 20px;
      border: 1px solid $gray;
      padding: 5px 15px;
    }
    input[type="submit"] {
      @include max-lg {
        display: inline-flex;
      }

      margin-top: 20px;
    }
  }
}

.box-shadow {
  @include boxShadow;
}

input[type="text"] , textarea {
  @include lg { min-width: 380px !important;}
  outline: none;

  &:focus {
    background-color: $yellow;
    border-color: $yellow;
  }


}


</style>
