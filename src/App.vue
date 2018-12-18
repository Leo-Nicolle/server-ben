<template>
  <div id="app">
    <mainmenu></mainmenu>
    <router-view/>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue"
import store from "@/store"

export default {
  name: 'App',
  components: {
    mainmenu: Menu
  },

  mounted: () => {
    store.dispatch("pullItemsFromServer");
	},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list-item > ul>li{
  cursor: pointer;
  line-height: 18px;
  list-style: none;

}
.list-item > ul>li:hover{
  background-color: grey;
}
</style>
