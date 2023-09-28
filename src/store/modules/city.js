import { defineStore } from "pinia";
import { getCityAll } from "@/service/modules/city";

const useCityStore = defineStore("city", {
    state: () => ({
        allCity: {},
        currentCity: {
            cityName: "成都"
        }
    }),
    actions: {
        async fetchAllCitiesData() {
            const res = await getCityAll()
            this.allCity = res.data 
        }
    }
})

export default useCityStore

