const state = {
  searchString: ''
};

const getters = {
  searchString: state => state.searchString
};

const actions = {
  setSearchString({ commit }, value) {
    commit('setSearchString', value);
  },
};

const mutations = {
  setSearchString: (state, string) => (state.searchString = string),
};

export default {
  state,
  getters,
  actions,
  mutations
};