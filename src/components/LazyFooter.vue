<template>
	<div class="footer-box">
		<div class="play-bar">
			<div class="edit bg-red-gradients">
				<div class="song-info">
					<img src="/static/imgs/singer.jpg">
					<div class="song-details">
						<p class="song-name">听妈妈的话</p>
						<p class="song-author">周杰伦</p>
					</div>
				</div>
				<div class="song-edit">
					<span class="icon iconfont icon-play"></span>
					<span class="icon iconfont icon-playlist"></span>
				</div>
			</div>
			<div class="progress">
				<div class="progress-bg"></div>
			</div>
		</div>
		<div class="footer" :class="{fixed:fixed}">
			<div class="found-music footer-selector">
				<span class="icon iconfont icon-home"></span>
				<span>发现音乐</span>
			</div>
			<div class="my-music">
				<span class="icon iconfont icon-music"></span>
				<span>我的音乐</span>
			</div>
			<div class="btn-fixed footer-selector">
				<span class="icon iconfont icon-fixed"></span>
			</div>
			<div class="setting">
				<span class="icon iconfont icon-setting"></span>
				<span>设置</span>
			</div>
			<div class="user">
				<span class="icon iconfont icon-account"></span>
				<span>用户</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				fixed: false
			};
		}
	}
</script>
<style scoped>
	.footer-box {
		position: fixed;
		width: 100%;
		bottom: 0px;
		height: 50px;
		box-shadow: 0px 0px 20px silver;
	}
	.footer:active {
		transform: translateY(50px);
	}
	.footer {
		display: flex;
		font-size: 22px;/*no*/
		height: 100%;
		justify-content: space-around;
    	align-items: center;
		background-color: #ffffff;
		transition: all 0.2s linear;
		transform: translateY(-50px); 
	}
	.footer .icon {
		font-size: 48px;/*no*/
		color: #CDCBCE;
	}
	.footer > div {
		display: flex;
		flex-direction: column;
		color: #CDCBCE;
	}
	.btn-fixed > .icon {
		font-size: 40px;
	}
	.footer-selector {
		color: #EE4B5D;
	}
	.footer-selector > .icon {
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

	.song-info {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		flex: 1;
	}
	.song-info img {
		width: 40px;
		height: 40px;
	}
	.song-details {
		margin: 0 10px;/*no*/
	}
	.song-info .song-name {
		font-size: 28px;/*no*/
		color: #fff;
		padding: 5px 15px;/*no*/
	}
	.song-info .song-author {
		font-size: 20px;/*no*/
		color: silver;
		padding: 5px 15px;/*no*/
	}
	.song-edit {
		display: flex;
		align-items: center;
	}
	.song-edit .icon{
		font-size: 46px;/*no*/
		margin: 0 15px;
		color: #fff;
	}
</style>