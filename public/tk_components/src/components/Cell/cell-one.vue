<template>
	<div @click="$emit('click')" class="tk-cell-one">
		{{title}}
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:'default'
			}
		}
	}
</script>

<style lang='less'>
	.tk-cell-one{
		background:#fff;
		height:50px;
		line-height:50px;
		padding-left:20px;
		border-bottom:1px solid #ddd;
		border-top:1px solid #ddd;
	}
</style>