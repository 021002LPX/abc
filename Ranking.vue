<template>
  <div>
    <Header />
    <h1>排行榜页面</h1>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

import Footer from '@/components/Footer.vue';
export default {
  name: 'Ranking',
  components: {
    Header,
    Footer,

  }
}
</script>

<style scoped>

</style>