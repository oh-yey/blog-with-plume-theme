/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import {viteBundler} from '@vuepress/bundler-vite'
import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics'
import {sitemapPlugin} from '@vuepress/plugin-sitemap'
import {seoPlugin} from '@vuepress/plugin-seo'
import {defineUserConfig, PageFrontmatter} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'
import {execSync} from 'child_process'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '𝓳𝓲𝓪𝓱𝓪𝓸',
    description: '去追寻便好  哪怕是须臾的光亮',
    head: [
        // 配置站点图标
        ['link', {rel: 'icon', type: 'image/png', href: 'https://s.jhdev.cn/logo.png'}],
    ],

    bundler: viteBundler(),
    shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

    theme: plumeTheme({
        /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
        hostname: 'https://jhdev.cn',

        /* 文档仓库配置，用于 editLink */
        // docsRepo: '',
        // docsDir: '',
        // docsBranch: 'main',

        /* 页内信息 */
        editLink: false,
        // lastUpdated: true,
        contributors: false,
        changelog: false,

        /**
         * 编译缓存，加快编译速度
         * @see https://theme-plume.vuejs.press/config/basic/#cache
         */
        cache: 'filesystem',

        /**
         * 为 markdown 文件自动添加 frontmatter 配置
         * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
         */
        autoFrontmatter: {
            permalink: true,  // 是否生成永久链接
            createTime: true, // 是否生成创建时间
            title: true,      // 是否生成标题
        },

        /* 本地搜索, 默认启用 */
        search: {provider: 'local'},

        /**
         * Algolia DocSearch
         * 启用此搜索需要将 本地搜索 search 设置为 false
         * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
         */
        // search: {
        //   provider: 'algolia',
        //   appId: '',
        //   apiKey: '',
        //   indexName: '',
        // },

        /**
         * Shiki 代码高亮
         * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
         */
        codeHighlighter: {
            // twoslash: true, // 启用 twoslash
            // whitespace: true, // 启用 空格/Tab 高亮
            lineNumbers: true, // 启用行号
            themes: {light: 'material-theme-lighter', dark: 'github-dark-dimmed'},
        },

        /* 文章字数统计、阅读时间，设置为 false 则禁用 */
        // readingTime: true,

        /**
         * markdown
         * @see https://theme-plume.vuejs.press/config/markdown/
         */
        markdown: {
            //   abbr: true,         // 启用 abbr 语法  *[label]: content
            //   annotation: true,   // 启用 annotation 语法  [+label]: content
            //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
            //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
            plot: true,         // 启用隐秘文本语法 !!xxxx!!
            //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
            //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
            //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
            //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
            icon: {provider: 'iconify'},        // 启用内置图标语法  ::icon-name::
            //   table: true,        // 启用表格增强容器语法 ::: table
            //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
            //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
            //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
            //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
            //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
            //   demo: true,         // 启用 demo 容器  ::: demo
            //   repl: {             // 启用 代码演示容器
            //     go: true,         // ::: go-repl
            //     rust: true,       // ::: rust-repl
            //     kotlin: true,     // ::: kotlin-repl
            //     python: true,     // ::: python-repl
            //   },
            //   math: {             // 启用数学公式
            //     type: 'katex',
            //   },
            //   chartjs: true,      // 启用 chart.js
            //   echarts: true,      // 启用 ECharts
            //   mermaid: true,      // 启用 mermaid
            //   flowchart: true,    // 启用 flowchart
            //   image: {
            //     figure: true,     // 启用 figure
            //     lazyload: true,   // 启用图片懒加载
            //     mark: true,       // 启用图片标记
            //     size: true,       // 启用图片大小
            //   },
            //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
            //imageSize: 'all', // 启用 自动填充 图片宽高属性，避免页面抖动
        },

        /**
         * 水印
         * @see https://theme-plume.vuejs.press/guide/features/watermark/
         */
        // watermark: true,

        /**
         * 评论 comments
         * @see https://theme-plume.vuejs.press/guide/features/comments/
         */
        comment: {
            provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
            comment: true,
            repo: 'oh-yey/blog-with-plume-theme-comments',
            repoId: 'R_kgDONg9KHw',
            category: 'Q&A',
            categoryId: 'DIC_kwDONg9KH84ClcP3',
            mapping: 'pathname',
            reactionsEnabled: true,
            inputPosition: 'top',
        },

        /**
         * 资源链接替换
         * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
         */
        // replaceAssets: 'https://cdn.example.com',

        /**
         * 加密功能
         * @see https://theme-plume.vuejs.press/guide/features/encryption/
         */
        // encrypt: {},

    }),

    plugins: [
        googleAnalyticsPlugin({
            id: 'G-SK75WF3JW6',
        }),
        sitemapPlugin({
            hostname: "https://jhdev.cn",
            excludePaths: [
                '/404.html',

                '/git/',
                '/kt/',
                '/android/',
                '/proto/',
                '/go/',
                '/mysql/',
                '/es/',
                '/algorithm/',
                '/designModel/',
                '/interview/',

                '/es/command/',
            ],
            modifyTimeGetter: (page, app) => {
                return getFileGitUpdateTime(page.filePath, page.path)
            },


        }),
        seoPlugin({
            hostname: "https://jhdev.cn",
            ogp: (ogp, page, app) => {
                let time = getFileGitUpdateTime(page.filePath, page.path)
                ogp['og:updated_time'] = time
                ogp['article:modified_time'] = time
                ogp['article:author'] = 'jiahao'
                ogp['article:published_time'] = getPageCreateTime(page.frontmatter, page.path)

                return ogp
            },

            jsonLd: (jsonLD, page, app) => {
                let time = getFileGitUpdateTime(page.filePath, page.path)
                jsonLD['dateModified'] = getPageCreateTime(page.frontmatter, page.path)
                jsonLD['author'] = ['jiahao']

                return jsonLD
            }
        }),
    ],
})

function getPageCreateTime(pf: PageFrontmatter, path: string): string {
    if (pf?.createTime) {
        try {
            const dateStr = String(pf.createTime)
            const date = new Date(dateStr.replace(/\//g, '-'))

            if (!isNaN(date.getTime())) {
                return date.toISOString()
            } else {
                console.log(`${path} invalid createTime`)
            }
        } catch (err) {
            console.log(`${path} error parsing createTime`, err)
        }
    }
    return new Date().toISOString()

}

function getFileGitUpdateTime(filePath: string, path: string): string {
    if (!filePath) {
        console.log(`${path} 文件路径获取失败`)
        return new Date().toISOString()
    }

    try {
        // 优先使用 Git 提交时间
        let timestamp = execSync(`git log -1 --format=%ct -- "${filePath}"`, {encoding: 'utf-8'}).trim()
        if (!timestamp) {
            // 查询submodule
            timestamp = execSync(`git -C docs/markdown log -1 --format=%ct -- "${filePath}"`, {encoding: 'utf-8'}).trim()
        }
        if (timestamp) {
            return new Date(parseInt(timestamp, 10) * 1000).toISOString()
        }
    } catch {
    }

    console.log(`${path} ${filePath} 获取时间失败`)
    return new Date().toISOString()
}