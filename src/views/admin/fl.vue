<template>
  <div class="box">
    <van-col span="6">
      <van-sidebar v-model="active">
        <van-sidebar-item v-for="item, index in left" :key="index" :title="item.categoryName" @click="xh" />
      </van-sidebar>
    </van-col>
    <van-col span="18">
      <div v-for="item, index in list" :key="index" class="list">
        <div class="title" style="font-weight: 600;font-size: 5vw;">
          {{ item.categoryName }}
        </div>
        <ul>
          <li v-for="e,i in item.thirdLevelCategoryVOS" :key="i">{{ e.categoryName }}</li>
        </ul>
      </div>
    </van-col>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { flApi } from '@/api/api'

const active = ref(0);

const left = ref([])
const list = ref([])
flApi().then((res: any) => {
  console.log(res);
  left.value = res.data
  list.value = res.data[active.value].secondLevelCategoryVOS
})

const xh = (index: any) => {
  console.log(index);
  active.value = index
  list.value = left.value[index].secondLevelCategoryVOS


}

</script>

<style lang="scss">
.list{
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            box-sizing: border-box;
            width: 33%;
            text-align: center;
            padding: 2vw;
        }
    }
}
</style>