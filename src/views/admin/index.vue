<template>
    <div class="box">
        <div class="top">
            <router-view></router-view>
        </div>
        <div class="bottom">
            <van-tabbar v-model="active" @change="change">
                <van-tabbar-item icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item icon="search">分类</van-tabbar-item>
                <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
                <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref(0);
const change = (index: any) => {
    console.log(index);
    if (active.value == 0) {
        router.push('/about')
    } else if (active.value == 1) {
        router.push('/fl')
    } else if (active.value == 2) {
        router.push('/cart')
    } else if (active.value == 3) {
        router.push('/user')
    } else {
        router.push('/about')
    }
}


</script>

<style lang="scss">
.box {
    display: flex;
    width: 100%;
    height: 100vh;
    flex-wrap: wrap;

    .top {
        height: 95vh;
        width: 100%;
    }

    .bottom {
        height: 5vh;
        width: 100%;
    }
}
</style>