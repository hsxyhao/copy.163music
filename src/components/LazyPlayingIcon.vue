<template>
	<div class="playing-btn" :class="{active:playing}">
		<div class="playing-one"></div>
		<div class="playing-two"></div>
		<div class="playing-three"></div>
		<div class="playing-four"></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				playing: true
			}
		}
	}
</script>
<style>

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
	.active > .playing-one {
		-webkit-animation: playing_one;
		-o-animation: playing_one;
		animation: playing_one;
		animation-duration: .2s;
		animation-delay: .5s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.active > .playing-two {
		-webkit-animation: playing_two;
		-o-animation: playing_two;
		animation: playing_two;
		animation-duration: .2s;
		animation-delay: .4s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.active > .playing-three {
		-webkit-animation: playing_three;
		-o-animation: playing_three;
		animation: playing_three;

		animation-duration: .2s;
		animation-delay: .7s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.active > .playing-four {
		-webkit-animation: playing_four;
		-o-animation: playing_four;
		animation: playing_four;

		animation-duration: .2s;
		animation-delay: .5s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.playing-one {
		height: 30px;/*no*/
	}
	.playing-two {
		height: 36px;/*no*/
	}
	.playing-three {
		height: 25px;/*no*/
	}
	.playing-four {
		height: 30px;/*no*/
	}
</style>