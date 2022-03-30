<template>
<footer>
  <div class="container-fluid footer">
    <div class="container">
      <div class="row">
        <div class="d-none d-xl-block col"></div>
        <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center">
          <strong><span style="padding-right: 5px">oan</span> </strong> part of <img style="margin-left: 10px" src="@/assets/img/cloud-technologies-footer-logo.png" alt="">
        </div>
        <div class="col-12 col-lg-5  footer--menu pt-3 pt-lg-0 text-center text-lg-start">
          <router-link :to="{ name: 'home'}">Oferta /  </router-link>
          <router-link :to="{ name: 'about'}">O nas /  </router-link>
          <router-link :to="{ name: 'contact'}">Kontakt /  </router-link>
          <router-link :to="{ name: 'privacyPolicy'}">Polityka prywatności /  </router-link>
          <router-link :to="{ name: 'gdpr'}">RODO /  </router-link>
          <router-link :to="{ name: 'advertisingPrivacyPolicy'}">Polityka prywatności usług reklamowych</router-link>
        </div>
        <div class="col-12 col-lg-2 d-flex justify-content-center pt-3 pt-lg-0">
          <router-link class="social-link fb" to="#"> <img src="@/assets/img/icons/fb.png" alt=""> </router-link>
          <router-link class="social-link social-link--linkedin" to="#"> <img src="@/assets/img/icons/linkedin.png" alt=""> </router-link>
        </div>
        <div class="d-none d-xl-block col"></div>
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

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.footer {
  padding-top: 20px;
  padding-bottom: 40px;

  @include lg {
    padding-bottom: 60px;
  }
  a {
    text-decoration: none !important;
    color: #354185;
    &:hover {
      img {
        opacity: .9;
      }
    }
  }

  &--menu {
    @include max-lg {
      width: 80%;
      margin: 0 auto;
    }
    @include xl {
      padding-right: 130px;
    }
  }

  .social-link--linkedin {
    position: relative;
    top: 20px;
    left: -8px;
  }

}

</style>
