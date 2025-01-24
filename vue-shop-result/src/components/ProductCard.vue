<template>
  <article class="product">
    <h3>{{ product.title }}</h3>
    <div>{{ product.description }}</div>
    <div>${{ product.price }}</div>
    <div>{{ product.stock }} in stock</div>
    <div>Rating {{ product.rating }}/5</div>
    <ul>
      <li v-for="tag in product.tags" :key="tag">{{ tag }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '../store/types.ts'

defineProps<{
  product: Product
}>()
</script>

<style scoped>
.product {
  display: inline grid;
  width: 50%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
}
</style>
