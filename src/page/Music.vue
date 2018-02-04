<template>
	<div slot="content" class="content-box">
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
		<lazy-music-list :list="musiclist" v-if="playlist!==null && playlist.data.length > 0"></lazy-music-list>
		<lazy-play-list :list="newlist.data" v-if="newlist!==null && newlist.data.length > 0">
			<lazy-list-title slot="head" :title="newlist.title"></lazy-list-title>
		</lazy-play-list>
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

	export default {
		components:{
			LazyRound,LazyPlayList,LazyHome,LazyListTitle,LazyMusicList
		},
		data() {
			return {
				playlist: null,
				musiclist: null,
				newlist: null
			}
		},
		created() {
			axios.get('/static/data.json').then((response) => {
				let playlist = response.data.playlist,
				musiclist = response.data.musiclist,
				newlist = response.data.newlist;
				if (playlist.code === 200) {
					this.playlist = playlist;
				}
				if (musiclist.code === 200) {
					this.musiclist = musiclist;
				}
				if (newlist.code === 200) {
					this.newlist = newlist;
				}
			})
		}
	}
</script>
<style>
	.stopAnimation {
		animation-play-state:paused !important;
		-webkit-animation-play-state:paused !important;
	}
	.runAnimation {
		animation-play-state:paused !important;
		-webkit-animation-play-state:paused !important;
	}
	.content-box {
		padding-bottom: 60px;
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
</style>