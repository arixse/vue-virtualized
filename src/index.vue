
<template>
  <div class="vue-virtualized-container" ref="container" @scroll="handleScroll" :style="{width:'300px',height:containerHeight+'px'}">
    <div class="wrapper" :style="{height:records.length*itemHeight + 'px'}" ref="wrapper">
      <div :style="{paddingTop:startOffset+'px'}">
        <slot v-for="item in items" :item="item"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Virtualized from "./Virtualized";
export default {
  name: "VueVirtualized",
  data() {
    return {
      virtualized:null,
      startOffset:0,
      items:[],
      scrollTop:0,
      timer:null
    };
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
  methods: {
    handleScroll() {
      if(this.timer) clearTimeout(this.timer);
      let scrollTop = this.$refs.container.scrollTop;
      if(scrollTop!=this.scrollTop) {
        this.timer = setTimeout(()=>{
          this.virtualized.updateVisiableIndex(scrollTop);
          this.scrollTop = scrollTop;
          console.log(scrollTop);
        },100)
      }
    }
  },
  mounted() {
    let virtualized=this.virtualized = new Virtualized({
      visiableHeight:this.containerHeight,
      itemHeight:this.itemHeight,
      onUpdate:(data,startOffset,endOffset) =>{
        this.startOffset = startOffset;
        this.items = data;
      }
    })
  },
  watch:{
    records:{
      handler(records) {
        if(this.virtualized) {
          this.virtualized.setVirtualizedData(this.records);
        }
      },
      immediate:true
    }
  }
};
</script>
<style>
.vue-virtualized-container {
  overflow-y: scroll;
}
.wrapper {
  box-sizing: border-box;
}
</style>

