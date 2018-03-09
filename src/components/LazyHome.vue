<template>
	<div class="home">
		<!--填充元素-->
		<div class="fill-header"></div>
		<lazy-header></lazy-header>
		<keep-alive>
			<router-view>
				<slot name="content"></slot>
			</router-view>
		</keep-alive>
		<lazy-footer></lazy-footer>
		<lazy-music-menu></lazy-music-menu>
		<lazy-left-menu></lazy-left-menu>
	</div>
</template>
<script>
	import LazyHeader from '@/components/LazyHeader'
	import LazyFooter from '@/components/LazyFooter'
	import LazyMusicMenu from '@/components/LazyMusicMenu'
	import LazyLeftMenu from '@/components/LazyLeftMenu'
	export default {
		components:{
			LazyHeader,LazyFooter,LazyMusicMenu,LazyLeftMenu
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
		font-size: 30px;/*no*/
		height: 100%;
	    width: 100%;
	    overflow: hidden;
	}
</style>