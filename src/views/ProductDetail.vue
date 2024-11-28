  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useProductStore } from '@/stores/product';
  import { useCartStore } from '@/stores/cart';
 
  const cartStore = useCartStore();
  
  const addToCart = () => {
  cartStore.addToCart(product.id);
};

  const productStore = useProductStore();
  const route = useRoute();
  const product = productStore.findProductById(route.params.id);
  </script>

  <template>
        <div class="container mt-4">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.img" class="img-fluid" alt="...">
        </div>
        <div class="col-md-6">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: {{ product.price }}$</p>
            <p>Date of addition: {{ product.publish_at }}</p>
            <button type="button" class="btn btn-danger me-2" @click="addToCart">Add to cart</button>
            <router-link to="/" class="btn btn-primary me-2">Back to Home</router-link>
        </div>
      </div>
    </div>

  </template>
  
<style>
.container {
  color: #000000;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  </style>