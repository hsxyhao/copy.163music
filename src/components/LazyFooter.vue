<template>
	<div class="footer-box">
		<div class="flex">
			<div class="footer">
				<div class="footer-left">
					<lazy-song-item :song='songs' :currentSong='songs[0]'></lazy-song-item>
				</div>
				<div class="footer-right">
					<div class="song-edit">
						<span v-finger:tap="togglePlay" class="icon iconfont icon-stop" :class="{'icon-stop':playing,'icon-play':!playing}"></span>
						<span v-finger:tap="showMenu" class="icon iconfont icon-history"></span>
					</div>
				</div>
			</div>
			<div class="play-bar">
				<div class="progress-bg"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import LazyMask from '@/components/LazyMask'
	import LazySongItem from '@/components/LazySongItem'
	import { mapGetters, mapActions } from 'vuex'
	export default {
		components:{ LazyMask ,LazySongItem},
		computed: mapGetters({
			playing: 'getPlayStatus',
			img: 'getPlayImg',
			showPlayPage:'getShowPage'
		}),
		methods: {
			...mapActions([
				'togglePlay','play','stop','dbclick',
				'showPage','hidePage','showMenu'
			]),
	        hide: function(){
	        	this.playShow = false
	        }
	    },
		data() {
			return {
				show: true,
				songs:[
					{
						img: 'static/imgs/list_6.jpg',
						title: '听妈妈的话',
						author: '周杰伦'
					},
					{
						img: 'static/imgs/list_6.jpg',
						title: '听妈妈的话',
						author: '周杰伦'
					},
					{
						img: 'static/imgs/list_6.jpg',
						title: '听妈妈的话',
						author: '周杰伦'
					},
					{
						img: 'static/imgs/list_6.jpg',
						title: '听妈妈的话',
						author: '周杰伦'
					},
					{
						img: 'static/imgs/list_6.jpg',
						title: '听妈妈的话',
						author: '周杰伦'
					},
					{
						img: 'static/imgs/list_6.jpg',
						title: '听妈妈的话',
						author: '周杰伦'
					}
				]
			};
		}
	}
</script>
<style scoped>
    .relative {
    	position: relative;
    }
    .flex {
    	display: flex;
    	flex-direction: column;
    	height: 100%;
    }
	.footer-box {
		position: fixed;
		width: 100%;
		bottom: 0px;
		height: 46px;
		box-shadow: 0px 0px 20px silver;
		background-color: #ececec;
		z-index: 999;
	}
	.footer {
		display: flex;
		flex: 1;
    	align-items: center;
    	padding: 0 20px;/*no*/
    	justify-content: space-between;
	}
	.footer .icon {
		font-size: 56px;/*no*/
		color: #CDCBCE;
		padding-bottom: 4px;/*no*/
	}
	
	.btn-fixed > .icon {
		font-size: 40px;
	}
	.footer-left {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1;
		height: 100%;
	}

	.footer-right {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 100%;
	}
	.song-edit {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.song-edit .icon {
		z-index: 10;
    	font-size: 60px;/*no*/
    	color: #db1919;
    	margin: 0 6px;/*no*/
	}
	.play-bar {
		height: 4px;/*no*/
		width: 100%;
	}
	.progress-bg {
		width: 60%;
		height: 100%;
		background: #f85032;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #e73827, #f85032);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #e73827, #f85032); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
</style>