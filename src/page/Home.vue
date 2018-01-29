<template>
	<div class="home">
		<lazy-header></lazy-header>
		<lazy-footer></lazy-footer>
	</div>
</template>
<script>
	import LazyHeader from '@/components/LazyHeader'
	import LazyFooter from '@/components/LazyFooter'
	export default {
		components:{
			LazyHeader,LazyFooter
		},
		data() {
			return {};
		}
	}
</script>
<style>
	.bg-red-gradients {
		background: #DA4453;  /* fallback for old browsers */
		background: -webkit-linear-gradient(50deg, #F56658, #EC465E);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(50deg, #F56658, #EC465E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	.home {
		font-size: 30px;/*no*/
	}
</style>