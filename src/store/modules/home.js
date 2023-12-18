import hyRequest from "@/service/request/index"
import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories,getHomeHouselist } from "../../service/modules/home"

const useHomeStore = defineStore("home",{
    state: () => ({
        hotSuggests: [],
        categories: [],
        houseList: [],
        page: 1
    }),
    actions: {
        async fetchHotsuggestsData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
            // console.log(this.hotSuggests)
            
        },
        async fetchCategoriesData() {
            const res = await getHomeCategories()
            this.categories = res.data   
                     
        },
        async fetchHouseListData() {
            const res = await getHomeHouselist(this.page)
            this.houseList.push(...res.data)
            this.page++
            
        }
        
    }
})

export default useHomeStore