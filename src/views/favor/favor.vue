<template>
    <div class="favor">
        <!-- nav-bar -->
        <nav-bar left-text="旅途">
            <template #title>
                <van-tabs v-model:active="active" type="card" shrink>
                    <van-tab v-for="item in titles" :title="item"></van-tab>
                </van-tabs>
            </template>
        </nav-bar>
 
        <!-- 我的收藏 -->
        <div v-if="active === 0" class="favor">
            <van-tabs v-model:active="activeName" class="tabs">
                <van-tab title="房屋">
                    <div class="content">
                        <template v-for="item in favorlist">
                            <search-list-item :item-data="item"></search-list-item>
                        </template>
                    </div>
                </van-tab>

                <van-tab title="房东">
                    <div class="content">
                        <!-- 内容 -->
                        <div v-if="landlordlist.length" class="list"></div>
                        <div v-else class="no-data">
                            <img class="icon-no-data" src="@/assets\img\favor\empty_favorite.44731802.png" alt="" />
                            <div class="name">暂无收藏</div>
                            <div class="desp">
                                点击
                                <img src="@/assets/img/favor/favor.png" alt="" />
                                即可收藏对应的房东
                            </div>
                            <button class="btn" @click="handleBtnClick">随便去逛逛</button>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>

        <!-- 浏览历史 -->
        <div v-if="active === 1" class="history">
            <div class="content">
                <template v-for="item in historylist">
                    <search-list-item :item-data="item"></search-list-item>
                </template>
            </div>
        </div>

    </div>
</template>

<script setup>
import NavBar from '@/components/nav-bar/nav-bar.vue';
import SearchListItem from "@/components/search-list-item/index.vue"
import router from '@/router';
import { getFavorList, getHistoryList } from "@/service/index"
import { ref } from "vue"

const titles = ["我的收藏", "浏览历史"]
//数据
const favorlist = ref([])
const historylist = ref([])
const landlordlist = ref([]);



//网路请求
getFavorList().then(res => {
    // console.log("favor",res.data)
    favorlist.value = res.data.data.items || []
})
getHistoryList().then(res => {
    // console.log("history", res.data)
    historylist.value = res.data.data.items || []
})

const active = ref(0)
const activeName = ref(0)

//随便去逛逛
const handleBtnClick = () => {
    router.push("/")
}


</script>

<style lang="less" scoped>
.tabs {
    box-sizing: border-box;

    .content {
        padding: 10px 0px 55px 0px;
        .no-data {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .icon-no-data {
                width: 100%;
            }

            .name {
                font-size: 19px;
                color: #333;
                font-weight: 500;
                line-height: 27px;
            }

            .desp {
                color: #666;
                line-height: 18px;
                font-size: 15px;
                margin: 7px auto 36px;

                img {
                    position: relative;
                    top: 4px;
                    width: 12px;
                }
            }

            .btn {
                height: 45px;
                padding: 0 38px;
                background-color: var(--primary-color);
                border-radius: 20px;
                font-size: 17px;
                line-height: 45px !important;
                color: #fff;
                border: none;
                outline: none;
            }
        }
    }
}
.history {
    margin-top: 20px;
}
</style>