interface PlatformConig {
  baseUrl: string;
}
const lftConfig = {
  baseUrl: 'https://merchant.laifutonepay.com:3333',
};
const devConfig = {
  baseUrl: '',
};
let platformConfig: PlatformConig;
switch (process.env.NODE_ENV) {
  case 'lft':
    platformConfig = lftConfig;
    break;
  default:
    platformConfig = devConfig;
}
export default platformConfig;
