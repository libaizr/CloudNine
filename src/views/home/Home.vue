<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template #left>
        <div><img src="" alt="" /></div>
      </template>

      <template #center>
        <div>乐购</div>
      </template>
    </nav-bar>

    <div class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <home-future></home-future>
      <tab-control class="tab-control" :titles="['流行新款', '复古浪潮', '质朴精选']"></tab-control>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getHomeMulitData } from "network/home";

import HomeSwiper from "./HomeChildren/HomeSwiper";
import RecommendView from "./HomeChildren/RecommendView";
import HomeFuture from "./HomeChildren/HomeFuture";

import NavBar from "components/common/NavBar/NavBar";
import TabControl from "components/content/TabControl/TabControl";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFuture,
    TabControl,
  },
  data() {
    return {
      banners: "null",
      recommends: "null",
    };
  },
  created() {
    // 请求多个数据
    getHomeMulitData()
      .then((res) => {
        // console.log(res.data.data.recommend.list);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(this.recommends);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.content {
  margin-top: 44px;
}
.tab-control{
  position: sticky;
  top: 41px;
  z-index: 0;
}
</style>