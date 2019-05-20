<template>
	<div class="test">
		<tk-header>
			test
		</tk-header>
		<div>
			<checkboxb v-model="a"></checkboxb>
			<tk-button @click="b">提交</tk-button>
		</div>
	</div>
</template>

<script>
	export default {
		components:{
			checkboxb:()=>import('./components/checkboxb.vue')
		},
		data(){
			return {
				a:[]
			}
		},
		methods:{
			b(){
				console.log(this.a);
			}
		}
	}
</script>

<style lang="less">
	.active{
		background:red;
	}
</style>