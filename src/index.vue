
<template>
  <div class="vue-virtualized-container" ref="container" @scroll="handleScroll" :style="{width:'300px',height:containerHeight+'px'}">
    <div class="wrapper" :style="{height:datas.length*itemHeight + 'px'}" ref="wrapper">
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
      datas:[],
      items:[],
      scrollTop:0
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
      let scrollTop = this.$refs.container.scrollTop;
      if(scrollTop!=this.scrollTop) {
        setTimeout(()=>{
          this.virtualized.updateVisiableIndex(scrollTop);
          this.scrollTop = scrollTop;
          console.log(scrollTop);
        })
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
    for(let i=0;i<10000;i++) {
      this.datas.push({text:"text_data"+i})
    }
    virtualized.setVirtualizedData(this.datas);
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

