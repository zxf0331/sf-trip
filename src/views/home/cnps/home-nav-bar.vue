<template>
   <div class="home">
        <div class="nav-bar">
            <span class="title">宏源旅途</span>
        </div>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <div class="location">
            <div class="city">成都</div>
            <div class="postion">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
   </div>
   
</template>

<script setup>

</script>

<style lang="less" scoped>
    .home {
        .nav-bar {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 46px;
            border-bottom: 1px solid #f2f2f2;
        }

        .title {
            color: var(--primary-color);
            font-size: 16px;
            font-weight: 600;
        }
        .banner {
            img {
            width: 100%;
        }
        }

      
        .location {
            display: flex;
            align-items: center;
            padding: 0 20px;
            height: 44px;
            .city {
                flex: 1;
            }

            .postion{ 
                width: 74px;
                display: flex;
                align-items: center;

                img{
                    margin-left: 5px;
                    width: 18px;
                    height: 18px;
                }
                .text {
                    position: relative;
                    top: 2px;
                    font-size: 12px;

                }
            }
        }
    }
</style>