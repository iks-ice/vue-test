<template>
  <div v-if="user" class="modal all-center">
    <div class="user-info">
      <div class="close all-center" @click="$emit('close')">
        <i class="fas fa-times" />
      </div>
      <div class="left-side">
        <div>
          <img :src="user.avatar_url" class="avatar" alt="avatar">
        </div>
        <div  class="name">
          {{user.name}}
        </div>
        <button class="btn">Add to favorite</button>
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
}
</style>