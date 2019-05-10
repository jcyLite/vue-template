<template>
	<div class="carousel">
		<tk-header>
			slide轮播组件
		</tk-header>
		<div class="container">
			<pot-slide ref="slide" :data="items" @change="changePage">
			  <pot-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
			    <!--<a>-->
			      <img :src="item.image">
			    <!--</a>-->
			  </pot-slide-item>
			</pot-slide>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>