<template> 
  <div class="list">
    <div class="brand-list" ref="listScroll">
      <div v-for="(item, index) in data" :key="index">
        <p class="brand">{{index}}</p>
        <ul>
          <li v-for="(value) in item" :key="value.MasterID" class="border-bottom" @click="open(value.MasterID)">
            <img :src="value.CoverPhoto" :alt="value.Name" />
            <span>{{value.Name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <transition name="popup">
        <Demo @childEvent="parentMethod" v-show="side" class="pop-up" @touchmove.stop.prevent>
          <template slot="main">
            <!-- <div v-for="(item,index) in lists" :key='index' class="divs">
              <p class="gropname">{{item.GroupName}}</p>
              <ul>
                <li  v-for="(items,ind) in item.GroupList" :key='ind' class="openlist">
                  <img :src="items.Picture"  class="img">
                  <div class="open">
                    <p>{{items.AliasName}}</p>
                    <p class="pp">{{items.DealerPrice}}</p>
                  </div>
                </li>
              </ul>
            </div> -->
          </template>
        </Demo>
      </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import Demo from "./OpenList.vue";
import BScroll from "better-scroll";
export default Vue.extend({
  data() {
    return {
      cont: 0,
      scrollY: 0,
      scrollList: [],
      scrollHeightArr: [],
      side: false, //抽屉
    };
  },
  components: {
    Demo
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

    ...mapState({
      lists: state=>state.home.list,
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
    bscroll() {
      this.rightSCroll = new BScroll(".list", {
        probeType: 3,
        click:true
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
      getList:'home/GetList'
    }),
    parentMethod(data) {
      this.side = false;
      console.log(data);
    },
    open(id:number):any {
      this.side = true;
      this.getList({
        MasterID:id
      })
    }
  }
});
</script>

<style lang="scss" scoped>
  @import "../scss/global.scss";
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