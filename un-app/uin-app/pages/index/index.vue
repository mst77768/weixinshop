<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="">{{show}}</view>
		<view class="btn">
			<button type="default" @click="add">增加</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed:{
			show(){
				return this.$store.state.num
			}
		},
		onLoad() {
             
		},
		methods: {
          add(){
			  this.$store.commit("add");
			  // uni.request({
			  // 	url:
			  // })用做aiax请求
			  
		  },
		  
		},
		mounted() {
			
		}
	    
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		color: #8f8f94;
		font-size: 36rpx;
	}
</style>
