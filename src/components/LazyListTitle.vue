<template>
	<div class="title-line">
		<div class="title-line">{{title}}<span class="icon iconfont icon-right-o"></span></div>
	</div>
</template>
<script>
	export default {
		props:['title']
	}
</script>
<style scoped>
	.title-line {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 40px;/*no*/
		padding: 6px;
		box-sizing: content-box;
	}
	.title-line .icon {
		font-size: 50px;/*no*/
	}
</style>