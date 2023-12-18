<template>
    <div class="search">
        <nav-bar>
            <template #title>
                <search-bar class="search-bar" />
            </template>
        </nav-bar>

        <!-- 位置、欢迎度排序 -->
        <dropdown-select :items-data="searchConditions"  v-if="searchConditions.length > 0"></dropdown-select>

        <!-- 优惠、多人入住 -->
        <div class="tab-wrapper">
            <tab-select :items-data="SearchHouse.hotFilters"></tab-select>
        </div>

        <div class="list">
            <template v-for="(item, index) in SearchHouse.items" :key="index"> 
                <search-list-item :item-data="item"></search-list-item>
            </template>
        </div>


    </div>
</template>

<script setup>
import { ref } from "vue"
import { getSearchHouse, getSearchConditions } from "@/service"
import navBar from '@/components/nav-bar/nav-bar.vue';
import searchBar from '@/components/search-bar/search-bar.vue';
import DropdownSelect from "@/components/dropdown-select/dropdown-select.vue"
import TabSelect from "@/components/tab-select/tab-select.vue"
import SearchListItem from "@/components/search-list-item/index.vue"

//dropSelect
const searchConditions = ref([])
const SearchHouse = ref([])
//网络请求

getSearchConditions().then((res) => {
    searchConditions.value = res.data.data.allConditions

})

getSearchHouse().then((res) => {
    SearchHouse.value = res.data.data
})

// console.log("conditions", searchConditions)
// console.log("house", SearchHouse)

</script>

<style lang="less" scoped>
.search {
    position: relative;

    .search-bar {
        position: absolute;
        margin: 5px 0px 5px 0;
        padding-bottom: 5px;
        width: 270px;
        height: 30px;
        border-radius: 10px;
        top: 0;
        left: 36px;
    }
    .tab-wrapper {
        padding: 12px 0 10px 20px;
        background-color: #f7f8fb;
    }
    .list {
        z-index: -1;
        position: relative;
    }
}
</style>