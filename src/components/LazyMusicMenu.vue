<template>
	<div class="music-menu" :class="{'hide':hide}">
		<div class="music-menu-box">
			<div class="music-menu-head">
				<span class="play-status">
					<span class="icon iconfont icon-repeat"></span>
					<span>循环播放（1首）</span>
				</span>
				<span class="icon iconfont icon-download-b"></span>
				<span class="icon iconfont icon-add"></span>
				<span class="icon iconfont icon-delete"></span>
			</div>
			<div class="music-menu-content">
				<ul class="menu-list-ul">
					<li class="menu-list-li">
						<div class="li-left">
							<span>迷茫的爱</span> - 
							<span>郭玲</span>
						</div>
						<div class="li-right">
							<span class="icon iconfont icon-heart-b"></span>
							<span class="icon iconfont icon-guanbi"></span>
						</div>
					</li>
				</ul>
			</div>
			<div v-finger:tap="hideMenu" class="music-menu-footer">
				<span>关闭</span>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		methods:{
			...mapActions([
				'getMenuStatus','hideMenu'
			]),
			close() {

			}
		},
		computed: mapGetters({
			hide: 'getMenuStatus'
		}),
		data() {
			return {

			}
		}
	}
</script>
<style>
	.hide {
		transform: translateY(100%);
	}
	.music-menu {
		position: fixed;
		width: 100%;
		height: 400px;
		bottom: 0px;
		z-index: 1000;
		transition: transform .5s cubic-bezier(.32,-0.32,.66,1.34);
	}
	.music-menu .icon {
		font-size: 56px;/*no*/
		color: #B0B0AF;
	}
	.music-menu-box {
		position: absolute;
		bottom: 0px;
		width: 100%;
		height: 100%;
		background-color: #f4f3f3fc;
	}
	.music-menu-head {
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-bottom: 1px solid silver;
	}
	.play-status {
		display: flex;
    	align-items: center;
	}

	.music-menu-content {
		height: 290px;
	} 
	.music-menu-footer {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid silver;
		font-weight: bold;
		letter-spacing: 10px;
	}
	.menu-list-ul {
		font-size: 36px;/*no*/
		padding-left: 15px;
	}
	.menu-list-li {
		display: flex;
    	align-items: center;
    	height: 50px;
    	border-bottom: 1px solid silver;
    	justify-content: space-between;
	}
	.li-left {
		width: 280px;
		text-align: left;
		text-overflow:ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.li-right {
		flex: 1;
	}
</style>