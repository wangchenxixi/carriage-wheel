<template>
  <div class="list">
    <City :data="city"></City>
    <div class="top">
      <span>可向多个商家咨询最低价，商家及时回复</span>
    </div>
    <div class="box-dl">
      <div class="box-dl-img">
        <img :src="list.details.serial.Picture" alt />
      </div>
      <div class="box-dl-text">
        <h2 class="AliasName">{{list.details.serial.AliasName}}</h2>
        <p>{{list.details.market_attribute.year}}款{{list.details.car_name}}</p>
      </div>
    </div>
    <p class="user">个人信息</p>
    <div class="user-info">
      <div>
        <span>姓名</span>
        <input type="text" placeholder="请输入你的真实中文姓名" v-on:input="name" />
      </div>
      <div>
        <span>手机</span>
        <input type="text" placeholder="请输入你的真实手机号码" v-on:input="iphone" />
      </div>
      <div>
        <span>城市</span>
        <input type="text" placeholder="北京" @click="choose" />
      </div>
      <p class="btn">
        <button @click="exam">询最低价</button>
      </p>
    </div>
    <p class="user">选择报价敬绍上</p>
    <div class="choose">
      <div class="main" v-for="(item,index) in list.list" :key="index">
        <div class="choose-add">
          <h2 class="ShortName">{{item.dealerShortName}}</h2>
          <p>{{item.address}}</p>
        </div>
        <div class="choose-price">
          <p class="price-num">{{item.promotePrice}}万</p>
          <p class="county">售{{item.saleRange}}</p>
        </div>
      </div>
    </div>
    <div class="alert" v-show="alert">
      <div class="alert-content" >
        <div class="wrap">
          <span class="alert-title-sub" id="subTitle"></span>
          <span class="alert-title">请输入正确的手机号</span>
          <span class="alert-ok" data-hover="hover" @click="ok">好</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import City from "@/components/City.vue";
export default Vue.extend({
  data() {
    return {
      names: "",
      iphones: "",
      alert: false
    };
  },
  name: "question",
  components: {
    City
  },
  computed: {
    ...mapState({
      list: state => state.detail.userlist,
      city: state => state.detail.citylist,
      linkagelist: state => state.detail.linkagelist
    })
  },
  methods: {
    ...mapActions({
      Setserinfo: "detail/Setserinfo",
      City: "detail/City",
      linkage: "detail/linkage"
    }),
    choose() {
      console.log(1);
      this.City();
      // this.linkage()
    },
    exam() {
      console.log(111);
      if (this.names === "") {
        console.log(this.name);
      }
      if (!/^1[3456789]\d{9}$/.test(this.iphones) || this.iphones === "") {
        this.alert = true;
      }
    },
    name(e) {
      this.names = e.data;
      // console.log(e.data)
    },
    iphone(e) {
      this.iphones = e.data;
    },
    ok()
    {
      this.alert=!this.alert
    }
  }
});
</script>

<style lang="scss" scoped>
// .alert {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   z-index: 1000;
//   // background-color: rgba(0, 0, 0, 0.4);
//   -webkit-animation: a 0.3s ease forwards;
//   animation: a 0.3s ease forwards;
// }
.alert-content {
  position: fixed;
  z-index: 9999;
  background: #f6f6f6;
  border-radius: 7px;
  width: 72%;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  text-align: center;
  font-size: 0;
}
.alert-content .alert-title-sub {
  display: block;
  width: 80%;
  margin: 0 auto;
  padding: 18px 0 6px;
  line-height: 22px;
  font-size: 16px;
  font-weight: 700;
}
.alert-content .alert-title {
  display: block;
  margin: 0 auto;
  padding: 0 0 20px;
  max-width: 86%;
  line-height: 16px;
  font-size: 13px;
}
.alert-content .alert-ok {
  position: relative;
  display: block;
  width: 100%;
  padding: 14px 0;
  border-radius: 0 0 7px 7px;
  line-height: 16px;
  font-size: 16px;
  color: #007aff;
  transition: background-color 0.1s;
}
body,
html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.ShortName.active:before {
  background: #3aacff;
  border: none;
}
.county {
  font-size: 0.24rem;
  color: #a2a2a2;
}
.ShortName:before {
  content: "";
  display: inline-block;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-sizing: border-box;
  position: absolute;
  left: -0.2rem;
  top: 40%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.box-dl {
  position: relative;
}
.box-dl :before {
  content: "";
  display: inline-block;
  padding-top: 0.16rem;
  padding-right: 0.16rem;
  border-top: 2px solid #ccc;
  border-right: 2px solid #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 0.26rem;
  top: 1rem;
}
.list {
  height: 100%;
  background: #eeeeee;
}
.top {
  height: 0.6rem;
  background: #79cd92;
  color: white;
  line-height: 0.6rem;
  text-align: center;
}
.box-dl {
  height: 1.9rem;
  background: white;
  display: flex;
  align-items: center;
}
.box-dl-img {
  width: 4.2rem;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}
.box-dl-img img {
  width: 2.3rem;
  height: 1.41rem;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 0.2rem;
}
.box-dl-text {
  height: 1rem;
  width: 100%;
  padding-left: 0.2rem;
}
.box-dl-text h2 {
  font-size: 0.32rem;
  width: 100%;
  height: 0.32rem;
  line-height: 0.32rem;
}
.box-dl-text p {
  width: 100%;
  margin-top: 0.2rem;
  font-size: 0.26rem;
  height: 0.52rem;
  line-height: 0.52rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user {
  height: 0.42rem;
  line-height: 0.6rem;
  text-indent: 0.3rem;
  color: #898989;
  font-size: 0.22rem;
}
.user-info {
  height: 4rem;
  background: white;
  padding: 0.16rem;
}
.user-info div {
  height: 0.91rem;
  border-bottom: 1px solid #ccc;
  line-height: 0.91rem;
}
.user-info div input {
  border: none;
  font-size: 0.32rem;
  padding-right: 0.2rem;
  width: 88%;
  text-align: right;
  box-sizing: border-box;
  color: #555;
  outline: none;
  -webkit-appearance: none;
  border: none;
}
.user-info button {
  background: #39acff;
  color: white;
  border: none;
  width: 5.9rem;
  height: 0.72rem;
  border-radius: 0.09rem;
  font-size: 0.32rem;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.3rem;
}
.choose {
  width: 100%;
  background: white;
}
.main {
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 1.26rem;
  padding: 0.23rem;
  margin-top: 0.2rem;
  padding-left: 0.4rem;
}
.check {
  border-radius: 50%;
  width: 0.33rem;
  height: 0.33rem;
  background: #39acff;
  display: inline-block;
  line-height: 0.3rem;
  margin-top: 0.3rem;
  text-align: center;
  color: white;
  font-size: 0.34rem;
}
.choose-add {
  position: relative;
  width: 3.6rem;
}
.choose-add h2 {
  font-size: 0.28rem;
  height: 0.56rem;
  line-height: 0.26rem;
  margin-left: 0.3rem;
}
.choose-add p {
  color: #c8c8c8;
  font-size: 0.26rem;
  margin-left: 0.3rem;
}
.choose-price {
  margin-top: 0.23rem;
  margin-left: 2.3rem;
  width: 1rem;
  text-align: center;
}
.price-num {
  color: red;
  height: 0.42rem;
  font-size: 0.23rem;
  width: 1.2rem;
}
.price-county {
  color: #b3b3b3;
  font-size: 0.26rem;
}
</style>
