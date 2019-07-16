<template>
  <div>
    <ul v-for="(item, index) in data" :key="index" class="ul">
      <p>{{index}}</p>
      <li v-for="(value) in item" :key="value.MasterID" class="main-li">
        <img :src="value.CoverPhoto" :alt="value.Name" />
        <span>{{value.Name}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    data: {
      type: Object,
      value: {}
    }
  }
});
</script>


<style lang="scss" scoped>
.ul p {
  height: 20px;
  line-height: 20px;
  color: #a9a9a9;
  font-size: 14px;
  padding-left: 16px;
  background: #F4F4F4
}
.main-li {
  height: 50px;
  line-height: 50px;
  background: white;
  border-bottom: 1px solid #ccc;
  padding-left: 16px;
  display: flex;
  align-items: center
}
.main-li img {
  width: 38px;
  height: 38px;
}
.main-li span{
    display: inline-block;
    padding-left: 20px;
    font-size: 16px;
}
</style>
