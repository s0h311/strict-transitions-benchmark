<template>
  <form>
    <input placeholder="Search" type="text" @input="updateSearchQuery" />

    <input placeholder="max price" type="number" @input="updateMaxPrice" />

    <input placeholder="min rating" type="number" :min="0" :max="5" @input="updateMinRating" />

    <input id="onlyInStockCheckbox" type="checkbox" @input="updateOnlyInStock" />
    <label for="onlyInStockCheckbox">only in stock</label>

    <div v-for="tag in productStore.tags" :key="tag">
      <input :id="tag + 'checkbox'" type="checkbox" :name="tag" @change="updateTags" />
      <label :for="tag + 'checkbox'">{{ tag }}</label>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useFilterStore } from '../store/filterStore.ts'
import { useProductStore } from '../store/productStore.ts'

const filterStore = useFilterStore()
const productStore = useProductStore()

function updateSearchQuery(event: Event): void {
  const input = event.target as HTMLInputElement
  const query = input.value

  filterStore.updateSearchQuery(query)
}

function updateMaxPrice(event: Event): void {
  const input = event.target as HTMLInputElement
  const maxPrice = input.valueAsNumber

  filterStore.updateMaxPrice(maxPrice)
}

function updateMinRating(event: Event): void {
  const input = event.target as HTMLInputElement
  const minRating = input.valueAsNumber

  filterStore.updateMinRating(minRating)
}

function updateOnlyInStock(event: Event): void {
  const input = event.target as HTMLInputElement
  const onlyInStock = input.checked

  filterStore.updateOnlyInStock(onlyInStock)
}

let enabledTags: string[] = []

function updateTags(event: Event): void {
  const input = event.target as HTMLInputElement
  const tagName = input.name

  if (enabledTags.includes(tagName)) {
    enabledTags = enabledTags.filter((tag) => tag !== tagName)
  } else {
    enabledTags.push(tagName)
  }

  filterStore.updateTags(enabledTags)
}
</script>
