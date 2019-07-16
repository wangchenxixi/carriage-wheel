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
  data() {
    return {
      current: "",
      isTouch: false
    };
  },
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
  text-align: center;
}
li {
  font-size: 0.24rem;
  color: #666;
  font-weight: 500;
  padding: 0 0.1rem;
  height: 0.4rem;
  width: 0.4rem;
}
.current {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.1rem;
  top: 50%;
  left: 50%;
  position: fixed;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.6rem;
  transform: translate3d(-50%, -50%, 0);
}
</style>
