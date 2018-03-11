let bottom_menu_props = {
    cartamount: 0
};

Vue.component("bottom-menu", {
    template: `
    <div class="menu-bar">
    <div class="menu">
        <router-link to= "/index" >首页</router-link>
    </div>
    <div class="menu">
        <router-link to= "/search" >产品</router-link>
    </div>
    <div class="menu">
        <router-link to="/cart">购物车</router-link>
        <div v-if="cartamount>0" class="cart-amount">
            {{cartamount}}
        </div>
    </div>
    <div class="menu">我的</div>
  </div>
    `,
    data: function(){
        return {};
    },
    props: bottom_menu_props
});