<template>
	<div class="list">
		<tk-header>
			list类组件及search组件
			<!--<span @click="$router.push('/list-doc')" slot="right">文档</span>-->
		</tk-header>
		<tk-scroll :options="{
			pullUp:true,
			pullDown:true
		}" 
		v-model="d"
		:param="{
			a:2
		}" url="tuceng">
			<tk-search v-model="searchTxt"></tk-search>
			<tk-cell-four
				:data="{
					'title':item.a,
					'status':item.b,
					'content':item.c,
					'time':item.d
				}"
				:filter="searchTxt"
				v-for="(item,index) of d"
				></tk-cell-four>
		</tk-scroll>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				searchTxt:'',
				d:[]
			}
		},
		mounted(){
		}
	}
</script>

<style lang="less">
	.menus{
		div:last-child{
			width:calc( 25% - 4px );
			text-align: center;
			font-size:80px;
		}
	}
	.header{
		background:#000;
		text-align:center;
		height:50px;
		line-height:50px;
		color:#fff;
	}
	.tk-scroll{
		position:fixed;
		top:50px;
		bottom:0;
		left:0;
		right:0;
	}
</style>