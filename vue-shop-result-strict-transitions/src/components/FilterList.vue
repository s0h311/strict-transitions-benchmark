<template>
  <form>
    <input placeholder="search" type="text" v-model="searchQuery" @input="updateSearchQuery" />

    <input placeholder="max price" type="number" v-model="maxPrice" @input="updateMaxPrice" />

    <input placeholder="min rating" type="number" :min="0" :max="5" v-model="minRating" @input="updateMinRating" />

    <input id="onlyInStockCheckbox" type="checkbox" v-model="onlyInStock" @change="updateOnlyInStock" />
    <label for="onlyInStockCheckbox">only in stock</label>

    <div v-for="tag in productStore.tags" :key="tag">
      <input :id="tag + 'checkbox'" type="checkbox" :value="tag" v-model="enabledTags" @change="updateTags" />
      <label :for="tag + 'checkbox'">{{ tag }}</label>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useFilterStore } from '../store/filterStore.ts'
import { useProductStore } from '../store/productStore.ts'
import { ref } from 'vue'

const filterStore = useFilterStore()
const productStore = useProductStore()

const searchQuery = ref<string | null>(filterStore.searchQuery)
const maxPrice = ref<number | string>(filterStore.maxPrice)
const minRating = ref<number | string>(filterStore.minRating)
const onlyInStock = ref<boolean>(filterStore.onlyInStock)
const enabledTags = ref<string[]>(filterStore.tags)

function updateSearchQuery(): void {
  filterStore.updateSearchQuery(searchQuery.value)
}

function updateMaxPrice(): void {
  filterStore.updateMaxPrice(maxPrice.value === '' ? Infinity : Number(maxPrice.value))
}

function updateMinRating(): void {
  filterStore.updateMinRating(minRating.value === '' ? -Infinity : Number(minRating.value))
}

function updateOnlyInStock(): void {
  filterStore.updateOnlyInStock(onlyInStock.value)
}

function updateTags(): void {
  filterStore.updateTags(enabledTags.value)
}
</script>
