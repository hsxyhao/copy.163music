<template>
	<lazy-home>
		<div slot="content">
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
			<lazy-sing-list v-bind:lists="lists">
				<div slot="head" class="title-line">推荐歌单<span class="icon iconfont icon-right-o"></span></div>
			</lazy-sing-list>
		</div>
	</lazy-home>
</template>
<script>
	import LazyHome from '@/components/LazyHome'
	import LazyRound from '@/components/LazyRound'
	import LazySingList from '@/components/LazySingList'
	import BScroll from 'better-scroll'
	export default {
		components:{
			LazyRound,LazySingList,LazyHome
		},
		data() {
			return {
				lists:[
					{
						img:'/static/imgs/list_1.jpg',
						name:'单曲循环都不够',
						user:'胖妞啊%cc',
						count:'303'
					},
					{
						img:'/static/imgs/list_2.jpg',
						name:'一直听到现在的歌',
						user:'夏季恋歌',
						count:'305'
					},
					{
						img:'/static/imgs/list_3.jpg',
						name:'让你沦陷的中文歌曲',
						user:'oba mylover',
						count:'102'
					},
					{
						img:'/static/imgs/list_4.jpg',
						name:'阳光下的旋律',
						user:'猪小妹-v5',
						count:'223'
					},
					{
						img:'/static/imgs/list_5.jpg',
						name:'天籁之音不觉于耳',
						user:'chenyu',
						count:'160'
					},
					{
						img:'/static/imgs/list_6.jpg',
						name:'还好这辈子遇到你',
						user:'anni',
						count:'309'
					}
				]
			};
		}
	}
</script>
<style>
	.stopAnimation {
		animation-play-state:paused !important;
	}
	.runAnimation {
		animation-play-state:running !important;
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
	.title-line {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 40px;/*no*/
		padding: 15px;
		box-sizing: content-box;
	}
	.title-line .icon {
		font-size: 50px;/*no*/
	}
</style>