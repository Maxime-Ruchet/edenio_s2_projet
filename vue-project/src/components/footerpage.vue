<script setup lang="ts">
import IconInstagram from '@/components/icons/iconeinstagram.vue'
import Icontwitter from '@/components/icons/twitter.vue'
import Iconfacebook from '@/components/icons/facebook.vue'
</script>

<template>
  <footer
    class="space-y-10 pt-20 max-w-screen-xl m-auto lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0"
  >
    <IconLogo class="mx-8 lg:col-span-1" />
    <nav class="px-5 columns-2 gap-8 space-y-8 lg:columns-3 lg:col-span-3 lg:px-0">
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Sell at home</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Request an offer</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Stories</a></li>
        </ul>
      </div>
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Buy a home</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Buy</a></li>
          <li><a href="#">Finance</a></li>
        </ul>
      </div>

      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Buy, rent and sell</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Buy and sell properties</a></li>
          <li><a href="#">Rent home</a></li>
          <li><a href="#">Builder trade-up</a></li>
        </ul>
      </div>
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Terms &amp; privacy</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Trust & Safety</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">About</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Company</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Investors</a></li>
        </ul>
      </div>
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Resources</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>
    </nav>
    <div
      class="px-5 text-gray-400 border-t border-gray-300 py-8 space-y-6 text-center lg:col-span-4 lg:flex lg:justify-around lg:items-center lg:space-y-0"
    >
      <p>©2021 Estatery. All rights reserved</p>
      <ul class="flex gap-12 justify-center">
        <li>
          <a href="#"><Iconfacebook></Iconfacebook></a>
        </li>
        <li>
          <a href="#"><IconInstagram /></a>
        </li>
        <li>
          <a href="#"><Icontwitter></Icontwitter></a>
        </li>
      </ul>
    </div>
  </footer>
</template>