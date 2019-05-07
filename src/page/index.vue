<template>
	<div class="hello">
		<div class="header">
			前端组件集合
		</div>
		<tk-cell-one @click="$router.push('/list')" title="list类组件及搜索组件"></tk-cell-one>
		<tk-cell-one @click="$router.push('/sign')" title="sign签名组件"></tk-cell-one>
		<tk-cell-one @click="$router.push('/form')" title="form表单组件"></tk-cell-one>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			}
		}
	}
</script>

<style lang="less">
	.header{
		background:#000;
		text-align:center;
		height:50px;
		line-height:50px;
		color:#fff;
	}
	.tk-cell-one{
		margin-top:5px;
	}
</style>