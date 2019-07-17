<template>
  <div class="box" ref="Scroll">
    <div v-for="(item, index) in data" :key="index">
      <p class="brand" :ref="index">{{index}}</p>
      <ul>
        <li v-for="(value) in item" :key="value.MasterID" class="border-bottom" >
          <img :src="value.CoverPhoto" :alt="value.Name" />
          <span>{{value.Name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    data: {
      type: Object,
      value: {}
    },
    current: {
      type: String,
      value: ""
    }
  },
  watch: {
    current(val) {
      if (val) {
        this.$refs.Scroll.scrollTop = this.$refs[val][0].offsetTop;
      }
    }
  },
  methods:{

  }
});
</script>


<style lang="scss" scoped>
@import "../scss/global.scss";
.box {
  height: 100%;
  overflow-y: scroll;
}
.brand {
  font-size: 0.28rem;
  line-height: 0.4rem;
  padding-left: 0.3rem;
  color: #aaa;
}
ul {
  padding: 0 0.3rem;
  background: #fff;
}
li {
  height: $brand-height;
  line-height: $brand-height;
  display: flex;
  align-items: center;
  img {
    height: 0.76rem;
  }
  span {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }
  &:last-child:after {
    display: none;
  }
}
</style>