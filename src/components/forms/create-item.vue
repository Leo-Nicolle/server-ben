<template>
    <div class = "form-container">
      <p>
        <span>Nom</span><br/>
        <input v-model="name" placeholder="Entrez un nom"/>
      </p>
      <p>
        <span>Temps</span><br/>
        <input v-model="time" placeholder="Temps ? "/>
      </p>

      <p>
        <span>Aouter un constituant</span>
        <suggestitem v-on:item-selected="addSelectedItem"
        v-bind:items ='allItems'></suggestitem>
      </p>
       <ul class = "subitem-list">
         <li v-for="item in subItems">
           <addsubitem :item="item" v-on:item-unselected="onItemUnselect(item)"></addsubitem>
         </li>
       </ul>

       <p>
        <button @click="onSubmit()">Ajouter</button>
       </p>
       <listItem :items ="allItems"></listItem>


   </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import Searchitem from '../fields/suggest-item';
import AddSubItem from './add-sub-item';
import ListItems from '../views/list-items';

export default {
  name: 'CreateItem',
  data() {
    return {
      name: '',
      time: 0,
      subItems: [],
    };
  },

  computed: {
    ...mapGetters(['allItems']),
  },

  methods: {
    addSelectedItem(item) {
      this.subItems = this.subItems.concat(item);
    },
    // getFilteredItems() {
    //   return this.$store.getters.allItems.filter(item => !this.subItems
    //     .find(({ name }) => item.name === name));
    // },

    getSelectedItemNames() {
      return this.subItems().map(({ name }) => name);
    },

    onItemUnselect(item) {
      this.subItems = this.subItems.filter(({ name }) => item.name !== name);
    },

    onSubmit() {
      const item = {
        name: this.name,
        time: this.time,
        subItems: this.subItems,
      };
      this.$store.commit('pushItem', item);
    },
  },

  components: {
    suggestitem: Searchitem,
    addsubitem: AddSubItem,
    listitems: ListItems,

  },
};
</script>

<style lang="css">
  .form-container{
    display: block;
  }
  .subitem-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .subitem-list > li{
    margin-top: 12px;
    display: flex;
  }
</style>
