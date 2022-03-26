<template>
<footer>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col border">
          <strong>oan</strong> part of <img src="@/assets/img/cloud-technologies-footer-logo.png" alt="">
        </div>
        <div class="col border">
          <router-link :to="{ name: 'home'}">Oferta</router-link>
          <router-link :to="{ name: 'about'}">O nas</router-link>
          <router-link :to="{ name: 'contact'}">Kontakt</router-link>
          <router-link :to="{ name: 'privacyPolicy'}">Polityka prywatności</router-link>
          <router-link :to="{ name: 'gdpr'}">RODO</router-link>
          <router-link :to="{ name: 'advertisingPrivacyPolicy'}">Polityka prywatności usług reklamowych</router-link>
        </div>
        <div class="col border">
          <img src="@/assets/img/icons/fb.png" alt="">
          <img src="@/assets/img/icons/linkedin.png" alt="">
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>

</style>
