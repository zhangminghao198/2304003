<template>
    <div class="t">
        <van-icon name="wap-nav" style="color: #25b1b1;" />
        <h3 style="color: #25b1b1;">新峰商城 </h3> |
        <p>山河无恙，人间皆安</p>
        <p style="color: #25b1b1;">登录</p>
    </div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item, index in lb" :key="index">
            <img :src="item.carouselUrl" style="width: 100%;height: 220px;" alt="">
        </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5">
        <van-grid-item icon="photo-o" text="新峰超市" />
        <van-grid-item icon="photo-o" text="新峰服饰" />
        <van-grid-item icon="photo-o" text="全球购" />
        <van-grid-item icon="photo-o" text="新峰生鲜" />
        <van-grid-item icon="photo-o" text="新峰到家" />
        <van-grid-item icon="photo-o" text="充值缴费" />
        <van-grid-item icon="photo-o" text="9.9元拼" />
        <van-grid-item icon="photo-o" text="领卷" />
        <van-grid-item icon="photo-o" text="省钱" />
        <van-grid-item icon="photo-o" text="全部" />
    </van-grid>

    <p style="text-align: center; height: 6.667vw;color: #25b1b1;line-height: 50px;font-size: 4vw;">新品上线</p>
    <div class="list" style="display: flex;flex-wrap: wrap;">
        <div class="item" v-for="item,index in xp" :key="index" style="width: 50%;padding: 20px;">
            <img :src="item.goodsCoverImg" alt="" style="width: 100%;height: 40vw; bo">
            <p>{{ item.goodsIntro }}</p>
            <p class="qw">￥{{ item.sellingPrice }}</p>
        </div>
    </div>
    <p style="text-align: center; height: 6.667vw;color: #25b1b1;line-height: 50px;font-size: 4vw;">热门商品</p>
    <div class="list" style="display: flex;flex-wrap: wrap;">
        <div class="item" v-for="item,index in rn" :key="index" style="width: 50%;padding: 20px;">
            <img :src="item.goodsCoverImg" alt="" style="width: 100%;height: 40vw; bo">
            <p>{{ item.goodsIntro }}</p>
            <p class="qw">￥{{ item.sellingPrice }}</p>
        </div>
    </div>
    <p style="text-align: center; height: 6.667vw;color: #25b1b1;line-height: 50px;font-size: 4vw;">最新推荐</p>
    <div class="list" style="display: flex;flex-wrap: wrap;">
        <div class="item" v-for="item,index in zx" :key="index" style="width: 50%;padding: 20px;margin-bottom: 9.333vw;">
            <img :src="item.goodsCoverImg" alt="" style="width: 100%;height: 40vw; bo">
            <p>{{ item.goodsIntro }}</p>
            <p class="qw">￥{{ item.sellingPrice }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { indexApi } from '@/api/api'


const lb = ref([])
const xp = ref([])
const rn = ref([])
const zx = ref([])
indexApi().then((res: any) => {
    console.log(res);
    if (res.resultCode == 200) {
        lb.value = res.data.carousels
        xp.value = res.data.hotGoodses
        rn.value = res.data.newGoodses
        zx.value = res.data.recommendGoodses
    }
})

</script>

<style lang="scss" >
.t {
    display: flex;
    justify-content: space-between;
    padding: 1.333vw 2.667vw;
}
.qw{
    text-align: center;
    color: #7dc3bc;
}
</style>