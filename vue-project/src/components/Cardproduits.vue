<script setup lang="ts">
import type { ProduitsResponse } from '@/pocketbase-types'
const props: ProduitsResponse = defineProps<ProduitsResponse>()
import {pb} from '@/backend' 
const urlImg0 = props.image ? pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
import { oneIDproduits } from '@/backend'
const unproduits = await oneIDproduits(props.id)
</script>

<template>
    <div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols lg:grid-cols-2 gap-8">
      <img class="m-auto pb-4 w-24" :src="urlImg0">
  <p class="ml-4" v-html=" unproduits.image "></p>
    <p class="ml-4" v-html=" unproduits.titre"></p>
    <p class="ml-4" v-html=" unproduits.prix"></p>
    </div>
    </div>
  </template>