<template>
  <div>
    <div v-if="item.id">
      <p>Name: {{item.name}}</p>
    </div>
    <div v-else>
      This item does not exist !
    </div>
  </div>
</template>

<script>
import CreateItemForm from './forms/create-item';
import ListItems from './views/list-items';

export default {
  name: 'Item',

  props: {
    item: {
      type: Object,
      default: () => ({name: "", id:""})
    }
  },
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
