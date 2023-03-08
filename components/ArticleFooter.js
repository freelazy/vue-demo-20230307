export default {
    props: ['clicked', 'liked', 'created'],
    template: `
<footer>
  <p>日期: <span>{{created}}</span></p>
  <p @click="xxx">点赞: ({{liked}})</p>
  <p>点击: ({{clicked}})</p>
</footer>`,
    methods: {
        xxx() {
            this.$root.doLike();
        }
    }
}
