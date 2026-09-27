/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || '"LXGW WenKai" font-light',
  FONT_URL: process.env.NEXT_PUBLIC_FONT_URL || ['https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css'],

  // 字体优化配置
  FONT_DISPLAY: process.env.NEXT_PUBLIC_FONT_DISPLAY || 'swap',
  FONT_PRELOAD: process.env.NEXT_PUBLIC_FONT_PRELOAD || true,
  FONT_SUBSET: process.env.NEXT_PUBLIC_FONT_SUBSET || 'chinese-simplified',
  
  // 无衬线字体
  FONT_SANS: [
    '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  
  // 衬线字体
  FONT_SERIF: [
    '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    '/vendor/fontawesome/css/all.min.css'

  // END ************网站字体*****************
}
