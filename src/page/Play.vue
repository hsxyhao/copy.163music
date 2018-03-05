<template>
	<div class="play-page" :class="{'page-show':showPage}">
		<div class="play-relative">
			<lazy-mask :img='img'></lazy-mask>
			<div class="play-box">
				<div class="play-layout">
					<div class="play-head" :class="{'play-head-show':showPage}">
						<div class="play-top">
							<span class="icon iconfont icon-down" v-finger:tap="hidePage"></span>
							<span>
								<P class="play-title">六月的雨</P>
							</span>
							<span class="icon iconfont icon-more"></span>
						</div>
						<div>
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
						</div>
					</div>
					<div class="play-bottom-box" :class="{'play-bottom-box-show':showPage}">
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
	import { mapGetters,mapActions } from 'vuex'
	export default {
		components:{LazyMask},
		computed: mapGetters({
			img: 'getPlayImg',
			showPage:'getShowPage'
		}),
		data() {
			return {
				playShow:true
			}
		},
		methods: {
			...mapActions([
		      'hidePage'
		    ]),
			getDisXFromTouch: function (touches) {
				return Math.floor(touches.changedTouches[0].clientX);
			},
	        hide: function(){
	        	this.playShow = false
	        }
	    }
	}
</script>
<style scope>
	@media (min-device-height:568px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone4/4s */
		.list-img img {
			width: 200px;
			height: 200px;
		}
	}
	@media (max-device-height:568px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone4/4s */
		.list-img img {
			width: 250px;
			height: 250px;
		}
	}
	.play-page {
		display: none;
	}
	.page-show {
		display: inline;
	}
	/*播放页面动画*/
	.play-head-show {
		top: 200px;
	}
	.play-head {
		position: absolute;
		top: 200px;
		height: 120px;
		width: 100%;
		transform: translateY(-200px);
		transition: top .2s cubic-bezier(.2,.62,.78,1.67);
	}
	.play-page {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: #c0c0c02e;
		z-index: 1000;
		color: #fff;
		transition: all .2s linear;
	}
	.play-relative {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.play-box {
	    position: relative;
		z-index: 1000;
    	height: 100%;
	}
	.play-layout {
	    display: flex;
    	flex-direction: column;
    	height: 100%;
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
		padding: 10px;/*no*/
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
	.play-middle-center {
		height: 100%;
	}
	.play-middle-info > span{
		display: inline-block;
		padding: 2px 6px;
		border: 2px solid #fff;/*no*/
		border-radius: 2px;
		margin: 6px 2px;
		font-size: 22px;/*no*/
	}
	.play-bottom-box-show {
		bottom: 0px !important;
	}
	.play-bottom-box {
		height: 150px;
	    width: 100%;
	    position: absolute;
	    bottom: -150px;
	    transition: bottom .2s cubic-bezier(.2,.62,.78,1.67);
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