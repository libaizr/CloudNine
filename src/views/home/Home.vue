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
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import { getHomeMulitData } from "network/home";
import HomeSwiper from "./HomeChildren/HomeSwiper";
import RecommendView from "./HomeChildren/RecommendView";
import HomeFuture from "./HomeChildren/HomeFuture";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFuture,
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
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>