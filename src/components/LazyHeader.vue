<template>
	<div class="head-box bg-red-gradients">
		<div class="tab-bar">
			<div>
				<span class="icon iconfont icon-user"></span>
			</div>
			<div class="bar-title">
				<router-link to="/self"><span>我的</span></router-link>
				<router-link to="/self"><span>推荐</span></router-link>
				<router-link to="/self"><span>动态</span></router-link>
			</div>
			<div class="playing-btn">
				<div class="playing-one"></div>
				<div class="playing-two"></div>
				<div class="playing-three"></div>
				<div class="playing-four"></div>
			</div>
		</div>
		<div class="search">
			<span class="icon iconfont icon-search"></span>
			<span>搜音乐、歌词、电台</span>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.bg-red-gradients {
		background: #DA4453;  /* fallback for old browsers */
		background: -webkit-linear-gradient(50deg, #F56658, #EC465E);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(50deg, #F56658, #EC465E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	.head-box {
		position: fixed;
		height: 90px;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.icon {
		font-size: 40px;/*no*/
	}
	.tab-bar a {
		font-size: 30px;/*no*/
		color: #FFF;
	}
	.tab-bar {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #FFF;
	}
	.bar-title {
	    flex: 1;
	    display: flex;
	    padding: 20px;
	    justify-content: space-evenly;
	}
	.search .icon {
		font-size: 30px;/*no*/
		margin: 0 5px;
	}
	.search {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #f6f0f0;
		font-size: 22px;/*no*/
		height: 30px;
		background-color: #54545429;
		border-radius: 30px;
	}
	.playing-btn {
		display: flex;
		flex: row;
		flex-wrap: wrap-reverse;
		width: 40px;/*no*/
		height: 40px;/*no*/
	}
	.playing-btn > div {
		flex: 1;
		background-color: #fff;
		margin: 3px;/*no*/
	}
	.playing-one {
		height: 30px;/*no*/
	}
	.playing-two {
		height: 36px;/*no*/
	}
	.playing-three {
		height: 25px;/*no*/
	}
	.playing-four {
		height: 30px;/*no*/
	}

</style>