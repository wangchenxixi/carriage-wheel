<template>
  <div class="list">
    <div class="brand-list" ref="listScroll">
      <div v-for="(item, index) in data" :key="index">
        <p class="brand">{{index}}</p>
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
import BScroll from "better-scroll";
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
    this.sides();
  },
  computed: {
    ...mapState({
      lists: state => state.home.list
    }),
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
    sides() {
      eventBus.$on("myFun", message => {
        //这里最好用箭头函数，不然this指向有问题
        console.log("message...", message);
        this.side = message;
      });
    },
    bscroll() {
      this.rightSCroll = new BScroll(".list", {
        probeType: 3,
        click: true
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
.ul p {
  height: 20px;
  line-height: 20px;
  color: #a9a9a9;
  font-size: 12px;
  padding-left: 16px;
  background: #f4f4f4;
}
.openlist {
  display: flex;
}
.pp {
  margin-top: 0.1rem;
  font-size: 0.28rem;
  color: red;
}
.gropname {
  font-size: 12px;
  color: #fff;
}
.img {
  margin: 0 0.1rem 0 0.2rem;
  width: 1.8rem;
  height: 1.2rem;
}
.main-li {
  height: 50px;
  line-height: 50px;
  background: white;
  border-bottom: 1px solid #ccc;
  padding-left: 16px;
  display: flex;
  align-items: center;
}
ul {
  padding: 0 0.3rem;
  background: #fff;
}
.divs {
  border-left: 1px solid #ccc;
}
.main-li span {
  display: inline-block;
  padding-left: 20px;
  font-size: 12px;
}
/* /抽屉 */
.pop-up {
  position: fixed;
  top: 0;
  left: 100px;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: 502;
  background: #fff;
}
.popup-enter-to,
.popup-leave-to {
  transition: transform 0.3s;
  transform: translate(0, 0);
}
.open {
  font-size: 12px;
}
.popup-enter,
.popup-leave-to {
  opacity: 0;
  -webkit-transform: translate(0, 0);
  transform: translate(100%, 0);
  -webkit-transition: opacity 0.3s ease-in-out 0.3s,
    -webkit-transform 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
}

/* end */
// .side-content {
//   z-index: 503;
//   position: fixed;
//   background: #ffffff;
//   top: 200px;
//   left: 10px;
//   bottom: 100px;
//   right: 10px;
//   -webkit-overflow-scrolling: touch;
// }

// .close {
//   padding: 17px;
//   text-align: left;
//   color: rgba(0, 122, 255, 1);
// }
.list {
  width: 100%;
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