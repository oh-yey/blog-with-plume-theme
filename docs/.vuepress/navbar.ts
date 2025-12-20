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
        text: '系列文章',
        icon: 'solar:notes-outline',
        items: [
            {text: 'git', link: '/git/', icon: 'fa7-brands:git'},
            // {text: 'proto', link: '/proto/', icon: 'arcticons:proto'},
            {text: 'mysql', link: '/mysql/', icon: 'devicon:mysql'},
            // {text: 'Go', link: '/go/', icon: 'simple-icons:go'},
            // {text: 'ES', link: '/es/', icon: 'simple-icons:elasticstack'},
            {text: '算法', link: '/algorithm/', icon: 'hugeicons:algorithm'},
            {text: '设计原则', link: '/designs/design-principles/srp/', icon: 'solar:programming-outline'},
            // {text: 'Kotlin', link: '/kt/', icon: 'tabler:brand-kotlin'},
            // {text: 'Android', link: '/android/', icon: 'hugeicons:android'},
            // {text: '面试', link: '/interview/', icon: 'hugeicons:leetcode'},
            {text: 'docker-compose', link: '/docker-compose/', icon: 'devicon-plain:docker-wordmark'},
        ]
    },
])
