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
    <swiper :indicator-dots="imageFlag" :autoplay="imageFlag" :circular="true" :vertical="true">
      <swiper-item v-for="item in imgUrls" :key="item.goods_id">
        <navigator :url="item.navigator_url">
          <image :src="item.image_src" class="slide-image" />
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 菜单 -->
    <div class="menu">
      <div v-for="item in cateUrls" :key="item.id">
        <navigator :url="item.navigator_url" :open-type="item.open_type" :title="item.name">
          <img :src="item.image_src" :alt="item.name" />
        </navigator>
      </div>
    </div>
    <!-- 楼层导航 -->
    <div class="floor" v-for="item in floorData" :key="item.floor_title.name">
      <div class="floor-title">
        <img :src="item.floor_title.image_src" alt />
      </div>
      <div class="floor-content">
        <div class="left">
          <img :src="item.product_list[0].image_src" alt />
        </div>
        <div class="right">
            <img :src="img.image_src" alt=""  v-if="i>0" v-for="(img,i) in item.product_list" :key="i">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request.js";
export default {
  async created() {
    let that = this;
    // 调用后天借口获取看轮播图数据
    // mpvue.request({
    //     url:"https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata",
    //     success: (res) => {
    //         console.log(res);
    //         if(res.data.meta.status===200) {
    //             this.imgUrls = res.data.message
    //         }
    //     }
    // }),

    // 调用接口方法的调用
    // request('/home/swiperdata').then(
    //     (res) => {
    //         console.log(res);
    //         if(res.data.meta.status===200) {
    //             this.imgUrls = res.data.message
    //         }
    //     }
    // )

    let list = await request("/home/swiperdata");
    console.log(list);

    if (list.data.meta.status === 200) {
      this.imgUrls = list.data.message;
    }

    // 获取分类菜单的数据
    // mpvue.request({
    //     url: "https://www.zhengzhicheng.cn/api/public/v1/home/catitems",
    //     success: (res) => {
    //         console.log(res)
    //         if(res.data.meta.status===200) {
    //             this.cateUrls = res.data.message
    //         }
    //     }
    // })
    request("/home/catitems").then(res => {
      console.log(res);
      if (res.data.meta.status === 200) {
        this.cateUrls = res.data.message;
      }
    });
    // 获取楼层数据
    let floorData = await request("/home/floordata");
    console.log(floorData);
    if (floorData.data.meta.status === 200) {
        this.floorData = floorData.data.message;
    }
  },
  data() {
    return {
      imgUrls: [],
      cateUrls: [],
      floorData: [],
      RightArr: [],
      imageFlag: true
    };
  },
  methods: {}
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
.floor {
  margin-top: 30rpx;
}
.floor .floor-title img {
  width: 100%;
  height: 80rpx;
}
.floor .floor-content {
  display: flex;
}
.floor .floor-content .left {
  width: 240rpx;
}
.floor .floor-content .left img {
  width: 100%;
}
.floor .floor-content .right {
  flex: 1;
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.floor .floor-content .right img {
  width: 232rpx;
  height: 190rpx;
  border-radius: 4px;
}
</style>
