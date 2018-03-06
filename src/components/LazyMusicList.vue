<template>
	<div class="recommend-music">
		<lazy-list-title :title="list.title"></lazy-list-title>
		<div class="list-content">
			<ul class="music-list-ul">
				<li class="music-list-item" v-for="item in list.data">
					<div class="music-img-box">
						<img :src="item.img">
						<div class="mask"></div>
						<span class="icon iconfont icon-play-o"></span>
					</div>
					<div class="music-list-info">
						<div class="info-left">
							<p class="music-name">{{item.name}}</p>
							<p class="music-info">{{item.user}} - {{item.album}}</p>
						</div>
						<span class="icon iconfont icon-more"></span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>

	import LazyListTitle from '@/components/LazyListTitle'
	export default {
		components:{
			LazyListTitle
		},
		props:['list']
	}
	
</script>
<style scope>
	.recommend-music {
		padding: 0 10px 10px;
		background-color: #FAFAFA;
	}
	.music-img-box img{
		position: absolute;
		top: 0px;
		left: 0px;
		width: 60px;
		height: 60px;
	}
	.music-img-box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
	}
	.music-img-box .icon {
		z-index: 1;
		font-size: 50px;/*no*/
		color: #fff;
	}
	.music-list-item {
		display: flex;
		align-items: center;
		margin: 10px 0;
	}
	.music-img-box {
		position: relative;
	}
	.mask {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: #00000063;
	}
	.icon-box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	.music-list-info {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 10px;
	}
	.info-left {
		text-align: left;
	}
	.music-list-info .icon {
		font-size: 28px;/*no*/
		color: silver;
	}
	.music-name {
		font-size: 24px;/*no*/
		color: #000;
		padding: 5px;
	}
	.music-info {
		padding: 5px;
		font-size: 24px;/*no*/
		color: silver;
	}
</style>