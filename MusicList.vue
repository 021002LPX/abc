<template>
  <div class="dashboard">
    <div class="header">
      <div class="kaitou">
        <img src="~@/views/1.png" class="dashboard-icon" />
        <button class="category-btn2">音乐馆</button>
        <button class="category-btn3">我的音乐</button>
        <button class="category-btn3">客户端</button>
        <button class="category-btn3">开放平台</button>
        <button class="category-btn3">VIP</button>
      </div>
      <!-- 搜索框和按钮的组合容器 -->
      <div class="search-container">
        <input type="text" placeholder="搜索音乐,MV,歌单,用户" class="search-input" list="search-suggestions" />
        <datalist id="search-suggestions">
          <option value="邓紫棋"></option>
          <option value="流行音乐"></option>
          <option value="抖音热歌"></option>
          <option value="经典老歌"></option>
          <option value="陈奕迅"></option>
        </datalist>
        <button class="search-button">搜索</button>
      </div>

    </div>

    <div>
      <div class="text">歌单推荐</div>
    </div>
    <div class="gedantuijian">
      <button class="category-btn">为你推荐</button>
      <button class="category-btn">网络歌曲</button>
      <button class="category-btn">情歌</button>
      <button class="category-btn">经典国语</button>
      <button class="category-btn">官方歌单</button>
      <button class="category-btn">经典</button>
    </div>
    <!-- 新增精彩推荐部分 -->
    <div class="wonderful-recommendation">
      <h2 class="section-title">精彩推荐</h2>
      <div class="recommendation-images">
        <div class="image-item">
          <img src="https://y.qq.com/music/common/upload/MUSIC_FOCUS/7030130.jpg?max_age=2592000" alt="推荐1" />
          <div class="image-caption">
            <span class="caption-text">檀健次官方周边·手办盲盒预售开启</span>
            <span class="mall-tag">商城</span>
          </div>
        </div>
        <div class="image-item">
          <img src="https://y.qq.com/music/common/upload/MUSIC_FOCUS/7028141.jpg?max_age=2592000" alt="推荐2" />
          <div class="image-caption">
            <span class="caption-text">i-dle迷你8辑预售开启</span>
            <span class="mall-tag">商城</span>
          </div>
        </div>
        <div class="image-item">
          <img src="https://y.qq.com/music/common/upload/MUSIC_FOCUS/7029213.jpg?max_age=2592000" alt="推荐3" />
          <div class="image-caption">
            <span class="caption-text">LE SSERAFIM电影写真集预售开启</span>
            <span class="mall-tag">商城</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 图片展示区域 -->

    <div class="image-grid-container">
      <div class="image-grid">
        <div class="image-card" v-for="(image, index) in recommendedPlaylists" :key="index">
          <router-link to="GEM">
            <div class="image-wrapper">
              <img :src="image.url" alt="推荐歌单" class="playlist-image">
              <div class="play-icon">
                <i class="fa fa-play-circle"></i>
              </div>
            </div>
            <div class="playlist-info">
              <div class="playlist-title">{{ image.title }}</div>
              <div class="playlist-meta">
                <span class="playlist-count"><i class="fa fa-headphones"></i> {{ image.playCount }}</span>
                <span class="playlist-author">{{ image.author }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      recommendedPlaylists: [
        {
          url: "https://qpic.y.qq.com/music_cover/icwWl580AvSHYFvicibDicm8GOcQx4b3UEGuMC50icrMfrkKicQrVqgUN0Ww/300?n=1",
          title: "速听！全网都在循环的抖音热歌",
          playCount: "101.3万",
          author: "QQ音乐官方",

        },
        {
          url: "https://music-file.y.qq.com/songlist/u/7wok7icqowEi/7f2c/6c3bb1bea5380f6c9cb62954b7a75727b0372e0d_5af4f.jpg?imageView2/4/w/300/h/300",
          title: "灵感电波|AI作歌典藏馆",
          playCount: "1.5万",
          author: "音乐达人",

        },
        {
          url: "https://music-file.y.qq.com/songlist/u/oicq7w4ioi6Aov/b331/b8d0424547d82c558f8135f1447f3c6cc5eaf0f3_2e102a.jpg?imageView2/4/w/300/h/300",
          title: "浪琴表520心动BGM",
          playCount: "2.6万",
          author: "流行音乐库",

        },
        {
          url: "https://qpic.y.qq.com/music_cover/ZsZhpWHWeJZFA8V5zHxn79J1WNHvjE1hAbZmggBNMwe9QL5horsicWQ/300?n=1",
          title: "时下火热流行：风靡短视频热歌",
          playCount: "11.3万",
          author: "摇滚爱好者",

        },
        {
          url: "https://qpic.y.qq.com/music_cover/VdnkJYZTicEGsf8zQNibGQPQLKibrsCyETdyqRiaaf0opleObFyIxIA0Bw/300?n=1",
          title: "快乐调频：奏响生活的轻快乐章",
          playCount: "6.0万",
          author: "摇滚爱好者",

        }
      ]
    };
  }
}
</script>

<style scoped>
.search-input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  /* 添加以下样式使下拉列表更美观 */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M5.99 11.4L0 5.4 1.4 4 6 8.6 10.6 4 12 5.4z' fill='%2342b983'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  padding-right: 30px;
}

/* 自定义下拉列表样式 */
.search-input::-webkit-calendar-picker-indicator {
  display: none;
}

.search-input::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

.search-input::-webkit-datetime-edit-text {
  padding: 0 0.5em;
}

/* 为下拉选项添加样式 */
datalist option {
  padding: 10px;
  background-color: white;
  color: #333;
  border: none;
}

datalist option:hover {
  background-color: #f0f0f0;
}

.dashboard {
  position: relative;
}

.header {
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
}

.kaitou {
  height: 100px;
  margin-right: 20px;
  margin-left: -350px;
  margin-bottom: 20px;
  transform: translateY(80px);
}
.category-btn2 {
  color: green;
  background-color: transparent;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  transform: translateX(-90px) translateY(-300px);
  font-size: 30px;
}
.category-btn3 {
  font-size: 30px;
  color: black;
  background-color: transparent;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  transform: translateX(-80px) translateY(-300px);
}
/* 搜索框和按钮的组合容器 */
.search-container {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 30%;
  margin-bottom: 10px;
  margin-left: 1000px;
  transform: translateX(-100px) translateY(-230px);
}

.search-input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;

}

.search-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #3aa876;
}



.category-btn {
  color: black;
  background-color: transparent;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
}



.category-btn:hover {
  background-color: #d0e6ff;
}

.text {
  height: 300px;
  margin-left: 550px;
  margin-bottom: 300px;
  transform: translateX(-400px) translateY(-150px);
  font-size: 50px;
}

.gedantuijian {
  gap: 30px;
  margin-right: -200px;
  margin-top: -450px;
  transform: translateX(-200px) translateY(-200px);
}

/* 新增：图片网格样式 */
.image-grid-container {
  margin: 20px 10%;
  padding: 20px 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 改为5列 */
  gap: 10px; /* 调整图片之间的间距 */
  transform: translateX(-10px) translateY(-1140px);
}

.image-card {
  cursor: pointer;
  transition: transform 0.3s;

}

.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1/1;
}

.playlist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  width: 100%; /* 确保图片宽度填满容器 */
  height: auto; /* 保持图片的宽高比 */
}

.image-card:hover {
  transform: translateY(-5px);

}

.play-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-card:hover .play-icon {
  opacity: 1;
}

.play-icon i {
  color: white;
  font-size: 18px;
}

.playlist-info {
  margin-top: 10px;
}

.playlist-title {
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.playlist-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
  margin-top: 5px;

}



.wonderful-recommendation {
  text-align: center;
  margin: 20px 0;
  margin-top: 600px;
  transform: translateX(100px)
}

.section-title {
  font-size: 30px;
  margin-bottom: 10px;
  transform: translateX(-200px) translateY(-400px);
}

.recommendation-images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.image-item {
  width: 30%;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-caption {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.caption-text {
  flex: 1;
  text-align: left;
}

.mall-tag {
  background-color: white;
  color: black;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
}
.dashboard-icon {
  transform: translateX(-100px) translateY(-230px);
}
.recommendation-images {
  transform: translateX(-100px) translateY(-350px);
}

</style>