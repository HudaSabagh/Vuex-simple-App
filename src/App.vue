<template>
  <div id="app">
    <div id="nav">
      <router-link to="/list1">List1</router-link> |
      <router-link to="/list2">List2</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      /* products: [
        { name: "huda", age: "30", adress: "Wiwm" },
        { name: "Nada", age: "23", adress: "St.pölten" },
        { name: "Dena", age: "50", adress: "Wiwm" },
        { name: "Lena", age: "13", adress: "St.pölten" },
      ], */
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
