import * as types from '../mutation-types'

const state = {
	hide:true
}

// getters
const getters = {
	getMenuStatus: state => {
		return state.hide;
	},
	getLeftMenu: state => {
		return state.lefeMenu;
	}
}

// actions
const actions = {
	toggleMenu({ commit, state }) {
		commit(types.TOGGLE_MENU);
	},
	showMenu({ commit, state }) {
		commit(types.SHOW_MENU);
	},
	hideMenu({ commit, state }) {
		commit(types.HIDE_MENU);
	}
}


// mutations
const mutations = {
	[types.TOGGLE_MENU] (state) {
		state.hide = !state.hide;
	},
	[types.HIDE_MENU] (state) {
		state.hide = true;
	},
	[types.SHOW_MENU] (state) {
		state.hide = false;
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}