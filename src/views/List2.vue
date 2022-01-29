<template>
  <div class="container-fluid">
    <ul class="list-unstyled">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="bg-info fs-4 border-top"
      >
        Name:{{ product.name }}, Adress: {{ product.adress }}
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
