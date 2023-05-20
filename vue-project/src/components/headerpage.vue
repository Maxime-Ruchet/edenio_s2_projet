<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import IconLogo from '@/components/icons/iconelogo.vue'
import { RouterLink } from 'vue-router'
import Iconpanier from '@/components/icons/iconepanier2.vue'
import Iconnventaire from '@/components/icons/iconeinventaire.vue'
import Iconpomme from '@/components/icons/iconepomme.vue'
import Iconmessage from '@/components/icons/iconemessage.vue'
import Iconbalance from '@/components/icons/iconebalance.vue'
import Iconcalandar from '@/components/icons/iconecalendar.vue'
import Iconinterro from '@/components/icons/iconeinterro.vue'
import Iconlivre from '@/components/icons/iconelivre.vue'

const menuIsOpen = ref(false)
</script>
<template>
  <header  class="flex items-center justify-between px-4 h-20 border-b-2 border-b-indigo-100">
    <RouterLink to="/">
      <IconLogo></IconLogo>
    </RouterLink>
    <button
      class="w-6 h-3 flex flex-col justify-between lg:hidden"
      @pointerdown="menuIsOpen = !menuIsOpen"
    >
      <span
        class="block bg-black h-[2px] w-full rounded-full transition duration-300"
        :class="{ 'translate-y-[5px] rotate-45': menuIsOpen }"
      ></span>
      <span
        class="block bg-black h-[2px] w-full rounded-full transition duration-300"
        :class="{ '-translate-y-[5px] -rotate-45': menuIsOpen }"
      ></span>
    </button>
    <nav
      class="invisible opacity-0 bg-white fixed inset-0 mt-20 px-6 py-12 flex flex-col justify-between lg:visible lg:opacity-100 lg:static lg:bg-transparent lg:mt-0 lg:flex-row lg:flex-1"
      :class="{ '!visible !opacity-100': menuIsOpen }"
    >
      <ul class="flex flex-col gap-4 lg:flex-row">
        <li class="flex items-center">
          <Iconnventaire class="block lg:hidden -ml-2.5"></Iconnventaire>
          <RouterLink class="text-gray-500 p-4 block rounded-lg" to="/nosproduits">Nos produit</RouterLink>
        </li>
        <li class="flex items-center">
          <Iconpomme class="block lg:hidden -ml-1"></Iconpomme>
          <RouterLink class="text-gray-500 p-4 block rounded-lg" to="/Nos recettes">Nos recettes</RouterLink>
        </li>
        <li class="flex items-center">
          <Iconmessage class="block lg:hidden -ml-3"></Iconmessage>
          <RouterLink class="text-gray-500 p-4 block rounded-lg" to="/forums">Forums</RouterLink>
        </li>
        <li class="flex items-center">
          <Iconbalance class="block lg:hidden -ml-1"></Iconbalance>
          <RouterLink class="text-gray-500 p-4 block rounded-lg" to="/suivi">Suivi</RouterLink>
        </li>
        <li class="flex items-center">
          <Iconcalandar class="block lg:hidden -ml-1.5"></Iconcalandar>
          <RouterLink class="text-gray-500 p-4 block rounded-lg" to="/evenement">Evenement</RouterLink>
        </li>
        <li class="flex items-center">
          <Iconinterro class="block lg:hidden -ml-1.5"></Iconinterro>
          <RouterLink class="text-gray-500 p-4 block rounded-lg" to="/contact">Contact</RouterLink>
        </li>
        <li class="flex items-center">
          <Iconlivre class="block lg:hidden -ml-1"></Iconlivre>
          <RouterLink class="text-gray-500 p-4 block rounded-lg" to="/glossaire">Glossair</RouterLink>
        </li>
      </ul>
      <div class="flex items-center gap-4 px-4 lg:flex-row">
        <button
          class="flex-1 p-4 text-white lg:flex-none lg:px-6"
        >
          <Iconpanier></Iconpanier>
        </button>
        <button
          class="flex-1 p-4 rounded-lg border-2 border-lime-200 text-lime-500 font-bold lg:flex-none lg:px-6"
        >
          Connexion
        </button>
        <button
          class="flex-1 p-4 rounded-lg bg-lime-600 text-white font-bold lg:flex-none lg:px-6"
        >
          Inscription
        </button>
      </div>
    </nav>
  </header>
</template>