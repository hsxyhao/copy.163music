<template>
	<div slot="content" class="mine">
		<div class="download-music">
			<span>
				<span class="icon iconfont icon-folder"></span>
				<span>下载歌曲</span>	
				<span>{{download}}</span>	
				<span>首</span>	
			</span>
			<span class="icon iconfont icon-play-o"></span>
		</div>
		<div class="other">
			<router-link to="/history">
				<span class="icon iconfont icon-time-b"></span>
				<span>最近播放</span>
				<span>{{history}}</span>
			</router-link>
			<router-link to="/ranking">
				<span class="icon iconfont icon-ranking"></span>
				<span>播放榜</span>
				<span>{{play}}</span>
			</router-link>
			<router-link to="/like">
				<span class="icon iconfont icon-heart-b"></span>
				<span>我喜欢</span>
				<span>{{like}}</span>
			</router-link>
			<router-link to="/download/video">
				<span class="icon iconfont icon-mv"></span>
				<span>下载MV</span>
				<span>{{downloadMv}}</span>
			</router-link>
		</div>
		<div class="create-bar">
			<span>我创建的歌单({{musicList.length}})</span>
			<span class="iconfont icon icon-more"></span>
		</div>
		<ul class="music-list">
			<li v-for="item in musicList" class="music-list-item">
				<div class="list-item-left">
					<img :src="item.img">
					<div class="music-list-info">
						<span class="music-list-name">{{item.name}}</span>
						<span class="music-list-desc">
							<span class="iconfont" :class="{'icon icon-selector':item.cacheCount>0}">
							{{item.count}}首</span>
							<span v-show="item.cacheCount>0">,已下载{{item.cacheCount}}首</span>
						</span>
					</div>
				</div>
				<span class="icon iconfont" :class="{'icon-volume':item.isplaying}"></span>
			</li>
		</ul>
		<div class=""></div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				download:0,
				history: 23,
				play: 11,
				like: 10,
				downloadMv: 10,
				musicList:[
					{
						img:'static/imgs/singer.jpg',
						name:'周杰伦',
						count:'20',
						cacheCount:1,
						isplaying:false
					},
					{
						img:'static/imgs/list_1.jpg',
						name:'2017内涵段子',
						count:'20',
						cacheCount:1,
						isplaying:false
					},
					{
						img:'static/imgs/list_2.jpg',
						name:'小时候的回忆',
						count:'20',
						cacheCount:0,
						isplaying:false
					},
					{
						img:'static/imgs/list_3.jpg',
						name:'难忘的呼吸',
						count:'20',
						cacheCount:0,
						isplaying:true
					},
					{
						img:'static/imgs/list_4.jpg',
						name:'周杰伦',
						count:'20',
						cacheCount:1,
						isplaying:false
					},
					{
						img:'static/imgs/list_5.jpg',
						name:'随便听听',
						count:'20',
						cacheCount:0,
						isplaying:true
					},
					{
						img:'static/imgs/list_6.jpg',
						name:'最近想听',
						count:'20',
						cacheCount:0,
						isplaying:false
					}
				]
			};
		}
	}
</script>
<style scope>
	.mine .icon {
		font-size: 44px;/*no*/
	}
	.download-music {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		padding: 5px 10px;
		border-bottom: 1px solid silver;
	}
	.other {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
	}
	a {
		color: #676767;
	}
	.other .icon {
		font-size: 50px;/*no*/
		margin: 2px;
	}
	.other > a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		font-size: 22px;/*no*/
	}
	.other span {
		padding: 5px;/*no*/
	}
	.create-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		padding: 0px 10px;
		background-color: #f2f2f2;
		border: none !important;
	}
	.create-bar .icon {
		color: #7e7d7d;
	}
	.music-list {
		list-style-type: none;
		padding: 0px;
		margin: 0px;
	}
	.music-list .icon-volume {
		color: red;
	}
	.music-list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 10px 0;
	}
	.music-list-item img{
		height: 60px;
		width: 60px;
	}
	.music-list-item > div {
		display: flex;
		align-items: center;
	}
	.list-item-left > span {
		padding: 10px;
	}
	.music-list-info {
		display: flex;
		flex-direction: column;
		height: 60px;
		padding: 0 10px;
	    align-items: right;
    	justify-content: space-around;
	}
	.music-list-desc {
		font-size: 24px;/*no*/
		color: #918e8e;
	}
	.music-list-desc .icon {
		font-size: 24px;/*no*/
	}
	.music-list-name{
		font-size: 36px;/*no*/
	}
		
</style>