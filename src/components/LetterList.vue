<template>
  <ul>
    <li>#</li>
    <li 
      v-for="item in data" 
      :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >{{item}}</li>
  </ul>
</template>

<script lang="ts">

import eventBus from '@/model/eventBus'
import Vue from "vue";
export default Vue.extend({
  props: {
    data: {
      type: Array,
      value: []
    }
  },
  data() {
    return {
      touchStatus: false
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      eventBus.$emit('change',e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if(this.touchStatus) {
        //函数节流
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 40
          const index = Math.floor((touchY - this.startY)/20)
          if(index >= 0 && index < this.data.length) {
            eventBus.$emit('change', this.data[index])
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
});
</script>


<style lang="scss" scoped>
ul {
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 4px
}
li {
  color: #666;
  font-weight: 500;
  padding: 0.02rem 0.1rem;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
}
</style>
