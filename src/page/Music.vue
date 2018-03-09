<template>
	<div class="content-box" ref="viewport" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove" @touchcancel="touchMove">
		<div class="wrapper" ref="mine">
			<div class="mine">
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
					<span class="iconfont icon icon-down"></span>
				</div>
				<ul class="mine-list">
					<li v-for="item in musicList" class="mine-list-li">
						<img :src="item.img" class="list-img">
						<div class="mine-list-info">
							<span class="mine-list-name">{{item.name}}</span>
							<span class="mine-list-desc">
								<span>{{item.cacheCount}} 首</span>
							</span>
						</div>
					</li>
				</ul>
				<div class=""></div>
			</div>
		</div>
		<div class="wrapper" ref="music">
			<div>
				<div class="content">
					<lazy-round></lazy-round>
					<div class="conclusion">
						<div>
							<div class="icon iconfont icon-singer"></div>
							<div class="conclusion-title">歌手</div>
						</div>
						<div>
							<div class="icon iconfont icon-musiclist"></div>
							<div class="conclusion-title">歌单</div>
						</div>
						<div>
							<div class="icon iconfont icon-king-music"></div>
							<div class="conclusion-title">排行榜</div>
						</div>
						<div>
							<div class="icon iconfont icon-radio"></div>
							<div class="conclusion-title">主播电台</div>
						</div>
					</div>
				</div>
				<lazy-play-list :list="playlist.data" v-if="playlist!==null && playlist.data.length > 0">
					<lazy-list-title slot="head" :title="playlist.title"></lazy-list-title>
				</lazy-play-list>
				<lazy-music-list :list="musiclist" v-if="musiclist!==null && musiclist.data.length > 0"></lazy-music-list>
				<lazy-play-list :list="newlist.data" v-if="newlist!==null && newlist.data.length > 0">
					<lazy-list-title slot="head" :title="newlist.title"></lazy-list-title>
				</lazy-play-list>
			</div>
		</div>
		<div class="wrapper" ref="video">
			<div>
				<div class="video-box" v-for="video in videos">
					<div class="video-img-box">
						<img class="video-img" :src="video.img">
						<h4 class="absolute video-name">{{video.name}}</h4>
						<span class="absolute iconfont icon icon-play"></span>
						<span class="absolute iconfont icon icon-play-count"> <span class="video-info">{{video.playcount}}</span></span>
						<span class="absolute iconfont icon icon-video-time"> <span class="video-info">{{video.time}}</span></span>
					</div>
					<div class="bottom-bar">
						<span class="video-author">{{video.author}}</span>
						<span class="bottom-bar-right">
							<span class="icon iconfont icon-good-b"></span>
							<span class="icon iconfont icon-talk"></span>
							<span class="icon iconfont icon-share"></span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import LazyHome from '@/components/LazyHome'
	import LazyRound from '@/components/LazyRound'
	import LazyPlayList from '@/components/LazyPlayList'
	import LazyListTitle from '@/components/LazyListTitle'
	import LazyMusicList from '@/components/LazyMusicList'
	import BScroll from 'better-scroll'
	import api from '@/api/getData'
	import axios from 'axios'

const data = JSON.parse('{"playlist":{"title":"推荐歌单","code":200,"msg":"请求成功","data":[{"img":"static/imgs/list_1.jpg","name":"单曲循环都不够","user":"胖妞啊%cc","count":"30"},{"img":"static/imgs/list_2.jpg","name":"一直听到现在的歌","user":"夏季恋歌","count":"30"},{"img":"static/imgs/list_3.jpg","name":"让你沦陷的中文歌曲","user":"oba mylover","count":"10"},{"img":"static/imgs/list_4.jpg","name":"阳光下的旋律","user":"猪小妹-v5","count":"22"},{"img":"static/imgs/list_5.jpg","name":"天籁之音不觉于耳","user":"chenyu","count":"16"},{"img":"static/imgs/list_6.jpg","name":"还好这辈子遇到你","user":"anni","count":"30"}]},"musiclist":{"title":"今日推荐歌曲-30首","code":200,"msg":"请求成功","data":[{"img":"static/imgs/list_1.jpg","name":"我会想起你的","user":"丽江小倩","album":"试音天碟","count":"30"},{"img":"static/imgs/list_2.jpg","name":"回忆里的那个人","user":"李行亮","album":"回忆里的那个人","count":"30"},{"img":"static/imgs/list_3.jpg","name":"独身的理由","user":"My Little Airport","album":"独身的理由","count":"10"}]},"newlist":{"title":"推荐歌单","code":200,"msg":"请求成功","data":[{"img":"static/imgs/list_1.jpg","name":"单曲循环都不够","user":"胖妞啊%cc","count":"30"},{"img":"static/imgs/list_2.jpg","name":"一直听到现在的歌","user":"夏季恋歌","count":"30"},{"img":"static/imgs/list_3.jpg","name":"让你沦陷的中文歌曲","user":"oba mylover","count":"10"},{"img":"static/imgs/list_4.jpg","name":"阳光下的旋律","user":"猪小妹-v5","count":"22"},{"img":"static/imgs/list_5.jpg","name":"天籁之音不觉于耳","user":"chenyu","count":"16"},{"img":"static/imgs/list_6.jpg","name":"还好这辈子遇到你","user":"anni","count":"30"}]},"videolist":{"title":"推荐MV","code":200,"msg":"请求成功","data":[{"img":"static/imgs/list_1.jpg","name":"单曲循环都不够","user":"胖妞啊%cc","count":"30"},{"img":"static/imgs/list_2.jpg","name":"一直听到现在的歌","user":"夏季恋歌","count":"30"},{"img":"static/imgs/list_3.jpg","name":"让你沦陷的中文歌曲","user":"oba mylover","count":"10"},{"img":"static/imgs/list_4.jpg","name":"阳光下的旋律","user":"猪小妹-v5","count":"22"}]}}');

	var viewport,
	pageWidth,
	maxWidth,
	startX,startY,
	initialPos = 0,  // 手指按下的屏幕位
	moveLength = 0,  // 手指当前滑动的距
	direction = "left", //滑动的方
	isMove = false, //是否发生左右滑
	startT = 0, //记录手指按下去的时
	isTouchEnd = true, //标记当前滑动是否结束(手指已离开屏幕)
	currentPosition = 0,
	points,
	slideX,
	page,
	leftMenuWidth,
	leftMenuOpen=false,
	menuMask;

	export default {
		components:{
			LazyRound,LazyPlayList,LazyHome,LazyListTitle,LazyMusicList
		},
		data() {
			return {
				playlist: null,
				musiclist: null,
				newlist: null,
				videos:[
					{
						img:'/static/imgs/video2.jpg',
						name:'听妈妈的话',
						author:'周杰伦',
						time:'00:33',
						playcount: 210
					},
					{
						img:'/static/imgs/video3.jpg',
						name:'听妈妈的话',
						author:'周杰伦',
						time:'00:33',
						playcount: 210
					},
					{
						img:'/static/imgs/video2.jpg',
						name:'听妈妈的话',
						author:'周杰伦',
						time:'00:33',
						playcount: 210
					},
					{
						img:'/static/imgs/video1.jpg',
						name:'听妈妈的话',
						author:'周杰伦',
						time:'00:33',
						playcount: 210
					},
					{
						img:'/static/imgs/video3.jpg',
						name:'听妈妈的话',
						author:'周杰伦',
						time:'00:33',
						playcount: 210
					}
				],
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
			}
		},
		methods: {
			openLeftMenu() {
				page.style.webkitTransition = "0.3s ease -webkit-transform";
				page.style.webkitTransform = "translate3d("+leftMenuWidth+"px,0,0)";
			},
			closeLeftMenu() {
				if (!leftMenuOpen) {
					return;
				}
				menuMask.style.display = 'none';
				menuMask.style.opacity = 0;
				page.style.webkitTransition = "0.3s ease -webkit-transform";
				page.style.webkitTransform = "translate3d(0,0,0)";
			},
			touchStart: function(event) {
				event.preventDefault();
				//单手指触摸或者多手指同时触摸，禁止第二个手指延迟操作事件
                if(event.touches.length === 1 || isTouchEnd){
                   var touch = event.touches[0];
                   startX = touch.pageX;
                   startY = touch.pageY;
                   initialPos = currentPosition;   //本次滑动前的初始位置
                   viewport.style.webkitTransition = ""; //取消动画效果
                   page.style.webkitTransition = ""; //取消动画效果
                   startT = new Date().getTime(); //记录手指按下的开始时间
                   isMove = false; //是否产生滑动
                   isTouchEnd = false; //当前滑动开始
                   slideX = 0;
                }
			},
			touchMove: function(event) {
				event.preventDefault();
				//如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件
				if(isTouchEnd) return ;

				var touch = event.touches[0];
				var deltaX = touch.pageX - startX;
				var deltaY = touch.pageY - startY;
				//如果X方向上的位移大于Y方向，则认为是左右滑动
				if (Math.abs(deltaX) > Math.abs(deltaY)){
					moveLength = deltaX;
					var translate = initialPos + deltaX; //当前需要移动到的位置
					//如果translate>0 或 < maxWidth,则表示页面超出边界
					if (translate <=0 && translate >= maxWidth){
						viewport.style.webkitTransform = "translate3d("+translate+"px,0,0)";
						currentPosition = translate;
						isMove = true;
					} else if(translate > 0) {
						// 左侧超出界面，开始划出左侧菜单
						slideX =  deltaX;
						if (translate > 50 && translate < leftMenuWidth) {
               				menuMask.style.display = 'block';
							leftMenuOpen = true;
							menuMask.style.opacity = Math.abs(translate - 50) / leftMenuWidth;
							page.style.webkitTransform = "translate3d("+(translate - 50)+"px,0,0)";
						}
					} else if(translate < maxWidth) {
						slideX = maxWidth + Math.floor(deltaX / 3);
						viewport.style.webkitTransform = "translate3d("+slideX+"px,0,0)";
					}
					direction = deltaX>0?"right":"left"; //判断手指滑动的方向
				}
			},
			touchEnd: function(event) {
				var translate = 0;
				//计算手指在屏幕上停留的时间
				var deltaT = new Date().getTime() - startT;
				//发生了滑动，并且当前滑动事件未结束
			    viewport.style.webkitTransition = "0.3s ease -webkit-transform";
				if (isMove && !isTouchEnd){ 
				   isTouchEnd = true; //标记当前完整的滑动事件已经结束 
				    //使用动画过渡让页面滑动到最终的位置
				    if(deltaT < 300){ //如果停留时间小于300ms,则认为是快速滑动，无论滑动距离是多少，都停留到下一页
				        translate = direction == 'left'?
				        currentPosition-(pageWidth+moveLength):currentPosition+pageWidth-moveLength;
				        //如果最终位置超过边界位置，则停留在边界位置
				        translate = translate > 0 ? 0 : translate; //左边界
				        translate = translate < maxWidth ? maxWidth : translate; //右边界
				    }else {
				        //如果滑动距离小于屏幕的50%，则退回到上一页
				        if (Math.abs(moveLength)/pageWidth < 0.5){
				            translate = currentPosition-moveLength;
				        }else{
				            //如果滑动距离大于屏幕的50%，则滑动到下一页
				            translate = direction == 'left'?
				            currentPosition-(pageWidth+moveLength):currentPosition+pageWidth-moveLength;
				            translate = translate > 0 ? 0 : translate;
				            translate = translate < maxWidth ? maxWidth : translate;
				        }
				    }
				    //执行滑动，让页面完整的显示到屏幕上
					viewport.style.webkitTransform = "translate3d("+translate+"px,0,0)";
					currentPosition = translate;
				} else {
					if (slideX < 0) {
						viewport.style.webkitTransform = "translate3d("+maxWidth+"px,0,0)";
					} else {
						if (Math.abs(slideX) > leftMenuWidth / 2) {
							this.openLeftMenu();
						} else {
							this.closeLeftMenu();
						}
					}
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				var musicScroll = new BScroll(this.$refs.music)
				var mineScroll = new BScroll(this.$refs.mine)
				var videoScroll = new BScroll(this.$refs.video)
			});
			viewport =  this.$refs.viewport;
			points = viewport.querySelectorAll('.wrapper');
			pageWidth = window.innerWidth; //页面宽度
			maxWidth = - pageWidth * (points.length-1); //页面滑动最后一页的位置
			startX,startY;
			initialPos = 0;  // 手指按下的屏幕位置
			moveLength = 0;  // 手指当前滑动的距离
			direction = "left"; //滑动的方向
			isMove = false; //是否发生左右滑动
			startT = 0; //记录手指按下去的时间
			isTouchEnd = true; //标记当前滑动是否结束(手指已离开屏幕) 
			page = document.querySelector('.home');
			leftMenuWidth = document.querySelector('.left-menu').clientWidth;
			menuMask = document.querySelector('.menu-mask');
		},
		created() {
			let playlist = data.playlist,
			musiclist = data.musiclist,
			newlist = data.newlist;
			if (playlist.code === 200) {
				this.playlist = playlist;
			}
			if (musiclist.code === 200) {
				this.musiclist = musiclist;
			}
			if (newlist.code === 200) {
				this.newlist = newlist;
			}
		}
	}
</script>
<style>
	.stopAnimation {
		display: block !important;
		animation-play-state:paused !important;
		-webkit-animation-play-state:paused !important;
	}
	.runAnimation {
		display: block !important;
		animation-play-state:paused !important;
		-webkit-animation-play-state:paused !important;
	}
	.content-box {
		position: absolute;
		z-index: 999;
		padding-bottom: 60px;
		overflow: hidden;
		height: 100%;
		width: 300%;
		display: flex;
    	flex-direction: row;
	}
	.content-box > div {
		flex: 1;
	}
	.content {
		height: 100%;
	}
	.conclusion {
		display: flex;
		align-items: center;
		height: 60px;
		font-size: 26px;/*no*/
		margin-top: 15px;
		color: #F46558;
	}
	.conclusion-title {
		color: black;
	}
	.conclusion .icon {
		font-size: 56px;/*no*/
		padding: 5px;
		color: #DA4453;
	}
	.conclusion > div {
		flex: 1;
	}

	.wrapper {
		overflow: hidden;
		height: 100%;
	}
	
	/*用户歌单界面*/
	.download-music {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		padding: 5px 10px;
		border-bottom: 1px solid silver;/*no*/
	}
	.mine .icon {
		font-size: 40px;/*no*/
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
	.mine-list {
		list-style-type: none;
		padding: 0px;
		margin: 0px;
		padding: 0 20px;/*no*/
	}
	.mine-list-li {
		display: flex;
		align-items: center;
		margin: 4px 0;/*no*/
	}
	.mine-list-info {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 10px;
		height: 40px;
		margin-left: 4px;/*no*/
		border-bottom: 1px solid silver;/*no*/
	}
	.list-img {
		width: 40px;
		height: 40px;
	}
	.mine-list-desc {
		font-size: 18px;/*no*/
		color: silver;
	}
	.video-box {
		width: 100%;
		height: 200px;
		background-color: #e1e1e1;
		margin-bottom: 10px;/*no*/
		display: flex;
		flex-direction: column;
	}
	.video-img {
		width: 100%;
		height: 160px;
	}
	.video-img-box {
		position: relative;
		flex: 1;
	}
	.video-img-box > .absolute {
		position: absolute;
	}
	.video-img-box > .icon-play{
		transform: translate(-50%,-50%);
		left: 50%;
		top: 50%;
		color: #fff;
		font-size: 60px;/*no*/
		border-radius: 50%;
    	background: #5554548f;
	}
	.video-img-box > .icon-play-count{
		left: 0px;
		bottom: 10px;
		color: #fff;
		font-size: 28px;/*no*/
		padding: 0 10px;/*no*/
	}
	.video-img-box > .icon-video-time {
		right: 0px;
		bottom: 10px;
		color: #fff;
		font-size: 28px;/*no*/
		padding: 0 10px;/*no*/
	}
	.video-info {
		font-size: 20px !important;/*no*/
		padding: 0 10px;/*no*/
	}
	.bottom-bar {
		height: 40px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;/*no*/
		box-sizing: border-box;
		background-color: #fff;
	}
	.video-name {
		left: 0px;
		top: 0px;
		color: #fff;
		padding: 10px;/*no*/
	}
	.bottom-bar-right > .icon {
		font-size: 36px;/*no*/
	}
</style>