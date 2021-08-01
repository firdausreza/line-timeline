<template>
  <div class="font-sans">
    <Header />
    <main class="bg-gray-400 py-4">
      <Posts />
    </main>
  </div>
</template>

<script>
import Header from './components/Base/Header.vue'
import Posts from './components/Base/Posts.vue'

export default {
  components : {
    Header,
    Posts
  }
}
</script>

