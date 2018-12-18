<template>
  <div>
    <filter-item v-on:input-change="onInputChange" v-bind:items="items" v-model="inputText"> </filter-item>
    <div id ="suggest-container">
      <!-- <ul class ="suggestion-list">
        <li v-for="item in filteredItems"
          @click="onSuggestClick(item)" v-if ="!selected">
          {{ item.name }}
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>

import FilterItem from './filter-items';

export default {
  name: 'SearchBar',
  components:{
    'filter-item': FilterItem
  },
  data() {
    return {
      selected: null,
      inputText: '',
      filteredItems:[],
    };
  },

  props: {
    items: {type: Array, default: () => []},
  },

  methods: {
    onSuggestClick(item) {
      this.selected = item;
      this.inputText = "";
      this.$emit('item-selected', item);
    },
    onInputChange(filteredItems){
      this.filteredItems = filteredItems;
    }
  },

};
</script>


<style lang="css">

.suggestion-list{
  max-height: 200px;
}

</style>
