<script setup>
import { ref } from "vue";

const orders = ref(JSON.parse(localStorage.getItem("orders")) || []);

const toggleOrderDetails = (order) => {
  order.showDetails = !order.showDetails;
};


const deleteOrder = (orderId) => {
  if (confirm("Are you sure you want to delete this order?")) {
    orders.value = orders.value.filter(order => order.id !== orderId);
    localStorage.setItem("orders", JSON.stringify(orders.value));
  }
};
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">My Orders</h1>
    <div v-if="orders.length === 0">
      <p class="text-center">You have no orders yet.</p>
    </div>
    <div v-else>
      <div v-for="order in orders" :key="order.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Order #{{ order.id }}</h5>
          <p class="card-text">Date: {{ order.date }}</p>
          <p class="card-text">Total amount: {{ order.total }}$</p>
          <button class="btn btn-primary" @click="toggleOrderDetails(order)">
            {{ order.showDetails ? "Hide details" : "Show details" }}
          </button>
          <button class="btn btn-danger ms-2" @click="deleteOrder(order.id)">Delete order</button>
          <div v-if="order.showDetails" class="mt-3">
            <h6>Items:</h6>
            <ul class="list-group">
              <li v-for="item in order.items" :key="item.productId" class="list-group-item">
                {{ item.name }} - {{ item.count }} pieces - {{ item.price }}$
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
}
</style>
