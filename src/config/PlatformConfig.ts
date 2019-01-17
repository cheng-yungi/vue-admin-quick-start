interface PlatformConig {
  baseUrl: string
}
const lftConfig = {
  baseUrl: 'https://merchant.laifutonepay.com:3333'
}
const devConfig = {
  baseUrl: '',
}
let platformConig: PlatformConig
switch (process.env.NODE_ENV) {
  case 'lft':
    platformConig = lftConfig
    break
  default:
    platformConig = devConfig
}
export default platformConig