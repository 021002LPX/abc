<template>
  <header>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="geshou">歌手</router-link>
      <router-link to="/ranking">排行榜</router-link>
      <router-link to="/fenlei">分类</router-link>
      <router-link to="/playlist">歌单</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: white;
  color: white;
  padding: 20px;
  font-size: 40px; /* 增大字体大小 */
  position: relative; /* 开启相对定位 */
  left: -150px; /* 水平方向移动距离，可按需调整 */
  top: 20px; /* 垂直方向移动距离，可按需调整 */
}

nav router-link {
  color: white;
  text-decoration: none;
  margin-right: 15px;
  font-size: 20px; /* 增大字体大小 */
  position: relative; /* 开启相对定位 */
  left: 1px; /* 水平方向移动距离，可按需调整 */
  top: 3px; /* 垂直方向移动距离，可按需调整 */
}
</style>