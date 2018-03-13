let cart_object = {
    cartSelectStyle: {
        "cart-unselected": false,
        "cart-selected": true
    }
};
let cart_methods = {
    changeCartSelectStyle: function(){
        this.cartSelectStyle['cart-unselected'] = ! this.cartSelectStyle['cart-unselected'];
        this.cartSelectStyle['cart-selected'] = ! this.cartSelectStyle['cart-selected'];
    },
    changeCartAmount: function(item, isIncrease){
        let index = dataBus.$data.cart_items.indexOf(item);
        if(isIncrease){
            item.amount += 1;
        } else {
            if(item.amount <= 1){
                item.amount = 0;
            } else {
                item.amount -= 1;
            }
        }
        dataBus.$data.cart_items[index] = item;
        this.cartitems = dataBus.$data.cart_items;
        this.$forceUpdate();
    }
};
let cart = Vue.extend({
    template:`
    <div class="cart">
        <div class="cart-title">
            购物车
        </div>
        <div class="cart-items">
            <div class="cart-item" v-for="item in cartitems">
                <div class="option">
                    <div :class="cartSelectStyle" v-on:click="changeCartSelectStyle"></div>
                </div>
                <div class="image">
                    <img :src="item.icon">
                </div>
                <div class="description">
                    <div class="description-content">
                        {{item.cart_description}}
                    </div>
                    <div class="option-panel">
                        <div class="decline" @click="changeCartAmount(item, false)">
                            -
                        </div>
                        <div class="amount-display">
                            <input type="text" :value="item.amount"/>
                        </div>
                        <div class="increase" @click="changeCartAmount(item, true)">
                            +
                        </div>
                    </div>
                </div>
                <div class="amount">
                    <div class="amount-number">
                        数量X{{item.amount}}
                    </div>
                    <div class="totel-price">
                        ¥<span>{{item.amount*item.price}}</span>
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
    },
    methods: cart_methods,
    props: {
        cartitems:{
            type: Array
        }
    }
});