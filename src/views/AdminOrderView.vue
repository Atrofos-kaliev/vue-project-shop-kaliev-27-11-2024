<script setup>
import { ref } from "vue";

const orders = ref(JSON.parse(localStorage.getItem("orders")) || []);

const toggleOrderDetails = (order) => {
  order.showDetails = !order.showDetails;
};
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">All Orders</h1>
    <div v-if="orders.length === 0">
      <p class="text-center">No orders found.</p>
    </div>
    <div v-else>
      <div v-for="order in orders" :key="order.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Order #{{ order.id }}</h5>
          <p class="card-text">Date: {{ order.date }}</p>
          <p class="card-text">Total: {{ order.total }}$</p>
          <p class="card-text">Customer Name: {{ order.items[0].fullName }}</p>
          <button class="btn btn-primary" @click="toggleOrderDetails(order)">
            {{ order.showDetails ? "Hide Details" : "Show Details" }}
          </button>
          <div v-if="order.showDetails" class="mt-3">
            <h6>Order Items:</h6>
            <ul class="list-group">
              <li v-for="item in order.items" :key="item.productId" class="list-group-item">
                {{ item.name }} - {{ item.count }} pieces - {{ item.price }}$
              </li>
            </ul>
            <h6>Customer Details:</h6>
            <ul class="list-group">
              <li class="list-group-item"><strong>Name:</strong> {{ order.items[0].fullName }}</li>
              <li class="list-group-item"><strong>Gender:</strong> {{ order.items[0].gender }}</li>
              <li class="list-group-item"><strong>Country:</strong> {{ order.items[0].country }}</li>
              <li class="list-group-item"><strong>Address:</strong> {{ order.items[0].address }}</li>
              <li class="list-group-item"><strong>Phone:</strong> {{ order.items[0].phone }}</li>
              <li class="list-group-item"><strong>Delivery:</strong> {{ order.items[0].delivery }}</li>
              <li class="list-group-item"><strong>Payment:</strong> {{ order.items[0].payment }}</li>
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