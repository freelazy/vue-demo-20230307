export default {
    props: ['author'],
    template: `
<header>
  <h3><slot></slot></h3>
  <p>作者: {{author}}</p>
</header>`
}
