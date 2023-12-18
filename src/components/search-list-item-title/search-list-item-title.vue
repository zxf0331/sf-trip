<template>
    <div class="search-list-item-title">
        <div class="info">
            <div class="desp">
                <div class="left">
                    <van-tag color="#3f4954" text-color="#fff">{{ itemData.address }}</van-tag>
                </div>
                <div class="right">
                    <span>{{ itemData.unit }}·</span>
                    <span>{{ itemData.unitDesp }}</span>
                </div>
            </div>
        </div>
        <div class="title">
            {{ itemData.unitName }}
        </div>

    </div>
</template>

<script setup>

defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.search-list-item-title {
    margin-top: 2px;

    .desp {
        display: flex;
        font-size: 12px;
        .left {
            margin-right: 10px;
        }
        .right {
            color: #666;
        }
    }
    .title {
        font-size: 18px;
        line-height: 22px;
        margin-top: 8px;
        font-weight: 500;
    }
}
</style>