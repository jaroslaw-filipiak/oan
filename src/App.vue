<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/privacy-policy">Privacy policy</router-link> |
    <router-link to="/advertising-privacy-policy">Advertising-privacy-policy</router-link> |
    <router-link to="/gdpr">GDPR</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/scss/oan.scss";
</style>
