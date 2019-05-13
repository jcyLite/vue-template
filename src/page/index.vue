<template>
	<div class="hello">
		<div class="header">
			前端组件
			<span @click="$router.push('/test')" class="right">test</span>
		</div>
		<div class="cell" @click="$router.push('/list')">
			list类组件及search搜索组件
		</div>
		<div class="cell" @click="$router.push('/sign')">
			sign签名组件
		</div>
		<div class="cell" @click="$router.push('/form')" >
			form表单组件
		</div>
		<div class="cell" @click="$router.push('/menu')">
			menu菜单栏组件
		</div>
		<div class="cell" @click="$router.push('/poper')">
			poper弹出层组件
		</div>
		<div class="cell" @click="$router.push('/image')">
			image图片组件 (自带图片放大显示功能)
		</div>
		<div class="cell" @click="$router.push('/slide')">
			slide轮播组件
		</div>
		<div class="cell" @click="$router.push('/chat')">
			chat聊天组件
		</div>
		<div class="cell" @click="$router.push('/other')">
			其他组件
		</div>
		<div class="cell" @click="$router.push('/upload')">
			upload上传资源组件
		</div>
		
	</div>
</template>

<script>
</script>

<style lang="less">
	.header{
		position: fixed;
		top:0;
		width:100%;
		background:#000;
		text-align:center;
		height:50px;
		line-height:50px;
		color:#fff;
		.right{
			float:right;
			margin-right:20px;
		}
	}
	.cell{
		background:#fff;
		margin-top:5px;
		height:50px;
		color:#000;
		line-height:50px;
		padding-left:13px;
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
	}
</style>