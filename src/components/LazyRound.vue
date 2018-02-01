<template>
	<!--轮播广告-->
	<div class="round" ref="round">
		<div class="ads-box">
			<div class="ads-warpper" ref="wrapper">
				<div class="ad-item" v-for="ad in ads">
					<img :src="ad.url">
				</div>
			</div>
		</div>
		<div class="round-index">
			<div v-for="ad in ads.length"></div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			let length = this.ads.length;
			// this.$refs.wrapper.style.width *= length;
         	// alert(document.firstElementChild.attributes[0].nodeValue);
		},
		data() {
			return {
				ads:[
					{
						url:'/static/imgs/round_1.jpg'
					}
				]
			};
		},
		methods: {

		}
	}
</script>
<style scoped>
	.round {
		position: relative;
	}
	.round-index {
		position: absolute;
		bottom: 0px;
		width: 100%;
		height: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.round-index > div {
		width: 8px;
		height: 8px;
		background-color: silver;
		border-radius: 50%;
		margin: 0 2px;
	}
	.ads-box {
		display: flex;
		width: 100%;
		height: 160px;
	}
	.ads-warpper {
		display: flex;
	}
	.ad-item {
		width: 100%;
	}
	.ad-item > img {
		width: 375px;
	}
</style>