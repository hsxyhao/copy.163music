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
		props:['playing'],
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
	.active > .playing-one {
		-webkit-animation: playing_one;
		-o-animation: playing_one;
		animation: playing_one;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.active > .playing-two {
		-webkit-animation: playing_two;
		-o-animation: playing_two;
		animation: playing_two;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.active > .playing-three {
		-webkit-animation: playing_three;
		-o-animation: playing_three;
		animation: playing_three;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.active > .playing-four {
		-webkit-animation: playing_four;
		-o-animation: playing_four;
		animation: playing_four;

		animation-duration: .3s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	}
	.playing-one {
		height: 10px;/*no*/
	}
	.playing-two {
		height: 35px;/*no*/
	}
	.playing-three {
		height: 15px;/*no*/
	}
	.playing-four {
		height: 30px;/*no*/
	}
</style>