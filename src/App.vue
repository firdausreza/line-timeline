<template>
  <div class="font-sans">
    <Header />
    <main class="bg-gray-100 py-4">
      <div v-for="post in posts" :key="post.id">
        <Posts :post="post" />
      </div>
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
  },
  data () {
    return {
      posts: [
        {
          id: 1,
          pageName: 'Jurnal Media Indonesia',
          images: ['https://source.unsplash.com/daily'],
          body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quod ut qui, repellat numquam reprehenderit ullam a commodi velit modi quasi ipsam quis, voluptatibus culpa accusantium delectus corporis maiores facilis rem at perspiciatis sed. Dolor repellat animi vel deserunt ex minus vero quibusdam odio, voluptatum sapiente iste magnam dolore? Fugiat!',
          comments: [],
          likes: 502,
          shares: 4
        },
        {
          id: 2,
          pageName: 'Jurnal Media Bola',
          images: ['https://source.unsplash.com/random/', 'https://source.unsplash.com/daily', 'https://source.unsplash.com/weekly'],
          body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quod ut qui, repellat numquam reprehenderit ullam a commodi velit modi quasi ipsam quis, voluptatibus culpa accusantium delectus corporis maiores facilis rem at perspiciatis sed. Dolor repellat animi vel deserunt ex minus vero quibusdam odio, voluptatum sapiente iste magnam dolore? Fugiat!',
          comments: [],
          likes: 332,
          shares: 2
        },
        {
          id: 3,
          pageName: 'Jurnal Media Berita',
          images: ['https://source.unsplash.com/weekly'],
          body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quod ut qui, repellat numquam reprehenderit ullam a commodi velit modi quasi ipsam quis, voluptatibus culpa accusantium delectus corporis maiores facilis rem at perspiciatis sed. Dolor repellat animi vel deserunt ex minus vero quibusdam odio, voluptatum sapiente iste magnam dolore? Fugiat!',
          comments: [],
          likes: 1084,
          shares: 1
        }
      ]
    }
  }
}
</script>

