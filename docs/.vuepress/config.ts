import {defineUserConfig,defaultTheme} from "vuepress"

export default defineUserConfig({
    base: '/music-doc/',
    lang: 'zh-CN',
    title: '音乐 app 全栈开发',
    description: '程序员浩仔实战项目',
    head: [['link', { rel: 'icon', href: '/image/WechatIMG4.jpeg' }]],
    theme: defaultTheme({
        logo: '/image/WechatIMG4.jpeg',
        repo: 'https://github.com/wqh66886/music-doc',
    })
})
