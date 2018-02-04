<template>
	<div class="play-page">
		<div class="play-relative">
			<lazy-mask :img='img'></lazy-mask>
			<div class="play-box">
				<div class="play-top">
					<span class="icon iconfont icon-down"></span>
					<span>
						<P class="play-title">六月的雨</P>
					</span>
					<span class="icon iconfont icon-more"></span>
				</div>
				<div class="play-middle">
					<p class="play-singer">
						<span class="line"></span>
						<span>胡歌</span>
						<span class="line"></span>
					</p>
					<div class="play-middle-info">
						<span>标准 <span class="icon iconfont icon-down"></span></span>
						<span>MV</span>
						<span>音效</span>
					</div>
					<div class="play-middle-center">
						<div class="play-content">
							<div class="content-list" 
								v-finger:touch-start="touchStart"
						        v-finger:touch-move="touchMove"
						        v-finger:touch-end="touchEnd"
						        v-finger:touch-cancel="touchCancel">
								<div ref="left" class="list-side list-left"></div>
								<div class="list-img">
									<img :src="img">
									<p>（《仙剑奇侠传》 电视剧插曲 ）</p>
								</div>
								<div ref="right" class="list-side list-right">
								</div>
							</div>
							<div class="content-index">
								<div></div>
								<div class="index-select"></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
				<div class="play-bottom-box">
					<div class="play-bottom">
						<div class="progress">
							<span class="time-start">00:00</span>
							<div class="progress-bar">
								<div class="progress-boll"></div>
							</div>
							<span class="time-end">03:24</span>
						</div>
						<div class="song-play-edit">
							<span class="icon iconfont icon-repeat"></span>
							<span class="icon iconfont icon-prev-b"></span>
							<span class="icon iconfont icon-play"></span>
							<span class="icon iconfont icon-next-b"></span>
							<span class="icon iconfont icon-playlist"></span>
						</div>
						<div class="song-user-edit">
							<span class="icon iconfont icon-heart-o"></span>
							<span class="icon iconfont icon-xiazai"></span>
							<span class="icon iconfont icon-share"></span>
							<span class="icon iconfont icon-talk"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import LazyMask from '@/components/LazyMask'
	import { mapGetters } from 'vuex'
	const MAX_DISX = 60,MIN_DISX = 10;
	let x = 0;
	export default {
		components:{LazyMask},
		computed: mapGetters({
			img: 'getPlayImg'
		}),
		data() {
			return {}
		},
		methods: {
			getDisXFromTouch: function (touches) {
				return Math.floor(touches.changedTouches[0].clientX);
			},
			touchStop: function(e){
				x = 0;
			},
			touchStart: function(e){
				x = this.getDisXFromTouch(e);
			},
	        touchMove: function(e) { 
	        },
	        touchEnd: function(e) { 
	        },
	        touchCancel: function(e) { 
	        }
	    }
	}
</script>
<style scope>
	.play-page {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: #c0c0c02e;
		z-index: 1000;
		color: #fff;
	}
	.play-relative {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.play-box {
	    position: relative;
		z-index: 1000;
	}
	.play-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		height: 50px;
		font-size: 40px;/*no*/
	}
	.play-top .icon{
		font-size: 24px;
	}
	.play-singer {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;/*no*/
		margin-bottom: 10px;
	}
	.play-singer .line {
		display: inline-block;
		margin: 0 4px;
		width: 20px;
		height: 1px;/*no*/
		background-color: #fff;
	}
	.play-middle-info > span{
		display: inline-block;
		padding: 2px 6px;
		border: 2px solid #fff;/*no*/
		border-radius: 2px;
		margin: 6px 2px;
		font-size: 22px;/*no*/
	}
	.content-list {
		position: relative;
		margin: 5px 0;
	}
	.content-list > .list-side {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0px;
		transition: all .2s linear;
	}
	.list-left {
		left: -100%;
		background-color: red;
	}

	.list-right {
		right: -100%;
		background-color: black;
	}
	.content-index {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 8px;
	}
	.content-index div {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin: 0 4px;
		background-color: silver;
	}
	.index-select {
		background-color: #fff !important;
	}
	.list-img {
	}
	.list-img > p{
		margin: 10px 0;
	} 
	.list-img img{
		width: 250px;
		height: 250px;
		border: 10px solid #4d4d4d4d;
		border-radius: 50%;
	}
	.play-bottom-box {
		width: 
	}
	.play-bottom {
	    position: fixed;
	    width: 100%;
	    bottom: 0px;
	    padding: 10px 0 20px;
	}
	.progress {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 20px;
		padding: 0 10px;
	}
	.progress-bar {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 250px;
		height: 2px;
		background-color: silver;
	}
	.progress-boll {
		height: 14px;
		width: 14px;
		border-radius: 50%;
		transform: translateX(-7px);
		background-color: #F16157;
	}
	.song-play-edit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}
	.song-play-edit .icon {
		font-size: 30px;
	}
	.song-play-edit .icon-play {
		font-size: 50px;
	}
	.song-play-edit .icon-next {
		font-size: 40px;
	}
	.song-play-edit .icon-prev {
		font-size: 40px;
	}
	.song-user-edit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}
	.song-user-edit .icon {
		font-size: 26px;
		flex:1;
	}
</style>