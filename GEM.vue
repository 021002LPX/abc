<template>
  <div class="music-page">
    <div class="header">
      <img class="avatar" :src="avatarUrl" alt="邓紫棋头像">
      <div class="info">
        <span class="name">G.E.M. 邓紫棋</span>
        <span class="count">单曲 {{ songCount }} 专辑 {{ albumCount }} MV {{ mvCount }}</span>
      </div>
      <button class="play-button" @click="playPopularSongs">播放歌手热门歌曲</button>
    </div>
    <ul class="tab-list">
      <li class="tab-item" :class="{ active: tab === '单曲' }" @click="tab = '单曲'">单曲</li>
      <li class="tab-item" :class="{ active: tab === '专辑' }" @click="tab = '专辑'">专辑</li>
      <li class="tab-item" :class="{ active: tab === 'MV' }" @click="tab = 'MV'">MV</li>
      <li class="tab-item" :class="{ active: tab === '歌单' }" @click="tab = '歌单'">歌单</li>
      <li class="tab-item" :class="{ active: tab === '用户' }" @click="tab = '用户'">用户</li>
      <li class="tab-item" :class="{ active: tab === '歌词' }" @click="tab = '歌词'">歌词</li>
    </ul>

    <!-- 单曲页面 -->
    <div v-if="tab === '单曲'" class="song-list">
      <div class="operation-bar">
        <button class="play-all-button" @click="playAllSongs">播放全部</button>
        <button class="add-to-button">添加到</button>
        <button class="download-button">下载</button>
        <button class="batch-operation-button">批量操作</button>
      </div>
      <table class="song-table">
        <thead>
        <tr>
          <th>序号</th>
          <th>歌曲</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>时长</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(song, index) in songs" :key="song.name">
          <td>{{ index + 1 }}</td>
          <td>
            {{ song.name }}
            <span v-if="song.hasMv" class="mv-icon">MV</span>
            <span v-if="song.isVip" class="vip-icon">VIP</span>
            <!-- 添加音频播放器 -->
            <audio v-if="index === 0" controls>
              <source :src="song.audioUrl" type="audio/mpeg">
              您的浏览器不支持 audio 标签。
            </audio>
          </td>
          <td>{{ song.singer }}</td>
          <td>{{ song.album }}</td>
          <td>{{ song.duration }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- 专辑页面 -->
    <div v-if="tab === '专辑'" class="album-list">
      <div class="operation-bar">
        <button class="play-all-button" @click="playAllAlbums">播放全部</button>
        <button class="add-to-button">添加到</button>
        <button class="download-button">下载</button>
      </div>
      <table class="album-table">
        <thead>
        <tr>
          <th>专辑</th>
          <th>歌手</th>
          <th>发布时间</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="album in albums" :key="album.name">
          <td>{{ album.name }}</td>
          <td>{{ album.singer }}</td>
          <td>{{ album.releaseDate }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- MV页面 -->
    <div v-if="tab === 'MV'" class="mv-list">
      <div class="operation-bar">
        <button class="play-all-button" @click="playAllMvs">播放全部</button>
        <button class="add-to-button">添加到</button>
        <button class="download-button">下载</button>
      </div>
      <div class="mv-items">
        <div class="mv-item" v-for="(mv, index) in mvs" :key="mv.name">
          <img :src="mv.coverUrl" alt="MV封面" class="mv-cover">
          <div class="mv-info">
            <h3 class="mv-title">{{ mv.name }}</h3>
            <p class="mv-singer">{{ mv.singer }}</p>
            <button class="play-mv-button" @click="playMv(index)">播放</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: 'https://y.qq.com/music/photo_new/T002R180x180M000000CLxSh3wxvBt_3.jpg?max_age=2592000',
      songCount: 723,
      albumCount: 64,
      mvCount: 3944,
      tab: '单曲',
      songs: [
        {
          name: '泡沫',
          hasMv: true,
          isVip: true,
          singer: 'G.E.M. 邓紫棋',
          album: 'Xposed',
          duration: '04:18',
          audioUrl: require('@/views/泡沫.mp3')
        },
        {
          name: '句号',
          hasMv: true,
          isVip: true,
          singer: 'G.E.M. 邓紫棋',
          album: '摩天动物园',
          duration: '03:55',
          audioUrl: ''
        },
        {
          name: '多远都要在一起',
          hasMv: true,
          isVip: true,
          singer: 'G.E.M. 邓紫棋',
          album: '新的心跳',
          duration: '03:37',
          audioUrl: ''
        },
        {
          name: '光年之外 《太空旅客 (Passengers)》电影中国...',
          hasMv: true,
          isVip: true,
          singer: 'G.E.M. 邓紫棋',
          album: '光年之外',
          duration: '03:55',
          audioUrl: ''
        }
      ],
      albums: [
        {
          name: '启示录',
          singer: 'G.E.M. 邓紫棋',
          releaseDate: '2022-08-09'
        },
        {
          name: '摩天动物园',
          singer: 'G.E.M. 邓紫棋',
          releaseDate: '2019-12-27'
        },
        {
          name: '新的心跳',
          singer: 'G.E.M. 邓紫棋',
          releaseDate: '2015-11-06'
        },
        {
          name: 'T.I.M.E.',
          singer: 'G.E.M. 邓紫棋',
          releaseDate: '2023-11-26'
        },
        {
          name: '18...',
          singer: 'G.E.M. 邓紫棋',
          releaseDate: '2009-10-27'
        }
      ],
      mvs: [
        {
          name: '泡沫',
          singer: 'G.E.M. 邓紫棋',
          coverUrl: 'https://example.com/泡沫MV封面.jpg'
        },
        {
          name: '句号',
          singer: 'G.E.M. 邓紫棋',
          coverUrl: 'https://example.com/句号MV封面.jpg'
        },
        {
          name: '光年之外',
          singer: 'G.E.M. 邓紫棋',
          coverUrl: 'https://example.com/光年之外MV封面.jpg'
        }
      ]
    };
  },
  methods: {
    playPopularSongs() {
      console.log('播放歌手热门歌曲');
    },
    playAllSongs() {
      console.log('播放全部歌曲');
    },
    playAllAlbums() {
      console.log('播放全部专辑');
    },
    playAllMvs() {
      console.log('播放全部MV');
    },
    playMv(index) {
      console.log(`播放第 ${index + 1} 个MV`);
    }
  }
};
</script>

<style scoped>
.music-page {
  width: 800px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.count {
  font-size: 14px;
  color: #666;
}

.play-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: #45a049;
}

.tab-list {
  list-style: none;
  padding: 0;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.tab-item {
  padding: 10px 15px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s;
}

.tab-item:hover {
  color: #4CAF50;
}

.tab-item.active {
  color: #4CAF50;
  border-bottom: 2px solid #4CAF50;
}

.song-list,
.album-list,
.mv-list {
  border: 1px solid #eee;
  border-radius: 4px;
}

.operation-bar {
  background-color: #f9f9f9;
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.play-all-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;
}

.play-all-button:hover {
  background-color: #45a049;
}

.add-to-button,
.download-button,
.batch-operation-button {
  background-color: white;
  color: #666;
  border: 1px solid #ddd;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s;
}

.add-to-button:hover,
.download-button:hover,
.batch-operation-button:hover {
  background-color: #f5f5f5;
}

.song-table,
.album-table {
  width: 100%;
  border-collapse: collapse;
}

.song-table th,
.song-table td,
.album-table th,
.album-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.song-table th,
.album-table th {
  background-color: #f9f9f9;
  font-weight: 500;
}

.song-table tbody tr:hover,
.album-table tbody tr:hover {
  background-color: #f5f5f5;
}

.mv-icon {
  background-color: #4CAF50;
  color: white;
  padding: 2px 5px;
  border-radius: 2px;
  margin-left: 5px;
  font-size: 12px;
}

.vip-icon {
  background-color: #ff9800;
  color: white;
  padding: 2px 5px;
  border-radius: 2px;
  margin-left: 5px;
  font-size: 12px;
}

.mv-items {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.mv-item {
  width: 200px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.mv-cover {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
}

.mv-info {
  padding: 10px 0;
}

.mv-title {
  font-size: 14px;
  margin-bottom: 5px;
}

.mv-singer {
  font-size: 12px;
  color: #666;
}

.play-mv-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.play-mv-button:hover {
  background-color: #45a049;
}
</style>