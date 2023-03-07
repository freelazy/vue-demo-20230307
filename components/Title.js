export default {
    props: ['title', 'color', 'daxiao'],
    template: `
<header class='xxx' :style="{color: color, fontSize: daxiao + 'px'}">
LOGO <h3>{{title}}</h3>
</header>`
}
