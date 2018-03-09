<template>
  <div id="app">
	<lazy-home></lazy-home>
  </div>
</template>

<script>
	import LazyHome from '@/components/LazyHome'
	export default {
	  name: 'App',
	  components:{LazyHome}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height: 100%;
}
span {
    letter-spacing: 2px;
}
</style>
