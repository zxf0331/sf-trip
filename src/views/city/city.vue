<template>
    <div class="city">
       <div class="top">
            <!-- 1.搜索框 -->
            <van-search v-model="seearchValue" 
            placeholder="城市/区域/位置"
            shape="round"
            show-action
            @cancel="cancelClick"/>

            <!-- 2.tab的切换 -->
            <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2px">
                <template v-for="(value, key, index) in allCity">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
        <div class="content">
            <city-group :groupData = "currentGroup"></city-group>

        </div>
    </div>
    
</template>

<script setup>
import { ref, computed } from "vue"
import {useRouter} from "vue-router"
import { getCityAll } from "@/service/modules/city.js"
import useCityStore from "@/store/modules/city"
import { storeToRefs } from "pinia";
import CityGroup from "./cnps/city-group.vue"

const seearchValue = ref("")
const router = useRouter()

// 搜索框功能
function cancelClick() {
    router.back()
}

// tab切换功能
const tabActive = ref()

//网络请求：请求城市
// const allCity = ref({})
// getCityAll().then(res => {
//     allCity.value = res.data
//     console.log(allCity.value)
    
// })
// axios.get("http://123.207.32.32:1888/api/city/all").then(res => {
//     console.log(res)
    
// })

//从store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCity } = storeToRefs(cityStore)

// 目的: 获取选中标签后的数据
// 1.获取正确的key: 将tabs中绑定的tabAction正确绑定
// 2.根据key从allCities获取数据, 默认直接获取的数据不是响应式的, 所以必须包裹computed
const currentGroup = computed(() => allCity.value[tabActive.value])


</script>

<style lang="less" scoped>
    .city{
        .content {
            height: calc(100vh - 98px);
            overflow-y: auto;
        }
    }
</style>