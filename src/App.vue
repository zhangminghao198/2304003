<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const username = ref('');
const password = ref('');
const onSubmit = (values: any) => {
  console.log('submit', values);
};

</script>

<style lang="scss" >
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>