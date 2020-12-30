<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" :key="item" class="tab-control-item" @click="changeIndex(index)">
      <span :class="{ active: index === currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 40px;
  background-color: rgb(248, 248, 228);
}

.tab-control-item {
  flex: 1;
  line-height: 40px;
  font-size: 15px;
}

.tab-control-item span{
  padding: 8px;
}

.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}

</style>