<template>
  <div id="app">
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar/MainTabBar'

export default {
  name: "app",
  components: {
    MainTabBar
  },
};
</script>
<style>
@import url('assets/css/base.css');
</style>
