<template>
  <div class="nav">
    <ul>
      <router-link v-for="(tab, index) in tabs" v-bind:to="tab.route" :key="index">
        <li class="tab" @click="select(index)" v-bind:class="{active: index === active}">
          <i v-bind:class="tab.img" />
          {{tab.title}}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      tabs: [
        {
          route: "/",
          title: "Users",
          img: "fas fa-users"
        },
        {
          route: "/selected",
          title: "Favorite Users",
          img: "fas fa-star"
        }
      ],
      active: 0
    };
  },
  methods: {
    select(index) {
      this.active = index;
    }
  }
};
</script>

<style scoped>
.nav {
  height: 100%;

  background: var(--secondary-color);
  color: #fff;
}
.list {
  display: flex;
  flex-direction: column;
}
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 24px;
  color: var(--primary-color);
  height: 100px;
  transition: background 0.2s;
}
.tab:hover {
  background: var(--primary-color);
  color: #fff;
}
.active {
  background: var(--active-color);
  color: #fff;
}
</style>