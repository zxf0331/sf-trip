<template>
    <div class="home">
        <home-nav-bar/>
        <home-search-box :hot-suggests="hotSuggests"/>
    </div>
</template>

<script setup>
import { ref } from "vue"
import HomeNavBar from "./cnps/home-nav-bar.vue"
import HomeSearchBox from "./cnps/home-search-box.vue"
import useHomeStore from "@/store/modules/home";
// import hyRequest from "@/service/request/index"

//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotsuggestsData()

// 1.热门建议(已封装到store中)
// const hotSuggests = ref([])
// hyRequest.get({
//     url: "/home/hotSuggests"
// }).then(res => {
//     // console.log(res)
//     hotSuggests.value = res.data 
// })


</script>

<style lang="less" scoped>
    
</style>