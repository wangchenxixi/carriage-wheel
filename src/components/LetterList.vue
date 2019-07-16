<template>
  <ul>
    <li>#</li>
    <li v-for="(item) in data" :key="item">{{item}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    data: {
      type: Array,
      value: []
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
