<template>
    <div class="categroies">
        <template v-for="(item, index) in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{ item.title }}</div>
            </div>

        </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
// console.log(categories)


</script>

<style lang="less" scoped>
.categroies{
    display: flex;
    height: 80px;
    overflow-x: auto;
    padding: 0 10px;
    margin-top: 8px;
    &::-webkit-scrollbar{
        display: none;
    }
    .item {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70px;
        text-align: center;

        img {
            width: 32px;
            height: 32px;
        }
        .text {
            font-size: 12px;
            margin-top: 8px;
        }
    }
}
</style>