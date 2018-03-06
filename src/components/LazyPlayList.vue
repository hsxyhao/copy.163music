<template>
	<div class="list">
		<slot name="head"></slot>
		<div class="list-box">
			<div class="list-item" v-for="item in list">
				<div class="list-img-box">
					<img :src="item.img">
					<span class="listen-count icon iconfont icon-headset">{{item.count}}</span>
				</div>
				<p class="list-name">{{item.name}}</p>
				<p class="list-user">{{item.user}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['list'],
		data() {
			return {};
		}
	}
</script>
<style scope>
	.list {
		margin-top: 10px;
	}
	.list-box {
		display: flex;
		flex-direction: row;
	    box-sizing: border-box;
    	flex-wrap: wrap;
	    justify-content: space-between;
	}
	.list-item {
		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;
		width: 32%;
	    margin: 5px 0;
	}
	.list-item img{
		width: 100%;
		height: 90px;
		border-radius: 6px;/*no*/
	}
	.list-item > p {
		width: 100%;
		text-align: left;
		margin: 5px;/*no*/
	}
	.list-name {
		font-size: 24px;/*no*/
	}
	.list-user .icon {
		color: #a5a5a5;
	}
	.list-user {
		font-size: 18px;/*no*/
		color: #a5a5a5;
	}
	.list-img-box {
		position: relative;
	}
	.list-img-box span {
		position: absolute;
		bottom: 10px;/*no*/
		left: 10px;/*no*/
		color: #fff;
		font-size: 26px;/*no*/
	}
</style>