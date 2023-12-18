<template>
    <div class="search-box">
    <!-- 位置信息 -->
        <div class="location">
            <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
            <div class="postion" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div> 
        </div>

        <!-- 日期范围 -->
        <div class="date-range section bottom-gray=line" @click="showCalendar = true">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="time">{{ startDate }}</span>
                </div>
            </div>
            <div class="stay">共{{ stayCount }}晚</div>  
            <div class="end">
               <div class="date">
                <span class="tip">离店</span>
                <span class="time">{{endDate}}</span>
               </div>
            </div>
        </div>
         <!-- 日期选择 -->
         <van-calendar 
             v-model:show="showCalendar" 
            type="range"
            color="#ff9854"
            :show-confirm="false"
            @confirm="onConfirm" 
            />
        <!-- 价格/人数选择 -->
        <div class="section price-counter bottom-gray-line">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>
        <!-- 关键字 -->
        <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
        <!-- 热门建议 -->
        <div class="section hot-suggest">
            <template v-for="(item, index) in hotSuggests" :key="index">
                <span class="tag" :style="{ color: item.tagText.color}">{{ item.tagText.text }}</span>
            </template>
        </div>
        <!-- 搜索按钮 -->
        <div class="section search-btn">
            <div class="btn" @click="searchClick">开始搜索</div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router"
    import useCityStore from "@/store/modules/city"
    import { storeToRefs } from "pinia";
    import { formatMathDate, getDiffDays } from "@/utils/format_date"
    import { ref, computed } from "vue"
    import useHomeStore from "@/store/modules/home"
    import useMainStore from "@/store/modules/main"
 
    const router = useRouter()

    function cityClick() {
        router.push("/city")
    }

    const cityStore = useCityStore()
    const { currentCity } = storeToRefs(cityStore)

    function positionClick(){
        navigator.geolocation.getCurrentPosition(res => {
            console.log("获取位置成功")    
        },res => {
            console.log("获取位置失败")
        })
    }

    //日期处理
    const mainStore = useMainStore()
    const { nowDate, leaveDate } = storeToRefs(mainStore)

    const startDate = computed(() => formatMathDate(nowDate.value))
    const endDate = computed(() => formatMathDate(leaveDate.value))
    const stayCount = ref(getDiffDays(nowDate.value, leaveDate.value))



    //日期范围处理
    const showCalendar = ref(false)
    const onConfirm = (value) => {
        //1.设置日期
        const selectStartDate = value[0]
        const selectEndDate = value[1]
        mainStore.nowDate = selectStartDate
        mainStore.leaveDate = selectEndDate
        stayCount.value = getDiffDays(selectStartDate, selectEndDate)
        //2.隐藏日历
        showCalendar.value = false
    }

    // 热门建议
    // defineProps({
    //     hotSuggests: {
    //         type: Object,
    //         default: () => []
    //     }
    // })
    const homeStore = useHomeStore()
    const { hotSuggests } = storeToRefs(homeStore)
    

    //搜索功能
    const searchClick = () => {
        router.push({
            path: "/search",
            query: {
                startDate: startDate.value,
                endDate: endDate.value,
                currentCity: currentCity.value.cityName
            }
        })
    }
 
</script>

<style lang="less" scoped>
     .location {
            display: flex;
            align-items: center;
            padding: 0 20px;
            height: 44px;
            .city {
                flex: 1;
                color: #333;
                font-size: 15px;
            }

            .postion{ 
                width: 74px;
                display: flex;
                align-items: center;

                img{
                    margin-left: 5px;
                    width: 18px;
                    height: 18px;
                }
                .text {
                    position: relative;
                    top: 2px;
                    font-size: 12px;
                    color: #666;
                }
            }
        }
     .date-range {
        height: 44px;
        .stay {
            flex: 1;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
     }

     .price-counter {
    height: 44px;
    .start {
    border-right: 1px solid #f2f2f2;
  }
}



.hot-suggest {
  margin: 10px 0;

  .tag {
    font-size: 12px;
    padding: 4px 8px;
    margin: 3px;
    border-radius: 14px;
    color: #3f4954;
    background-color: #f1f3f5;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(
      --tjc-theme-linear-gradient,
      var(--theme-linear-gradient)
    );
  }
}

     .section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0 20px;
        color: #999;

        .start {
            flex: 1;
            display: flex;
            height: 44px;
            align-items: center;
        }

        .end {
            min-width: 30%;
            padding-left: 20px;
        }

        .date {
            display: flex;
            flex-direction: column;

            .tip {
            font-size: 12px;
            color: #999;
            }

            .time {
            margin-top: 3px;
            color: #333;
            font-size: 15px;
            font-weight: 500;
            }
        }
}

</style>