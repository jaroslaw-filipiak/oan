<template>
<section class="contact-form">
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col border">
          <h3>Cześć</h3>
          <p>Napisz do nas i porozmawiajmy, jak dotrzeć do twoich nowych klientów.</p>
          <p>Online Advertising Network Sp. z o.o. <br>
            ul. Zajęcza 4<br>
            00-351 Warszawa<br>
            team@oan.pl<br>
            (+48) 606 414 898<br>
          </p>
        </div>
        <div class="col border">

          <form action="">

            <label for="name">
              <input type="text" id="name" placeholder="imię i nazwisko">
            </label>

            <label for="email">
              <input type="email" id="email" placeholder="E-mail">
            </label>

            <label for="message">
              <textarea name="message" id="message" cols="30" rows="10"> </textarea>
            </label>

            <input type="submit" value="Wyślij">

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

<style scoped>

</style>
