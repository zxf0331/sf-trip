<template>
    <div class="search-bar">    
        <div class="select-time" @click="showCalendar = true">
            <div class="item start">
                <div class="name">住</div>
                <div class="date">{{ startDate }}</div>
            </div>
            <div class="item end">
                <div class="name">离</div>
                <div class="date">{{ endDate }}</div>
            </div>
        </div>
        <div class="content" @click="showSearchPanel = true">
            <div class="keyword">关键字/位置/民宿</div>
        </div>
        <div class="right">
            <i class="icon-search"></i>
        </div>
        <!-- 日期选择 -->
        <van-calendar 
             v-model:show="showCalendar" 
            type="range"
            color="#ff9854"
            :show-confirm="false"
            @confirm="onConfirm" 
            />

            <!-- 点击搜索显示是搜索面板 -->
    <search-panel
      v-if="showSearchPanel"
      @cancel="handleCancel"
      @search="handleSearch"
      @tag-click="handleTagClick"
      @result-item-click="handleResultItemClick"
    >
    </search-panel>
    </div>
</template>

<script setup>
import { ref,computed } from "vue"
import useMainStore from '@/store/modules/main';
import { storeToRefs } from 'pinia';
import { formatMathDate, getDiffDays } from "@/utils/format_date";
import searchPanel from "@/views/search/cpns/search-panel.vue"




//日历处理
const showCalendar = ref(false)
const mainStore = useMainStore()
const { nowDate, leaveDate } = storeToRefs(mainStore)
const startDate = computed(() => formatMathDate(nowDate.value, "MM.DD"))
const endDate = computed(() => formatMathDate(leaveDate.value, "MM.DD"))
const stayCount = ref(getDiffDays(nowDate.value, leaveDate.value))


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

//点击搜索显示搜索面板
const showSearchPanel = ref(false)
const PLACEHOLDER = "搜索博尔塔拉的景点、地标、房源";
const keyWord = ref(PLACEHOLDER);

// 事件
const handleSearchClick = () => {
  showSearchPanel.value = true;
};
const handleCancelClick = () => {
  keyWord.value = PLACEHOLDER;
  showCancelIcon.value = false;
};
const handleCancel = () => {
  showSearchPanel.value = false;
};
const handleSearch = () => {};
const handleTagClick = (value) => {
  showSearchPanel.value = false;
  if (value.keyWord) {
    showCancelIcon.value = true;
    keyWord.value = value.keyWord;
  } else {
    showCancelIcon.value = false;
  }
};

const handleResultItemClick = (item) => {
  handleTagClick({
    keyWord: item.name,
  });
};

</script>

<style scoped lang="less">
.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 45px;
  line-height: 45px;

  padding: 0 10px;
  font-size: 14px;
  color: #999;

  border-radius: 6px;
  background: #f2f4f6;

  .left {
    // max-width: 80px;

    font-weight: 500;
    min-width: 30px;
    font-size: 14px;
    padding-right: 6px;
    margin-right: 5px;
    border-right: 1px solid #fff;
    color: #333;
    white-space: nowrap;
  }

  .select-time {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: normal;
      font-size: 10px;
      .name {
        font-size: 10px;
      }

      .date {
        position: relative;
        color: #333;
        margin: 0 10px 0 3px;
        font-weight: 500;
      }
    }

    .end .date::after {
      content: " ";
      width: 0;
      height: 0;
      border: 4px solid #666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0px;
      right: -12px;
    }
  }

  .content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    margin-left: 15px;
    text-align: left;
    border-left: 1px solid #fff;

    .keyword {
      max-width: 155px;
      font-size: 14px
    }

    .icon-cancel {
      position: absolute;
      top: 30%;
      right: 0;
      display: inline-block;
      background-image: url(../../assets/img/sprite.png);
      background-position: -92px -58.5px;
      width: 14.5px;
      height: 15px;
      background-size: 125px 110px;
    }
  }

  .right {
    display: flex;
    align-items: center;
  }

  .icon-search {
    width: 24px;
    height: 24px;
    display: inline-block;

    background-image: url(../../assets/img/home/home-sprite.png);
    background-position: -29px -151px;
    background-size: 207px 192px;
  }
}
</style>
