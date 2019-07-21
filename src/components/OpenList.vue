<template>
  <div class="box">
    <transition name="slide-fade">
      <div class="side-content">
        <div v-for="(item,index) in lists" :key="index" class="divs">
          <p class="gropname" @click="close">{{item.GroupName}}</p>
          <ul>
            <li
              v-for="(items,ind) in item.GroupList"
              :key="ind"
              class="openlist"
              @click="detail(items.SerialID)"
            >
              <img :src="items.Picture" class="img" />
              <div class="open">
                <p class="open-name">{{items.AliasName}}</p>
                <p class="pp">{{items.DealerPrice}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import eventBus from "../model/eventBus.js";
export default {
  data() {
    return {
      side: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    close() {
      eventBus.$emit("myFun", this.side);
    },
    detail(SerialID) {
      console.log(SerialID);
      this.$router.push({
        path: `/detail?id=${SerialID}`
      });
    },
    ...mapActions({
      GetDetail: "detail/GetDetail"
    })
  },
  computed: {
    ...mapState({
      lists: state => state.home.list,
      details: state => state.detail.detail
    })
  }
};
</script>
<style scoped>
.side-content {
  position: fixed;
  top: 0;
  left: 100px;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: 502;
  background: #fff;
  overflow-y: scroll;
}
/* /抽屉 */
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
.pp {
  margin-top: 0.2rem;
  font-size: 12px;
  color: red;
}
.divs {
  overflow-y: scroll;
  border-left: 1px solid #ccc;
}
.img {
  margin: 0 0.1rem 0 0.2rem;
  width: 1.8rem;
  height: 1.2rem;
}
.gropname {
  font-size: 12px;
  color: #000;
  height: 22px;
  line-height: 22px;
  background: #f4f4f4;
}
.openlist {
  display: flex;
  height: 1.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}
.open-name {
  margin-top: 0.2rem;
}
</style>

