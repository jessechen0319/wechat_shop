let cart_object = {};
let cart = Vue.extend({
    template:`
    <div class="cart">
        <div class="cart-title">
            购物车
        </div>
        <div class="cart-items">
            <div class="cart-item">
                <div class="option">
                    <img src="/images/selected.png">
                </div>
                <div class="image">
                    <img src="/images/products/product_1/icon.png">
                </div>
                <div class="description">
                    <div class="description-content">
                        酸甜山楂，吃货必备，开吃前先给自己来个山楂buff
                    </div>
                    <div class="option-panel">
                        <div class="decline">
                            -
                        </div>
                        <div class="amount-display">
                            <input type="text"/>
                        </div>
                        <div class="increase">
                            +
                        </div>
                    </div>
                </div>
                <div class="amount">
                    <div class="amount-number">
                        数量X2
                    </div>
                    <div class="totel-price">
                        ¥<span>20</span>
                    </div>
                    <div class="remove">
                    <img src="/images/remove.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function(){
        return cart_object;
    }
});