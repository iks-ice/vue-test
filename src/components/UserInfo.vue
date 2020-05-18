<template>
  <div v-if="user" class="modal all-center">
    <div class="user-info">
      <CloseBtn @click="onClose"/>
      <div class="left-side">
        <div>
          <img :src="user.avatar_url" class="avatar" alt="avatar">
        </div>
        <div  class="name">
          {{user.name}}
        </div>
        <button
          class="btn"
          @click="addToFavorite(user)"
        >Add to favorite</button>
      </div>
      <div class="right-side">
        <div v-if="user.bio" class="bio">
        <span>Bio: </span> {{user.bio}}
      </div>
      <div class="company">
        <span>Company: </span>{{user.company}}   
      </div>
      <div class="location">
        <span>Location: </span>{{user.location}} 
      </div>
      <div class="followers">
        <span>Followers: </span>{{user.followers}} 
      </div>
      <div class="following">
        <span>Following: </span>{{user.following}} 
      </div>
      <a :href="user.html_url" class="all-center link"  target="_blank" rel="noopener noreferrer">GitHub Link</a>
      </div>
    </div>
  </div>
</template>

<script>
  import CloseBtn from './CloseBtn';
  import { getSelectedUsers, setSelectedUsers } from './utils';
  export default {
    name: "UserInfo",
    components: {
      CloseBtn,
    },
    methods: {
      addToFavorite(user) {
        const selectedUsers = getSelectedUsers();
        const isSelectedUser = selectedUsers.some(({id}) => id === user.id)
        if(isSelectedUser) {
          return;
        }
        selectedUsers.push(user);
        setSelectedUsers(selectedUsers);
      },
      onClose() {
        this.$emit('close');
      }
    },
    props: {
      user: {
        type: Object
      },
    }
  };
</script>

<style scoped>
  .user-info {
    padding: 10px;
    position: relative;
    background: white;
    width: 70vw;
    height: 60vh;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-auto-rows: minmax(40px, auto);
    grid-gap: 15px;
  }

  .avatar {
    width: 250px;
  }
  .bio {
    padding: 10px;
    grid-column: 1/3;
    border: 1px solid gainsboro;
  }
  .left-side {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 250px 40px 40px;
    justify-items: center;
  }
  .btn {
    display: block;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    background: var(--primary-color);
    color: red;
    cursor: pointer;
    transition: background .2s;
  }
  .btn:hover {
    background: darkblue;
  }
  .right-side {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80px 40px 40px 40px;
    grid-gap: 10px;
  }
  .right-side> div {
    padding: 10px;
    background: var(--secondary-color);
  }
  .right-side span {
    color: red;
  }
  .bio, .git_url {
    grid-column: 1/3;
    border: 1px solid gainsboro;
  }
  .company, .location, .followers, .following{
    border: 1px solid gainsboro;
  }
  .link {
    width: 100%;
    background: var(--primary-color);
    color: red;
    grid-column: 1/3;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    transition: background .2s;
  }
  .link:hover {
    background: darkblue;
  }
</style>