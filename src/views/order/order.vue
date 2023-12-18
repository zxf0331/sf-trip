<template>
    <div class="order">
        <nav-bar title="订单列表" />
        <div class="tab-bar">
            <van-tabs v-model:active="active" title-active-color="#ff9854">
                <template v-for="(item, index) in titles" :key="index">
                    <van-tab :title="item"></van-tab>
                </template>
            </van-tabs>
        </div>

        <div class="content">
            <div v-if="orderList.length">
                <template v-for="(item, index) in orderList" :key="index">
                    <order-item :item-data="item"></order-item>
                </template>
            </div>
            <div class="tips" v-else="!orderList.length">
                <img src="@/assets/img/order/icon-order.png" alt="">
                <div class="title">近期暂无订单</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { getOrderList } from "@/service/index"
import NavBar from "@/components/nav-bar/nav-bar.vue"
import OrderItem from "./cpns/order-item.vue"

const active = ref(0)
const titles = ["全部订单", "近期订单", "待支付"]
const orderList = ref([])
const orderTitleType = ["all", "recent", "pend"];

getOrderList().then(res => {
    orderList.value = res.data.data.orders || []
})

watch(active, (newValue, oldValue) => {
    if (newValue !== undefined) {
        // console.log(orderTitleType[newValue]);
        getOrderList(orderTitleType[newValue]).then((res) => {
            orderList.value = res.data.data.orders || [];
        });
    }
})

</script>

<style lang="less" scoped>
.order {
    .content {
        .tips {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;

            img {
                width: 100%
            }

            .title {
                font-size: 14px;
                margin-top: 10px;
                font-weight: 300;
            }
        }
    }
}
</style>