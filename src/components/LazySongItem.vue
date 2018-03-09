<template>
	<div class="out" ref="outer" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
		<div class="song-box" :class="{'current':current==0}">
			<div class="song-img">
				<img :src="currentSong.img" :class="{'stopAnimation':!playing,'runAnimtion':playing}">
				<div class="playsong-info">
					<p>{{currentSong.title}}</p>
					<p>{{currentSong.author}}</p>
				</div>
			</div>
		</div>
		<div class="song-box" :class="{'current':current==1}">
			<div class="song-img">
				<img class="stopAnimation" src="static/imgs/list_2.jpg">
				<div class="playsong-info">
					<p>下一首</p>
					<p>下一首</p>
				</div>
			</div>
		</div>
		<div class="song-box" :class="{'current':current==2}">
			<div class="song-img">
				<img class="stopAnimation" src="static/imgs/list_1.jpg">
				<div class="playsong-info">
					<p>下下一首</p>
					<p>下下一首</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	let startX, start = false,curIndex = 0,
		nextIndex = 0,time = 0,width = 0,
		threshold = 0,hasMoved=false,count = 3,
		started,distance,items;

	export default {
		props:['song','currentSong'],
		computed: mapGetters({
			playing: 'getPlayStatus'
		}),
		methods:{
			touchStart(e) {
                if (e.touches.length === 1) {
                	let touch = e.touches[0];
                	startX = touch.pageX;
                	start = true;
                	time = new Date().getTime();
            		distance = 0;
					this.clickInit(items[curIndex],items[nextIndex]);	
            		if (hasMoved) {
						curIndex++;
						hasMoved = false;
						curIndex%=count;
        				this.current = curIndex;
            		}
            		nextIndex = (curIndex+1)%count;
            		started = false;
                }
			},
			touchMove(e) {
				if (!start) { return; }
            	let touch = e.touches[0];
				let disX = touch.pageX - startX;
				time = new Date().getTime();
				distance = disX;
				if (!started) {
					items[nextIndex].style.left = distance>0?'-100%':'100%';
					items[nextIndex].style.display = 'block';
					started = true;
				}
				this.transform([items[curIndex],items[nextIndex]],disX);
			},
			touchEnd() {
				start = false;
				let translate = distance > 0 ? width : 0;
				if (Math.abs(distance) > 0) {
					this.transition([items[curIndex],items[nextIndex]]);
					if (time < 300) {
						this.transform(items[curIndex],translate);
						curIndex++;
						hasMoved=true;
					} else {
						if (Math.abs(distance) < threshold) {
							translate = 0;
						} else {
							translate = distance > 0 ? width:-width;
							hasMoved=true;
						}
						this.transform([items[curIndex],items[nextIndex]],translate);
					}
				}
			},
			_trans(name,target,value) {
				let arr = [];
				if (!(target instanceof Array && target.constructor === Array)) {
					arr[arr.length] = target;
				} else {
					arr = target;
				}
				for (let i = 0; i < arr.length; i++) {
					arr[i].style[name] = value;
				}
			},
			transform(doms,translate) {
				this._trans('webkitTransform',doms,'translate3d('+translate+'px,0,0)');
			},
			clearTrasform(doms) {
				this._trans('webkitTransform',doms,'');
			},
			transition(doms) {
				this._trans('webkitTransition',doms,'.5s ease -webkit-transform');
			},
			clearTransition(doms) {
				this._trans('webkitTransition',doms,'');
			},
			clickInit(current,last) {
				current.style = '';
				last.style = '';
			}
		},
		created() {
			if (this.last == null) {
				this.last = this.song
			}
			if (this.next == null) {
				this.next = this.song
			}
		},
		mounted() {
			items = this.$refs.outer.children;
			width = this.$refs.outer.clientWidth;
			threshold = Math.floor(width/2);
		},
		data() {
			return {
				current:0
			}
		}
	}
</script>
<style>
	@keyframes music_playing {
      from {transform:rotate(0deg);}
      to {transform:rotate(360deg);}
    }
	.out {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.song-img {
		position: relative;
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 100%;
		align-items: center;
	}
	.song-box {
		display: none;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
	}
	.current {
		display: block !important;
	}
	.current {
		display: block;
	}
	.song-img > img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		-webkit-animation: music_playing;
		-o-animation: music_playing;
		animation: music_playing;

		animation-duration: 3s;
		animation-timing-function:linear;
		animation-iteration-count:infinite;
		animation-direction: normal; 
	}
	.playsong-info {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;/*no*/
	}
	.playsong-info > p{
		font-size: 20px;/*no*/
		margin-top: 4px;/*no*/
	}
</style>