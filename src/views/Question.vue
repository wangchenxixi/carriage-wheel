<template>
  <div class="list">
    <div class="top">
      <span>可向多个商家咨询最低价，商家及时回复</span>
    </div>
    <div class="box-dl">
      <div class="box-dl-img">
        <img :src="list.details.serial.Picture" alt />
      </div>
      <div class="box-dl-text">
        <h2>{{list.details.serial.AliasName}}</h2>
        <!-- <p>{{list.market_attribute.year}}款{{list.car_name}}</p> -->
      </div>
    </div>
    <p class="user">个人信息</p>
    <div class="user-info">
      <div>
        <span>姓名</span>
        <input type="text" placeholder="请输入你的真实中文姓名" />
      </div>
      <div>
        <span>手机</span>
        <input type="text" placeholder="请输入你的真实手机号码" />
      </div>
      <div>
        <span>城市</span>
        <input type="text" placeholder="北京" />
      </div>
      <p class="btn">
        <button>讯最低价</button>
      </p>
    </div>
    <p class="user">选择报价敬绍上</p>
    <div class="choose">
      <div class="main" v-for="(item,index) in list.list" :key="index">
        <i class="check">√</i>
        <div class="choose-add">
          <h2>{{item.dealerShortName}}</h2>
          <p>{{item.address}}</p>
        </div>
        <div class="choose-price">
          <p class="price-num">8.万</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "question",
  computed: {
    ...mapState({ list: state => state.detail.userlist })
  },
  methods: {
    ...mapActions({
      Setserinfo: "detail/Setserinfo"
    })
  }
});
</script>

<style lang="scss" scoped>
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
  font-size: 0.36rem;
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
}
.user {
  height: 0.42rem;
  line-height: 0.42rem;
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
  margin-left: 2.6rem;
  height: 0.6rem;
  font-size: 0.32rem;
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
  margin-top: 0.12rem;
  margin-left: 0.28rem;
}
.choose-add h2 {
  font-size: 0.28rem;
  height: 0.56rem;
  line-height: 0.3rem;
}
.choose-add p {
  color: #c8c8c8;
  font-size: 0.26rem;
}
.choose-price {
  margin-top: 0.23rem;
  margin-left: 2.3rem;
  width: 1rem;
  text-align: center;
}
.price-num {
  color: red;
  height: 0.39rem;
  font-size: 0.23rem;
}
.price-county {
  color: #b3b3b3;
  font-size: 0.26rem;
}
</style>
