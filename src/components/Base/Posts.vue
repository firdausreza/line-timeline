<template>
  <div class="flex flex-col bg-white p-4 w-700 m-auto mt-4">
    <!-- PROFILE WRAPPER -->
    <div class="profile-wrapper flex flex-row items-center justify-between">
      <div class="wrapper flex flex-row">
        <img src="@/assets/img/profile-user.svg" width="38" height="38">
        <div class="ml-4">
          <h3 class="text-lg font-semibold">
            {{ post.pageName }}
          </h3>
          <p class="text-gray-400">16 minutes ago</p>
        </div>
      </div>
    </div>
    <!-- IMAGE WRAPPER -->
    <div class="mt-2">
      <swiper
        :pagination="true"
        :autoHeight="true"
      >
        <swiper-slide v-for="image in post.images" :key="image">
          <img :src="image" alt="post image" class="w-700">
        </swiper-slide>
      </swiper>
    </div>
    <!-- TEXT WRAPPER -->
    <div class="text-wrapper mt-2">
      <p>
        {{ post.body }}
      </p>
    </div>
    <!-- ICON WRAPPER -->
    <div class="flex flex-row items-center justify-between mt-4">
      <!-- INTERACTABLE WRAPPER -->
      <div class="flex flex-row">
        <img src="@/assets/img/smile.svg" width="24" height="24">
        <img src="@/assets/img/messenger.svg" class="ml-4" width="24" height="24">
        <img src="@/assets/img/export.svg" class="ml-4" width="24" height="24">
      </div>
      <!-- STATUS WRAPPER -->
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <img src="@/assets/img/smile.svg" width="24" height="24"> 
          <p class="ml-2">{{ post.likes }}</p>
        </div>
        <div class="ml-4">
          <p>{{ post.shares > 1 ? post.shares + ' shares' : post.shares + ' share' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css'
// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  name: 'Posts',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    post: {
      type: Object
    }
  }
}
</script>