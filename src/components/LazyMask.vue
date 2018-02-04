<template>
	<div class="bg-mask">
		<img :src="img">
	</div>
</template>
<script>
	export default {
		props:{
			img: {
				type: String,
				required: true
			}
		}
	}
</script>
<style>
	.bg-mask {
		position: absolute;
		background-color: #000;
		width: 100%;
		height: 100%;
	}
	.bg-mask img {
		position: absolute;
		width: 200%;
		top: 50%;
		left: 50%;
	    filter: blur(70px);/*no*/
        opacity: .6;
		transform: translate(-50%,-50%);
	}
</style>