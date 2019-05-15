/**
 * @class Virtualized
 */
class Virtualized {
    /**
     * 
     * @param {*} options 
     */
	constructor(options) {
        this.bufferSize = 5;
		this.visiableHeight = options.visiableHeight;
        this.itemHeight = options.itemHeight;
        this.virtualizedHeight = 0;
        this.onUpdate = options.onUpdate;
        this.initVirtualized();
    }

	initVirtualized() {
		this.visiableCount = Math.ceil(this.visiableHeight / this.itemHeight) + this.bufferSize;
		this.startIndex = 0;
        this.endIndex = this.startIndex + this.visiableCount;
    }


    setVirtualizedData(data) {
        if(Array.isArray(data)  ){
            this.virtualizedData = data;
            this.virtualizedHeight = this.virtualizedData.length * this.itemHeight;
            this.updateVisiableIndex(0);
        }
    }

    updateVisiableIndex(scrollTop) {
        scrollTop = scrollTop || 0;
        this.startIndex = Math.floor(scrollTop / this.itemHeight);
        this.endIndex = this.startIndex + this.visiableCount;
        this.updateVisiableData();
    }

    updateVisiableData() {
        this.visiableData = this.virtualizedData.slice(this.startIndex,this.endIndex);
        this.startOffset = this.startIndex*this.itemHeight;
        this.endOffset = (this.virtualizedData.length-this.endIndex) * this.itemHeight;
        if(this.onUpdate && typeof this.onUpdate == 'function' ) {
            this.onUpdate.call(this,this.visiableData,this.startOffset,this.endOffset);
        }
    }

}

export default Virtualized;