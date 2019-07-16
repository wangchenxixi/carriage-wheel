<template>
  <div class="list">
    <div class="brand-list" ref="listScroll">
      <div v-for="(item, index) in data" :key="index">
        <p class="brand">{{index}}</p>
        <ul>
          <li v-for="(value) in item" :key="value.MasterID" class="border-bottom">
            <img :src="value.CoverPhoto" :alt="value.Name" />
            <span>{{value.Name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BScroll from "better-scroll";
export default Vue.extend({
  data() {
    return {
      cont: 0,
      scrollY: 0,
      scrollList: [],
      scrollHeightArr: []
    };
  },
  props: {
    data: {
      type: Object,
      value: {},
      scrollHeightArr: []
    }
  },
  created() {
    this.$nextTick(() => {
      this.bscroll();
      this.scrollHeight();
    });
    this.$bus.$on("scrollL", (item, index) => {
      let scrollDiv = this.$refs.listScroll.children;
      //   console.log("this.rightSCroll",this.rightSCroll)
      this.rightSCroll.scrollToElement(scrollDiv[index], 100);
    });
  },
  computed: {
    currentIndex() {
      console.log("this.scrollHeightArr", this.scrollHeightArr);
      for (let j = 0; j < this.scrollHeightArr.length; j++) {
        let height1 = this.scrollHeightArr[j];
        let height2 = this.scrollHeightArr[j + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return j;
        }
      }
      return 0;
    }
  },
  methods: {
    bscroll() {
      this.rightSCroll = new BScroll(".list", {
        probeType: 3
      });
      this.rightSCroll.on("scroll", res => {
        this.cont = this.currentIndex;
        this.scrollY = Math.abs(res.y);
      });
    },
    scrollHeight() {
      let scrollDiv = this.$refs.listScroll.children;
      let height = 0;
      this.scrollHeightArr.push(height);
      for (let i = 0; i < scrollDiv.length; i++) {
        let item = scrollDiv[i];
        height += item.clientHeight;
        this.scrollHeightArr.push(height);
      }
    }
  }
});
</script>


<style lang="scss" scoped>
@import "../scss/global.scss";
.list {
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
    height: 0.8rem;
  }
  span {
    font-size: 0.3rem;
    margin-left: 0.4rem;
  }
  &:last-child:after {
    display: none;
  }
}
</style>