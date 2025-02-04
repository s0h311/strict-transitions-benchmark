<template>
  <h1>Result page</h1>
  <main class="main-content">
    <FilterList />
    <ProductList />
  </main>
</template>

<script setup lang="ts">
import FilterList from '../components/FilterList.vue'
import ProductList from '../components/ProductList.vue'
</script>

<style scoped>
.main-content {
  display: flex;
  align-items: start;
  gap: 30px;
}
</style>
