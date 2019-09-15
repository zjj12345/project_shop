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
    :circular="true"
    :vertical="true"
    >
        <swiper-item v-for="item in imgUrls" :key="item.goods_id">
            <navigator :href="item.navigator_url"><image :src="item.image_src" class="slide-image" /></navigator>
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
    created() {
        let that = this
        // 调用后天借口获取看轮播图数据
        wx.request({
            url:"https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata",
            success: (res) => {
                console.log(res);
                if(res.data.meta.status===200) {
                    this.imgUrls = res.data.message
                }
            }
        })
    },
    data() {
        return {
            imgUrls:[],
            imageFlag: true
        }
    },
    methods: {
        
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
