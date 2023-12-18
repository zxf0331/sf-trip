import { defineStore } from "pinia";

const nowDate = new Date()
const leaveDate = new Date()
leaveDate.setDate(nowDate.getDate() + 1)


const useMainStore = defineStore("main",{
    state: () => ({
        token: "",
        nowDate: nowDate,
        leaveDate: leaveDate,
        isLoading: false
    })
})

export default useMainStore