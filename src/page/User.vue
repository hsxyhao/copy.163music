<template>
	<div slot="content" class="user">
		<div class="user-head">
			<div class="user-head-img">
				<img src="/static/imgs/head.jpg">
				<div class="user-info">
					<p class="user-name">96、任性</p>
					<p class="user-level">Lv. 1</p>
				</div>
			</div>
			<div class="user-head-other">
				<div>
					<p>动态</p>
					<p>0</p>
				</div>
				<div>
					<p>关注</p>
					<p>0</p>
				</div>
				<div>
					<p>粉丝</p>
					<p>0</p>
				</div>
				<div>
					<p>编辑资料</p>
					<p>0</p>
				</div>
			</div>
		</div>
		<div>
			
		</div>
		<div>
			
		</div>
	</div>
</template>
<script>
</script>
<style scope>
	.user-head {
		padding: 10px 0;
	}
	.user-info {
		margin-left: 20px;/*no*/
	}
	.user-name {
		font-weight: bold;
	}
	.user-level {
		padding: 5px 15px;
	    border-radius: 20px;
	    border: 1px solid silver;
		margin-top: 10px;/*no*/
	}
	.user-head-img {
		display: flex;
		align-items: center;
		flex-direction: row;
		padding: 0 15px;
	}
	.user-head-other {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 15px;
		margin-top: 10px;
		border-top: 1px solid silver;
		height: 100px;/*no*/
	}
	.user-head-other > div {
		border-right: 1px solid silver;
		padding: 0 20px;/*no*/
	}
	.user-head-other > div:last-child {
		border: none;
		padding: 0 ;
	}
	.user-head-img > img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
</style>