<template>
  <div class="modal all-center">
    <div v-if="isLoading">Preloader</div>
    <div v-else class="user-info">
      <div class="close all-center" @click="$emit('close')">
        <i class="fas fa-times" />
      </div>
      {{user.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      initialUser: null
    };
  },
  methods: {},
  props: {
    user: {
      type: Object
    },
    isLoading: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.user-info {
  position: relative;
  background: white;
  width: 70vw;
  height: 60vh;
  border-radius: 10px;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
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