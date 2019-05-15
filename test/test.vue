<template>
<VueVirtulized :containerHeight="containerHeight" :itemHeight="itemHeight">
        <div slot-scope="{item}" class="item">
            {{item.text}}
        </div>
    </VueVirtulized>
</template>
<script>
import VueVirtulized from "../src/index";
export default {
    name:'App',
    components:{
        VueVirtulized
    },
    data() {
        return {
            containerHeight:350,
            itemHeight:50
        }
    }
}
</script>

<style lang="css">
.box {
    width: 300px;
    height: 350px;
    overflow: auto;
    border: 1px solid red;
}
.item {
    height: 50px;
    line-height: 50px;
}
</style>
