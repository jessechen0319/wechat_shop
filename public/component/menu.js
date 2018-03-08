Vue.component("bottom-menu", {
    template: `
    <div class="menu-bar">
    <div class="menu">
        <router-link to= "/index" >首页</router-link>
    </div>
    <div class="menu">
        <router-link to= "/search" >产品</router-link>
    </div>
    <div class="menu">购物车</div>
    <div class="menu">我的</div>
  </div>
    `
});