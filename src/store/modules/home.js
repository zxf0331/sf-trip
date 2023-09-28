import hyRequest from "@/service/request/index"
import { defineStore } from "pinia";

const useHomeStore = defineStore("home",{
    state: () => ({
        hotSuggests: [],
        categories: []
    }),
    actions: {
        async fetchHotsuggestsData() {
            const res = await hyRequest.get({ url: "/home/hotSuggests" })
            this.hotSuggests = res.data
            
        }
    }
})

export default useHomeStore