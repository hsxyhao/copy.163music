import * as types from '../mutation-types'

const state = {
	playing:true
}

// getters
const getters = {
	getPlayStatus: state => {
		return state.playing
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
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}