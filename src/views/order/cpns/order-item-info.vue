<template>
    <div class="order-item-info">
        <img :src="itemData.unitPicture" alt="">
        <div class="bottom">
            <div class="left">
                <div class="date">{{ getFormDate(itemData.checkInDate) }}</div>
                <div class="time">
                    <span>{{ getFormDate(itemData.checkInDate, true) }}</span>
                    <span>{{ itemData.checkInLatestTime }}</span>
                </div>
            </div>
            <img class="arrow" src="@/assets/img/order/icon_right_orderlist.png" />
            <div class="midle">
                <div class="date">{{ getFormDate(itemData.checkOutDate) }}</div>
                <div class="time">
                    <span>{{ getFormDate(itemData.checkOutDate, true) }}</span>
                    <span>{{ itemData.checkOutLatestTime }}</span>
                </div>
            </div>
            <div class="right">
                <div class="total">支付总价</div>
                <div class="price">
                    ￥{{ itemData.prepayAmount }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})

const getFormDate = computed(() => {
    return (dataString, isWeek = false) => {
    let date = new Date(dataString);
    if (isWeek) {
      return "周" + "日一二三四五六".charAt(date.getDay());
    }
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  };
})


</script>

<style lang="less" scoped>
.order-item-info {
    position: relative;

    img {
        width: 100%;
        border-radius: 8px;
    }

    .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(9, 10, 14, 0.7);
        color: white;
        height: 60px;

        .left {
            display: flex;
            flex-direction: column;

        }


        .arrow {
            width: 16px;
            height: 12px;
            position: absolute;
            left: 96px;
            top: 50%;
            transform: translateY(-50%);
        }
 
        .right {
            border-left: 2px solid #ccc;
            padding-left: 20px;

            .total{
                font-size: 14px;
                opacity: 0.8;
                margin-bottom: 4px;

            }
            .price {
                font-size: 17px;
                color: #ff9645;
            }
        }
    }
}

.date {
    font-size: 17px;

}

.time {
    font-size: 12.5px;
    opacity: 0.8;
    margin-top: 7px;
}</style>