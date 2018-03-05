import * as types from '../mutation-types'

const state = {
	playing:false,
	showPage:false,
	img:'static/imgs/list_6.jpg'
}

// getters
const getters = {
	getPlayStatus: state => {
		return state.playing;
	},
	getPlayImg: state => {
		return state.img;
	},
	getShowPage: state => {
		return state.showPage
	}
}

// actions
const actions = {
	togglePlay ({ commit, state }) {
		commit(types.TOGGLE_PLAY);
	},
	play ({ commit, state }) {
		commit(types.PLAY);
	},
	stop ({ commit, state }) {
		commit(types.STOP);
	},
	showPage({ commit, state }) {
		commit(types.SHOW);
	},
	hidePage({ commit, state }) {
		commit(types.HIDE);
	}
}

// mutations
const mutations = {
	[types.TOGGLE_PLAY] (state) {
		state.playing = !state.playing;
	},
	[types.PLAY] (state) {
		state.playing = true;
	},
	[types.STOP] (state) {
		state.playing = false;
	},
	[types.SHOW] (state) {
		state.showPage = true;
	},
	[types.HIDE] (state) {
		state.showPage = false;
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}