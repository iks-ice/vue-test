<template>
  <div>
    <div class="users-list">
      <div
        v-for="({avatar_url, id, login}) in filteredUsers"
        :key="id"
        class="card"
        @click="showInfo(login)"
      >
        <img :src="avatar_url" alt="user" class="img" />
        <div class="all-center">
          <p>{{login}}</p>
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="modal all-center">
      <div class="preloader all-center">
        Loading ...
      </div>
    </div>
    <UserInfo v-else
      :user="user"
      :isLoading="isLoading"
      v-show="isShown"
      v-on:close="closeUserInfo"
    />
  </div>
</template>

<script>
  import axios from "axios";
  import UserInfo from "./UserInfo";
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "Users",
    components: {
      UserInfo
    },
    data() {
      return {
        isShown: false,
        user: null,
        isLoading: false
      };
    },
    methods: {
      ...mapActions(["fetchUsers"]),
      showInfo(login) {
        this.isShown = true;
        this.getUser(login);
      },
      async getUser(login) {
        this.isLoading = true;
        const { data } = await axios.get(`https://api.github.com/users/${login}`);
        this.user = data;
        this.isLoading = false;
      },
      closeUserInfo() {
        this.isShown = false;
      }
    },
    computed: {
      ...mapGetters(["users", "searchString"]),
      filteredUsers: function() {
        if (this.searchString === "") {
          return this.users;
        } else {
          return this.users.filter(
            ({ login }) => login.toLowerCase().indexOf(this.searchString) !== -1
          );
        }
      }
    },
    async created() {
      await this.fetchUsers();
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
  .preloader {
    background: white;
    width: 70vw;
    height: 60vh;
    border-radius: 10px;
    font-size: 40px;
    color: var(--primary-color);
  }
  @media (max-width: 1080px) {
      .users-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 900px) {
      .users-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
