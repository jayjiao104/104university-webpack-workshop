import "./style.css"; // 因為有 loader, 把 css 當作 js 一樣引入
import { hello, catImg } from './libs/component'
// import $ from "jquery";
import Vue from 'vue';
import App from './libs/App.vue'


document.body.appendChild(hello());
document.body.appendChild(catImg());

var count = 0;

$("body").append('<button class="btn">this is br jq ++</button>')
$('.btn').on('click', function() {
    $("body").append(count++)
})

new Vue({
    el: '#app',
    render: h=>h(App),
})