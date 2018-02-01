<template>
	<div class="playing-btn">
		<div class="playing-one" :class="{'stopAnimation':!playing,'runAnimtion':playing}"></div>
		<div class="playing-two" :class="{'stopAnimation':!playing,'runAnimtion':playing}"></div>
		<div class="playing-three" :class="{'stopAnimation':!playing,'runAnimtion':playing}"></div>
		<div class="playing-four" :class="{'stopAnimation':!playing,'runAnimtion':playing}"></div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		computed: mapGetters({
			playing: 'getPlayStatus'
		}),
		data() {
			return {
			}
		}
	}
</script>
<style>
    @keyframes playing_one {
      from {height: 10px;/*no*/}
      to {height: 30px;/*no*/}
    }
    @keyframes playing_two {
      from {height: 35px;/*no*/}
      to {height: 10px;/*no*/}
    }
    @keyframes playing_three {
      from {height: 15px;/*no*/}
      to {height: 35px;/*no*/}
    }
    @keyframes playing_four {
      from {height: 30px;/*no*/}
      to {height: 5px;/*no*/}
    }
	.playing-btn {
		display: flex;
		flex: row;
		flex-wrap: wrap-reverse;
		width: 40px;/*no*/
		height: 40px;/*no*/
	}
	.playing-btn > div {
		flex: 1;
		background-color: #fff;
		margin: 3px;/*no*/
	}
	.playing-one {
		height: 10px;/*no*/

		-webkit-animation: playing_one;
		-o-animation: playing_one;
		animation: playing_one;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.playing-two {
		height: 35px;/*no*/

		-webkit-animation: playing_two;
		-o-animation: playing_two;
		animation: playing_two;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.playing-three {
		height: 15px;/*no*/

		-webkit-animation: playing_three;
		-o-animation: playing_three;
		animation: playing_three;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.playing-four {
		height: 30px;/*no*/

		-webkit-animation: playing_four;
		-o-animation: playing_four;
		animation: playing_four;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
</style>