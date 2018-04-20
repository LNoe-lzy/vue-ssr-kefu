<template>
  <div id="app">
    <v-header />
    <div class="kefu-main">
      <v-sidebar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/header';
import Sidebar from './components/sidebar';

export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar,
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style lang="less">
#app {
  .kefu-main {
    margin-top: 60px;
    display: flex;
  }
}
</style>
