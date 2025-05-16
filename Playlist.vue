<template>
  <div>
    <Header />
    <h1>歌单页面</h1>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Playlist',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>