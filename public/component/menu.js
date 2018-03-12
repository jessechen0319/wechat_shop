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
        <transition name="cart-animation">
            <div v-if="cartamount>0 && animationflag" class="cart-amount">
                {{cartamount}}
            </div>
        </transition>
    </div>
    <div class="menu">我的</div>
  </div>
    `,
    data: function(){
        return {animationflag: true};
    },
    props: bottom_menu_props,
    watch:{
        cartamount: function(val, oldval){
            let that = this;
            this.animationflag = false;
            setTimeout(function(){
                that.animationflag = true;
            }, 100);
        }
    }
});