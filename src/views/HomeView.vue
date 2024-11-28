<script setup>
import { useCartStore } from '@/stores/cart';
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/product';
import { ref,} from 'vue'

const productsStore = useProductStore();
const categoryStore = useCategoryStore();
const cartStore = useCartStore();
const category = ref(null);
const searchText = ref('');
const products = ref([]);
products.value = productsStore.products;

const filterCategory = () => {
  products.value = productsStore.filterProductsByCategoryName(category.value, null);
}
const searchName = () => {
category.value = null;
products.value = productsStore.filterProductsByCategoryName(null, searchText.value);
}

const resetFilters = () => {
    category.value = null;
    searchText.value = '';
    products.value = productsStore.products;
};


</script>
<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col md-5">
        <select class="form-select" aria-label="Default select example" v-model="category" @change="filterCategory">
    <option selected :value="null">Select category</option>
    <option
    v-for="category in categoryStore.categories" :value="category" :key="category"> {{ category }} 
  </option>
</select>
  </div>
        <div class="col md-5">
          <input type="text" class="form-control" value="Search by name" aria-label="readonly input example" v-model="searchText" @input="searchName">
        </div>
          <div class="col md-2">
            <button type="button" class="btn btn-outline-warning" @click="resetFilters">reset</button>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card">
        <img :src="product.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> {{ product.name }}</h5>
          <p class="card-text"> {{ product.price }}$ </p>
          <p class="card-text"> {{ product.category }} </p>
          <p class="card-text"> {{ product.publish_at }}</p>
          <div class="card-footer text-end">
            <router-link :to="`/product/${product.id}`" class="btn btn-outline-info me-2">Detail</router-link>
          <!-- <button type="button" class="btn btn-outline-info me-2">Detail</button> -->
          <button type="button" class="btn btn-outline-success" @click="cartStore.addToCart(product.id)">Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
  </template>

<style scoped>
/* Custom Styles */
.container {
  max-width: 1200px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

.card-footer {
  background-color: #f8f9fa;
}

.card-footer button {
  transition: background-color 0.3s ease;
}

.card-footer button:hover {
  background-color: #28a745;
}

input.form-control,
select.form-select {
  border-radius: 50px;
  font-size: 1.1rem;
}

button.btn {
  border-radius: 10px;
  font-size: 1.1rem;
}

button.btn:hover {
  opacity: 0.9;
}
</style>