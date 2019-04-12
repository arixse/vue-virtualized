
<template>
  <div class="vue-virtualized-container">
    <slot v-for="item in items" :item="item"></slot>
  </div>
</template>
<script>
export default {
  name: "VueVirtualized",
  data() {
    return {};
  },
  props: {
    containerHeight: {
      type: Number
    },
    itemHeight: {
      type: Number
    },
    records: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    containerHeight() {
      return this.options.containerHeight;
    },
    itemHeight() {
      return this.options.itemHeight;
    },
    virtualizedCount() {
      let count = Math.ceil(this.containerHeight / this.itemHeight) + 1;
    }
  },
  methods: {
    handleScroll(scrollTop) {}
  }
};
</script>
<style>
</style>
