import Header from './ArticleHeader.js'
import Footer from './ArticleFooter.js'

export default {
    props: ['title', 'content', 'author', 'created', 'clicked', 'liked'],
    template: `
<article>
   <hd :author="author">{{title}}</hd>

   <section>
     这是一篇文章, 有 {{clicked}} 点击数，有 {{liked}} 个赞。
   </section>

   <section>
     {{content}}
   </section>

   <ft v-bind='$props' v-on='$listeners'></ft>
</article>
`,
    data() {
        return {
        }
    },
    components: { hd: Header, ft: Footer }
}
