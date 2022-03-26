<template>
  <section class="home-hero">
    <div class="container-fluid">
      <div class="container border">

        <div class="row">
          <div class="col border">
            <h1>Programmatic & Data solutions</h1>
            <h2>Sprawdź jak wdrożyć działania programmatic wspierane analizą Big Data</h2>
            <div>
              <label for="email">
                <input type="email" name="email" id="email" placeholder="Twój email">
              </label>
              <label for="submit-btn">
                <input name="submit-btn" id="submit-btn" type="submit" value="Wyślij">
              </label>
            </div>
          </div>
          <div class="col border">
            <img src="@/assets/img/hero-icon.png" alt="">
          </div>
        </div>

        <div class="row">
          <div class="col border text-center">
            <h3>Według IAB Europe do 2021 roku ponad 85% reklam online w Europie będzie realizowanych w modelu programmatic. Czas na Twoją kampanię.
            </h3>
            <p>W zakresie usług data & programmatic oferujemy</p>
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

<style scoped>

</style>
