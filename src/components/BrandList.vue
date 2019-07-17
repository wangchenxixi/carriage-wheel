<template>
  <div>
    <ul v-for="(item, index) in data" :key="index" class="ul"  :ref="index">
      <p>{{index}}</p>
      <li v-for="(value) in item" :key="value.MasterID" class="main-li" @click="open(value.MasterID)">
        <img :src="value.CoverPhoto" :alt="value.Name" />
        <span>{{value.Name}}</span>
      </li>
    </ul>
    <transition name="popup">
          <Demo @childEvent="parentMethod" v-show="side" class="pop-up" @touchmove.stop.prevent>
            <template slot="main">
              <div v-for="(item,index) in lists" :key='index' class="divs">
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
              </div>
            </template>
          </Demo>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import Demo from "./Dome";
export default Vue.extend({
  props: {
    data: {
      type: Object,
      value: {}
    }
  },
  data() {
    return {
      side: false, //抽屉
    };
  },
  components: {
    Demo
  },
  created() {
    
  }
  ,
  computed:{
    ...mapState({
      lists: state=>state.home.list,
    })
  },
  methods: {
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
  .ul p {
    height: 20px;
    line-height: 20px;
    color: #a9a9a9;
    font-size: 12px;
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
      font-size: 12px;
  }
  /* /抽屉 */
  .pop-up{
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
  .open{
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
  .pp{
      margin-top: .1rem;
      font-size: .28rem;
      color: red;
  }
  .divs{
    border-left: 1px solid #ccc;
  }
  .img{
    margin: 0 .1rem 0 .2rem;
    width: 1.8rem;
    height: 1.2rem;
  }
  .gropname{
    font-size: 12px;
    color:#fff;
  }
   .openlist{
    display: flex;
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

</style>
