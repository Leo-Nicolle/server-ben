<template>
    <input  v-model="inputText" v-on:input="onInputChange()"/>
</template>

<script>

export default {
  name: 'SearchItem',
  data() {
    return {
      limit: 10,
      dataFilteredItems: this.filteredItems,
      inputText: ""
    };
  },
  props: {
    items: {
      type: Array,
      default:() => [],
    },
  },

  methods: {
    onInputChange() {
      if (this.inputText === '' || this.inputText === undefined) {
        return;
      }
      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */
      const filteredItems = this.items.filter(item =>
        item.name.toLowerCase().indexOf(this.inputText.toLowerCase()) > -1)
        .slice(0, this.limit);

      this.$emit("input-change", filteredItems);
    },
  },

};
</script>


<style lang="css">

.suggestion-list{
  max-height: 200px;
}

</style>
