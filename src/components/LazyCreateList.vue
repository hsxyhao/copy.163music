<template>
	<div class="cretate-list">
		<div class="mask"></div>
		<div class="create-box">
			<p>我创建的歌单{{count}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		props:['count'],
		data() {
			return {}
		}
	}
</script>
<style scope>
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		z-index: 1000;
	}
	.create-box {
		position: fixed;
		z-index: 1001;
		transition: transform 0.2s linear;
		height: 150px;
		background-color: #fff;
	}
</style>