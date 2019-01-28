export default function({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      console.log('token')
      config.headers.common['Authorization'] = process.env.QIITA_TOKEN
    } else {
      console.log('no token')
    }
    return config
  })
}
