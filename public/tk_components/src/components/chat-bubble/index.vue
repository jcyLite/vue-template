<style lang="less">
	.chat-bubble{
		margin-top:30px;
		overflow: hidden;
		&.isMe{
			.avatar{
				background:#FFB243;
				float:right;
			}
			.msg{
				float:right;
			}
		}
		.avatar{
			margin:10px;
			float:left;
			width:50px;
			height:50px;
			background:#049EE8;
			border-radius:50%;
		}
		.msg{
			float:left;
			width:calc( 100% - 80px );
			background:#04be02;
			color:#fff;
			border-radius:5px;
			height:70px;
			padding:13px;
		}
	}
</style>
<template>
	<div class="chat-bubble" :class="{isMe:data.isMe}">
		<div class="avatar">
			
		</div>
		<div class="msg">
			{{data.msg}}
		</div>
	</div>
</template>

<script>
	export default {
		props:['data']
	}
</script>

