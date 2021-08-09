<template>
  <div class="flex flex-col bg-white w-700 m-auto p-4">
    <!-- TEXTAREA WRAPPER -->
    <div>
      <textarea name="postField" v-model="post.body" id="postField" class="w-600 h-200 focus:outline-none" placeholder="What's new?"></textarea>
    </div>
    <!-- ATTACHMENT WRAPPER -->
    <div class="flex flex-row justify-start">
      <img src="@/assets/img/smile.svg" width="32" height="32">
      <img src="@/assets/img/photo.svg" width="32" height="32" class="ml-8">
      <img src="@/assets/img/video.svg" width="32" height="32" class="ml-8">
      <img src="@/assets/img/hourglass.svg" width="32" height="32" class="ml-8">
    </div>
    <!-- ACTION WRAPPER -->
    <div class="flex flex-row justify-between mt-4">
      <select class="p-4 focus:outline-none border-b-2 bg-white border-black rounded-t-lg">
        <option value="Friends" selected>
          Friends
        </option>
        <option value="Public">
          Public
        </option>
        <option value="Private">
          Private
        </option>
      </select>
      <div class="button-wrapper flex flex-row">
        <button class="bg-white w-150 text-gray-400 px-2 py-1 border border-gray-400 rounded-sm">
          Cancel
        </button>
        <button @click="addPost" class="bg-green-500 w-150 text-white px-2 py-1 rounded-sm ml-4">
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { useStore } from 'vuex'

export default {
  name: 'AddPost',
  data() {
    return {
      post: {
        images: ['https://source.unsplash.com/random/700x700', 'https://source.unsplash.com/daily'],
        body: '',
        comments: [],
        likes: 0,
        shares: 0
      }
    }
  },
  methods: {
    addPost() {
      const obj = {
        id: Math.floor(Math.random() * 100000),
        pageName: 'Page Name',
        ...this.post
      }
      
      this.$store.commit('addPostItem', obj)
    }
  }
}
</script>