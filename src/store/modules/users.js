import axios from 'axios';

const state = {
  users: []
};

const getters = {
  users: state => state.users
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(
      'https://api.github.com/users?page=1&per_page=40'
    );
    console.log(response.data)
    commit('setUsers', response.data);
  },
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
};

export default {
  state,
  getters,
  actions,
  mutations
};