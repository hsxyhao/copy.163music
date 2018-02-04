<template>
	<div class="footer-box">
		<div class="play-bar">
			<div class="progress">
				<div class="progress-bg"></div>
			</div>
		</div>
		<div class="footer">
			<div class="found-music footer-selector">
				<router-link to="/home">
					<span class="icon iconfont icon-new-o"></span>
					<span>发现音乐</span>
				</router-link>
			</div>
			<div class="my-music">
				<router-link to="/my">
					<span class="icon iconfont icon-music-o"></span>
					<span>我的音乐</span>
				</router-link>
			</div>
			<div class="btn-fixed">
				<div class="song-img">
					<div class="song-edit" @touchend="togglePlay()">
						<span class="icon iconfont icon-stop" :class="{'icon-stop':playing,'icon-play':!playing}"></span>
					</div>
					<img :class="{'stopAnimation':!playing,'runAnimtion':playing}" :src="song.img">
				</div>
			</div>
			<div class="setting">
				<router-link to="/">
					<span class="icon iconfont icon-setting-o"></span>
					<span>设置</span>
				</router-link>
			</div>
			<div class="user">
				<router-link to="/">
					<span class="icon iconfont icon-user-o"></span>
					<span>用户</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		computed: mapGetters({
			playing: 'getPlayStatus'
		}),
		methods: mapActions([
			'togglePlay','play','stop'
		]),
		data() {
			return {
				show: true,
				song:{
					img:'/static/imgs/list_6.jpg'
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
	.footer-box {
		position: fixed;
		width: 100%;
		bottom: 0px;
		height: 60px;
		box-shadow: 0px 0px 20px silver;
	}
	.footer {
		display: flex;
		font-size: 22px;/*no*/
		height: 100%;
		justify-content: space-around;
    	align-items: center;
		background-color: #ffffff;
		transition: all 0.2s linear;
		transform: translateY(-60px); 
	}
	.show {
		transform: translateY(60px) !important;
	}
	.footer .icon {
		font-size: 56px;/*no*/
		color: #CDCBCE;
		padding: 10px;/*no*/
	}
	.footer a {
		display: flex;
		flex-direction: column;
		color: #CDCBCE;
		font-size: 20px;/*no*/
		flex: 1;
		align-items: center;
		justify-content: center;
	}
	.footer > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		height: 100%;
	}
	.btn-fixed > .icon {
		font-size: 40px;
	}
	.song-img {
		position: relative;
		width: 55px;
		height: 55px;
		border-radius: 50%;
	}
	.song-img > img {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
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
    	font-size: 50px;/*no*/
    	color: #919191a6;
	}
	.footer-selector a{
		color: #EE4B5D;
	}
	.footer-selector .icon {
		color: #EE4B5D;
	}
	.footer-selector > span {
		color: #EE4B5D;
	} 
	.play-bar {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.edit {
		flex: 1;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
	}
	.progress {
		width: 100%;
		height: 3px;/*no*/
	}
	.progress-bg {
		width: 60%;
		height: 100%;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		background: #E55D87;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #5FC3E4, #E55D87);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #5FC3E4, #E55D87); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
</style>