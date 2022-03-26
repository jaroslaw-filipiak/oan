<template>
<section class="counters">
  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col">
          <h3>OAN w liczbach</h3>
        </div>
      </div>

      <div class="row">

        <div class="col border counter-item">
          <img src="@/assets/img/counter-1.png" alt="">
          <div class="counter--value">80</div>
          <p>Analizujemy 80 mln plików cookies polskich internautów</p>
        </div>

        <div class="col border counter-item">
          <img src="@/assets/img/counter-2.png" alt="">
          <div class="counter--value">950</div>
          <p>Ponad 950 zrealizowanych kampanii rocznie</p>
        </div>

        <div class="col border counter-item">
          <img src="@/assets/img/counter-3.png" alt="">
          <div class="counter--value">70</div>
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

<style scoped>

</style>
