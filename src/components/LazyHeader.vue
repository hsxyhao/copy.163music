<template>
	<div class="head-box bg-red-gradients">
		<div class="tab-bar">
			<div>
				<span class="icon iconfont icon-menu"></span>
			</div>
			<div class="bar-title">
				<span>我的</span>
				<span>推荐</span>
				<span>视频</span>
			</div>
			<playing></playing>
		</div>
		<div class="search">
			<span class="icon iconfont icon-search"></span>
			<span>搜音乐、歌词、电台</span>
		</div>
	</div>
</template>
<script>
	import playing from '@/components/LazyPlayingIcon'
	export default {
		components: {
			playing
		},
		data() {
			return {
				playing: true
			}
		}
	}
</script>
<style scoped>
	.head-box {
		position: fixed;
		z-index: 999;
		top: 0px;
		height: 90px;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.icon {
		font-size: 40px;/*no*/
	}
	.tab-bar a {
		font-size: 30px;/*no*/
		color: #FFF;
	    flex: 1;
	}
	.tab-bar {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #FFF;
	}
	.bar-title {
	    flex: 1;
	    display: flex;
	    padding: 20px;
	    justify-content: space-evenly;
	}
	.search .icon {
		font-size: 30px;/*no*/
		margin: 0 5px;
	}
	.search {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #f6f0f0;
		font-size: 22px;/*no*/
		height: 30px;
		background: #5454541f;
		background-color: #5454541f;
		border-radius: 30px;
	}
</style>