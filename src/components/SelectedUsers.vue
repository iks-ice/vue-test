<template>
   <div v-if="filteredUsers.length > 0">
     <div class="clear-btn" @click="removeAll">
       Clear the list
     </div>
    <div class="users-list">
      <div
        v-for="({avatar_url, id, login}) in filteredUsers"
        :key="id"
        class="card"
      >
        <CloseBtn @click="removeFromFavorite(id)"/>
        <img :src="avatar_url" alt="user" class="img" />
        <div class="all-center">
          <p>{{login}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getSelectedUsers, setSelectedUsers } from './utils';
  import { mapGetters } from "vuex";
  import CloseBtn from "./CloseBtn";
  export default {
    name: "SelectedUsers",
    components: {
      CloseBtn,
    },
    data() {
      return {
        selectedUsers: getSelectedUsers(),
      }
    },
    computed: {
      ...mapGetters(["searchString"]),
      filteredUsers: {
        set: function(value) {
          this.selectedUsers = value
        },
        get: function() {
          if (this.searchString === "") {
            return this.selectedUsers;
          } else {
            return this.selectedUsers.filter(
              ({ login }) => login.toLowerCase().indexOf(this.searchString) !== -1
            );
          }
        }
      }
    },
    methods: {
      removeFromFavorite(userId) {
        this.filteredUsers = this.selectedUsers.filter(({id}) => id !== userId);
        setSelectedUsers(this.filteredUsers);
      },
      removeAll() {
        this.filteredUsers = [];
        setSelectedUsers(this.filteredUsers);
      }
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
  .users-list {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 10px;
  }
  .card {
    position: relative;
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
  .clear-btn {
    width: 200px;
    margin: 50px auto;
    padding: 16px 32px;
    border-radius: 5px;
    font-size: 24px;
    background: tomato;
    color: white;
    transition: background .2s;
  }
  .clear-btn:hover  {
    background: red;
  }
</style>