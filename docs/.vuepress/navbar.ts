/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import {defineNavbarConfig} from 'vuepress-theme-plume'

export default defineNavbarConfig([
    {text: '首页', link: '/', icon: 'proicons:home'},
    {text: '博客', link: '/blog/', icon: 'hugeicons:note-edit'},
    // { text: '标签', link: '/blog/tags/' },
    {text: '归档', link: '/article/archives/', icon: 'svg-spinners:clock'},
    {
        text: '开发笔记',
        icon: 'solar:notes-outline',
        items: [
            {text: 'Go', link: '/go/', icon: 'simple-icons:go'},
            {text: 'mysql', link: '/mysql/', icon: 'devicon:mysql'},
            // {text: 'ES', link: '/es/', icon: 'simple-icons:elasticstack'},
            {text: 'proto', link: '/proto/', icon: 'arcticons:proto'},
            {text: 'App', link: '/app/', icon: 'carbon:app'},
        ]
    },
    {
        text: '编程基础',
        icon: 'solar:library-outline',
        items: [
            {text: 'git', link: '/git/', icon: 'fa7-brands:git'},
            {text: '设计原则', link: '/designs/design-principles/srp/', icon: 'solar:programming-outline'},
            {text: '算法', link: '/algorithm/', icon: 'hugeicons:algorithm'},
            {text: 'docker', link: '/docker/', icon: 'devicon-plain:docker-wordmark'},
            // {text: '面试', link: '/interview/', icon: 'hugeicons:leetcode'},
        ]
    },
])
