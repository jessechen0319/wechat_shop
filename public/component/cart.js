let cart_object = {};
let cart = Vue.extend({
    template:`
    <div class="cart">
        <div class="cart-title">
            购物车
        </div>
        <div class="cart-items">
            
        </div>
    </div>
    `,
    data: function(){
        return cart_object;
    }
});