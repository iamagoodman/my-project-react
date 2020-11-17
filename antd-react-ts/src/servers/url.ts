export default {
  app: {
    getdata: '/get',
    login: '/login/cellphone',                // 登录       ?phone=XXXX&password=XXXX
    loginStatus: '/login/status',              // 获取登录状态
    playlist: '/playlist/detail',              // 获取歌单详情 ?id=24381616
    songurl: '/song/url',                      // 获取歌曲url ?id=405998841,33894312
  },
  play: {
    lyric: '/lyric',                           // 获取歌词
  },
  home: {
    getbanner: '/banner?type=0',             // 首页banner
    recommendSong: '/personalized',  // 推荐歌单
    recommendMv: '/personalized/mv',         // 推荐mv
    recommendNewSong: '/personalized/newsong',   //推荐新歌
    recommenddj: '/personalized/djprogram',       //推荐电台
  }
}