<template>
	<div class="home">
		<!--填充元素-->
		<div class="fill-header"></div>
		<lazy-header></lazy-header>
		<music></music>
		<lazy-footer></lazy-footer>
		<lazy-music-menu></lazy-music-menu>
		<lazy-left-menu></lazy-left-menu>
		<div class="menu-mask" @touchend="closeLeftMenu"></div>
	</div>
</template>
<script>
	import LazyHeader from '@/components/LazyHeader'
	import Music from '@/page/Music'
	import LazyFooter from '@/components/LazyFooter'
	import LazyMusicMenu from '@/components/LazyMusicMenu'
	import LazyLeftMenu from '@/components/LazyLeftMenu'
	export default {
		components:{
			LazyHeader,Music,LazyFooter,LazyMusicMenu,LazyLeftMenu
		},
		methods:{
			closeLeftMenu() {
				Music.methods.closeLeftMenu();
			}
		},
		data() {
			return {
				lists:[
					
				]
			};
		}
	}
</script>
<style>
	html,body {
		width: 100%;
		height: 100%;
	}

	.menu-mask {
		position: fixed;
		display: none;
		z-index: 10003;
		opacity: 0;
		width: 100%;
		height: 100%;
		top: 0px;
		background-color: #464545bd;
	}
	.bg-black-gradients {
		background: #232526;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	.bg-red-gradients {
		background: #DA4453;  /* fallback for old browsers */
		background: -webkit-linear-gradient(50deg, #F56658, #EC465E);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(50deg, #F56658, #EC465E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	.fill-header {
		height: 90px;
		width: 100%;
	}
	.home {
	    position: relative;
		font-size: 30px;/*no*/
		height: 100%;
	    width: 100%;
	}
</style>