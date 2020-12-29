<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="rgb(72, 146, 216)">
        <template #item-icon>
        <img src="~assets/img/home/home.png" alt="" />
        </template>
        <template #item-active-icon>
          <img src="~assets/img/home/home-active.png" alt="" />
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/best" activeColor="rgb(72, 146, 216)">
        <template #item-icon>
          <img src="~assets/img/best/best.png" alt="" />
        </template>
        <template #item-active-icon>
          <img src="~assets/img/best/best-active.png" alt="" />
        </template>
        <template #item-text>
          <div>推荐</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart" activeColor="rgb(72, 146, 216)">
        <template #item-icon>
          <img src="~assets/img/cart/cart.png" alt="" />
        </template>
        <template #item-active-icon>
          <img src="~assets/img/cart/cart-active.png" alt="" />
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor="rgb(72, 146, 216)">
        <template #item-icon>
          <img src="~assets/img/uesr/usercenter.png" alt="" />
        </template>
        <template #item-active-icon>
          <img src="~assets/img/uesr/usercenter-active.png" alt="" />
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/TabBar/TabBar";
import TabBarItem from "../../common/TabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>