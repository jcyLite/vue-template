<template>
	<div class="hello">
		<div class="header">
			前端组件大集合
		</div>
		<tk-cell-one @click="$router.push('/list')" title="list类组件及search组件"></tk-cell-one>
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