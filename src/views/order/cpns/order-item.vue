<template>
    <div class="order-item">
        <order-item-title :item-data="getTitleData"/>
        <order-item-info :item-data="getInfoData"/>
        <order-item-btn :item-data="getBtnData"/>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import OrderItemTitle from "./order-item-title.vue" 
import OrderItemInfo from "./order-item-info.vue" 
import OrderItemBtn from "./order-item-btn.vue" 

const props =  defineProps({
    itemData: {
        type: Object,
        default: () => ({}) 
    }
})

//处理title数据
const getTitleData =  computed(() => {
    let data = props.itemData
    return {
        unitName: data.unitName,
        orderStatusDesc: data.orderStatusDesc
    }
})


//处理info数据
const getInfoData = computed(() => {
    let data = props.itemData
    return {
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        checkInLatestTime: data.checkInLatestTime,
        checkOutLatestTime: data.checkOutLatestTime,
        prepayAmount: data.prepayAmount,
        unitPicture: data.unitPicture,
    }
})

//处理btn数据
const getBtnData = computed(() => {
    let data = props.itemData
    return {
        summary: data.summary || "",
        countdown: data.countdown, 
        orderStatusDesc: data.orderStatusDesc,
        orderStatus: data.orderStatus,
    }
})

</script>

<style lang="less" scoped>
 .order-item {
    padding: 0 20px;
    margin-top: 10px;
    background-color: white;
 }   
</style>