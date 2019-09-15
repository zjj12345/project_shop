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
            <navigator :url="item.navigator_url"><image :src="item.image_src" class="slide-image" /></navigator>
        </swiper-item>
    </swiper>
    <!-- 菜单 -->
    <div class="menu">
        <div v-for="item in cateUrls" :key="item.id">
            <navigator :url="item.navigator_url" :open-type="item.open_type" :title="item.name"> <img :src="item.image_src" :alt="item.name"></navigator>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    created() {
        let that = this
        // 调用后天借口获取看轮播图数据
        mpvue.request({
            url:"https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata",
            success: (res) => {
                console.log(res);
                if(res.data.meta.status===200) {
                    this.imgUrls = res.data.message
                }
            }
        }),
        // 获取分类菜单的数据
        mpvue.request({
            url: "https://www.zhengzhicheng.cn/api/public/v1/home/catitems",
            success: (res) => {
                console.log(res)
                if(res.data.meta.status===200) {
                    this.cateUrls = res.data.message
                }
            }
        })
    },
    data() {
        return {
            imgUrls:[],
            cateUrls: [],
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
.menu {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
.menu img {
    width: 128rpx;
    height: 128rpx;
}
</style>
