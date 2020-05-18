<template>
  <div class="close all-center" @click="click">
    <i class="fas fa-times" />
  </div>
</template>

<script>
  export default {
    name: "CloseBtn",
    methods: {
      click() {
        this.$emit('click');
      }
    }
  }
</script>

<style  scoped>
  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: background 0.2s;
  }
  .close:hover {
  background: gray;
  color: #fff;
}
</style>