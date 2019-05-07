<template>
	<div class="tk-table">
		<div v-for="item of data">
			<div v-for="i of item">
				{{i}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['data']
	}
</script>

<style lang="less">
	.tk-table{
		>div{
			>div{
				float:left;
			}
		}
	}
</style>