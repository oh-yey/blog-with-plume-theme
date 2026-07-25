/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import {defineThemeConfig} from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
    logo: 'https://s.ohyey.net/logo.png',

    appearance: true,

    // 社交链接
    social: [
        {icon: 'github', link: 'https://github.com/oh-yey'},
        {
            icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>',
                name: 'e-mail'
            },
            link: 'mailto:hhjiahao@gmail.com'
        },
    ],

    // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
    // aside: true, // 页内侧边栏， 默认显示在右侧
    // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    copyright: 'CC-BY-SA-4.0',

    prevPage: true,   // 是否启用上一页链接
    nextPage: true,   // 是否启用下一页链接
    createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
    footer: {
        message: '',
        copyright: 'Copyright © 2024-present 𝓸𝓱𝔂𝓮𝔂'
    },


    /**
     * @see https://theme-plume.vuejs.press/config/theme/#profile
     */
    profile: {
        avatar: 'https://s.ohyey.net/head.png',
        name: '𝓸𝓱𝔂𝓮𝔂',
        // description: '𝓸𝓱𝔂𝓮𝔂',
        circle: true, // 是否为圆形头像
        location: '𝐵𝑒𝒾𝒥𝒾𝓃𝑔, 𝒞𝒽𝒾𝓃𝒶',
        // organization: '',
    },

    navbar,
    collections,

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    // bulletin: {
    //   layout: 'top-right',
    //   contentType: 'markdown',
    //   title: '公告板标题',
    //   content: '公告板内容',
    // },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
    transition: {
        page: true,        // 启用 页面间跳转过渡动画
        postList: true,    // 启用 博客文章列表过渡动画
        appearance: 'circle-clip',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

})
