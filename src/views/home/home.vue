<template>
    <div class="home" ref="homeRef">
        <home-nav-bar/>
        <home-search-box />
        <div class="search-bar" v-if="isShowSearchBar">
            <search-bar/>
        </div>
        <home-categroies />
        <home-content />
    </div>
</template>

<script>
export default {
    name: "home"
}
</script>

<script setup>
import { ref, watch,  computed, onActivated } from "vue";
import HomeNavBar from "./cnps/home-nav-bar.vue"
import HomeSearchBox from "./cnps/home-search-box.vue"
import useHomeStore from "@/store/modules/home";
// import hyRequest from "@/service/request/index"
import HomeCategroies from "./cnps/home-categroies.vue";
import HomeContent from "./cnps/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue"
import useScroll from "@/hooks/useScroll" 

//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotsuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

// 1.热门建议(已封装到store中)
// const hotSuggests = ref([])
// hyRequest.get({
//     url: "/home/hotSuggests"
// }).then(res => {
//     // console.log(res)
//     hotSuggests.value = res.data 
// })

//监听window滚动
// const scrollListener = () => {
//     const clientHeight = document.documentElement.clientHeight
//     const scrollTop = document.documentElement.scrollTop
//     const scrollHeight = document.documentElement.scrollHeight
//     if(clientHeight + scrollTop >= scrollHeight) {
//         homeStore.fetchHouseListData()
        
//     }
// }

// onMounted(() => {
//     window.addEventListener("scroll", scrollListener)
// }),

// onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListener)
// })
// useScroll(() => {
//     homeStore.fetchHouseListData()
// })

const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
    if(newValue){
        homeStore.fetchHouseListData().then(() => {  
            isReachBottom.value = false
        })
    }
})

//搜索框显示的控制
// 方法一
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//     isShowSearchBar.value = newTop > 100
// })

// 方法二
const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
})

//跳转回home时，保留原来的位置
// onActivated(() => {
//     homeRef.value?.scrollTop({
//         top: scrollTop.value
//     })
// })
</script>

<style lang="less" scoped>
.home{
    overflow-y: auto;
    box-sizing: border-box;
}
.search-bar {
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
}
</style>