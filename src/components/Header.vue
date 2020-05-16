<template>
  <div class="wrapper">
    <div class="logo all-center">Vue SPA</div>
    <div class="all-center">
      <input type="text" class="search" placeholder="Search for ..." v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: 10% 1fr;
  background: var(--primary-color);
  color: #fff;
}
.logo {
  font-size: 24px;
}
.search {
  outline: none;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
</style>
