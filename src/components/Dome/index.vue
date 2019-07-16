<template>
    <div>
        <transition name="slide-fade">
            <div class="side-content">
                <div class="close" @click="close">取消</div>
                <slot name="main"></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  data() {
    return {
      todos: false,
    };
  },
  created() {
    
  },
  mounted() {
      
    },
  methods: {
    close() {
        this.$emit('childEvent',this.todos);
    }
  }
};
</script>
<style scoped>

</style>

