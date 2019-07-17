<template>
  <div class="home">
    <BrandList :data="brandList" :current="current" />
    <LetterList :data="letterList" :current.sync="current" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LetterList from "@/components/LetterList.vue"; // @ is an alias to /src
import BrandList from "@/components/BrandList.vue"; // @ is an alias to /src
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "home",
  data() {
    return {
      current: ""
    };
  },
  computed: {
    ...mapState({
      letterList: (state: any) => state.home.letterList,
      brandList: (state: any) => state.home.brandList
    })
  },
  methods: {
    ...mapActions({
      getBrandList: "home/getBrandList"
    })
  },
  created() {
    this.getBrandList();
  },
  components: {
    BrandList,
    LetterList
  }
});
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
.home {
  background-color: $page-background-color;
  height: 100%;
}
</style>

