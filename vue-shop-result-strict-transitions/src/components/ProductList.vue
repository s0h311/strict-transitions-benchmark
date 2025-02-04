<template>
  <ul class="product-list">
    <li v-for="product in productStore.visibleProducts" :key="product.id">
      <ProductCard :product />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useProductStore } from '../store/productStore.ts'
import { onMounted } from 'vue'
import ProductCard from './ProductCard.vue'

onMounted(() => productStore.fetch())

const productStore = useProductStore()
</script>

<style scoped>
.product-list {
  display: grid;
  gap: 30px;
}
</style>
