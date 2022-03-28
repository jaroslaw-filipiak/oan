<template>
    <Header/>
     <div class="empty-space"></div>
    <router-view/>
</template>

<script setup >
import { onMounted } from 'vue';
import AOS from 'aos';
import Header from '@/components/Header.vue';

onMounted(() => {
  AOS.init();
});

</script>


<style lang="scss">
@import "./assets/scss/oan.scss";

.empty-space {

  margin-top: 30px;
  height: 1px;
  padding-bottom: 30px;

  @include lg {
    margin-top: 65px;
    height: 1px;
    padding-bottom: 40px;
  }

}

</style>
