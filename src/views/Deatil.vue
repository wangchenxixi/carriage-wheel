<template>
  <div class="list">
    <div>
      <div class="img">
        <img src alt />
      </div>
      <div class="img-title">
        <div class="img-title-left">
          <h2>39.98-127.98万</h2>
          <p>指导价 39.98-96.98万</p>
        </div>
        <div class="img-title-right">
          <button>询问低价</button>
        </div>
      </div>
    </div>
    <div class="choose">
      <ul>
        <li>全部</li>
        <li>2018</li>
      </ul>
    </div>
    <div class="main-box">
      <div class="main-box-title">
        <h3>2019款 3.9T 510Hp 四叶草版</h3>
        <p class="main-text">玛利党</p>
        <p class="main-price">
          <span class="main-price-ev">指导价 96.98万</span>
          <span class="main-price-start">96.98万起</span>
        </p>
      </div>
      <button class="main-button">询问低价</button>
    </div>
    <div class="main-box">
      <div class="main-box-title">
        <h3>2019款 3.9T 510Hp 四叶草版</h3>
        <p class="main-text">玛利党</p>
        <p class="main-price">
          <span class="main-price-ev">指导价 96.98万</span>
          <span class="main-price-start">96.98万起</span>
        </p>
      </div>
      <button class="main-button">询问低价</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "detail",
  computed: {},
  methods: {}
});
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
body,
html {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.list {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 3rem;
  background: rebeccapurple;
}
.img-title {
  height: 1.4rem;
  display: flex;
  align-items: center;
  background: white;
}
.img-title-left {
  width: 3.8rem;
  height: 1.2rem;
  line-height: 0.4rem;
  text-indent: 0.2rem;
}
.img-title-left h2 {
  color: #ee2400;
  font-size: 0.36rem;
  margin-top: 0.24rem;
}
.img-title-left p {
  color: #c3c5c2;
  font-size: 0.24rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
.img-title-right button {
  background: #00afff;
  color: white;
  border-radius: 0.06rem;
  border: none;
  width: 3.6rem;
  height: 0.7rem;
}
.choose {
  height: 0.8rem;
  background: white;
  margin-top: 0.16rem;
  padding-left: 0.2rem;
}
.choose ul {
  display: flex;
  height: 100%;
  align-items: center;
}
.choose ul li {
  width: 1.2rem;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
}
.main-box {
  height: 2.52rem;
  background: white;
  margin-top: 0.26rem;
}
.main-box-title {
  padding: 0.2rem;
  border-bottom: 1px solid #efefef;
  height: 1.32rem;
}
.main-box-title h3 {
  font-size: 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
.main-text {
  color: #adadad;
  height: 0.4rem;
  line-height: 0.4rem;
}
.main-price {
  position: absolute;
  right: 0.2rem;
  height: 0.36rem;
  height: 0.36rem;
}
.main-price-ev {
  font-size: 0.22rem;
  color: #8a8987;
}
.main-price-start {
  color: red;
  padding-left: 0.2rem;
  font-size: 0.28rem;
}
.main-button {
  border: none;
  background: white;
  width: 100%;
  text-align: center;
  color: #2caad3;
  font-size: 0.3rem;
  line-height: 0.7rem;
}
</style>
