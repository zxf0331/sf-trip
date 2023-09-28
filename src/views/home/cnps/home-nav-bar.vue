<template>
   <div class="home">
        <div class="nav-bar">
            <span class="title">宏源旅途</span>
        </div>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
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

      
       
    }
</style>