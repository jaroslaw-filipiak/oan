<template>
  <Header/>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/scss/oan.scss";
</style>

<script setup >
import { onMounted } from 'vue';
import AOS from 'aos';
import Header from '@/components/Header.vue';

onMounted(() => {
  AOS.init();
});

</script>
