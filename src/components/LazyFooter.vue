<template>
	<div class="footer-box">
		<div class="flex">
			<div class="footer">
				<div class="footer-left">
					<div class="song-img" >
						<img :class="{'stopAnimation':!playing,'runAnimtion':playing}" :src="song.img">
						<div class="playsong-info">
							<p>听妈妈的话</p>
							<p>周杰伦</p>
						</div>
					</div>
				</div>
				<div class="footer-right">
					<div class="song-edit" v-finger:tap="togglePlay" >
						<span class="icon iconfont icon-stop" :class="{'icon-stop':playing,'icon-play':!playing}"></span>
						<span class="icon iconfont icon-history"></span>
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
	import { mapGetters, mapActions } from 'vuex'
	export default {
		components:{ LazyMask },
		computed: mapGetters({
			playing: 'getPlayStatus',
			img: 'getPlayImg',
			showPlayPage:'getShowPage'
		}),
		methods: {
			...mapActions([
				'togglePlay','play','stop','dbclick',
				'showPage','hidePage'
			]),
	        hide: function(){
	        	this.playShow = false
	        }
	    },
		data() {
			return {
				show: true,
				song:{
					img:'static/imgs/list_6.jpg'
				}
			};
		}
	}
</script>
<style scoped>
	@keyframes music_playing {
      from {transform:rotate(0deg);}
      to {transform:rotate(360deg);}
    }
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
	}
	.song-img {
		display: flex;
		flex-direction: row;
	}
	.song-img > img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		-webkit-animation: music_playing;
		-o-animation: music_playing;
		animation: music_playing;

		animation-duration: 3s;
		animation-timing-function:linear;
		animation-iteration-count:infinite;
		animation-direction: normal; 
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
	.playsong-info {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;/*no*/
	}
	.playsong-info > p{
		font-size: 20px;/*no*/
		margin-top: 4px;/*no*/
	}
</style>