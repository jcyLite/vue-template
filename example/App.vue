<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
	export default {
		mounted(){
			window.app=this;
			
		}
	}
</script>
<style lang="less">
	body{
		margin:0; 
		background:rgba(66, 73, 173, 0.671);
		pre{
			font-size:14px;
			text-align: left;
		}
		#app{
			padding-top:50px;
		}
		.container{
			padding:13px;
		}
	}
</style>
