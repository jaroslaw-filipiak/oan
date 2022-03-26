<template>
<section class="why-us">
  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col text-center">
          <h3>Dlaczego programmatic?
          </h3>
        </div>
      </div>

      <div class="row">

        <div class="why-us-table--header">
          <div v-for="n in 1" v-bind:key="n" class="why-us-table--row row border d-flex justify-content-center">
            <div class="col-3"></div>
            <div class="col-3">
              Zakup mediów w modelu programmatic
            </div>
            <div class="col-3">
              Zakup mediów w modelu tradycyjnym
            </div>
          </div>
        </div>

        <div class="why-us-table--body">
          <div v-for="n in 12" v-bind:key="n" class="why-us-table--row row border d-flex justify-content-center">
            <div class="col-3">
              {{n}} Zakup mediów w modelu programmatic
            </div>
            <div class="col-3">
              stars
            </div>
            <div class="col-3">
             stars
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'why-us',
};
</script>

<style scoped>

</style>
