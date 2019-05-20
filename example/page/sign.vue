<template>
	<div class="sign">
		<tk-header>
			sign签名组件
		</tk-header>
		<div>
			<tk-sign :height="height" v-model="val"></tk-sign>
			<tk-button @click="submit">提交</tk-button>
		</div>
			
	</div>
</template>

<script>
	export default {
		data(){
			return {
				val:'',
				height:window.innerHeight-100
			}
		},
		methods:{
			submit(){
				this.$http.post('/sign',{data:this.val})
			}
		}
	}
</script>

<style>
</style>