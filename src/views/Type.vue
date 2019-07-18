<template>
  <div>
    <div>11</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      list: state => state.detail.userlist
    })
  },
  methods: {
    ...mapActions({
      Setserinfo: "detail/Setserinfo"
    })
  }
});
</script>

