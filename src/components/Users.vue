<template>
  <div class="users-list">
    <div v-for="({avatar_url, id, login}) in users" :key="id" class="card">
      <img :src="avatar_url" alt="user" class="img" />
      <div class="all-center">
        <p>{{login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  methods: {
    ...mapActions(["fetchUsers"])
  },
  computed: mapGetters(["users"]),
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.users-list {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
}
.card {
  display: grid;
  grid-template-columns: 100px 1fr;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  transition: background 0.2s;
}
.card:hover {
  cursor: pointer;
  background: var(--primary-color);
  color: #fff;
}
.img {
  width: 100px;
}
</style>
