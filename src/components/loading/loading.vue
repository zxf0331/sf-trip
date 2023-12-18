<template>
    <div class="loading" v-if="mainStore.isLoading" @click="loadingCancel">
        <div class="bg">
          <img src="@/assets/img/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';

const mainStore = useMainStore()
const loadingCancel = () => {
  mainStore.isLoading = false
}
</script>

<style lang="less" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.2);
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8pxdddd;
    }
  }
}
</style>