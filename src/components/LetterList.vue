<template>
  <div>
    <ul @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <li>#</li>
      <li v-for="(item) in data" :key="item" :class="current==item?'active':''">{{item}}</li>
    </ul>
    <span v-if="isTouch" class="show">{{current}}</span>
  </div>
</template>

<script lang="ts">

import eventBus from '@/model/eventBus'
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isTouch: false
    };
  },
  props: {
    data: {
      type: Array,
      value: []
    },
    current: {
      type: String,
      value: ""
    }
  },
  methods: {
    touchStart(e: Event): void {
      this.isTouch = true;
      this.touchMove(e);
    },
    touchMove(e: Event): void {
      let pageY = e.touches[0].pageY;
      let letterHeight = ((0.4 * window.innerWidth) / 750) * 100;
      let letterOffsetTop =
        (window.innerHeight - letterHeight * this.data.length) / 2;
      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      // 处理上边界
      if (letterIndex < 0) {
        letterIndex = 0;
      }
      // 处理下边界
      if (letterIndex > this.data.length - 1) {
        letterIndex = this.data.length - 1;
      }
      console.log("this.data[letterIndex]..", this.data[letterIndex]); //点击的对应字母
      this.$emit("update:current", this.data[letterIndex]);
    },
    touchEnd(e: Event): void {
      this.isTouch = false;
      this.$emit("update:current", "");
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
  height: 0.36rem;
  width: 0.36rem;
  margin-right: 0.1rem;
  text-align: center;
}
li.active {
  color: red;
}
.show {
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