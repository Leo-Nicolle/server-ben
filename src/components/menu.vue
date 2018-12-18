<template>
  <div>
    <ul class = "main-menu">
      <li v-on:click='onCreateClick()'>Créer</li>
      <li v-on:click='onListClick()'>Liste</li>
      <!-- <li v-on:click='onCreateClick()'>Rechercher</li> -->
    </ul>

  </div>
</template>

<script>

export default {
  name: 'MainMenu',

  methods: {
    onCreateClick(){
      console.log("create");
      this.$router.push("/items/new");
    },
    onListClick(){
      console.log("list");
      this.$router.push("/items");
    }
  },

  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-menu{
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style: none;
}

.main-menu > li{
  min-width: 200px;
  min-height: 32px;
  line-height: 32px;
  cursor: pointer;

  text-align: center;
}

.main-menu > li:hover{
  background-color: grey;
}

</style>
