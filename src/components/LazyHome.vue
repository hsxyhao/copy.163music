<template>
	<div class="home">
		<lazy-header></lazy-header>
		<router-view>
			<slot name="content"></slot>
		</router-view>
		<lazy-footer></lazy-footer>
		<play></play>
	</div>
</template>
<script>
	import LazyHeader from '@/components/LazyHeader'
	import LazyFooter from '@/components/LazyFooter'
	import Play from '@/page/Play'
	export default {
		components:{
			LazyHeader,LazyFooter,Play
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
	body {
		padding-top: 90px;
		box-sizing: border-box;
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
	.home {
		font-size: 30px;/*no*/
		height: 100%;
	}
</style>