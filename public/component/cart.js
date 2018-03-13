let cart_object = {
    
};
let cart_methods = {
    updateTotalPrice: function(){
        let returnVal = 0;
        dataBus.$data.cart_items.forEach((item)=>{
            if(item.selected){
                returnVal += item.price * item.amount;
            }
        });
        return returnVal;
    },
    changeCartSelectStyle: function(item){
        item.selected = !item.selected;
        item.cartSelectStyle['cart-unselected'] = ! item.cartSelectStyle['cart-unselected'];
        item.cartSelectStyle['cart-selected'] = ! item.cartSelectStyle['cart-selected'];
        this.$forceUpdate();
        this.updateTotalPrice();
    },
    deleteItem: function(item){
        let index = dataBus.$data.cart_items.indexOf(item);
        dataBus.$data.cart_items.splice(index, 1);
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
        this.updateTotalPrice();
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
                    <div :class="item.cartSelectStyle" v-on:click="changeCartSelectStyle(item)"></div>
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
                        <img @click="deleteItem(item)" src="/images/remove.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="total-price">
            <span>总金额：</span>
            <span>¥{{updateTotalPrice()}}</span>
            <div class="confirm-pay">结算</div>
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
    },
    computed: {
        totalPrice: function(){
            let returnVal = 0;
            dataBus.$data.cart_items.forEach((item)=>{
                returnVal += item.price * item.amount;
            });
            return returnVal;
        }
    }
});