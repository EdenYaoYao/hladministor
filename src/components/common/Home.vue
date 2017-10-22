<template>
	<div class="wrapper">
		<vHeader></vHeader>
		<vSliderBar></vSliderBar>
		<div class="test">
			<transition name='move' mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
import vHeader from './Header.vue';
import vSliderBar from './SliderBar.vue';
export default {
	name: 'Home',
	components: {
		vHeader, vSliderBar
	}
}
</script>
<style scoped>
.test {
	height: 90%;
	margin: 60px 0 0 200px;
	padding: 20px;
	overflow: auto;
}
</style>
