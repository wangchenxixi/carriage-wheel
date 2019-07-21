<template>
  <div class="list">
    <div>
      <div class="img" @click="imgdetails(lists.SerialID)">
        <img :src="lists.CoverPhoto" alt />
        <span data-hover="hover">{{lists.pic_group_count}}张照片</span>
      </div>
      <div class="img-title">
        <div class="img-title-left">
          <h2>{{lists.market_attribute.dealer_price}}</h2>
          <p>指导价 {{lists.market_attribute.official_refer_price}}</p>
        </div>
        <div class="img-title-right" @click="goquestion">
          <button>{{lists.BottomEntranceTitle}}</button>
        </div>
      </div>
    </div>
    <div class="choose">
      <ul>
        <li>全部</li>
        <li>2018</li>
      </ul>
    </div>
    <div class="main-box" v-for="(item,index) in lists.list" :key="index">
      <div class="main-box-title">
        <h3>{{item.market_attribute.year}}款 {{item.car_name}}</h3>
        <p class="main-text">{{item.horse_power}}马力无档{{item.trans_type}}</p>
        <p class="main-price">
          <span class="main-price-ev">指导价{{item.market_attribute.official_refer_price}}</span>
          <span class="main-price-start">{{item.market_attribute.dealer_price_min}}起</span>
        </p>
      </div>
      <button class="main-button" @click="goquestion(item.car_id)">{{lists.BottomEntranceTitle}}</button>
    </div>
    <div data-hover="hover" class="bottom flex-column flex-centerY" @click="goquestion">
      <p>询问底价</p>
      <p>本地经销商为你报价</p>
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
  data() {
    return {
      cardId: ""
    };
  },
  computed: {
    //
    ...mapState({
      lists: state => state.detail.datalist,
      list: state => state.detail.userlist
    })
  },
  methods: {
    ...mapActions({
      GetDetail: "detail/GetDetail",
      Setserinfo: "detail/Setserinfo",
      imgdetail: "imgdetail/GetImgDetail"
    }),
    goquestion(cardId) {
      this.$router.push({
        path: "/question"
      });
      this.cardId = cardId;
      this.Setserinfo({
        carId: this.cardId
      });
    },
    imgdetails(id: any) {
      console.log(111);
      this.$router.push({
        path: `/imgdetail`,
        query: { SerialID: id }
      });
    }
  },
  created() {
    this.GetDetail({
      SerialID: this.$route.query.id
    });
  }
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
}
.img {
  position: relative;
  height: 3.29rem;
  overflow: hidden;
}
.img img {
  width: 100%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
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
  // height: 2.52rem;
  background: white;
  margin-top: 0.26rem;
  margin-bottom: 0.26rem;
}
.main-box-title {
  padding: 0.2rem;
  border-bottom: 1px solid #efefef;
  height: 1.32rem;
}
.main-box-title h3 {
  font-size: 0.3rem;
  height: 0.8rem;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main-text {
  color: #adadad;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
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
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 1rem;
  color: #fff;
  text-align: center;
  line-height: 0.4rem;
}
.bottom p:first-child {
  font-size: 0.32rem;
  margin-top: 0.12rem;
  font-weight: 500;
}
.bottom p:nth-child(2) {
  font-size: 0.24rem;
}
.flex-centerY {
  -webkit-box-align: center;
  align-items: center;
}
.flex-column {
  /* -webkit-box-orient: vertical; */
  flex-direction: column;
}
.img span {
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  color: #fff;
  padding: 1px 0.1rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.6);
  font-size: 0.24rem;
}
</style>
