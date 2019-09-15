<template>
  <div>
    <!-- 搜索条 -->
    <div class="search">
      <div class="searchbar">
        <icon type="search"></icon>
        <span>搜索</span>
      </div>
    </div>
    <!-- 轮播图 -->
    <swiper
    :indicator-dots="imageFlag"
    :autoplay="imageFlag"
    >
        <swiper-item v-for="(item,index) in imgUrls" :key="index">
          <image :src="item" class="slide-image" />
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgUrls:[
                'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
                'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
                'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
            ],
            imageFlag: true
        }
    },
};
</script>

<style scoped>
.search {
  background-color: #eb4450;
  padding: 10px;
}
.searchbar {
  text-align: center;
  background-color: #fff;
}
.search .searchbar icon {
  vertical-align: middle;
}
.slide-image {
    width: 100%;
}
</style>
