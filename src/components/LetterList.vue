<template>
  <div>
    <ul @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <li>#</li>
      <li v-for="(item,index) in data" :key="item" @click="scrollLocation(item,index)">{{item}}</li>
    </ul>
    <span v-if="isTouch" class="current">{{current}}</span>
  </div>
</template>

<script lang="ts">
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
  methods: {
    scrollLocation(item, index) {
      this.current = item;
      this.$bus.$emit("scrollL", item, index);
    },
    touchStart(e: Event): void {
      this.isTouch = true;
    },
    touchMove(e: Event): void {
      // console.log('e...', e);
      let pageY = e.touches[0].pageY;
      let letterHeight = ((0.4 * window.innerWidth) / 750) * 100;
      let letterOffsetTop =
        (window.innerHeight - letterHeight * this.data.length) / 2;
      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      console.log(letterIndex);
      // 处理上边界
      if (letterIndex < 0) {
        letterIndex = 0;
      }
      // 处理下边界
      if (letterIndex > this.data.length - 1) {
        letterIndex = this.data.length - 1;
      }
      this.current = this.data[letterIndex];
    },
    touchEnd(e: Event): void {
      this.isTouch = false;
      this.current = "";
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
