<script setup lang="ts">
import type { EvenementResponse } from '@/pocketbase-types'
const props: EvenementResponse = defineProps<EvenementResponse>()
import {pb} from '@/backend' 
const urlImg0 = props.image ? pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
import { oneID } from '@/backend'
const unevenement = await oneID(props.id)
</script>
