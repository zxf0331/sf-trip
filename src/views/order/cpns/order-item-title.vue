<template>
    <div class="order-item-title">
        <div class="top">
            <span class="left">
                {{ itemData.unitName }}
            </span>
            <span class="right">
                {{ itemData.orderStatusDesc }}
            </span>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="less" scoped>
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .left {
        font-size: 12.5px;
        max-width: 204px;
        overflow: hidden; /* 隐藏超出部分的内容 */
        white-space: nowrap; /* 折叠文本成一行 */
        text-overflow: ellipsis;
    }
   .right {
    font-size: 18px;
    color: #ff9645;
   }
}
</style>