<template>
  <div v-if="show">
    <transition
      name="fade"
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceIn"
      :duration="{enter:5000,leave:10000}"
      class="box"
    >
      <div>
        <p>省市</p>
        <ul class="city-ul" :class="active?'active':''">
          <li v-for="(item,index) in city" :key="index" @click="good(item.CityID)">{{item.CityName}}</li>
        </ul>

        <ul class="city-ul-ul" v-show="active">
          <li
            v-for="(item,index) in linkagelist"
            :key="index"
            @click="user(item.CityName)"
          >{{item.CityName}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import animate from "animate.css";
export default Vue.extend({
  data() {
    return {
      cityId: "",
      active: false,
      show: true
    };
  },
  props: {
    data: {
      type: Object,
      value: {}
    }
  },
  computed: {
    ...mapState({
      city: state => state.detail.citylist,
      linkagelist: state => state.detail.linkagelist
    })
  },
  methods: {
    ...mapActions({
      City: "detail/City",
      linkage: "detail/linkage"
    }),
    good(cityId) {
      this.cityId = cityId;
      this.linkage({
        cityId: this.cityId
      });
      this.active = true;
    },
    user(e) {
      console.log(e);
      localStorage.setItem("indexUrl", e);
      this.$router.push({
        path: "/question"
      });
      this.active = false;
      if (this.show) {
        this.show = !this.show;
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
  transform: translateZ(0);
}

.box {
  position: relative;
}
p {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  background: #f4f4f4;
}
.city-ul {
  background: white;
}
.city-ul li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  // border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 0.1rem;
  position: relative;
}
.city-ul-ul {
  -webkit-transform: translateX(2rem);
  transform: translateX(2rem);
  position: absolute;
  top: 0.4rem;
  background: white;
  width: 100%;
  height: 100%;
}
.city-ul-ul li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 0.1rem;
}
@keyframes city-ul-ul {
  0% {
    transform: translateY(260px);
  }
  100% {
    transform: translateY(0px);
  }
}
.city-ul-ul li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.active {
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 0.6);
  border-bottom: none;
}
</style>



