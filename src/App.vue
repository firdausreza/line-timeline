<template>
  <div class="font-sans">
    <Header />
    <main class="bg-gray-100 py-4">
      <AddPost />
      <div v-for="post in getPosts" :key="post.id">
        <Posts :post="post" />
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/Base/Header.vue'
import Posts from './components/Base/Posts.vue'
import AddPost from './components/Base/AddPost.vue'

import { useStore } from 'vuex'

export default {
  components : {
    Header,
    Posts,
    AddPost
  },
  computed: {
    getPosts() {
      const store = useStore();
      return store.state.posts
    }
  }
}
</script>

