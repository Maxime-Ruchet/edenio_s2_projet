<script setup lang="ts">
import HeaderPage from './components/headerpage.vue'
import FooterPage from './components/footerpage.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <HeaderPage></HeaderPage>
  <RouterView></RouterView>
  <FooterPage></FooterPage>
</template>
