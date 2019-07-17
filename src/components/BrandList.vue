<template>
  <div class="box" ref="Scroll">
    <div v-for="(item, index) in data" :key="index">
      <p class="brand" :ref="index">{{index}}</p>
      <ul>
        <li
          v-for="(value) in item"
          :key="value.MasterID"
          class="border-bottom"
          @click="open(value.MasterID)"
        >
          <img :src="value.CoverPhoto" :alt="value.Name" />
          <span>{{value.Name}}</span>
        </li>
      </ul>
    </div>
    <transition name="popup">
      <OpenList v-show="side" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import Demo from "./Dome";
import OpenList from "./OpenList.vue";
import eventBus from "../model/eventBus.js";
export default Vue.extend({
  data() {
    return {
      cont: 0,
      scrollY: 0,
      scrollList: [],
      scrollHeightArr: [],
      side: false //抽屉
    };
  },
  components: {
    OpenList
  },
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
  created() {
    this.sides();
  },
  computed: {
    ...mapState({
      lists: state => state.home.list
    })
  },
  watch: {
    current(val) {
      if (val) {
        this.$refs.Scroll.scrollTop = this.$refs[val][0].offsetTop;
      }
    }
  },
  methods: {
    sides() {
      eventBus.$on("myFun", message => {
        //这里最好用箭头函数，不然this指向有问题
        console.log("message...", message);
        this.side = message;
      });
    },
    ...mapActions({
      getList: "home/GetList"
    }),
    open(id: number): any {
      this.side = true;
      this.getList({
        MasterID: id
      });
    }
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