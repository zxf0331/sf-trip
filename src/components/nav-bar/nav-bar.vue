<template>
    <div class="nav-bar">
        <van-nav-bar  left-arrow class="bar">
            <template #left>
                <slot name="left">
                    <i class="icon-left-arrow" @click="handleLeftClick"></i>
                    <span class="left-text">{{ leftText }}</span>
                </slot> 
            </template>
            <template #title>
                <slot name="title">
                    {{ title }}
                </slot>
            </template>
            <template #right>
                <i class="icon-right-menu"></i>
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

defineProps({
    leftText: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: "标题"
    }
})
//处理点击返回按钮
const router = useRouter()
const handleLeftClick = () => {
    router.go(-1)
}

</script>

<style lang="less" scoped>
.icon-left-arrow {
  display: inline-block;
  background: url(@/assets/img/common/icon_nav_back.png) 0 0/ 100% 100%;
  width: 8px;
  height: 15px;
}

.left-text {
    color: var(--primary-color);
    font-size: 14px;
    margin-left: 8px;
    font-weight: 700;
}

.icon-right-menu {
  display: inline-block;
  width: 20px;
  height: 15px;
  background-image: url(../../assets/img/home/icon-right-menu.png);
  background-size: 20px 15px;
}
</style>