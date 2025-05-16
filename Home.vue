<template>
  <div>
    <Header />
    <MusicList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MusicList from '@/components/MusicList.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    MusicList,
    Footer

  }
}
</script>

<style scoped>

</style>