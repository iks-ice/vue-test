<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Content"
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
</style>
