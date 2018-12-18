<template>

  <div class = "subitem-container">
    <button @click="onDeleteClick()">&#10006</button>
    <div clas = "subitem-sub-container">
      <p class = "subitem-title"> Name: {{item.name}}</p>
      <span>Quantité</span>
      <input v-model="quantity" placeholder="Entrez la quantité" v-on:input="onQuantutyChange()">
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddSubItem',
  data() {
    return {
      quantity: 0,
    };
  },
  props: {
    item: {
      type: Object,
      default: {},
    },
  },

  methods: {
    onQuantutyChange() {
      this.$emit('quantity-change', this.quantity);
    },
    onDeleteClick() {
      this.$emit('item-unselected', this.item);
    },
  },

};
</script>


<style lang="css">

.subitem-container{
  border: 1px solid black;
  display: flex;
}

.subitem-sub-container{
  width: 100%;
}

.subitem-title{
  background-color: #DDDDDD;
  margin-top: 0;
}

</style>
