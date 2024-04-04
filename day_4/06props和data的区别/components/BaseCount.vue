<template>
  <div class="base-count">
    <button @click="CountSub">-</button>
    <span>{{ Fcount }}</span>
    <button @click="CountAdd">+</button>
  </div>
</template>

<script>
export default {
  // 1.自己的数据随便修改  （谁的数据 谁负责）
  // data () {
  //   return {
  //     count: 100,
  //   }
  // },
  // 2.外部传过来的数据 不能随便修改
  props: {
    Fcount: {
      type: Number,
    },
  },
  methods: {
    CountSub() {
      this.$emit("changeCount", this.Fcount - 1);
    },
    CountAdd() {
      this.$emit("changeCount", this.Fcount + 1);
    },
  },
};
</script>

<style>
.base-count {
  margin: 20px;
}
</style>