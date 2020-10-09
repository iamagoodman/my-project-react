export default {
  app: {
    getdata: '/get',
    login: '/login/cellphone',                // 登录
  },
  home: {
    getbanner: '/banner?type=0',             // 首页banner
    recommendSong: '/personalized?limit=20',  // 推荐歌单
    recommendMv: '/personalized/mv',         // 推荐mv
    recommendNewSong: '/personalized/newsong',   //推荐新歌
    recommenddj: '/personalized/djprogram',       //推荐电台
  }
}