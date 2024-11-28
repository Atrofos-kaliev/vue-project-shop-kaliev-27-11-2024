<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const genders = ["Male", "Female"];
const countries = ["Kazakhstan", "Russia", "Ukraine"];
const deliveryMethods = ["Courier Delivery", "Pickup", "Postal Service"];
const paymentMethods = ["Cash", "Card", "Online Payment"];

const form = ref({
  fullName: "",
  gender: "",
  country: "",
  address: "",
  phone: "",
  delivery: "",
  payment: "",
});

const submitOrder = () => {
  if (Object.values(form.value).some((field) => !field)) {
    alert("Please fill in all fields.");
    return;
  }

  const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: cartStore.cartList.map(item => ({
      ...item, 
      fullName: form.value.fullName,
      gender: form.value.gender,
      country: form.value.country,
      address: form.value.address,
      phone: form.value.phone,
      delivery: form.value.delivery,
      payment: form.value.payment
    })),
    total: cartStore.cartList.reduce((total, item) => total + item.price * item.count, 0),
  };

  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders));

  alert("The order has been placed!");

  form.value = {
    fullName: "",
    gender: "",
    country: "",
    address: "",
    phone: "",
    delivery: "",
    payment: "",
  };

  cartStore.clearCart();
};

const cancelOrder = () => {
  if (confirm("Are you sure you want to cancel your order?")) {
    form.value = {
      fullName: "",
      gender: "",
      country: "",
      address: "",
      phone: "",
      delivery: "",
      payment: "",
    };
    cartStore.clearCart();
  }
};
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Placing an order</h1>
    <form @submit.prevent="submitOrder" class="mb-5">
      <div class="row g-3">
        <div class="col-md-6">
          <label for="fullName" class="form-label">Full name</label>
          <input type="text" class="form-control" id="fullName" v-model="form.fullName" required />
        </div>
        <div class="col-md-6">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select" v-model="form.gender" required>
            <option value="" disabled selected>Select gender</option>
            <option v-for="gender in genders" :key="gender" :value="gender">{{ gender }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="country" class="form-label">Country</label>
          <select id="country" class="form-select" v-model="form.country" required>
            <option value="" disabled selected>Select country</option>
            <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" v-model="form.address" required />
        </div>
        <div class="col-md-6">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone" v-model="form.phone" required />
        </div>
        <div class="col-md-6">
          <label for="delivery" class="form-label">Delivery method</label>
          <select id="delivery" class="form-select" v-model="form.delivery" required>
            <option value="" disabled selected>Select method</option>
            <option v-for="method in deliveryMethods" :key="method" :value="method">{{ method }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="payment" class="form-label">Select method</label>
          <select id="payment" class="form-select" v-model="form.payment" required>
            <option value="" disabled selected>Select method</option>
            <option v-for="method in paymentMethods" :key="method" :value="method">{{ method }}</option>
          </select>
        </div>
        <div class="col-md-6 text-end">
          <h4>Total cost: {{ cartStore.cartList.reduce((total, item) => total + item.price * item.count, 0) }}$</h4>
        </div>
      </div>
      <div class="text-end mt-3">
        <button type="submit" class="btn btn-success me-2">Place an order</button>
        <button type="button" class="btn btn-danger" @click="cancelOrder">Cancel</button>
      </div>
    </form>

    <h3>Order Items</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cartStore.cartList" :key="product.productId">
          <td>{{ product.name }}</td>
          <td><img :src="product.img" alt="..." class="img-thumbnail" /></td>
          <td>{{ product.price }}$</td>
          <td>
            <input
              type="number"
              class="form-control"
              :value="product.count"
              @input="cartStore.updateCountCart(product.productId, parseInt($event.target.value))"
            />
          </td>
          <td>
            <button class="btn btn-danger" @click="cartStore.deleteProduct(product.productId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.img-thumbnail {
  width: 80px;
  height: auto;
}
</style>