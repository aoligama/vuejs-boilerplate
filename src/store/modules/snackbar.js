const state = () => ({
    snackbar: {
      show: false,
      text: '',
      timeout: 3000,
      color: 'primary',
    },
  })
  
  const getters = {
    snackbar: (state) => state.snackbar,
  }
  
  const actions = {}
  
  const mutations = {
    showSnackbar(state, value) {
      state.snackbar.show = true
      state.snackbar.text = value.text
      state.snackbar.timeout = value.timeout ? value.timeout : 3000
      state.snackbar.color = value.color ? value.color : 'primary'
    },
    closeSnackbar(state, value) {
      state.snackbar.show = value
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  }
  