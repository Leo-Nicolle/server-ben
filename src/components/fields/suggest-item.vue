<template>
  <div>
    <filter-item v-on:input-change="onInputChange" v-bind:items="items" v-model="inputText"> </filter-item>
    <div id ="suggest-container" class = "list-item">
      <ul class ="suggestion-list" v-if="filteredItems.length">
        <li v-for="item in filteredItems"
        @click="onSuggestClick(item)" v-if ="!selected">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import FilterItem from './filter-items';

export default {
  name: 'SuggestItem',
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
.suggest-container{
}

.suggestion-list{
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  max-height: 200px;
  border: 1px solid black;
  background: white;
}

</style>
