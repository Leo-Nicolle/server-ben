<template>
    <div class = "list-item">
       <ul>
         <li v-for="item in items">
            <p class = "item-name" v-on:click='onItemClick(item.id)'>{{item.name}}</p>
         </li>
       </ul>
   </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import utils from '@/utils';


export default {
  name: 'ListItems',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['allItems', ]),
  },
  components: {

  },

  methods: {
    onItemClick(id){
      console.log("click")
        this.$router.push(`/item/${id}/edit`);
    },
  },
};
</script>

<style lang="css">
  .form-container{
    display: block;
  }
</style>
