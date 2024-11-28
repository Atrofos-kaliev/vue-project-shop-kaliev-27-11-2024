<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Shop</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">Cart</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/orders" class="nav-link">My orders</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/adminOrders" class="nav-link">All orders</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>




  <RouterView />
</template>
<style>
body {
  background-color: #f5f5f5;
  color: #333;
}

.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  color: #007bff !important;
  font-weight: 500;
}

.navbar-brand:hover {
  color: #0056b3 !important;
}

.nav-link {
  color: #555 !important;
}

.nav-link:hover {
  color: #007bff !important;
}

.navbar-toggler {
  border-color: #007bff;
}

.navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"%3E%3Cpath stroke="%23007bff" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E');
}

.collapse {
  background-color: #ffffff;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-body {
  color: #333;
}

.card-footer {
  background-color: #f9f9f9;
}

.card-title {
  font-size: 1.25rem;
}

.btn-outline-warning {
  color: #f39c12;
  border-color: #f39c12;
}

.btn-outline-warning:hover {
  background-color: #f39c12;
  color: white;
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:hover {
  background-color: #17a2b8;
  color: white;
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: white;
}

.navbar-nav {
  display: flex;
  justify-content: flex-end;
}

.navbar-nav .nav-item {
  margin-left: 20px;
}
</style>